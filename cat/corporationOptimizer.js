import * as comlink from "/libs/comlink";
import { getOptimalBoostMaterialQuantities, getProductMarkup, isProduct, Logger } from "/corporationUtils";
import {
  CityName,
  formatNumber,
  getAdVertCost,
  getAdvertisingFactors,
  getBusinessFactor,
  getDivisionProductionMultiplier,
  getDivisionRawProduction,
  getEmployeeProductionByJobs,
  getMarketFactor,
  getMaxAffordableAdVertLevel,
  getMaxAffordableUpgradeLevel,
  getMaxAffordableWarehouseLevel,
  getResearchAdvertisingMultiplier,
  getResearchRPMultiplier,
  getResearchSalesMultiplier,
  getUpgradeBenefit,
  getUpgradeCost,
  getUpgradeWarehouseCost,
  getWarehouseSize,
  UpgradeName
} from "/corporationFormulas";
import { CorpMaterialsData } from "/data/CorpMaterialsData";
import { CorpUpgradesData } from "/data/CorpUpgradesData";
import { PriorityQueue } from "/libs/priorityQueue";
import { scaleValueToRange } from "/libs/utils";
var BenchmarkType = /* @__PURE__ */ ((BenchmarkType2) => {
  BenchmarkType2[BenchmarkType2["STORAGE_FACTORY"] = 0] = "STORAGE_FACTORY";
  BenchmarkType2[BenchmarkType2["WILSON_ADVERT"] = 1] = "WILSON_ADVERT";
  BenchmarkType2[BenchmarkType2["OFFICE"] = 2] = "OFFICE";
  return BenchmarkType2;
})(BenchmarkType || {});
const defaultMinForNormalization = 5;
const defaultMaxForNormalization = 200;
const referenceValueModifier = 10;
const precalculatedEmployeeRatioForSupportDivisions = {
  operations: 0.22,
  engineer: 0.632,
  business: 0,
  management: 0.148
};
const precalculatedEmployeeRatioForProfitSetupOfRound3 = {
  operations: 49 / 138,
  // 0.35507246376811594202898550724638
  engineer: 5 / 138,
  // 0.03623188405797101449275362318841
  business: 51 / 138,
  // 0.36956521739130434782608695652174
  management: 33 / 138
  // 0.23913043478260869565217391304348
};
const precalculatedEmployeeRatioForProfitSetupOfRound4 = {
  operations: 68 / 369,
  // 0.18428184281842818428184281842818
  engineer: 12 / 369,
  // 0.03252032520325203252032520325203
  business: 244 / 369,
  // 0.66124661246612466124661246612466
  management: 45 / 369
  // 0.12195121951219512195121951219512
};
const precalculatedEmployeeRatioForProductDivisionRound3 = {
  operations: 0.037,
  engineer: 0.513,
  business: 0.011,
  management: 0.44
};
const precalculatedEmployeeRatioForProductDivisionRound4 = {
  operations: 0.03,
  engineer: 0.531,
  business: 3e-3,
  management: 0.436
};
const precalculatedEmployeeRatioForProductDivisionRound5_1 = {
  operations: 0.032,
  engineer: 0.462,
  business: 0.067,
  management: 0.439
};
const precalculatedEmployeeRatioForProductDivisionRound5_2 = {
  operations: 0.064,
  engineer: 0.317,
  business: 0.298,
  management: 0.321
};
async function getReferenceData(division, industryData, nonRnDEmployees, item, useCurrentItemData, customData) {
  const operations = Math.floor(nonRnDEmployees * 0.031);
  const engineer = Math.floor(nonRnDEmployees * 0.489);
  const business = Math.floor(nonRnDEmployees * 0.067);
  const management = nonRnDEmployees - (operations + engineer + business);
  return await calculateOfficeBenchmarkData(
    division,
    industryData,
    item,
    useCurrentItemData,
    customData,
    operations,
    engineer,
    business,
    management,
    0,
    getUpgradeBenefit(
      UpgradeName.ABC_SALES_BOTS,
      customData.corporationUpgradeLevels[UpgradeName.ABC_SALES_BOTS]
    ),
    getResearchSalesMultiplier(customData.divisionResearches),
    false
  );
}
function normalizeProfit(profit, referenceValue) {
  return scaleValueToRange(
    profit,
    referenceValue / referenceValueModifier,
    referenceValue * referenceValueModifier,
    defaultMinForNormalization,
    defaultMaxForNormalization
  );
}
function normalizeProgress(progress) {
  return scaleValueToRange(progress, 0, 100, defaultMinForNormalization, defaultMaxForNormalization);
}
function getComparator(benchmarkType, sortType, customData) {
  switch (benchmarkType) {
    case 0 /* STORAGE_FACTORY */:
      return (a, b) => {
        if (!a || !b) {
          return 1;
        }
        if (a.production !== b.production) {
          return a.production - b.production;
        }
        return b.totalCost - a.totalCost;
      };
    case 1 /* WILSON_ADVERT */:
      return (a, b) => {
        if (!a || !b) {
          return 1;
        }
        if (sortType === "totalCost") {
          return b.totalCost - a.totalCost;
        }
        if (a.advertisingFactor !== b.advertisingFactor) {
          return a.advertisingFactor - b.advertisingFactor;
        }
        return b.totalCost - a.totalCost;
      };
    case 2 /* OFFICE */:
      return (a, b) => {
        if (!a || !b) {
          return 1;
        }
        if (a.totalExperience !== b.totalExperience) {
          return a.totalExperience - b.totalExperience;
        }
        if (sortType === "rawProduction") {
          return a.rawProduction - b.rawProduction;
        }
        if (sortType === "progress") {
          return a.productDevelopmentProgress - b.productDevelopmentProgress;
        }
        if (sortType === "profit") {
          return a.profit - b.profit;
        }
        if (!customData) {
          throw new Error(`Invalid custom data`);
        }
        const normalizedProfitOfA = normalizeProfit(a.profit, customData.referenceData.profit);
        const normalizedProgressOfA = normalizeProgress(Math.ceil(100 / a.productDevelopmentProgress));
        const normalizedProfitOfB = normalizeProfit(b.profit, customData.referenceData.profit);
        const normalizedProgressOfB = normalizeProgress(Math.ceil(100 / b.productDevelopmentProgress));
        if (!Number.isFinite(normalizedProfitOfA) || !Number.isFinite(normalizedProfitOfB)) {
          throw new Error(
            `Invalid profit: a.profit: ${a.profit.toExponential()}, b.profit: ${b.profit.toExponential()}, referenceData.profit: ${customData.referenceData.profit.toExponential()}`
          );
        }
        if (sortType === "profit_progress") {
          return customData.balancingModifierForProfitProgress.profit * normalizedProfitOfA - customData.balancingModifierForProfitProgress.progress * normalizedProgressOfA - (customData.balancingModifierForProfitProgress.profit * normalizedProfitOfB - customData.balancingModifierForProfitProgress.progress * normalizedProgressOfB);
        }
        throw new Error(`Invalid sort type: ${sortType}`);
      };
    default:
      throw new Error(`Invalid benchmark type`);
  }
}
const awarenessMap = /* @__PURE__ */ new Map();
const popularityMap = /* @__PURE__ */ new Map();
const defaultLengthOfBenchmarkDataArray = 10;
const defaultPerformanceModifierForOfficeBenchmark = 40;
const minStepForOfficeBenchmark = 2;
async function calculateOfficeBenchmarkData(division, industryData, item, useCurrentItemData, customData, operations, engineer, business, management, rnd, salesBotUpgradeBenefit, researchSalesMultiplier, enableLogging = false) {
  const itemIsProduct = isProduct(item);
  const employeesProduction = getEmployeeProductionByJobs(
    {
      avgIntelligence: customData.office.avgIntelligence,
      avgCharisma: customData.office.avgCharisma,
      avgCreativity: customData.office.avgCreativity,
      avgEfficiency: customData.office.avgEfficiency,
      avgMorale: customData.office.avgMorale,
      avgEnergy: customData.office.avgEnergy,
      totalExperience: customData.office.totalExperience,
      employeeJobs: {
        operations,
        engineer,
        business,
        management,
        researchAndDevelopment: rnd,
        intern: 0,
        unassigned: 0
      }
    },
    customData.corporationUpgradeLevels,
    customData.divisionResearches
  );
  const rawProduction = getDivisionRawProduction(
    itemIsProduct,
    {
      operationsProduction: employeesProduction.operationsProduction,
      engineerProduction: employeesProduction.engineerProduction,
      managementProduction: employeesProduction.managementProduction
    },
    division.productionMult,
    customData.corporationUpgradeLevels,
    customData.divisionResearches
  );
  let productDevelopmentProgress = 0;
  let estimatedRP = 0;
  let productEffectiveRating = 0;
  let productMarkup = 0;
  let demand;
  let competition;
  let itemMultiplier;
  let markupLimit;
  let marketPrice;
  if (itemIsProduct) {
    const totalProductionForProductDev = employeesProduction.operationsProduction + employeesProduction.engineerProduction + employeesProduction.managementProduction;
    const managementFactor = 1 + employeesProduction.managementProduction / (1.2 * totalProductionForProductDev);
    productDevelopmentProgress = 0.01 * (Math.pow(employeesProduction.engineerProduction, 0.34) + Math.pow(employeesProduction.operationsProduction, 0.2)) * managementFactor;
    if (!useCurrentItemData) {
      const cycles = 100 / productDevelopmentProgress;
      const employeesProductionInSupportCities = getEmployeeProductionByJobs(
        {
          // Reuse employees' stats of main office. This is fine because we only calculate the estimated value,
          // not the exact value.
          avgIntelligence: customData.office.avgIntelligence,
          avgCharisma: customData.office.avgCharisma,
          avgCreativity: customData.office.avgCreativity,
          avgEfficiency: customData.office.avgEfficiency,
          avgMorale: customData.office.avgMorale,
          avgEnergy: customData.office.avgEnergy,
          totalExperience: customData.office.totalExperience,
          employeeJobs: {
            operations: 1,
            engineer: 1,
            business: 1,
            management: 1,
            researchAndDevelopment: operations + engineer + business + management - 4,
            intern: 0,
            unassigned: 0
          }
        },
        customData.corporationUpgradeLevels,
        customData.divisionResearches
      );
      const researchPointGainPerCycle = 5 * 4 * 4e-3 * Math.pow(employeesProductionInSupportCities.researchAndDevelopmentProduction, 0.5) * getUpgradeBenefit(UpgradeName.PROJECT_INSIGHT, customData.corporationUpgradeLevels[UpgradeName.PROJECT_INSIGHT]) * getResearchRPMultiplier(customData.divisionResearches);
      estimatedRP = division.researchPoints + researchPointGainPerCycle * cycles;
      const productStats = {
        quality: 0,
        performance: 0,
        durability: 0,
        reliability: 0,
        aesthetics: 0,
        features: 0
      };
      const totalProduction = employeesProduction.engineerProduction + employeesProduction.managementProduction + employeesProduction.researchAndDevelopmentProduction + employeesProduction.operationsProduction + employeesProduction.businessProduction;
      const engineerRatio = employeesProduction.engineerProduction / totalProduction;
      const managementRatio = employeesProduction.managementProduction / totalProduction;
      const researchAndDevelopmentRatio = employeesProduction.researchAndDevelopmentProduction / totalProduction;
      const operationsRatio = employeesProduction.operationsProduction / totalProduction;
      const businessRatio = employeesProduction.businessProduction / totalProduction;
      const designInvestmentMultiplier = 1 + Math.pow(item.designInvestment, 0.1) / 100;
      const scienceMultiplier = 1 + Math.pow(estimatedRP, industryData.scienceFactor) / 800;
      const balanceMultiplier = 1.2 * engineerRatio + 0.9 * managementRatio + 1.3 * researchAndDevelopmentRatio + 1.5 * operationsRatio + businessRatio;
      const totalMultiplier = balanceMultiplier * designInvestmentMultiplier * scienceMultiplier;
      productStats.quality = totalMultiplier * (0.1 * employeesProduction.engineerProduction + 0.05 * employeesProduction.managementProduction + 0.05 * employeesProduction.researchAndDevelopmentProduction + 0.02 * employeesProduction.operationsProduction + 0.02 * employeesProduction.businessProduction);
      productStats.performance = totalMultiplier * (0.15 * employeesProduction.engineerProduction + 0.02 * employeesProduction.managementProduction + 0.02 * employeesProduction.researchAndDevelopmentProduction + 0.02 * employeesProduction.operationsProduction + 0.02 * employeesProduction.businessProduction);
      productStats.durability = totalMultiplier * (0.05 * employeesProduction.engineerProduction + 0.02 * employeesProduction.managementProduction + 0.08 * employeesProduction.researchAndDevelopmentProduction + 0.05 * employeesProduction.operationsProduction + 0.05 * employeesProduction.businessProduction);
      productStats.reliability = totalMultiplier * (0.02 * employeesProduction.engineerProduction + 0.08 * employeesProduction.managementProduction + 0.02 * employeesProduction.researchAndDevelopmentProduction + 0.05 * employeesProduction.operationsProduction + 0.08 * employeesProduction.businessProduction);
      productStats.aesthetics = totalMultiplier * (0.08 * employeesProduction.managementProduction + 0.05 * employeesProduction.researchAndDevelopmentProduction + 0.02 * employeesProduction.operationsProduction + 0.1 * employeesProduction.businessProduction);
      productStats.features = totalMultiplier * (0.08 * employeesProduction.engineerProduction + 0.05 * employeesProduction.managementProduction + 0.02 * employeesProduction.researchAndDevelopmentProduction + 0.05 * employeesProduction.operationsProduction + 0.05 * employeesProduction.businessProduction);
      let productRating = 0;
      const weights = industryData.product.ratingWeights;
      for (const [statName, coefficient] of Object.entries(weights)) {
        productRating += productStats[statName] * coefficient;
      }
      productEffectiveRating = productRating;
      const advertisingInvestmentMultiplier = 1 + Math.pow(item.advertisingInvestment, 0.1) / 100;
      const businessManagementRatio = Math.max(
        businessRatio + managementRatio,
        1 / totalProduction
      );
      productMarkup = 100 / (advertisingInvestmentMultiplier * Math.pow(productStats.quality + 1e-3, 0.65) * businessManagementRatio);
      demand = division.awareness === 0 ? 20 : Math.min(
        100,
        advertisingInvestmentMultiplier * (100 * (division.popularity / division.awareness))
      );
      competition = 35;
    } else {
      productEffectiveRating = item.effectiveRating;
      productMarkup = await getProductMarkup(
        division,
        industryData,
        CityName.Sector12,
        item,
        void 0
      );
      if (!item.demand || !item.competition) {
        throw new Error(`You need to unlock "Market Research - Demand" and "Market Data - Competition"`);
      }
      demand = item.demand;
      competition = item.competition;
    }
    itemMultiplier = 0.5 * Math.pow(productEffectiveRating, 0.65);
    markupLimit = Math.max(productEffectiveRating, 1e-3) / productMarkup;
    marketPrice = item.productionCost;
  } else {
    if (!item.demand || !item.competition) {
      throw new Error(`You need to unlock "Market Research - Demand" and "Market Data - Competition"`);
    }
    demand = item.demand;
    competition = item.competition;
    itemMultiplier = item.quality + 1e-3;
    markupLimit = item.quality / CorpMaterialsData[item.name].baseMarkup;
    marketPrice = item.marketPrice;
  }
  const marketFactor = getMarketFactor(demand, competition);
  const businessFactor = getBusinessFactor(employeesProduction.businessProduction);
  const advertisingFactor = getAdvertisingFactors(
    division.awareness,
    division.popularity,
    industryData.advertisingFactor
  )[0];
  const maxSalesVolume = itemMultiplier * businessFactor * advertisingFactor * marketFactor * salesBotUpgradeBenefit * researchSalesMultiplier;
  let marginErrorRatio = 1;
  if (!itemIsProduct) {
    marginErrorRatio = 0.9;
  }
  if (maxSalesVolume < rawProduction * marginErrorRatio && business > 0) {
    const logger = new Logger(enableLogging);
    logger.warn(`WARNING: operations: ${operations}, engineer: ${engineer}, business: ${business}, management: ${management}`);
    logger.warn(`WARNING: rawProduction: ${rawProduction}, maxSalesVolume: ${maxSalesVolume}`);
  }
  const optimalPrice = markupLimit / Math.sqrt(rawProduction / maxSalesVolume) + marketPrice;
  const profit = rawProduction * 10 * optimalPrice;
  return {
    operations,
    engineer,
    business,
    management,
    totalExperience: customData.office.totalExperience,
    rawProduction,
    maxSalesVolume,
    optimalPrice,
    productDevelopmentProgress,
    estimatedRP,
    productRating: productEffectiveRating,
    productMarkup,
    profit
  };
}
class CorporationOptimizer {
  getScriptUrl() {
    return import.meta.url;
  }
  optimizeStorageAndFactory(industryData, currentSmartStorageLevel, currentWarehouseLevel, currentSmartFactoriesLevel, divisionResearches, maxCost, enableLogging = false, boostMaterialTotalSizeRatio = 0.8) {
    if (currentSmartStorageLevel < 0 || currentWarehouseLevel < 0 || currentSmartFactoriesLevel < 0) {
      throw new Error("Invalid parameter");
    }
    const logger = new Logger(enableLogging);
    const maxSmartStorageLevel = getMaxAffordableUpgradeLevel(UpgradeName.SMART_STORAGE, currentSmartStorageLevel, maxCost);
    const maxWarehouseLevel = getMaxAffordableWarehouseLevel(currentWarehouseLevel, maxCost / 6);
    const comparator = getComparator(0 /* STORAGE_FACTORY */);
    const priorityQueue = new PriorityQueue(comparator);
    let minSmartStorageLevel = currentSmartStorageLevel;
    if (maxSmartStorageLevel - minSmartStorageLevel > 1e3) {
      minSmartStorageLevel = maxSmartStorageLevel - 1e3;
    }
    let minWarehouseLevel = currentWarehouseLevel;
    if (maxWarehouseLevel - minWarehouseLevel > 1e3) {
      minWarehouseLevel = maxWarehouseLevel - 1e3;
    }
    logger.log(`minSmartStorageLevel: ${minSmartStorageLevel}`);
    logger.log(`minWarehouseLevel: ${minWarehouseLevel}`);
    logger.log(`maxSmartStorageLevel: ${maxSmartStorageLevel}`);
    logger.log(`maxWarehouseLevel: ${maxWarehouseLevel}`);
    logger.time("StorageAndFactory benchmark");
    for (let smartStorageLevel = minSmartStorageLevel; smartStorageLevel <= maxSmartStorageLevel; smartStorageLevel++) {
      const upgradeSmartStorageCost = getUpgradeCost(
        UpgradeName.SMART_STORAGE,
        currentSmartStorageLevel,
        smartStorageLevel
      );
      for (let warehouseLevel = minWarehouseLevel; warehouseLevel <= maxWarehouseLevel; warehouseLevel++) {
        const upgradeWarehouseCost = getUpgradeWarehouseCost(
          currentWarehouseLevel,
          warehouseLevel
        ) * 6;
        if (upgradeSmartStorageCost + upgradeWarehouseCost > maxCost) {
          break;
        }
        const warehouseSize = getWarehouseSize(
          smartStorageLevel,
          warehouseLevel,
          divisionResearches
        );
        const boostMaterials = getOptimalBoostMaterialQuantities(industryData, warehouseSize * boostMaterialTotalSizeRatio);
        const boostMaterialMultiplier = getDivisionProductionMultiplier(industryData, boostMaterials);
        const budgetForSmartFactoriesUpgrade = maxCost - (upgradeSmartStorageCost + upgradeWarehouseCost);
        const maxAffordableSmartFactoriesLevel = getMaxAffordableUpgradeLevel(
          UpgradeName.SMART_FACTORIES,
          currentSmartFactoriesLevel,
          budgetForSmartFactoriesUpgrade
        );
        const upgradeSmartFactoriesCost = getUpgradeCost(
          UpgradeName.SMART_FACTORIES,
          currentSmartFactoriesLevel,
          maxAffordableSmartFactoriesLevel
        );
        const totalCost = upgradeSmartStorageCost + upgradeWarehouseCost + upgradeSmartFactoriesCost;
        const smartFactoriesMultiplier = 1 + CorpUpgradesData[UpgradeName.SMART_FACTORIES].benefit * maxAffordableSmartFactoriesLevel;
        const production = boostMaterialMultiplier * smartFactoriesMultiplier;
        const dataEntry = {
          smartStorageLevel,
          warehouseLevel,
          smartFactoriesLevel: maxAffordableSmartFactoriesLevel,
          upgradeSmartStorageCost,
          upgradeWarehouseCost,
          warehouseSize,
          totalCost,
          production,
          costPerProduction: totalCost / production,
          boostMaterials,
          boostMaterialMultiplier
        };
        if (priorityQueue.size() < defaultLengthOfBenchmarkDataArray) {
          priorityQueue.push(dataEntry);
        } else if (comparator(dataEntry, priorityQueue.front()) > 0) {
          priorityQueue.pop();
          priorityQueue.push(dataEntry);
        }
      }
    }
    logger.timeEnd("StorageAndFactory benchmark");
    const data = priorityQueue.toArray();
    data.forEach((data2) => {
      logger.log(
        `{storage:${data2.smartStorageLevel}, warehouse:${data2.warehouseLevel}, factory:${data2.smartFactoriesLevel}, totalCost:${formatNumber(data2.totalCost)}, warehouseSize:${formatNumber(data2.warehouseSize)}, production:${formatNumber(data2.production)}, costPerProduction:${formatNumber(data2.costPerProduction)}, boostMaterialMultiplier:${formatNumber(data2.boostMaterialMultiplier)}, boostMaterials:${data2.boostMaterials}}`
      );
    });
    return data;
  }
  optimizeWilsonAndAdvert(industryData, currentWilsonLevel, currentAdvertLevel, currentAwareness, currentPopularity, divisionResearches, maxCost, enableLogging = false) {
    awarenessMap.clear();
    popularityMap.clear();
    if (currentWilsonLevel < 0 || currentAdvertLevel < 0) {
      throw new Error("Invalid parameter");
    }
    const logger = new Logger(enableLogging);
    const maxWilsonLevel = getMaxAffordableUpgradeLevel(UpgradeName.WILSON_ANALYTICS, currentWilsonLevel, maxCost);
    const maxAdvertLevel = getMaxAffordableAdVertLevel(currentAdvertLevel, maxCost);
    logger.log(`maxWilsonLevel: ${maxWilsonLevel}`);
    logger.log(`maxAdvertLevel: ${maxAdvertLevel}`);
    const researchAdvertisingMultiplier = getResearchAdvertisingMultiplier(divisionResearches);
    const comparator = getComparator(1 /* WILSON_ADVERT */);
    const priorityQueue = new PriorityQueue(comparator);
    logger.time("WilsonAndAdvert benchmark");
    for (let wilsonLevel = currentWilsonLevel; wilsonLevel <= maxWilsonLevel; wilsonLevel++) {
      const wilsonCost = getUpgradeCost(UpgradeName.WILSON_ANALYTICS, currentWilsonLevel, wilsonLevel);
      for (let advertLevel = currentAdvertLevel + 1; advertLevel <= maxAdvertLevel; advertLevel++) {
        const advertCost = getAdVertCost(currentAdvertLevel, advertLevel);
        const totalCost = wilsonCost + advertCost;
        if (totalCost > maxCost) {
          break;
        }
        const previousAwareness = awarenessMap.get(`${wilsonLevel}|${advertLevel - 1}`) ?? currentAwareness;
        const previousPopularity = popularityMap.get(`${wilsonLevel}|${advertLevel - 1}`) ?? currentPopularity;
        const advertisingMultiplier = (1 + CorpUpgradesData[UpgradeName.WILSON_ANALYTICS].benefit * wilsonLevel) * researchAdvertisingMultiplier;
        let awareness = (previousAwareness + 3 * advertisingMultiplier) * (1.005 * advertisingMultiplier);
        let popularity = (previousPopularity + advertisingMultiplier) * ((1 + 2 / 200) * advertisingMultiplier);
        awareness = Math.min(awareness, Number.MAX_VALUE);
        popularity = Math.min(popularity, Number.MAX_VALUE);
        awarenessMap.set(`${wilsonLevel}|${advertLevel}`, awareness);
        popularityMap.set(`${wilsonLevel}|${advertLevel}`, popularity);
        const [advertisingFactor] = getAdvertisingFactors(awareness, popularity, industryData.advertisingFactor);
        const dataEntry = {
          wilsonLevel,
          advertLevel,
          totalCost,
          popularity,
          awareness,
          ratio: popularity / awareness,
          advertisingFactor,
          costPerAdvertisingFactor: totalCost / advertisingFactor
        };
        if (priorityQueue.size() < defaultLengthOfBenchmarkDataArray) {
          priorityQueue.push(dataEntry);
        } else if (comparator(dataEntry, priorityQueue.front()) > 0) {
          priorityQueue.pop();
          priorityQueue.push(dataEntry);
        }
      }
    }
    logger.timeEnd("WilsonAndAdvert benchmark");
    const data = priorityQueue.toArray();
    data.forEach((data2) => {
      logger.log(
        `{wilson:${data2.wilsonLevel}, advert:${data2.advertLevel}, totalCost:${formatNumber(data2.totalCost)}, advertisingFactor:${formatNumber(data2.advertisingFactor)}, popularity:${formatNumber(data2.popularity)}, awareness:${formatNumber(data2.awareness)}, ratio:${formatNumber(data2.ratio)}, costPerAdvertisingFactor:${formatNumber(data2.costPerAdvertisingFactor)}}`
      );
    });
    return data;
  }
  async optimizeOffice(division, industryData, operationsJob, engineerJob, managementJob, rndEmployee, nonRnDEmployees, item, useCurrentItemData, customData, sortType, comparatorCustomData, enableLogging = false, employeeJobsRequirement) {
    const salesBotUpgradeBenefit = getUpgradeBenefit(
      UpgradeName.ABC_SALES_BOTS,
      customData.corporationUpgradeLevels[UpgradeName.ABC_SALES_BOTS]
    );
    const researchSalesMultiplier = getResearchSalesMultiplier(customData.divisionResearches);
    let performanceModifier = defaultPerformanceModifierForOfficeBenchmark;
    if (customData.performanceModifier) {
      performanceModifier = customData.performanceModifier;
    }
    const operationsStep = Math.max(
      Math.floor((operationsJob.max - operationsJob.min) / performanceModifier),
      minStepForOfficeBenchmark
    );
    const engineerStep = Math.max(
      Math.floor((engineerJob.max - engineerJob.min) / performanceModifier),
      minStepForOfficeBenchmark
    );
    const managementStep = Math.max(
      Math.floor((managementJob.max - managementJob.min) / performanceModifier),
      minStepForOfficeBenchmark
    );
    const maxStep = Math.max(
      operationsStep,
      engineerStep,
      managementStep
    );
    const comparator = getComparator(2 /* OFFICE */, sortType, comparatorCustomData);
    const priorityQueue = new PriorityQueue(comparator);
    for (let operations = operationsJob.min; operations <= operationsJob.max; operations += maxStep) {
      for (let engineer = engineerJob.min; engineer <= engineerJob.max; engineer += maxStep) {
        for (let management = managementJob.min; management <= managementJob.max; management += maxStep) {
          if (operations + engineer === 0 || operations + engineer + management >= nonRnDEmployees) {
            continue;
          }
          let effectiveEngineer = engineer;
          let business = nonRnDEmployees - (operations + engineer + management);
          if (employeeJobsRequirement) {
            if (employeeJobsRequirement.business !== 0) {
              throw new Error(`Invalid valid of employeeJobsRequirement.business: ${employeeJobsRequirement.business}`);
            }
            effectiveEngineer += business;
            business = 0;
          }
          const dataEntry = await calculateOfficeBenchmarkData(
            division,
            industryData,
            item,
            useCurrentItemData,
            customData,
            operations,
            effectiveEngineer,
            business,
            management,
            rndEmployee,
            salesBotUpgradeBenefit,
            researchSalesMultiplier,
            enableLogging
          );
          if (priorityQueue.size() < defaultLengthOfBenchmarkDataArray) {
            priorityQueue.push(dataEntry);
          } else if (comparator(dataEntry, priorityQueue.front()) > 0) {
            priorityQueue.pop();
            priorityQueue.push(dataEntry);
          }
        }
      }
    }
    return {
      step: maxStep,
      data: priorityQueue.toArray()
    };
  }
}
comlink.expose(new CorporationOptimizer());
export {
  BenchmarkType,
  CorporationOptimizer,
  calculateOfficeBenchmarkData,
  defaultPerformanceModifierForOfficeBenchmark,
  getComparator,
  getReferenceData,
  minStepForOfficeBenchmark,
  normalizeProfit,
  normalizeProgress,
  precalculatedEmployeeRatioForProductDivisionRound3,
  precalculatedEmployeeRatioForProductDivisionRound4,
  precalculatedEmployeeRatioForProductDivisionRound5_1,
  precalculatedEmployeeRatioForProductDivisionRound5_2,
  precalculatedEmployeeRatioForProfitSetupOfRound3,
  precalculatedEmployeeRatioForProfitSetupOfRound4,
  precalculatedEmployeeRatioForSupportDivisions
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uT3B0aW1pemVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb3JwSW5kdXN0cnlEYXRhLCBEaXZpc2lvbiwgTWF0ZXJpYWwsIFByb2R1Y3QgfSBmcm9tIFwiQG5zXCI7XHJcbmltcG9ydCAqIGFzIGNvbWxpbmsgZnJvbSBcIi9saWJzL2NvbWxpbmtcIjtcclxuaW1wb3J0IHsgZ2V0T3B0aW1hbEJvb3N0TWF0ZXJpYWxRdWFudGl0aWVzLCBnZXRQcm9kdWN0TWFya3VwLCBpc1Byb2R1Y3QsIExvZ2dlciB9IGZyb20gXCIvY29ycG9yYXRpb25VdGlsc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2l0eU5hbWUsXHJcbiAgICBDb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHMsXHJcbiAgICBEaXZpc2lvblJlc2VhcmNoZXMsXHJcbiAgICBmb3JtYXROdW1iZXIsXHJcbiAgICBnZXRBZFZlcnRDb3N0LFxyXG4gICAgZ2V0QWR2ZXJ0aXNpbmdGYWN0b3JzLFxyXG4gICAgZ2V0QnVzaW5lc3NGYWN0b3IsXHJcbiAgICBnZXREaXZpc2lvblByb2R1Y3Rpb25NdWx0aXBsaWVyLFxyXG4gICAgZ2V0RGl2aXNpb25SYXdQcm9kdWN0aW9uLFxyXG4gICAgZ2V0RW1wbG95ZWVQcm9kdWN0aW9uQnlKb2JzLFxyXG4gICAgZ2V0TWFya2V0RmFjdG9yLFxyXG4gICAgZ2V0TWF4QWZmb3JkYWJsZUFkVmVydExldmVsLFxyXG4gICAgZ2V0TWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbCxcclxuICAgIGdldE1heEFmZm9yZGFibGVXYXJlaG91c2VMZXZlbCxcclxuICAgIGdldFJlc2VhcmNoQWR2ZXJ0aXNpbmdNdWx0aXBsaWVyLFxyXG4gICAgZ2V0UmVzZWFyY2hSUE11bHRpcGxpZXIsXHJcbiAgICBnZXRSZXNlYXJjaFNhbGVzTXVsdGlwbGllcixcclxuICAgIGdldFVwZ3JhZGVCZW5lZml0LFxyXG4gICAgZ2V0VXBncmFkZUNvc3QsXHJcbiAgICBnZXRVcGdyYWRlV2FyZWhvdXNlQ29zdCxcclxuICAgIGdldFdhcmVob3VzZVNpemUsXHJcbiAgICBVcGdyYWRlTmFtZVxyXG59IGZyb20gXCIvY29ycG9yYXRpb25Gb3JtdWxhc1wiO1xyXG5pbXBvcnQgeyBDb3JwTWF0ZXJpYWxzRGF0YSB9IGZyb20gXCIvZGF0YS9Db3JwTWF0ZXJpYWxzRGF0YVwiO1xyXG5pbXBvcnQgeyBDb3JwVXBncmFkZXNEYXRhIH0gZnJvbSBcIi9kYXRhL0NvcnBVcGdyYWRlc0RhdGFcIjtcclxuaW1wb3J0IHsgUHJpb3JpdHlRdWV1ZSB9IGZyb20gXCIvbGlicy9wcmlvcml0eVF1ZXVlXCI7XHJcbmltcG9ydCB7IHNjYWxlVmFsdWVUb1JhbmdlIH0gZnJvbSBcIi9saWJzL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZW51bSBCZW5jaG1hcmtUeXBlIHtcclxuICAgIFNUT1JBR0VfRkFDVE9SWSxcclxuICAgIFdJTFNPTl9BRFZFUlQsXHJcbiAgICBPRkZJQ0VcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlRmFjdG9yeUJlbmNobWFya0RhdGEge1xyXG4gICAgc21hcnRTdG9yYWdlTGV2ZWw6IG51bWJlcjtcclxuICAgIHdhcmVob3VzZUxldmVsOiBudW1iZXI7XHJcbiAgICBzbWFydEZhY3Rvcmllc0xldmVsOiBudW1iZXI7XHJcbiAgICB1cGdyYWRlU21hcnRTdG9yYWdlQ29zdDogbnVtYmVyO1xyXG4gICAgdXBncmFkZVdhcmVob3VzZUNvc3Q6IG51bWJlcjtcclxuICAgIHdhcmVob3VzZVNpemU6IG51bWJlcjtcclxuICAgIHRvdGFsQ29zdDogbnVtYmVyO1xyXG4gICAgcHJvZHVjdGlvbjogbnVtYmVyO1xyXG4gICAgY29zdFBlclByb2R1Y3Rpb246IG51bWJlcjtcclxuICAgIGJvb3N0TWF0ZXJpYWxzOiBudW1iZXJbXTtcclxuICAgIGJvb3N0TWF0ZXJpYWxNdWx0aXBsaWVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lsc29uQWR2ZXJ0QmVuY2htYXJrRGF0YSB7XHJcbiAgICB3aWxzb25MZXZlbDogbnVtYmVyO1xyXG4gICAgYWR2ZXJ0TGV2ZWw6IG51bWJlcjtcclxuICAgIHRvdGFsQ29zdDogbnVtYmVyO1xyXG4gICAgcG9wdWxhcml0eTogbnVtYmVyO1xyXG4gICAgYXdhcmVuZXNzOiBudW1iZXI7XHJcbiAgICByYXRpbzogbnVtYmVyO1xyXG4gICAgYWR2ZXJ0aXNpbmdGYWN0b3I6IG51bWJlcjtcclxuICAgIGNvc3RQZXJBZHZlcnRpc2luZ0ZhY3RvcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9mZmljZUJlbmNobWFya0RhdGEge1xyXG4gICAgb3BlcmF0aW9uczogbnVtYmVyO1xyXG4gICAgZW5naW5lZXI6IG51bWJlcjtcclxuICAgIGJ1c2luZXNzOiBudW1iZXI7XHJcbiAgICBtYW5hZ2VtZW50OiBudW1iZXI7XHJcbiAgICB0b3RhbEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgIHJhd1Byb2R1Y3Rpb246IG51bWJlcjtcclxuICAgIG1heFNhbGVzVm9sdW1lOiBudW1iZXI7XHJcbiAgICBvcHRpbWFsUHJpY2U6IG51bWJlcjtcclxuICAgIHByb2R1Y3REZXZlbG9wbWVudFByb2dyZXNzOiBudW1iZXI7XHJcbiAgICBlc3RpbWF0ZWRSUDogbnVtYmVyO1xyXG4gICAgcHJvZHVjdFJhdGluZzogbnVtYmVyO1xyXG4gICAgcHJvZHVjdE1hcmt1cDogbnVtYmVyO1xyXG4gICAgcHJvZml0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE9mZmljZUJlbmNobWFya1NvcnRUeXBlID0gXCJyYXdQcm9kdWN0aW9uXCIgfCBcInByb2dyZXNzXCIgfCBcInByb2ZpdFwiIHwgXCJwcm9maXRfcHJvZ3Jlc3NcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT2ZmaWNlQmVuY2htYXJrQ3VzdG9tRGF0YSB7XHJcbiAgICBvZmZpY2U6IHtcclxuICAgICAgICBhdmdNb3JhbGU6IG51bWJlcjtcclxuICAgICAgICBhdmdFbmVyZ3k6IG51bWJlcjtcclxuICAgICAgICBhdmdJbnRlbGxpZ2VuY2U6IG51bWJlcjtcclxuICAgICAgICBhdmdDaGFyaXNtYTogbnVtYmVyO1xyXG4gICAgICAgIGF2Z0NyZWF0aXZpdHk6IG51bWJlcjtcclxuICAgICAgICBhdmdFZmZpY2llbmN5OiBudW1iZXI7XHJcbiAgICAgICAgdG90YWxFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzOiBDb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHM7XHJcbiAgICBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcztcclxuICAgIHBlcmZvcm1hbmNlTW9kaWZpZXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbXBsb3llZUpvYlJlcXVpcmVtZW50IHtcclxuICAgIGVuZ2luZWVyOiBudW1iZXI7XHJcbiAgICBidXNpbmVzczogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBhcmF0b3JDdXN0b21EYXRhIHtcclxuICAgIHJlZmVyZW5jZURhdGE6IE9mZmljZUJlbmNobWFya0RhdGE7XHJcbiAgICBiYWxhbmNpbmdNb2RpZmllckZvclByb2ZpdFByb2dyZXNzOiB7XHJcbiAgICAgICAgcHJvZml0OiBudW1iZXI7XHJcbiAgICAgICAgcHJvZ3Jlc3M6IG51bWJlcjtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEJhbGFuY2luZ01vZGlmaWVyRm9yUHJvZml0UHJvZ3Jlc3MgPSBDb21wYXJhdG9yQ3VzdG9tRGF0YVtcImJhbGFuY2luZ01vZGlmaWVyRm9yUHJvZml0UHJvZ3Jlc3NcIl07XHJcblxyXG5jb25zdCBkZWZhdWx0TWluRm9yTm9ybWFsaXphdGlvbiA9IDU7XHJcbmNvbnN0IGRlZmF1bHRNYXhGb3JOb3JtYWxpemF0aW9uID0gMjAwO1xyXG5jb25zdCByZWZlcmVuY2VWYWx1ZU1vZGlmaWVyID0gMTA7XHJcblxyXG5leHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JTdXBwb3J0RGl2aXNpb25zID0ge1xyXG4gICAgb3BlcmF0aW9uczogMC4yMixcclxuICAgIGVuZ2luZWVyOiAwLjYzMixcclxuICAgIGJ1c2luZXNzOiAwLFxyXG4gICAgbWFuYWdlbWVudDogMC4xNDhcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwT2ZSb3VuZDMgPSB7XHJcbi8vICAgICBvcGVyYXRpb25zOiA1MCAvIDE3NCwgLy8gMC4yODczNTYzMjE4MzkwODA0NTk3NzAxMTQ5NDI1Mjg3NFxyXG4vLyAgICAgZW5naW5lZXI6IDYgLyAxNzQsIC8vIDAuMDM0NDgyNzU4NjIwNjg5NjU1MTcyNDEzNzkzMTAzNDVcclxuLy8gICAgIGJ1c2luZXNzOiA4MiAvIDE3NCwgLy8gMC40NzEyNjQzNjc4MTYwOTE5NTQwMjI5ODg1MDU3NDcxM1xyXG4vLyAgICAgbWFuYWdlbWVudDogMzYgLyAxNzQgLy8gMC4yMDY4OTY1NTE3MjQxMzc5MzEwMzQ0ODI3NTg2MjA2OVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBleHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9maXRTZXR1cE9mUm91bmQ0ID0ge1xyXG4vLyAgICAgb3BlcmF0aW9uczogODAgLyA0NDEsIC8vIDAuMTgxNDA1ODk1NjkxNjA5OTc3MzI0MjYzMDM4NTQ4NzVcclxuLy8gICAgIGVuZ2luZWVyOiAxNCAvIDQ0MSwgLy8gMC4wMzE3NDYwMzE3NDYwMzE3NDYwMzE3NDYwMzE3NDYwM1xyXG4vLyAgICAgYnVzaW5lc3M6IDI5NCAvIDQ0MSwgLy8gMC42NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2N1xyXG4vLyAgICAgbWFuYWdlbWVudDogNTMgLyA0NDEgLy8gMC4xMjAxODE0MDU4OTU2OTE2MDk5NzczMjQyNjMwMzg1NVxyXG4vLyB9O1xyXG5cclxuLypcclxuMTB0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9maXRTZXR1cE9mUm91bmQzID0ge1xyXG4gICAgb3BlcmF0aW9uczogNDkgLyAxMzgsIC8vIDAuMzU1MDcyNDYzNzY4MTE1OTQyMDI4OTg1NTA3MjQ2MzhcclxuICAgIGVuZ2luZWVyOiA1IC8gMTM4LCAvLyAwLjAzNjIzMTg4NDA1Nzk3MTAxNDQ5Mjc1MzYyMzE4ODQxXHJcbiAgICBidXNpbmVzczogNTEgLyAxMzgsIC8vIDAuMzY5NTY1MjE3MzkxMzA0MzQ3ODI2MDg2OTU2NTIxNzRcclxuICAgIG1hbmFnZW1lbnQ6IDMzIC8gMTM4IC8vIDAuMjM5MTMwNDM0NzgyNjA4Njk1NjUyMTczOTEzMDQzNDhcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwT2ZSb3VuZDQgPSB7XHJcbiAgICBvcGVyYXRpb25zOiA2OCAvIDM2OSwgLy8gMC4xODQyODE4NDI4MTg0MjgxODQyODE4NDI4MTg0MjgxOFxyXG4gICAgZW5naW5lZXI6IDEyIC8gMzY5LCAvLyAwLjAzMjUyMDMyNTIwMzI1MjAzMjUyMDMyNTIwMzI1MjAzXHJcbiAgICBidXNpbmVzczogMjQ0IC8gMzY5LCAvLyAwLjY2MTI0NjYxMjQ2NjEyNDY2MTI0NjYxMjQ2NjEyNDY2XHJcbiAgICBtYW5hZ2VtZW50OiA0NSAvIDM2OSAvLyAwLjEyMTk1MTIxOTUxMjE5NTEyMTk1MTIxOTUxMjE5NTEyXHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDMgPSB7XHJcbi8vICAgICBvcGVyYXRpb25zOiAwLjAyOSxcclxuLy8gICAgIGVuZ2luZWVyOiAwLjUyMyxcclxuLy8gICAgIGJ1c2luZXNzOiAwLjAwNixcclxuLy8gICAgIG1hbmFnZW1lbnQ6IDAuNDQzXHJcbi8vIH07XHJcbi8vXHJcbi8vIGV4cG9ydCBjb25zdCBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kNCA9IHtcclxuLy8gICAgIG9wZXJhdGlvbnM6IDAuMDI5LFxyXG4vLyAgICAgZW5naW5lZXI6IDAuNTI0LFxyXG4vLyAgICAgYnVzaW5lc3M6IDAuMDEsXHJcbi8vICAgICBtYW5hZ2VtZW50OiAwLjQzNlxyXG4vLyB9O1xyXG4vL1xyXG4vLyBleHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDVfMSA9IHtcclxuLy8gICAgIG9wZXJhdGlvbnM6IDAuMDMyLFxyXG4vLyAgICAgZW5naW5lZXI6IDAuNDY0LFxyXG4vLyAgICAgYnVzaW5lc3M6IDAuMDY3LFxyXG4vLyAgICAgbWFuYWdlbWVudDogMC40MzdcclxuLy8gfTtcclxuLy9cclxuLy8gZXhwb3J0IGNvbnN0IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uUm91bmQ1XzIgPSB7XHJcbi8vICAgICBvcGVyYXRpb25zOiAwLjA4NCxcclxuLy8gICAgIGVuZ2luZWVyOiAwLjI2MCxcclxuLy8gICAgIGJ1c2luZXNzOiAwLjM3OSxcclxuLy8gICAgIG1hbmFnZW1lbnQ6IDAuMjc3XHJcbi8vIH07XHJcblxyXG4vKlxyXG4xMHRcclxuICovXHJcbmV4cG9ydCBjb25zdCBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kMyA9IHtcclxuICAgIG9wZXJhdGlvbnM6IDAuMDM3LFxyXG4gICAgZW5naW5lZXI6IDAuNTEzLFxyXG4gICAgYnVzaW5lc3M6IDAuMDExLFxyXG4gICAgbWFuYWdlbWVudDogMC40NFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uUm91bmQ0ID0ge1xyXG4gICAgb3BlcmF0aW9uczogMC4wMyxcclxuICAgIGVuZ2luZWVyOiAwLjUzMSxcclxuICAgIGJ1c2luZXNzOiAwLjAwMyxcclxuICAgIG1hbmFnZW1lbnQ6IDAuNDM2XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDVfMSA9IHtcclxuICAgIG9wZXJhdGlvbnM6IDAuMDMyLFxyXG4gICAgZW5naW5lZXI6IDAuNDYyLFxyXG4gICAgYnVzaW5lc3M6IDAuMDY3LFxyXG4gICAgbWFuYWdlbWVudDogMC40MzlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kNV8yID0ge1xyXG4gICAgb3BlcmF0aW9uczogMC4wNjQsXHJcbiAgICBlbmdpbmVlcjogMC4zMTcsXHJcbiAgICBidXNpbmVzczogMC4yOTgsXHJcbiAgICBtYW5hZ2VtZW50OiAwLjMyMVxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlZmVyZW5jZURhdGEoXHJcbiAgICBkaXZpc2lvbjogRGl2aXNpb24sXHJcbiAgICBpbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGEsXHJcbiAgICBub25SbkRFbXBsb3llZXM6IG51bWJlcixcclxuICAgIGl0ZW06IE1hdGVyaWFsIHwgUHJvZHVjdCxcclxuICAgIHVzZUN1cnJlbnRJdGVtRGF0YTogYm9vbGVhbixcclxuICAgIGN1c3RvbURhdGE6IE9mZmljZUJlbmNobWFya0N1c3RvbURhdGFcclxuKTogUHJvbWlzZTxPZmZpY2VCZW5jaG1hcmtEYXRhPiB7XHJcbiAgICBjb25zdCBvcGVyYXRpb25zID0gTWF0aC5mbG9vcihub25SbkRFbXBsb3llZXMgKiAwLjAzMSk7XHJcbiAgICBjb25zdCBlbmdpbmVlciA9IE1hdGguZmxvb3Iobm9uUm5ERW1wbG95ZWVzICogMC40ODkpO1xyXG4gICAgY29uc3QgYnVzaW5lc3MgPSBNYXRoLmZsb29yKG5vblJuREVtcGxveWVlcyAqIDAuMDY3KTtcclxuICAgIGNvbnN0IG1hbmFnZW1lbnQgPSBub25SbkRFbXBsb3llZXMgLSAob3BlcmF0aW9ucyArIGVuZ2luZWVyICsgYnVzaW5lc3MpO1xyXG4gICAgcmV0dXJuIGF3YWl0IGNhbGN1bGF0ZU9mZmljZUJlbmNobWFya0RhdGEoXHJcbiAgICAgICAgZGl2aXNpb24sXHJcbiAgICAgICAgaW5kdXN0cnlEYXRhLFxyXG4gICAgICAgIGl0ZW0sXHJcbiAgICAgICAgdXNlQ3VycmVudEl0ZW1EYXRhLFxyXG4gICAgICAgIGN1c3RvbURhdGEsXHJcbiAgICAgICAgb3BlcmF0aW9ucyxcclxuICAgICAgICBlbmdpbmVlcixcclxuICAgICAgICBidXNpbmVzcyxcclxuICAgICAgICBtYW5hZ2VtZW50LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgZ2V0VXBncmFkZUJlbmVmaXQoXHJcbiAgICAgICAgICAgIFVwZ3JhZGVOYW1lLkFCQ19TQUxFU19CT1RTLFxyXG4gICAgICAgICAgICBjdXN0b21EYXRhLmNvcnBvcmF0aW9uVXBncmFkZUxldmVsc1tVcGdyYWRlTmFtZS5BQkNfU0FMRVNfQk9UU11cclxuICAgICAgICApLFxyXG4gICAgICAgIGdldFJlc2VhcmNoU2FsZXNNdWx0aXBsaWVyKGN1c3RvbURhdGEuZGl2aXNpb25SZXNlYXJjaGVzKSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVByb2ZpdChwcm9maXQ6IG51bWJlciwgcmVmZXJlbmNlVmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gc2NhbGVWYWx1ZVRvUmFuZ2UoXHJcbiAgICAgICAgcHJvZml0LFxyXG4gICAgICAgIHJlZmVyZW5jZVZhbHVlIC8gcmVmZXJlbmNlVmFsdWVNb2RpZmllcixcclxuICAgICAgICByZWZlcmVuY2VWYWx1ZSAqIHJlZmVyZW5jZVZhbHVlTW9kaWZpZXIsXHJcbiAgICAgICAgZGVmYXVsdE1pbkZvck5vcm1hbGl6YXRpb24sXHJcbiAgICAgICAgZGVmYXVsdE1heEZvck5vcm1hbGl6YXRpb25cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVQcm9ncmVzcyhwcm9ncmVzczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBzY2FsZVZhbHVlVG9SYW5nZShwcm9ncmVzcywgMCwgMTAwLCBkZWZhdWx0TWluRm9yTm9ybWFsaXphdGlvbiwgZGVmYXVsdE1heEZvck5vcm1hbGl6YXRpb24pO1xyXG59XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGFyYXRvcihiZW5jaG1hcmtUeXBlOiBCZW5jaG1hcmtUeXBlLCBzb3J0VHlwZT86IHN0cmluZywgY3VzdG9tRGF0YT86IENvbXBhcmF0b3JDdXN0b21EYXRhKTogKGE6IGFueSwgYjogYW55KSA9PiBudW1iZXIge1xyXG4gICAgc3dpdGNoIChiZW5jaG1hcmtUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBCZW5jaG1hcmtUeXBlLlNUT1JBR0VfRkFDVE9SWTpcclxuICAgICAgICAgICAgcmV0dXJuIChhOiBTdG9yYWdlRmFjdG9yeUJlbmNobWFya0RhdGEsIGI6IFN0b3JhZ2VGYWN0b3J5QmVuY2htYXJrRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhIHx8ICFiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYS5wcm9kdWN0aW9uICE9PSBiLnByb2R1Y3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm9kdWN0aW9uIC0gYi5wcm9kdWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGIudG90YWxDb3N0IC0gYS50b3RhbENvc3Q7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBCZW5jaG1hcmtUeXBlLldJTFNPTl9BRFZFUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiAoYTogV2lsc29uQWR2ZXJ0QmVuY2htYXJrRGF0YSwgYjogV2lsc29uQWR2ZXJ0QmVuY2htYXJrRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhIHx8ICFiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc29ydFR5cGUgPT09IFwidG90YWxDb3N0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi50b3RhbENvc3QgLSBhLnRvdGFsQ29zdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhLmFkdmVydGlzaW5nRmFjdG9yICE9PSBiLmFkdmVydGlzaW5nRmFjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuYWR2ZXJ0aXNpbmdGYWN0b3IgLSBiLmFkdmVydGlzaW5nRmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGIudG90YWxDb3N0IC0gYS50b3RhbENvc3Q7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBCZW5jaG1hcmtUeXBlLk9GRklDRTpcclxuICAgICAgICAgICAgcmV0dXJuIChhOiBPZmZpY2VCZW5jaG1hcmtEYXRhLCBiOiBPZmZpY2VCZW5jaG1hcmtEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWEgfHwgIWIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhLnRvdGFsRXhwZXJpZW5jZSAhPT0gYi50b3RhbEV4cGVyaWVuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS50b3RhbEV4cGVyaWVuY2UgLSBiLnRvdGFsRXhwZXJpZW5jZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzb3J0VHlwZSA9PT0gXCJyYXdQcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5yYXdQcm9kdWN0aW9uIC0gYi5yYXdQcm9kdWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNvcnRUeXBlID09PSBcInByb2dyZXNzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm9kdWN0RGV2ZWxvcG1lbnRQcm9ncmVzcyAtIGIucHJvZHVjdERldmVsb3BtZW50UHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc29ydFR5cGUgPT09IFwicHJvZml0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm9maXQgLSBiLnByb2ZpdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghY3VzdG9tRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjdXN0b20gZGF0YWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFByb2ZpdE9mQSA9IG5vcm1hbGl6ZVByb2ZpdChhLnByb2ZpdCwgY3VzdG9tRGF0YS5yZWZlcmVuY2VEYXRhLnByb2ZpdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUHJvZ3Jlc3NPZkEgPSBub3JtYWxpemVQcm9ncmVzcyhNYXRoLmNlaWwoMTAwIC8gYS5wcm9kdWN0RGV2ZWxvcG1lbnRQcm9ncmVzcykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFByb2ZpdE9mQiA9IG5vcm1hbGl6ZVByb2ZpdChiLnByb2ZpdCwgY3VzdG9tRGF0YS5yZWZlcmVuY2VEYXRhLnByb2ZpdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUHJvZ3Jlc3NPZkIgPSBub3JtYWxpemVQcm9ncmVzcyhNYXRoLmNlaWwoMTAwIC8gYi5wcm9kdWN0RGV2ZWxvcG1lbnRQcm9ncmVzcykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobm9ybWFsaXplZFByb2ZpdE9mQSkgfHwgIU51bWJlci5pc0Zpbml0ZShub3JtYWxpemVkUHJvZml0T2ZCKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgYEludmFsaWQgcHJvZml0OiBhLnByb2ZpdDogJHthLnByb2ZpdC50b0V4cG9uZW50aWFsKCl9LCBiLnByb2ZpdDogJHtiLnByb2ZpdC50b0V4cG9uZW50aWFsKCl9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGAsIHJlZmVyZW5jZURhdGEucHJvZml0OiAke2N1c3RvbURhdGEucmVmZXJlbmNlRGF0YS5wcm9maXQudG9FeHBvbmVudGlhbCgpfWBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNvcnRUeXBlID09PSBcInByb2ZpdF9wcm9ncmVzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChjdXN0b21EYXRhLmJhbGFuY2luZ01vZGlmaWVyRm9yUHJvZml0UHJvZ3Jlc3MucHJvZml0ICogbm9ybWFsaXplZFByb2ZpdE9mQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIGN1c3RvbURhdGEuYmFsYW5jaW5nTW9kaWZpZXJGb3JQcm9maXRQcm9ncmVzcy5wcm9ncmVzcyAqIG5vcm1hbGl6ZWRQcm9ncmVzc09mQSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLSAoY3VzdG9tRGF0YS5iYWxhbmNpbmdNb2RpZmllckZvclByb2ZpdFByb2dyZXNzLnByb2ZpdCAqIG5vcm1hbGl6ZWRQcm9maXRPZkJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gY3VzdG9tRGF0YS5iYWxhbmNpbmdNb2RpZmllckZvclByb2ZpdFByb2dyZXNzLnByb2dyZXNzICogbm9ybWFsaXplZFByb2dyZXNzT2ZCKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzb3J0IHR5cGU6ICR7c29ydFR5cGV9YCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGJlbmNobWFyayB0eXBlYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGF3YXJlbmVzc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcbmNvbnN0IHBvcHVsYXJpdHlNYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG5cclxuY29uc3QgZGVmYXVsdExlbmd0aE9mQmVuY2htYXJrRGF0YUFycmF5ID0gMTA7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFBlcmZvcm1hbmNlTW9kaWZpZXJGb3JPZmZpY2VCZW5jaG1hcmsgPSA0MDtcclxuZXhwb3J0IGNvbnN0IG1pblN0ZXBGb3JPZmZpY2VCZW5jaG1hcmsgPSAyO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZU9mZmljZUJlbmNobWFya0RhdGEoXHJcbiAgICBkaXZpc2lvbjogRGl2aXNpb24sXHJcbiAgICBpbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGEsXHJcbiAgICBpdGVtOiBNYXRlcmlhbCB8IFByb2R1Y3QsXHJcbiAgICB1c2VDdXJyZW50SXRlbURhdGE6IGJvb2xlYW4sXHJcbiAgICBjdXN0b21EYXRhOiB7XHJcbiAgICAgICAgb2ZmaWNlOiB7XHJcbiAgICAgICAgICAgIGF2Z01vcmFsZTogbnVtYmVyO1xyXG4gICAgICAgICAgICBhdmdFbmVyZ3k6IG51bWJlcjtcclxuICAgICAgICAgICAgYXZnSW50ZWxsaWdlbmNlOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGF2Z0NoYXJpc21hOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGF2Z0NyZWF0aXZpdHk6IG51bWJlcjtcclxuICAgICAgICAgICAgYXZnRWZmaWNpZW5jeTogbnVtYmVyO1xyXG4gICAgICAgICAgICB0b3RhbEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVsczogQ29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzO1xyXG4gICAgICAgIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzO1xyXG4gICAgICAgIHN0ZXA/OiBudW1iZXI7XHJcbiAgICB9LFxyXG4gICAgb3BlcmF0aW9uczogbnVtYmVyLFxyXG4gICAgZW5naW5lZXI6IG51bWJlcixcclxuICAgIGJ1c2luZXNzOiBudW1iZXIsXHJcbiAgICBtYW5hZ2VtZW50OiBudW1iZXIsXHJcbiAgICBybmQ6IG51bWJlcixcclxuICAgIHNhbGVzQm90VXBncmFkZUJlbmVmaXQ6IG51bWJlcixcclxuICAgIHJlc2VhcmNoU2FsZXNNdWx0aXBsaWVyOiBudW1iZXIsXHJcbiAgICBlbmFibGVMb2dnaW5nID0gZmFsc2VcclxuKTogUHJvbWlzZTxPZmZpY2VCZW5jaG1hcmtEYXRhPiB7XHJcbiAgICBjb25zdCBpdGVtSXNQcm9kdWN0ID0gaXNQcm9kdWN0KGl0ZW0pO1xyXG4gICAgY29uc3QgZW1wbG95ZWVzUHJvZHVjdGlvbiA9IGdldEVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9icyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF2Z0ludGVsbGlnZW5jZTogY3VzdG9tRGF0YS5vZmZpY2UuYXZnSW50ZWxsaWdlbmNlLFxyXG4gICAgICAgICAgICBhdmdDaGFyaXNtYTogY3VzdG9tRGF0YS5vZmZpY2UuYXZnQ2hhcmlzbWEsXHJcbiAgICAgICAgICAgIGF2Z0NyZWF0aXZpdHk6IGN1c3RvbURhdGEub2ZmaWNlLmF2Z0NyZWF0aXZpdHksXHJcbiAgICAgICAgICAgIGF2Z0VmZmljaWVuY3k6IGN1c3RvbURhdGEub2ZmaWNlLmF2Z0VmZmljaWVuY3ksXHJcbiAgICAgICAgICAgIGF2Z01vcmFsZTogY3VzdG9tRGF0YS5vZmZpY2UuYXZnTW9yYWxlLFxyXG4gICAgICAgICAgICBhdmdFbmVyZ3k6IGN1c3RvbURhdGEub2ZmaWNlLmF2Z0VuZXJneSxcclxuICAgICAgICAgICAgdG90YWxFeHBlcmllbmNlOiBjdXN0b21EYXRhLm9mZmljZS50b3RhbEV4cGVyaWVuY2UsXHJcbiAgICAgICAgICAgIGVtcGxveWVlSm9iczoge1xyXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uczogb3BlcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgIGVuZ2luZWVyOiBlbmdpbmVlcixcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzOiBidXNpbmVzcyxcclxuICAgICAgICAgICAgICAgIG1hbmFnZW1lbnQ6IG1hbmFnZW1lbnQsXHJcbiAgICAgICAgICAgICAgICByZXNlYXJjaEFuZERldmVsb3BtZW50OiBybmQsXHJcbiAgICAgICAgICAgICAgICBpbnRlcm46IDAsXHJcbiAgICAgICAgICAgICAgICB1bmFzc2lnbmVkOiAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1c3RvbURhdGEuY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzLFxyXG4gICAgICAgIGN1c3RvbURhdGEuZGl2aXNpb25SZXNlYXJjaGVzXHJcbiAgICApO1xyXG4gICAgY29uc3QgcmF3UHJvZHVjdGlvbiA9IGdldERpdmlzaW9uUmF3UHJvZHVjdGlvbihcclxuICAgICAgICBpdGVtSXNQcm9kdWN0LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3BlcmF0aW9uc1Byb2R1Y3Rpb246IGVtcGxveWVlc1Byb2R1Y3Rpb24ub3BlcmF0aW9uc1Byb2R1Y3Rpb24sXHJcbiAgICAgICAgICAgIGVuZ2luZWVyUHJvZHVjdGlvbjogZW1wbG95ZWVzUHJvZHVjdGlvbi5lbmdpbmVlclByb2R1Y3Rpb24sXHJcbiAgICAgICAgICAgIG1hbmFnZW1lbnRQcm9kdWN0aW9uOiBlbXBsb3llZXNQcm9kdWN0aW9uLm1hbmFnZW1lbnRQcm9kdWN0aW9uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGl2aXNpb24ucHJvZHVjdGlvbk11bHQsXHJcbiAgICAgICAgY3VzdG9tRGF0YS5jb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHMsXHJcbiAgICAgICAgY3VzdG9tRGF0YS5kaXZpc2lvblJlc2VhcmNoZXNcclxuICAgICk7XHJcblxyXG4gICAgbGV0IHByb2R1Y3REZXZlbG9wbWVudFByb2dyZXNzID0gMDtcclxuICAgIGxldCBlc3RpbWF0ZWRSUCA9IDA7XHJcbiAgICBsZXQgcHJvZHVjdEVmZmVjdGl2ZVJhdGluZyA9IDA7XHJcbiAgICBsZXQgcHJvZHVjdE1hcmt1cCA9IDA7XHJcbiAgICBsZXQgZGVtYW5kOiBudW1iZXI7XHJcbiAgICBsZXQgY29tcGV0aXRpb246IG51bWJlcjtcclxuXHJcbiAgICBsZXQgaXRlbU11bHRpcGxpZXI6IG51bWJlcjtcclxuICAgIGxldCBtYXJrdXBMaW1pdDogbnVtYmVyO1xyXG4gICAgbGV0IG1hcmtldFByaWNlOiBudW1iZXI7XHJcblxyXG4gICAgaWYgKGl0ZW1Jc1Byb2R1Y3QpIHtcclxuICAgICAgICAvLyBDYWxjdWxhdGUgcHJvZ3Jlc3NcclxuICAgICAgICBjb25zdCB0b3RhbFByb2R1Y3Rpb25Gb3JQcm9kdWN0RGV2ID0gZW1wbG95ZWVzUHJvZHVjdGlvbi5vcGVyYXRpb25zUHJvZHVjdGlvblxyXG4gICAgICAgICAgICArIGVtcGxveWVlc1Byb2R1Y3Rpb24uZW5naW5lZXJQcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICsgZW1wbG95ZWVzUHJvZHVjdGlvbi5tYW5hZ2VtZW50UHJvZHVjdGlvbjtcclxuICAgICAgICBjb25zdCBtYW5hZ2VtZW50RmFjdG9yID0gMSArIGVtcGxveWVlc1Byb2R1Y3Rpb24ubWFuYWdlbWVudFByb2R1Y3Rpb24gLyAoMS4yICogdG90YWxQcm9kdWN0aW9uRm9yUHJvZHVjdERldik7XHJcbiAgICAgICAgcHJvZHVjdERldmVsb3BtZW50UHJvZ3Jlc3MgPSAwLjAxICogKFxyXG4gICAgICAgICAgICBNYXRoLnBvdyhlbXBsb3llZXNQcm9kdWN0aW9uLmVuZ2luZWVyUHJvZHVjdGlvbiwgMC4zNClcclxuICAgICAgICAgICAgKyBNYXRoLnBvdyhlbXBsb3llZXNQcm9kdWN0aW9uLm9wZXJhdGlvbnNQcm9kdWN0aW9uLCAwLjIpXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAqIG1hbmFnZW1lbnRGYWN0b3I7XHJcblxyXG4gICAgICAgIGlmICghdXNlQ3VycmVudEl0ZW1EYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIEVzdGltYXRlIFJQIGdhaW5cclxuICAgICAgICAgICAgY29uc3QgY3ljbGVzID0gMTAwIC8gcHJvZHVjdERldmVsb3BtZW50UHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtcGxveWVlc1Byb2R1Y3Rpb25JblN1cHBvcnRDaXRpZXMgPSBnZXRFbXBsb3llZVByb2R1Y3Rpb25CeUpvYnMoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmV1c2UgZW1wbG95ZWVzJyBzdGF0cyBvZiBtYWluIG9mZmljZS4gVGhpcyBpcyBmaW5lIGJlY2F1c2Ugd2Ugb25seSBjYWxjdWxhdGUgdGhlIGVzdGltYXRlZCB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBub3QgdGhlIGV4YWN0IHZhbHVlLlxyXG4gICAgICAgICAgICAgICAgICAgIGF2Z0ludGVsbGlnZW5jZTogY3VzdG9tRGF0YS5vZmZpY2UuYXZnSW50ZWxsaWdlbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF2Z0NoYXJpc21hOiBjdXN0b21EYXRhLm9mZmljZS5hdmdDaGFyaXNtYSxcclxuICAgICAgICAgICAgICAgICAgICBhdmdDcmVhdGl2aXR5OiBjdXN0b21EYXRhLm9mZmljZS5hdmdDcmVhdGl2aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF2Z0VmZmljaWVuY3k6IGN1c3RvbURhdGEub2ZmaWNlLmF2Z0VmZmljaWVuY3ksXHJcbiAgICAgICAgICAgICAgICAgICAgYXZnTW9yYWxlOiBjdXN0b21EYXRhLm9mZmljZS5hdmdNb3JhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXZnRW5lcmd5OiBjdXN0b21EYXRhLm9mZmljZS5hdmdFbmVyZ3ksXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxFeHBlcmllbmNlOiBjdXN0b21EYXRhLm9mZmljZS50b3RhbEV4cGVyaWVuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVKb2JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbnM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZWVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzczogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlbWVudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZWFyY2hBbmREZXZlbG9wbWVudDogb3BlcmF0aW9ucyArIGVuZ2luZWVyICsgYnVzaW5lc3MgKyBtYW5hZ2VtZW50IC0gNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmFzc2lnbmVkOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbURhdGEuY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tRGF0YS5kaXZpc2lvblJlc2VhcmNoZXNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzZWFyY2hQb2ludEdhaW5QZXJDeWNsZSA9XHJcbiAgICAgICAgICAgICAgICA1IC8vIDUgc3VwcG9ydCBjaXRpZXNcclxuICAgICAgICAgICAgICAgICogNCAqIDAuMDA0ICogTWF0aC5wb3coZW1wbG95ZWVzUHJvZHVjdGlvbkluU3VwcG9ydENpdGllcy5yZXNlYXJjaEFuZERldmVsb3BtZW50UHJvZHVjdGlvbiwgMC41KVxyXG4gICAgICAgICAgICAgICAgKiBnZXRVcGdyYWRlQmVuZWZpdChVcGdyYWRlTmFtZS5QUk9KRUNUX0lOU0lHSFQsIGN1c3RvbURhdGEuY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzW1VwZ3JhZGVOYW1lLlBST0pFQ1RfSU5TSUdIVF0pXHJcbiAgICAgICAgICAgICAgICAqIGdldFJlc2VhcmNoUlBNdWx0aXBsaWVyKGN1c3RvbURhdGEuZGl2aXNpb25SZXNlYXJjaGVzKTtcclxuICAgICAgICAgICAgZXN0aW1hdGVkUlAgPSBkaXZpc2lvbi5yZXNlYXJjaFBvaW50cyArIHJlc2VhcmNoUG9pbnRHYWluUGVyQ3ljbGUgKiBjeWNsZXM7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcHJvZHVjdC5zdGF0c1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0U3RhdHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XHJcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2U6IDAsXHJcbiAgICAgICAgICAgICAgICBkdXJhYmlsaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgcmVsaWFiaWxpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBhZXN0aGV0aWNzOiAwLFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IDAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIElmIHdlIGFzc3VtZSB0aGF0IG9mZmljZSBzZXR1cCBkb2VzIG5vdCBjaGFuZ2UsIHdlIGNhbiB1c2UgZW1wbG95ZWVzUHJvZHVjdGlvbiBpbnN0ZWFkIG9mIGNyZWF0aW9uSm9iRmFjdG9yc1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFByb2R1Y3Rpb24gPVxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVzUHJvZHVjdGlvbi5lbmdpbmVlclByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgZW1wbG95ZWVzUHJvZHVjdGlvbi5tYW5hZ2VtZW50UHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgKyBlbXBsb3llZXNQcm9kdWN0aW9uLnJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICArIGVtcGxveWVlc1Byb2R1Y3Rpb24ub3BlcmF0aW9uc1Byb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgZW1wbG95ZWVzUHJvZHVjdGlvbi5idXNpbmVzc1Byb2R1Y3Rpb247XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbmdpbmVlclJhdGlvID0gZW1wbG95ZWVzUHJvZHVjdGlvbi5lbmdpbmVlclByb2R1Y3Rpb24gLyB0b3RhbFByb2R1Y3Rpb247XHJcbiAgICAgICAgICAgIGNvbnN0IG1hbmFnZW1lbnRSYXRpbyA9IGVtcGxveWVlc1Byb2R1Y3Rpb24ubWFuYWdlbWVudFByb2R1Y3Rpb24gLyB0b3RhbFByb2R1Y3Rpb247XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRSYXRpbyA9IGVtcGxveWVlc1Byb2R1Y3Rpb24ucmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb24gLyB0b3RhbFByb2R1Y3Rpb247XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdGlvbnNSYXRpbyA9IGVtcGxveWVlc1Byb2R1Y3Rpb24ub3BlcmF0aW9uc1Byb2R1Y3Rpb24gLyB0b3RhbFByb2R1Y3Rpb247XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1c2luZXNzUmF0aW8gPSBlbXBsb3llZXNQcm9kdWN0aW9uLmJ1c2luZXNzUHJvZHVjdGlvbiAvIHRvdGFsUHJvZHVjdGlvbjtcclxuICAgICAgICAgICAgLy8gUmV1c2UgZGVzaWduSW52ZXN0bWVudCBvZiBsYXRlc3QgcHJvZHVjdFxyXG4gICAgICAgICAgICBjb25zdCBkZXNpZ25JbnZlc3RtZW50TXVsdGlwbGllciA9IDEgKyAoTWF0aC5wb3coaXRlbS5kZXNpZ25JbnZlc3RtZW50LCAwLjEpKSAvIDEwMDtcclxuICAgICAgICAgICAgY29uc3Qgc2NpZW5jZU11bHRpcGxpZXIgPSAxICsgKE1hdGgucG93KGVzdGltYXRlZFJQLCBpbmR1c3RyeURhdGEuc2NpZW5jZUZhY3RvciEpKSAvIDgwMDtcclxuICAgICAgICAgICAgY29uc3QgYmFsYW5jZU11bHRpcGxpZXIgPVxyXG4gICAgICAgICAgICAgICAgMS4yICogZW5naW5lZXJSYXRpb1xyXG4gICAgICAgICAgICAgICAgKyAwLjkgKiBtYW5hZ2VtZW50UmF0aW9cclxuICAgICAgICAgICAgICAgICsgMS4zICogcmVzZWFyY2hBbmREZXZlbG9wbWVudFJhdGlvXHJcbiAgICAgICAgICAgICAgICArIDEuNSAqIG9wZXJhdGlvbnNSYXRpb1xyXG4gICAgICAgICAgICAgICAgKyBidXNpbmVzc1JhdGlvO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbE11bHRpcGxpZXIgPSBiYWxhbmNlTXVsdGlwbGllciAqIGRlc2lnbkludmVzdG1lbnRNdWx0aXBsaWVyICogc2NpZW5jZU11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgIHByb2R1Y3RTdGF0cy5xdWFsaXR5ID0gdG90YWxNdWx0aXBsaWVyICogKFxyXG4gICAgICAgICAgICAgICAgMC4xICogZW1wbG95ZWVzUHJvZHVjdGlvbi5lbmdpbmVlclByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4wNSAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ubWFuYWdlbWVudFByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4wNSAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ucmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4wMiAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ub3BlcmF0aW9uc1Byb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4wMiAqIGVtcGxveWVlc1Byb2R1Y3Rpb24uYnVzaW5lc3NQcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHByb2R1Y3RTdGF0cy5wZXJmb3JtYW5jZSA9IHRvdGFsTXVsdGlwbGllciAqIChcclxuICAgICAgICAgICAgICAgIDAuMTUgKiBlbXBsb3llZXNQcm9kdWN0aW9uLmVuZ2luZWVyUHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgKyAwLjAyICogZW1wbG95ZWVzUHJvZHVjdGlvbi5tYW5hZ2VtZW50UHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgKyAwLjAyICogZW1wbG95ZWVzUHJvZHVjdGlvbi5yZXNlYXJjaEFuZERldmVsb3BtZW50UHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgKyAwLjAyICogZW1wbG95ZWVzUHJvZHVjdGlvbi5vcGVyYXRpb25zUHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgKyAwLjAyICogZW1wbG95ZWVzUHJvZHVjdGlvbi5idXNpbmVzc1Byb2R1Y3Rpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcHJvZHVjdFN0YXRzLmR1cmFiaWxpdHkgPSB0b3RhbE11bHRpcGxpZXIgKiAoXHJcbiAgICAgICAgICAgICAgICAwLjA1ICogZW1wbG95ZWVzUHJvZHVjdGlvbi5lbmdpbmVlclByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4wMiAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ubWFuYWdlbWVudFByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4wOCAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ucmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4wNSAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ub3BlcmF0aW9uc1Byb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4wNSAqIGVtcGxveWVlc1Byb2R1Y3Rpb24uYnVzaW5lc3NQcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHByb2R1Y3RTdGF0cy5yZWxpYWJpbGl0eSA9IHRvdGFsTXVsdGlwbGllciAqIChcclxuICAgICAgICAgICAgICAgIDAuMDIgKiBlbXBsb3llZXNQcm9kdWN0aW9uLmVuZ2luZWVyUHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgKyAwLjA4ICogZW1wbG95ZWVzUHJvZHVjdGlvbi5tYW5hZ2VtZW50UHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgKyAwLjAyICogZW1wbG95ZWVzUHJvZHVjdGlvbi5yZXNlYXJjaEFuZERldmVsb3BtZW50UHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgKyAwLjA1ICogZW1wbG95ZWVzUHJvZHVjdGlvbi5vcGVyYXRpb25zUHJvZHVjdGlvblxyXG4gICAgICAgICAgICAgICAgKyAwLjA4ICogZW1wbG95ZWVzUHJvZHVjdGlvbi5idXNpbmVzc1Byb2R1Y3Rpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcHJvZHVjdFN0YXRzLmFlc3RoZXRpY3MgPSB0b3RhbE11bHRpcGxpZXIgKiAoXHJcbiAgICAgICAgICAgICAgICArMC4wOCAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ubWFuYWdlbWVudFByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4wNSAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ucmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4wMiAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ub3BlcmF0aW9uc1Byb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgICsgMC4xICogZW1wbG95ZWVzUHJvZHVjdGlvbi5idXNpbmVzc1Byb2R1Y3Rpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcHJvZHVjdFN0YXRzLmZlYXR1cmVzID0gdG90YWxNdWx0aXBsaWVyICogKFxyXG4gICAgICAgICAgICAgICAgMC4wOCAqIGVtcGxveWVlc1Byb2R1Y3Rpb24uZW5naW5lZXJQcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICArIDAuMDUgKiBlbXBsb3llZXNQcm9kdWN0aW9uLm1hbmFnZW1lbnRQcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICArIDAuMDIgKiBlbXBsb3llZXNQcm9kdWN0aW9uLnJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICArIDAuMDUgKiBlbXBsb3llZXNQcm9kdWN0aW9uLm9wZXJhdGlvbnNQcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICArIDAuMDUgKiBlbXBsb3llZXNQcm9kdWN0aW9uLmJ1c2luZXNzUHJvZHVjdGlvblxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHByb2R1Y3QucmF0aW5nXHJcbiAgICAgICAgICAgIGxldCBwcm9kdWN0UmF0aW5nID0gMDtcclxuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0cyA9IGluZHVzdHJ5RGF0YS5wcm9kdWN0IS5yYXRpbmdXZWlnaHRzO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtzdGF0TmFtZSwgY29lZmZpY2llbnRdIG9mIE9iamVjdC5lbnRyaWVzKHdlaWdodHMpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0UmF0aW5nICs9IHByb2R1Y3RTdGF0c1tzdGF0TmFtZV0gKiBjb2VmZmljaWVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgd2UgYXNzdW1lIHRoYXQgaW5wdXQgbWF0ZXJpYWxzJyBhdmVyYWdlIHF1YWxpdHkgaXMgaGlnaCBlbm91Z2gsIHdlIGNhbiB1c2UgcHJvZHVjdFJhdGluZ1xyXG4gICAgICAgICAgICAvLyBkaXJlY3RseSBpbnN0ZWFkIG9mIGhhdmluZyB0byBjYWxjdWxhdGUgZWZmZWN0aXZlUmF0aW5nLiBDYWxjdWxhdGluZyBlZmZlY3RpdmVSYXRpbmcgaXMgbm90IGltcG9ydGFudFxyXG4gICAgICAgICAgICAvLyBoZXJlIGJlY2F1c2Ugd2Ugb25seSB3YW50IHRvIGtub3cgdGhlIHJlbGF0aXZlIGRpZmZlcmVuY2UgYmV0d2VlbiBkaWZmZXJlbnQgb2ZmaWNlIHNldHVwcy5cclxuICAgICAgICAgICAgcHJvZHVjdEVmZmVjdGl2ZVJhdGluZyA9IHByb2R1Y3RSYXRpbmc7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcHJvZHVjdC5tYXJrdXBcclxuICAgICAgICAgICAgLy8gUmV1c2UgYWR2ZXJ0aXNpbmdJbnZlc3RtZW50IG9mIGxhdGVzdCBwcm9kdWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGFkdmVydGlzaW5nSW52ZXN0bWVudE11bHRpcGxpZXIgPSAxICsgKE1hdGgucG93KGl0ZW0uYWR2ZXJ0aXNpbmdJbnZlc3RtZW50LCAwLjEpKSAvIDEwMDtcclxuICAgICAgICAgICAgY29uc3QgYnVzaW5lc3NNYW5hZ2VtZW50UmF0aW8gPSBNYXRoLm1heChcclxuICAgICAgICAgICAgICAgIGJ1c2luZXNzUmF0aW8gKyBtYW5hZ2VtZW50UmF0aW8sXHJcbiAgICAgICAgICAgICAgICAxIC8gdG90YWxQcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHByb2R1Y3RNYXJrdXAgPSAxMDAgLyAoXHJcbiAgICAgICAgICAgICAgICBhZHZlcnRpc2luZ0ludmVzdG1lbnRNdWx0aXBsaWVyICogTWF0aC5wb3cocHJvZHVjdFN0YXRzLnF1YWxpdHkgKyAwLjAwMSwgMC42NSkgKiBidXNpbmVzc01hbmFnZW1lbnRSYXRpb1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGRlbWFuZC9jb21wZXRpdGlvblxyXG4gICAgICAgICAgICBkZW1hbmQgPSBkaXZpc2lvbi5hd2FyZW5lc3MgPT09IDBcclxuICAgICAgICAgICAgICAgID8gMjBcclxuICAgICAgICAgICAgICAgIDogTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkdmVydGlzaW5nSW52ZXN0bWVudE11bHRpcGxpZXIgKiAoMTAwICogKGRpdmlzaW9uLnBvcHVsYXJpdHkgLyBkaXZpc2lvbi5hd2FyZW5lc3MpKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gSGFyZC1jb2RlZCB2YWx1ZSBvZiBnZXRSYW5kb21JbnQoMCwgNzApLiBXZSBkb24ndCB3YW50IFJORyBoZXJlLlxyXG4gICAgICAgICAgICBjb21wZXRpdGlvbiA9IDM1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RFZmZlY3RpdmVSYXRpbmcgPSBpdGVtLmVmZmVjdGl2ZVJhdGluZztcclxuICAgICAgICAgICAgcHJvZHVjdE1hcmt1cCA9IGF3YWl0IGdldFByb2R1Y3RNYXJrdXAoXHJcbiAgICAgICAgICAgICAgICBkaXZpc2lvbixcclxuICAgICAgICAgICAgICAgIGluZHVzdHJ5RGF0YSxcclxuICAgICAgICAgICAgICAgIENpdHlOYW1lLlNlY3RvcjEyLFxyXG4gICAgICAgICAgICAgICAgaXRlbSxcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uZGVtYW5kIHx8ICFpdGVtLmNvbXBldGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBuZWVkIHRvIHVubG9jayBcIk1hcmtldCBSZXNlYXJjaCAtIERlbWFuZFwiIGFuZCBcIk1hcmtldCBEYXRhIC0gQ29tcGV0aXRpb25cImApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlbWFuZCA9IGl0ZW0uZGVtYW5kO1xyXG4gICAgICAgICAgICBjb21wZXRpdGlvbiA9IGl0ZW0uY29tcGV0aXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpdGVtTXVsdGlwbGllciA9IDAuNSAqIE1hdGgucG93KHByb2R1Y3RFZmZlY3RpdmVSYXRpbmcsIDAuNjUpO1xyXG4gICAgICAgIG1hcmt1cExpbWl0ID0gTWF0aC5tYXgocHJvZHVjdEVmZmVjdGl2ZVJhdGluZywgMC4wMDEpIC8gcHJvZHVjdE1hcmt1cDtcclxuICAgICAgICAvLyBSZXVzZSBtYXJrZXRQcmljZSBvZiBsYXRlc3QgcHJvZHVjdC4gcHJvZHVjdGlvbkNvc3Qgb25seSBkZXBlbmRzIG9uIGlucHV0IG1hdGVyaWFscycgbWFya2V0XHJcbiAgICAgICAgLy8gcHJpY2UgYW5kIGNvZWZmaWNpZW50LlxyXG4gICAgICAgIG1hcmtldFByaWNlID0gaXRlbS5wcm9kdWN0aW9uQ29zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFpdGVtLmRlbWFuZCB8fCAhaXRlbS5jb21wZXRpdGlvbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBuZWVkIHRvIHVubG9jayBcIk1hcmtldCBSZXNlYXJjaCAtIERlbWFuZFwiIGFuZCBcIk1hcmtldCBEYXRhIC0gQ29tcGV0aXRpb25cImApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZW1hbmQgPSBpdGVtLmRlbWFuZDtcclxuICAgICAgICBjb21wZXRpdGlvbiA9IGl0ZW0uY29tcGV0aXRpb247XHJcbiAgICAgICAgaXRlbU11bHRpcGxpZXIgPSBpdGVtLnF1YWxpdHkgKyAwLjAwMTtcclxuICAgICAgICBtYXJrdXBMaW1pdCA9IGl0ZW0ucXVhbGl0eSAvIENvcnBNYXRlcmlhbHNEYXRhW2l0ZW0ubmFtZV0uYmFzZU1hcmt1cDtcclxuICAgICAgICBtYXJrZXRQcmljZSA9IGl0ZW0ubWFya2V0UHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWFya2V0RmFjdG9yID0gZ2V0TWFya2V0RmFjdG9yKGRlbWFuZCwgY29tcGV0aXRpb24pO1xyXG4gICAgY29uc3QgYnVzaW5lc3NGYWN0b3IgPSBnZXRCdXNpbmVzc0ZhY3RvcihlbXBsb3llZXNQcm9kdWN0aW9uLmJ1c2luZXNzUHJvZHVjdGlvbik7XHJcbiAgICBjb25zdCBhZHZlcnRpc2luZ0ZhY3RvciA9IGdldEFkdmVydGlzaW5nRmFjdG9ycyhcclxuICAgICAgICBkaXZpc2lvbi5hd2FyZW5lc3MsXHJcbiAgICAgICAgZGl2aXNpb24ucG9wdWxhcml0eSxcclxuICAgICAgICBpbmR1c3RyeURhdGEuYWR2ZXJ0aXNpbmdGYWN0b3IhKVswXTtcclxuICAgIGNvbnN0IG1heFNhbGVzVm9sdW1lID1cclxuICAgICAgICBpdGVtTXVsdGlwbGllciAqXHJcbiAgICAgICAgYnVzaW5lc3NGYWN0b3IgKlxyXG4gICAgICAgIGFkdmVydGlzaW5nRmFjdG9yICpcclxuICAgICAgICBtYXJrZXRGYWN0b3IgKlxyXG4gICAgICAgIHNhbGVzQm90VXBncmFkZUJlbmVmaXQgKlxyXG4gICAgICAgIHJlc2VhcmNoU2FsZXNNdWx0aXBsaWVyO1xyXG5cclxuICAgIGxldCBtYXJnaW5FcnJvclJhdGlvID0gMTtcclxuICAgIGlmICghaXRlbUlzUHJvZHVjdCkge1xyXG4gICAgICAgIC8vIEFkZCBtYXJnaW4gZXJyb3IgaW4gY2FzZSBvZiBvdXRwdXQgbWF0ZXJpYWxzXHJcbiAgICAgICAgbWFyZ2luRXJyb3JSYXRpbyA9IDAuOTtcclxuICAgIH1cclxuICAgIGlmIChtYXhTYWxlc1ZvbHVtZSA8IHJhd1Byb2R1Y3Rpb24gKiBtYXJnaW5FcnJvclJhdGlvICYmIGJ1c2luZXNzID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoZW5hYmxlTG9nZ2luZyk7XHJcbiAgICAgICAgbG9nZ2VyLndhcm4oYFdBUk5JTkc6IG9wZXJhdGlvbnM6ICR7b3BlcmF0aW9uc30sIGVuZ2luZWVyOiAke2VuZ2luZWVyfSwgYnVzaW5lc3M6ICR7YnVzaW5lc3N9LCBtYW5hZ2VtZW50OiAke21hbmFnZW1lbnR9YCk7XHJcbiAgICAgICAgbG9nZ2VyLndhcm4oYFdBUk5JTkc6IHJhd1Byb2R1Y3Rpb246ICR7cmF3UHJvZHVjdGlvbn0sIG1heFNhbGVzVm9sdW1lOiAke21heFNhbGVzVm9sdW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdGltYWxQcmljZSA9IG1hcmt1cExpbWl0IC8gTWF0aC5zcXJ0KHJhd1Byb2R1Y3Rpb24gLyBtYXhTYWxlc1ZvbHVtZSkgKyBtYXJrZXRQcmljZTtcclxuXHJcbiAgICBjb25zdCBwcm9maXQgPSAocmF3UHJvZHVjdGlvbiAqIDEwKSAqIG9wdGltYWxQcmljZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wZXJhdGlvbnM6IG9wZXJhdGlvbnMsXHJcbiAgICAgICAgZW5naW5lZXI6IGVuZ2luZWVyLFxyXG4gICAgICAgIGJ1c2luZXNzOiBidXNpbmVzcyxcclxuICAgICAgICBtYW5hZ2VtZW50OiBtYW5hZ2VtZW50LFxyXG4gICAgICAgIHRvdGFsRXhwZXJpZW5jZTogY3VzdG9tRGF0YS5vZmZpY2UudG90YWxFeHBlcmllbmNlLFxyXG4gICAgICAgIHJhd1Byb2R1Y3Rpb246IHJhd1Byb2R1Y3Rpb24sXHJcbiAgICAgICAgbWF4U2FsZXNWb2x1bWU6IG1heFNhbGVzVm9sdW1lLFxyXG4gICAgICAgIG9wdGltYWxQcmljZTogb3B0aW1hbFByaWNlLFxyXG4gICAgICAgIHByb2R1Y3REZXZlbG9wbWVudFByb2dyZXNzOiBwcm9kdWN0RGV2ZWxvcG1lbnRQcm9ncmVzcyxcclxuICAgICAgICBlc3RpbWF0ZWRSUDogZXN0aW1hdGVkUlAsXHJcbiAgICAgICAgcHJvZHVjdFJhdGluZzogcHJvZHVjdEVmZmVjdGl2ZVJhdGluZyxcclxuICAgICAgICBwcm9kdWN0TWFya3VwOiBwcm9kdWN0TWFya3VwLFxyXG4gICAgICAgIHByb2ZpdDogcHJvZml0LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvcnBvcmF0aW9uT3B0aW1pemVyIHtcclxuICAgIHB1YmxpYyBnZXRTY3JpcHRVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gaW1wb3J0Lm1ldGEudXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcHRpbWl6ZVN0b3JhZ2VBbmRGYWN0b3J5KFxyXG4gICAgICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcclxuICAgICAgICBjdXJyZW50U21hcnRTdG9yYWdlTGV2ZWw6IG51bWJlcixcclxuICAgICAgICBjdXJyZW50V2FyZWhvdXNlTGV2ZWw6IG51bWJlcixcclxuICAgICAgICBjdXJyZW50U21hcnRGYWN0b3JpZXNMZXZlbDogbnVtYmVyLFxyXG4gICAgICAgIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzLFxyXG4gICAgICAgIG1heENvc3Q6IG51bWJlcixcclxuICAgICAgICBlbmFibGVMb2dnaW5nID0gZmFsc2UsXHJcbiAgICAgICAgYm9vc3RNYXRlcmlhbFRvdGFsU2l6ZVJhdGlvID0gMC44XHJcbiAgICApOiBTdG9yYWdlRmFjdG9yeUJlbmNobWFya0RhdGFbXSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTbWFydFN0b3JhZ2VMZXZlbCA8IDAgfHwgY3VycmVudFdhcmVob3VzZUxldmVsIDwgMCB8fCBjdXJyZW50U21hcnRGYWN0b3JpZXNMZXZlbCA8IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoZW5hYmxlTG9nZ2luZyk7XHJcbiAgICAgICAgY29uc3QgbWF4U21hcnRTdG9yYWdlTGV2ZWwgPSBnZXRNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLlNNQVJUX1NUT1JBR0UsIGN1cnJlbnRTbWFydFN0b3JhZ2VMZXZlbCwgbWF4Q29zdCk7XHJcbiAgICAgICAgY29uc3QgbWF4V2FyZWhvdXNlTGV2ZWwgPSBnZXRNYXhBZmZvcmRhYmxlV2FyZWhvdXNlTGV2ZWwoY3VycmVudFdhcmVob3VzZUxldmVsLCBtYXhDb3N0IC8gNik7XHJcbiAgICAgICAgY29uc3QgY29tcGFyYXRvciA9IGdldENvbXBhcmF0b3IoQmVuY2htYXJrVHlwZS5TVE9SQUdFX0ZBQ1RPUlkpO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5UXVldWUgPSBuZXcgUHJpb3JpdHlRdWV1ZShjb21wYXJhdG9yKTtcclxuICAgICAgICBsZXQgbWluU21hcnRTdG9yYWdlTGV2ZWwgPSBjdXJyZW50U21hcnRTdG9yYWdlTGV2ZWw7XHJcbiAgICAgICAgaWYgKG1heFNtYXJ0U3RvcmFnZUxldmVsIC0gbWluU21hcnRTdG9yYWdlTGV2ZWwgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgIG1pblNtYXJ0U3RvcmFnZUxldmVsID0gbWF4U21hcnRTdG9yYWdlTGV2ZWwgLSAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWluV2FyZWhvdXNlTGV2ZWwgPSBjdXJyZW50V2FyZWhvdXNlTGV2ZWw7XHJcbiAgICAgICAgaWYgKG1heFdhcmVob3VzZUxldmVsIC0gbWluV2FyZWhvdXNlTGV2ZWwgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgIG1pbldhcmVob3VzZUxldmVsID0gbWF4V2FyZWhvdXNlTGV2ZWwgLSAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIubG9nKGBtaW5TbWFydFN0b3JhZ2VMZXZlbDogJHttaW5TbWFydFN0b3JhZ2VMZXZlbH1gKTtcclxuICAgICAgICBsb2dnZXIubG9nKGBtaW5XYXJlaG91c2VMZXZlbDogJHttaW5XYXJlaG91c2VMZXZlbH1gKTtcclxuICAgICAgICBsb2dnZXIubG9nKGBtYXhTbWFydFN0b3JhZ2VMZXZlbDogJHttYXhTbWFydFN0b3JhZ2VMZXZlbH1gKTtcclxuICAgICAgICBsb2dnZXIubG9nKGBtYXhXYXJlaG91c2VMZXZlbDogJHttYXhXYXJlaG91c2VMZXZlbH1gKTtcclxuICAgICAgICBsb2dnZXIudGltZShcIlN0b3JhZ2VBbmRGYWN0b3J5IGJlbmNobWFya1wiKTtcclxuICAgICAgICBmb3IgKGxldCBzbWFydFN0b3JhZ2VMZXZlbCA9IG1pblNtYXJ0U3RvcmFnZUxldmVsOyBzbWFydFN0b3JhZ2VMZXZlbCA8PSBtYXhTbWFydFN0b3JhZ2VMZXZlbDsgc21hcnRTdG9yYWdlTGV2ZWwrKykge1xyXG4gICAgICAgICAgICBjb25zdCB1cGdyYWRlU21hcnRTdG9yYWdlQ29zdCA9IGdldFVwZ3JhZGVDb3N0KFxyXG4gICAgICAgICAgICAgICAgVXBncmFkZU5hbWUuU01BUlRfU1RPUkFHRSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbWFydFN0b3JhZ2VMZXZlbCxcclxuICAgICAgICAgICAgICAgIHNtYXJ0U3RvcmFnZUxldmVsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHdhcmVob3VzZUxldmVsID0gbWluV2FyZWhvdXNlTGV2ZWw7IHdhcmVob3VzZUxldmVsIDw9IG1heFdhcmVob3VzZUxldmVsOyB3YXJlaG91c2VMZXZlbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGdyYWRlV2FyZWhvdXNlQ29zdCA9IGdldFVwZ3JhZGVXYXJlaG91c2VDb3N0KFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXYXJlaG91c2VMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICB3YXJlaG91c2VMZXZlbFxyXG4gICAgICAgICAgICAgICAgKSAqIDY7XHJcbiAgICAgICAgICAgICAgICBpZiAodXBncmFkZVNtYXJ0U3RvcmFnZUNvc3QgKyB1cGdyYWRlV2FyZWhvdXNlQ29zdCA+IG1heENvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHdhcmVob3VzZVNpemUgPSBnZXRXYXJlaG91c2VTaXplKFxyXG4gICAgICAgICAgICAgICAgICAgIHNtYXJ0U3RvcmFnZUxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIHdhcmVob3VzZUxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uUmVzZWFyY2hlc1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvb3N0TWF0ZXJpYWxzID0gZ2V0T3B0aW1hbEJvb3N0TWF0ZXJpYWxRdWFudGl0aWVzKGluZHVzdHJ5RGF0YSwgd2FyZWhvdXNlU2l6ZSAqIGJvb3N0TWF0ZXJpYWxUb3RhbFNpemVSYXRpbyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib29zdE1hdGVyaWFsTXVsdGlwbGllciA9IGdldERpdmlzaW9uUHJvZHVjdGlvbk11bHRpcGxpZXIoaW5kdXN0cnlEYXRhLCBib29zdE1hdGVyaWFscyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWRnZXRGb3JTbWFydEZhY3Rvcmllc1VwZ3JhZGUgPSBtYXhDb3N0IC0gKHVwZ3JhZGVTbWFydFN0b3JhZ2VDb3N0ICsgdXBncmFkZVdhcmVob3VzZUNvc3QpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4QWZmb3JkYWJsZVNtYXJ0RmFjdG9yaWVzTGV2ZWwgPSBnZXRNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKFxyXG4gICAgICAgICAgICAgICAgICAgIFVwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFUyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U21hcnRGYWN0b3JpZXNMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICBidWRnZXRGb3JTbWFydEZhY3Rvcmllc1VwZ3JhZGVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGdyYWRlU21hcnRGYWN0b3JpZXNDb3N0ID0gZ2V0VXBncmFkZUNvc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgVXBncmFkZU5hbWUuU01BUlRfRkFDVE9SSUVTLFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbWFydEZhY3Rvcmllc0xldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEFmZm9yZGFibGVTbWFydEZhY3Rvcmllc0xldmVsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDb3N0ID0gdXBncmFkZVNtYXJ0U3RvcmFnZUNvc3QgKyB1cGdyYWRlV2FyZWhvdXNlQ29zdCArIHVwZ3JhZGVTbWFydEZhY3Rvcmllc0Nvc3Q7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzbWFydEZhY3Rvcmllc011bHRpcGxpZXIgPSAxICsgQ29ycFVwZ3JhZGVzRGF0YVtVcGdyYWRlTmFtZS5TTUFSVF9GQUNUT1JJRVNdLmJlbmVmaXQgKiBtYXhBZmZvcmRhYmxlU21hcnRGYWN0b3JpZXNMZXZlbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBib29zdE1hdGVyaWFsTXVsdGlwbGllciAqIHNtYXJ0RmFjdG9yaWVzTXVsdGlwbGllcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFFbnRyeSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzbWFydFN0b3JhZ2VMZXZlbDogc21hcnRTdG9yYWdlTGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgd2FyZWhvdXNlTGV2ZWw6IHdhcmVob3VzZUxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIHNtYXJ0RmFjdG9yaWVzTGV2ZWw6IG1heEFmZm9yZGFibGVTbWFydEZhY3Rvcmllc0xldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVTbWFydFN0b3JhZ2VDb3N0OiB1cGdyYWRlU21hcnRTdG9yYWdlQ29zdCxcclxuICAgICAgICAgICAgICAgICAgICB1cGdyYWRlV2FyZWhvdXNlQ29zdDogdXBncmFkZVdhcmVob3VzZUNvc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgd2FyZWhvdXNlU2l6ZTogd2FyZWhvdXNlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENvc3Q6IHRvdGFsQ29zdCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0aW9uOiBwcm9kdWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvc3RQZXJQcm9kdWN0aW9uOiB0b3RhbENvc3QgLyBwcm9kdWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvb3N0TWF0ZXJpYWxzOiBib29zdE1hdGVyaWFscyxcclxuICAgICAgICAgICAgICAgICAgICBib29zdE1hdGVyaWFsTXVsdGlwbGllcjogYm9vc3RNYXRlcmlhbE11bHRpcGxpZXJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpZiAocHJpb3JpdHlRdWV1ZS5zaXplKCkgPCBkZWZhdWx0TGVuZ3RoT2ZCZW5jaG1hcmtEYXRhQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVF1ZXVlLnB1c2goZGF0YUVudHJ5KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcGFyYXRvcihkYXRhRW50cnksIHByaW9yaXR5UXVldWUuZnJvbnQoKSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlRdWV1ZS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVF1ZXVlLnB1c2goZGF0YUVudHJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIudGltZUVuZChcIlN0b3JhZ2VBbmRGYWN0b3J5IGJlbmNobWFya1wiKTtcclxuICAgICAgICBjb25zdCBkYXRhOiBTdG9yYWdlRmFjdG9yeUJlbmNobWFya0RhdGFbXSA9IHByaW9yaXR5UXVldWUudG9BcnJheSgpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgbG9nZ2VyLmxvZyhcclxuICAgICAgICAgICAgICAgIGB7c3RvcmFnZToke2RhdGEuc21hcnRTdG9yYWdlTGV2ZWx9LCB3YXJlaG91c2U6JHtkYXRhLndhcmVob3VzZUxldmVsfSwgZmFjdG9yeToke2RhdGEuc21hcnRGYWN0b3JpZXNMZXZlbH0sIGAgK1xyXG4gICAgICAgICAgICAgICAgYHRvdGFsQ29zdDoke2Zvcm1hdE51bWJlcihkYXRhLnRvdGFsQ29zdCl9LCBgICtcclxuICAgICAgICAgICAgICAgIGB3YXJlaG91c2VTaXplOiR7Zm9ybWF0TnVtYmVyKGRhdGEud2FyZWhvdXNlU2l6ZSl9LCBgICtcclxuICAgICAgICAgICAgICAgIGBwcm9kdWN0aW9uOiR7Zm9ybWF0TnVtYmVyKGRhdGEucHJvZHVjdGlvbil9LCBgICtcclxuICAgICAgICAgICAgICAgIGBjb3N0UGVyUHJvZHVjdGlvbjoke2Zvcm1hdE51bWJlcihkYXRhLmNvc3RQZXJQcm9kdWN0aW9uKX0sIGAgK1xyXG4gICAgICAgICAgICAgICAgYGJvb3N0TWF0ZXJpYWxNdWx0aXBsaWVyOiR7Zm9ybWF0TnVtYmVyKGRhdGEuYm9vc3RNYXRlcmlhbE11bHRpcGxpZXIpfSwgYCArXHJcbiAgICAgICAgICAgICAgICBgYm9vc3RNYXRlcmlhbHM6JHtkYXRhLmJvb3N0TWF0ZXJpYWxzfX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wdGltaXplV2lsc29uQW5kQWR2ZXJ0KFxyXG4gICAgICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcclxuICAgICAgICBjdXJyZW50V2lsc29uTGV2ZWw6IG51bWJlcixcclxuICAgICAgICBjdXJyZW50QWR2ZXJ0TGV2ZWw6IG51bWJlcixcclxuICAgICAgICBjdXJyZW50QXdhcmVuZXNzOiBudW1iZXIsXHJcbiAgICAgICAgY3VycmVudFBvcHVsYXJpdHk6IG51bWJlcixcclxuICAgICAgICBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyxcclxuICAgICAgICBtYXhDb3N0OiBudW1iZXIsXHJcbiAgICAgICAgZW5hYmxlTG9nZ2luZyA9IGZhbHNlXHJcbiAgICApOiBXaWxzb25BZHZlcnRCZW5jaG1hcmtEYXRhW10ge1xyXG4gICAgICAgIGF3YXJlbmVzc01hcC5jbGVhcigpO1xyXG4gICAgICAgIHBvcHVsYXJpdHlNYXAuY2xlYXIoKTtcclxuICAgICAgICBpZiAoY3VycmVudFdpbHNvbkxldmVsIDwgMCB8fCBjdXJyZW50QWR2ZXJ0TGV2ZWwgPCAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1ldGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKGVuYWJsZUxvZ2dpbmcpO1xyXG4gICAgICAgIGNvbnN0IG1heFdpbHNvbkxldmVsID0gZ2V0TWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5XSUxTT05fQU5BTFlUSUNTLCBjdXJyZW50V2lsc29uTGV2ZWwsIG1heENvc3QpO1xyXG4gICAgICAgIGNvbnN0IG1heEFkdmVydExldmVsID0gZ2V0TWF4QWZmb3JkYWJsZUFkVmVydExldmVsKGN1cnJlbnRBZHZlcnRMZXZlbCwgbWF4Q29zdCk7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhgbWF4V2lsc29uTGV2ZWw6ICR7bWF4V2lsc29uTGV2ZWx9YCk7XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhgbWF4QWR2ZXJ0TGV2ZWw6ICR7bWF4QWR2ZXJ0TGV2ZWx9YCk7XHJcbiAgICAgICAgY29uc3QgcmVzZWFyY2hBZHZlcnRpc2luZ011bHRpcGxpZXIgPSBnZXRSZXNlYXJjaEFkdmVydGlzaW5nTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXMpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBnZXRDb21wYXJhdG9yKEJlbmNobWFya1R5cGUuV0lMU09OX0FEVkVSVCk7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHlRdWV1ZSA9IG5ldyBQcmlvcml0eVF1ZXVlKGNvbXBhcmF0b3IpO1xyXG4gICAgICAgIGxvZ2dlci50aW1lKFwiV2lsc29uQW5kQWR2ZXJ0IGJlbmNobWFya1wiKTtcclxuICAgICAgICBmb3IgKGxldCB3aWxzb25MZXZlbCA9IGN1cnJlbnRXaWxzb25MZXZlbDsgd2lsc29uTGV2ZWwgPD0gbWF4V2lsc29uTGV2ZWw7IHdpbHNvbkxldmVsKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgd2lsc29uQ29zdCA9IGdldFVwZ3JhZGVDb3N0KFVwZ3JhZGVOYW1lLldJTFNPTl9BTkFMWVRJQ1MsIGN1cnJlbnRXaWxzb25MZXZlbCwgd2lsc29uTGV2ZWwpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhZHZlcnRMZXZlbCA9IGN1cnJlbnRBZHZlcnRMZXZlbCArIDE7IGFkdmVydExldmVsIDw9IG1heEFkdmVydExldmVsOyBhZHZlcnRMZXZlbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZlcnRDb3N0ID0gZ2V0QWRWZXJ0Q29zdChjdXJyZW50QWR2ZXJ0TGV2ZWwsIGFkdmVydExldmVsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ29zdCA9IHdpbHNvbkNvc3QgKyBhZHZlcnRDb3N0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsQ29zdCA+IG1heENvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQXdhcmVuZXNzID0gYXdhcmVuZXNzTWFwLmdldChgJHt3aWxzb25MZXZlbH18JHthZHZlcnRMZXZlbCAtIDF9YCkgPz8gY3VycmVudEF3YXJlbmVzcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUG9wdWxhcml0eSA9IHBvcHVsYXJpdHlNYXAuZ2V0KGAke3dpbHNvbkxldmVsfXwke2FkdmVydExldmVsIC0gMX1gKSA/PyBjdXJyZW50UG9wdWxhcml0eTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkdmVydGlzaW5nTXVsdGlwbGllciA9ICgxICsgQ29ycFVwZ3JhZGVzRGF0YVtVcGdyYWRlTmFtZS5XSUxTT05fQU5BTFlUSUNTXS5iZW5lZml0ICogd2lsc29uTGV2ZWwpICogcmVzZWFyY2hBZHZlcnRpc2luZ011bHRpcGxpZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXdhcmVuZXNzID0gKHByZXZpb3VzQXdhcmVuZXNzICsgMyAqIGFkdmVydGlzaW5nTXVsdGlwbGllcikgKiAoMS4wMDUgKiBhZHZlcnRpc2luZ011bHRpcGxpZXIpO1xyXG4gICAgICAgICAgICAgICAgLy8gSGFyZC1jb2RlZCB2YWx1ZSBvZiBnZXRSYW5kb21JbnQoMSwgMykuIFdlIGRvbid0IHdhbnQgUk5HIGhlcmUuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcG9wdWxhcml0eSA9IChwcmV2aW91c1BvcHVsYXJpdHkgKyBhZHZlcnRpc2luZ011bHRpcGxpZXIpICogKCgxICsgZ2V0UmFuZG9tSW50KDEsIDMpIC8gMjAwKSAqIGFkdmVydGlzaW5nTXVsdGlwbGllcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9wdWxhcml0eSA9IChwcmV2aW91c1BvcHVsYXJpdHkgKyBhZHZlcnRpc2luZ011bHRpcGxpZXIpICogKCgxICsgMiAvIDIwMCkgKiBhZHZlcnRpc2luZ011bHRpcGxpZXIpO1xyXG4gICAgICAgICAgICAgICAgYXdhcmVuZXNzID0gTWF0aC5taW4oYXdhcmVuZXNzLCBOdW1iZXIuTUFYX1ZBTFVFKTtcclxuICAgICAgICAgICAgICAgIHBvcHVsYXJpdHkgPSBNYXRoLm1pbihwb3B1bGFyaXR5LCBOdW1iZXIuTUFYX1ZBTFVFKTtcclxuICAgICAgICAgICAgICAgIGF3YXJlbmVzc01hcC5zZXQoYCR7d2lsc29uTGV2ZWx9fCR7YWR2ZXJ0TGV2ZWx9YCwgYXdhcmVuZXNzKTtcclxuICAgICAgICAgICAgICAgIHBvcHVsYXJpdHlNYXAuc2V0KGAke3dpbHNvbkxldmVsfXwke2FkdmVydExldmVsfWAsIHBvcHVsYXJpdHkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW2FkdmVydGlzaW5nRmFjdG9yXSA9IGdldEFkdmVydGlzaW5nRmFjdG9ycyhhd2FyZW5lc3MsIHBvcHVsYXJpdHksIGluZHVzdHJ5RGF0YS5hZHZlcnRpc2luZ0ZhY3RvciEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUVudHJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbHNvbkxldmVsOiB3aWxzb25MZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICBhZHZlcnRMZXZlbDogYWR2ZXJ0TGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDb3N0OiB0b3RhbENvc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhcml0eTogcG9wdWxhcml0eSxcclxuICAgICAgICAgICAgICAgICAgICBhd2FyZW5lc3M6IGF3YXJlbmVzcyxcclxuICAgICAgICAgICAgICAgICAgICByYXRpbzogKHBvcHVsYXJpdHkgLyBhd2FyZW5lc3MpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkdmVydGlzaW5nRmFjdG9yOiBhZHZlcnRpc2luZ0ZhY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBjb3N0UGVyQWR2ZXJ0aXNpbmdGYWN0b3I6IHRvdGFsQ29zdCAvIGFkdmVydGlzaW5nRmFjdG9yXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHByaW9yaXR5UXVldWUuc2l6ZSgpIDwgZGVmYXVsdExlbmd0aE9mQmVuY2htYXJrRGF0YUFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlRdWV1ZS5wdXNoKGRhdGFFbnRyeSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBhcmF0b3IoZGF0YUVudHJ5LCBwcmlvcml0eVF1ZXVlLmZyb250KCkpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5UXVldWUucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlRdWV1ZS5wdXNoKGRhdGFFbnRyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nZ2VyLnRpbWVFbmQoXCJXaWxzb25BbmRBZHZlcnQgYmVuY2htYXJrXCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGE6IFdpbHNvbkFkdmVydEJlbmNobWFya0RhdGFbXSA9IHByaW9yaXR5UXVldWUudG9BcnJheSgpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgbG9nZ2VyLmxvZyhcclxuICAgICAgICAgICAgICAgIGB7d2lsc29uOiR7ZGF0YS53aWxzb25MZXZlbH0sIGFkdmVydDoke2RhdGEuYWR2ZXJ0TGV2ZWx9LCBgICtcclxuICAgICAgICAgICAgICAgIGB0b3RhbENvc3Q6JHtmb3JtYXROdW1iZXIoZGF0YS50b3RhbENvc3QpfSwgYCArXHJcbiAgICAgICAgICAgICAgICBgYWR2ZXJ0aXNpbmdGYWN0b3I6JHtmb3JtYXROdW1iZXIoZGF0YS5hZHZlcnRpc2luZ0ZhY3Rvcil9LCBgICtcclxuICAgICAgICAgICAgICAgIGBwb3B1bGFyaXR5OiR7Zm9ybWF0TnVtYmVyKGRhdGEucG9wdWxhcml0eSl9LCBgICtcclxuICAgICAgICAgICAgICAgIGBhd2FyZW5lc3M6JHtmb3JtYXROdW1iZXIoZGF0YS5hd2FyZW5lc3MpfSwgYCArXHJcbiAgICAgICAgICAgICAgICBgcmF0aW86JHtmb3JtYXROdW1iZXIoZGF0YS5yYXRpbyl9LCBgICtcclxuICAgICAgICAgICAgICAgIGBjb3N0UGVyQWR2ZXJ0aXNpbmdGYWN0b3I6JHtmb3JtYXROdW1iZXIoZGF0YS5jb3N0UGVyQWR2ZXJ0aXNpbmdGYWN0b3IpfX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG9wdGltaXplT2ZmaWNlKFxyXG4gICAgICAgIGRpdmlzaW9uOiBEaXZpc2lvbixcclxuICAgICAgICBpbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGEsXHJcbiAgICAgICAgb3BlcmF0aW9uc0pvYjoge1xyXG4gICAgICAgICAgICBtaW46IG51bWJlcjtcclxuICAgICAgICAgICAgbWF4OiBudW1iZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmdpbmVlckpvYjoge1xyXG4gICAgICAgICAgICBtaW46IG51bWJlcjtcclxuICAgICAgICAgICAgbWF4OiBudW1iZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYW5hZ2VtZW50Sm9iOiB7XHJcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xyXG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJuZEVtcGxveWVlOiBudW1iZXIsXHJcbiAgICAgICAgbm9uUm5ERW1wbG95ZWVzOiBudW1iZXIsXHJcbiAgICAgICAgaXRlbTogTWF0ZXJpYWwgfCBQcm9kdWN0LFxyXG4gICAgICAgIHVzZUN1cnJlbnRJdGVtRGF0YTogYm9vbGVhbixcclxuICAgICAgICBjdXN0b21EYXRhOiBPZmZpY2VCZW5jaG1hcmtDdXN0b21EYXRhLFxyXG4gICAgICAgIHNvcnRUeXBlOiBPZmZpY2VCZW5jaG1hcmtTb3J0VHlwZSxcclxuICAgICAgICBjb21wYXJhdG9yQ3VzdG9tRGF0YTogQ29tcGFyYXRvckN1c3RvbURhdGEsXHJcbiAgICAgICAgZW5hYmxlTG9nZ2luZyA9IGZhbHNlLFxyXG4gICAgICAgIGVtcGxveWVlSm9ic1JlcXVpcmVtZW50PzogRW1wbG95ZWVKb2JSZXF1aXJlbWVudFxyXG4gICAgKTogUHJvbWlzZTx7IHN0ZXA6IG51bWJlcjsgZGF0YTogT2ZmaWNlQmVuY2htYXJrRGF0YVtdOyB9PiB7XHJcbiAgICAgICAgY29uc3Qgc2FsZXNCb3RVcGdyYWRlQmVuZWZpdCA9IGdldFVwZ3JhZGVCZW5lZml0KFxyXG4gICAgICAgICAgICBVcGdyYWRlTmFtZS5BQkNfU0FMRVNfQk9UUyxcclxuICAgICAgICAgICAgY3VzdG9tRGF0YS5jb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHNbVXBncmFkZU5hbWUuQUJDX1NBTEVTX0JPVFNdXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCByZXNlYXJjaFNhbGVzTXVsdGlwbGllciA9IGdldFJlc2VhcmNoU2FsZXNNdWx0aXBsaWVyKGN1c3RvbURhdGEuZGl2aXNpb25SZXNlYXJjaGVzKTtcclxuXHJcbiAgICAgICAgbGV0IHBlcmZvcm1hbmNlTW9kaWZpZXIgPSBkZWZhdWx0UGVyZm9ybWFuY2VNb2RpZmllckZvck9mZmljZUJlbmNobWFyaztcclxuICAgICAgICBpZiAoY3VzdG9tRGF0YS5wZXJmb3JtYW5jZU1vZGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlTW9kaWZpZXIgPSBjdXN0b21EYXRhLnBlcmZvcm1hbmNlTW9kaWZpZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbnNTdGVwID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKG9wZXJhdGlvbnNKb2IubWF4IC0gb3BlcmF0aW9uc0pvYi5taW4pIC8gcGVyZm9ybWFuY2VNb2RpZmllciksXHJcbiAgICAgICAgICAgIG1pblN0ZXBGb3JPZmZpY2VCZW5jaG1hcmtcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGVuZ2luZWVyU3RlcCA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKChlbmdpbmVlckpvYi5tYXggLSBlbmdpbmVlckpvYi5taW4pIC8gcGVyZm9ybWFuY2VNb2RpZmllciksXHJcbiAgICAgICAgICAgIG1pblN0ZXBGb3JPZmZpY2VCZW5jaG1hcmtcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG1hbmFnZW1lbnRTdGVwID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKG1hbmFnZW1lbnRKb2IubWF4IC0gbWFuYWdlbWVudEpvYi5taW4pIC8gcGVyZm9ybWFuY2VNb2RpZmllciksXHJcbiAgICAgICAgICAgIG1pblN0ZXBGb3JPZmZpY2VCZW5jaG1hcmtcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG1heFN0ZXAgPSBNYXRoLm1heChcclxuICAgICAgICAgICAgb3BlcmF0aW9uc1N0ZXAsXHJcbiAgICAgICAgICAgIGVuZ2luZWVyU3RlcCxcclxuICAgICAgICAgICAgbWFuYWdlbWVudFN0ZXAsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29tcGFyYXRvciA9IGdldENvbXBhcmF0b3IoQmVuY2htYXJrVHlwZS5PRkZJQ0UsIHNvcnRUeXBlLCBjb21wYXJhdG9yQ3VzdG9tRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHlRdWV1ZSA9IG5ldyBQcmlvcml0eVF1ZXVlKGNvbXBhcmF0b3IpO1xyXG4gICAgICAgIC8vIFdlIHVzZSBtYXhTdGVwIGZvciBhbGwgbG9vcHMgaW5zdGVhZCBvZiBzcGVjaWZpYyBzdGVwIGZvciBlYWNoIGxvb3AgdG8gbWF4aW1pemUgcGVyZm9ybWFuY2UuIFRoZSByZXN1bHQgaXNcclxuICAgICAgICAvLyBzdGlsbCBnb29kIGVub3VnaC5cclxuICAgICAgICBmb3IgKGxldCBvcGVyYXRpb25zID0gb3BlcmF0aW9uc0pvYi5taW47IG9wZXJhdGlvbnMgPD0gb3BlcmF0aW9uc0pvYi5tYXg7IG9wZXJhdGlvbnMgKz0gbWF4U3RlcCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbmdpbmVlciA9IGVuZ2luZWVySm9iLm1pbjsgZW5naW5lZXIgPD0gZW5naW5lZXJKb2IubWF4OyBlbmdpbmVlciArPSBtYXhTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtYW5hZ2VtZW50ID0gbWFuYWdlbWVudEpvYi5taW47IG1hbmFnZW1lbnQgPD0gbWFuYWdlbWVudEpvYi5tYXg7IG1hbmFnZW1lbnQgKz0gbWF4U3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRpb25zICsgZW5naW5lZXIgPT09IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgb3BlcmF0aW9ucyArIGVuZ2luZWVyICsgbWFuYWdlbWVudCA+PSBub25SbkRFbXBsb3llZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlZmZlY3RpdmVFbmdpbmVlciA9IGVuZ2luZWVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidXNpbmVzcyA9IG5vblJuREVtcGxveWVlcyAtIChvcGVyYXRpb25zICsgZW5naW5lZXIgKyBtYW5hZ2VtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW1wbG95ZWVKb2JzUmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3VycmVudGx5LCB3ZSBvbmx5IHNldCBlbXBsb3llZUpvYnNSZXF1aXJlbWVudCB3aGVuIHdlIGZpbmQgb3B0aW1hbCBzZXR1cCBmb3Igc3VwcG9ydCBkaXZpc2lvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIHRoaXMgY2FzZSwgZW1wbG95ZWVKb2JzUmVxdWlyZW1lbnQuYnVzaW5lc3MgaXMgYWx3YXlzIDAuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbXBsb3llZUpvYnNSZXF1aXJlbWVudC5idXNpbmVzcyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHZhbGlkIG9mIGVtcGxveWVlSm9ic1JlcXVpcmVtZW50LmJ1c2luZXNzOiAke2VtcGxveWVlSm9ic1JlcXVpcmVtZW50LmJ1c2luZXNzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiVHJhbnNmZXJcIiBidXNpbmVzcyB0byBlbmdpbmVlci4gRW5naW5lZXIgaXMgaW1wb3J0YW50IGZvciBxdWFsaXR5IG9mIG91dHB1dCBtYXRlcmlhbHMgb2ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3VwcG9ydCBkaXZpc2lvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZUVuZ2luZWVyICs9IGJ1c2luZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFFbnRyeSA9IGF3YWl0IGNhbGN1bGF0ZU9mZmljZUJlbmNobWFya0RhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmR1c3RyeURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUN1cnJlbnRJdGVtRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlRW5naW5lZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBybmRFbXBsb3llZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FsZXNCb3RVcGdyYWRlQmVuZWZpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZWFyY2hTYWxlc011bHRpcGxpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmdcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eVF1ZXVlLnNpemUoKSA8IGRlZmF1bHRMZW5ndGhPZkJlbmNobWFya0RhdGFBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVF1ZXVlLnB1c2goZGF0YUVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBhcmF0b3IoZGF0YUVudHJ5LCBwcmlvcml0eVF1ZXVlLmZyb250KCkpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVF1ZXVlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVF1ZXVlLnB1c2goZGF0YUVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RlcDogbWF4U3RlcCxcclxuICAgICAgICAgICAgZGF0YTogcHJpb3JpdHlRdWV1ZS50b0FycmF5KClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb21saW5rLmV4cG9zZShuZXcgQ29ycG9yYXRpb25PcHRpbWl6ZXIoKSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICJBQUNBLFlBQVksYUFBYTtBQUN6QixTQUFTLG1DQUFtQyxrQkFBa0IsV0FBVyxjQUFjO0FBQ3ZGO0FBQUEsRUFDSTtBQUFBLEVB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
