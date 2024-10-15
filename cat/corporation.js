import {
  NetscriptExtension,
  parseAutoCompleteDataFromDefaultConfig
} from "src/cat/libs/NetscriptExtension";
import {
  CityName,
  CorpState,
  EmployeePosition,
  getMaxAffordableAdVertLevel,
  getMaxAffordableOfficeSize,
  getMaxAffordableUpgradeLevel,
  getMaxAffordableWarehouseLevel,
  IndustryType,
  MaterialName,
  ResearchName,
  UnlockName,
  UpgradeName
} from "src/cat/corporationFormulas";
import {
  assignJobs,
  buyAdvert,
  buyBoostMaterials,
  buyTeaAndThrowParty,
  buyUnlock,
  buyUpgrade,
  cities,
  clearPurchaseOrders,
  createDivision,
  createDummyDivisions,
  developNewProduct,
  DivisionName,
  exportString,
  findOptimalAmountOfBoostMaterials,
  generateMaterialsOrders,
  generateOfficeSetups,
  getDivisionResearches,
  getProductIdArray,
  getProductMarketPrice,
  getProfit,
  hasDivision,
  Logger,
  researchPrioritiesForProductDivision,
  researchPrioritiesForSupportDivision,
  sampleProductName,
  stockMaterials,
  upgradeOffices,
  upgradeWarehouse,
  waitForNumberOfCycles,
  waitForOffer,
  waitForNextTimeStateHappens,
  waitUntilHavingEnoughResearchPoints,
  generateOfficeSetupsForEarlyRounds
} from "src/cat/corporationUtils";
import { optimizeOffice } from "src/cat/corporationOptimizerTools";
import {
  CorporationOptimizer,
  defaultPerformanceModifierForOfficeBenchmark,
  precalculatedEmployeeRatioForProductDivisionRound3,
  precalculatedEmployeeRatioForProductDivisionRound4,
  precalculatedEmployeeRatioForProductDivisionRound5_1,
  precalculatedEmployeeRatioForProductDivisionRound5_2,
  precalculatedEmployeeRatioForProfitSetupOfRound3,
  precalculatedEmployeeRatioForProfitSetupOfRound4,
  precalculatedEmployeeRatioForSupportDivisions
} from "src/cat/corporationOptimizer";
import * as testingTools from "src/cat/corporationTestingTools";
import { corporationEventLogger } from "src/cat/corporationEventLogger";
import { exposeGameInternalObjects } from "src/cat/exploits";
function autocomplete(data, flags) {
  return parseAutoCompleteDataFromDefaultConfig(data, defaultConfig);
}
const PrecalculatedRound1Option = {
  // 1498 - 61.344e9 - 504.8e9 - 443.456e9 - 4.89m/s - 17.604b/h
  OPTION1: {
    agricultureOfficeSize: 3,
    waitForAgricultureRP: 55,
    boostMaterialsRatio: 0.89
    // boostMaterialsRatio: 0.88 // Smart Supply - Advert 1
  },
  // 1649 - 51.46e9 - 557.1e9 - 505.64e9 - 5.381e6/s - 19.371/h
  OPTION2: {
    agricultureOfficeSize: 4,
    waitForAgricultureRP: 55,
    boostMaterialsRatio: 0.86
    // boostMaterialsRatio: 0.84 // Smart Supply
  },
  // 1588 - 42.704e9 - 536.8e9 - 494.096e9 - 5.176m/s - 18.633b/h
  OPTION3: {
    agricultureOfficeSize: 5,
    waitForAgricultureRP: 55,
    boostMaterialsRatio: 0.84
  },
  // 1441 - 34.13e9 - 487.5e9 - 453.37e9 - 4.694m/s - 16.898b/h
  OPTION4: {
    agricultureOfficeSize: 6,
    waitForAgricultureRP: 55,
    boostMaterialsRatio: 0.815
  }
};
const PrecalculatedRound2Option = {
  // 15.266e12 17282 804.175
  OPTION1: {
    agricultureOfficeSize: 8,
    // 3-1-1-3
    increaseBusiness: false,
    waitForAgricultureRP: 903,
    waitForChemicalRP: 516,
    agricultureBoostMaterialsRatio: 0.75
  },
  // 14.57e12 16485 815.188
  OPTION2: {
    agricultureOfficeSize: 8,
    increaseBusiness: true,
    waitForAgricultureRP: 703,
    waitForChemicalRP: 393,
    agricultureBoostMaterialsRatio: 0.76
  },
  // 14.474e12
  OPTION3: {
    agricultureOfficeSize: 8,
    increaseBusiness: true,
    waitForAgricultureRP: 653,
    waitForChemicalRP: 362,
    agricultureBoostMaterialsRatio: 0.755
  },
  // 13.994e12
  OPTION4: {
    agricultureOfficeSize: 8,
    increaseBusiness: true,
    waitForAgricultureRP: 602,
    waitForChemicalRP: 331,
    agricultureBoostMaterialsRatio: 0.74
  },
  // 13.742e12
  OPTION5: {
    agricultureOfficeSize: 8,
    // 2-1-3-2
    increaseBusiness: true,
    waitForAgricultureRP: 602,
    waitForChemicalRP: 331,
    agricultureBoostMaterialsRatio: 0.77
  },
  // 13.425e12
  OPTION6: {
    agricultureOfficeSize: 8,
    increaseBusiness: true,
    waitForAgricultureRP: 551,
    waitForChemicalRP: 300,
    agricultureBoostMaterialsRatio: 0.71
  },
  // 13.7e12
  OPTION7: {
    agricultureOfficeSize: 8,
    // 2-1-3-2
    increaseBusiness: true,
    waitForAgricultureRP: 551,
    waitForChemicalRP: 300,
    agricultureBoostMaterialsRatio: 0.77
  },
  // 13.6e12
  OPTION8: {
    agricultureOfficeSize: 8,
    // 2-1-3-2
    increaseBusiness: true,
    waitForAgricultureRP: 500,
    waitForChemicalRP: 269,
    agricultureBoostMaterialsRatio: 0.77
  },
  // 13e12
  OPTION9: {
    agricultureOfficeSize: 8,
    // 2-1-3-2
    increaseBusiness: true,
    waitForAgricultureRP: 450,
    waitForChemicalRP: 238,
    agricultureBoostMaterialsRatio: 0.73
  },
  // 10.884e12
  OPTION10: {
    agricultureOfficeSize: 8,
    // 2-1-3-2
    increaseBusiness: true,
    waitForAgricultureRP: 302,
    waitForChemicalRP: 148,
    agricultureBoostMaterialsRatio: 0.61
  }
};
const PrecalculatedRound3Option = {
  OPTION1: {}
};
const defaultBudgetRatioForSupportDivision = {
  warehouse: 0.1,
  office: 0.9
};
const defaultBudgetRatioForProductDivision = {
  rawProduction: 1 / 23,
  wilsonAdvert: 4 / 23,
  office: 8 / 23,
  employeeStatUpgrades: 8 / 23,
  salesBot: 1 / 23,
  projectInsight: 1 / 23
};
const budgetRatioForProductDivisionWithoutAdvert = {
  rawProduction: 1 / 19,
  wilsonAdvert: 0,
  office: 8 / 19,
  employeeStatUpgrades: 8 / 19,
  salesBot: 1 / 19,
  projectInsight: 1 / 19
};
const maxRerunWhenOptimizingOfficeForProductDivision = 0;
const usePrecalculatedEmployeeRatioForSupportDivisions = true;
const usePrecalculatedEmployeeRatioForProfitSetup = true;
const usePrecalculatedEmployeeRatioForProductDivision = true;
const maxNumberOfProductsInRound3 = 1;
const maxNumberOfProductsInRound4 = 2;
const thresholdOfFocusingOnAdvert = 1e18;
let ns;
let nsx;
let config;
let enableTestingTools = false;
let mainProductDevelopmentCity;
let supportProductDevelopmentCities;
let agricultureIndustryData;
let chemicalIndustryData;
let tobaccoIndustryData;
let budgetRatioForProductDivision = defaultBudgetRatioForProductDivision;
const defaultConfig = [
  ["benchmark", false],
  ["auto", false],
  ["selfFund", false],
  ["round1", false],
  ["round2", false],
  ["round3", false],
  ["improveAllDivisions", false],
  ["test", false],
  ["help", false]
];
function init(nsContext) {
  ns = nsContext;
  nsx = new NetscriptExtension(ns);
  mainProductDevelopmentCity = ns.enums.CityName.Sector12;
  supportProductDevelopmentCities = Object.values(ns.enums.CityName).filter((cityName) => cityName !== mainProductDevelopmentCity);
}
async function round1(option = PrecalculatedRound1Option.OPTION2) {
  ns.print(`Use: ${JSON.stringify(option)}`);
  await createDivision(ns, DivisionName.AGRICULTURE, option.agricultureOfficeSize, 1);
  for (const city of cities) {
    ns.corporation.sellMaterial(DivisionName.AGRICULTURE, city, MaterialName.PLANTS, "MAX", "MP");
    ns.corporation.sellMaterial(DivisionName.AGRICULTURE, city, MaterialName.FOOD, "MAX", "MP");
  }
  if (enableTestingTools && config.auto === false) {
    testingTools.setEnergyAndMorale(DivisionName.AGRICULTURE, 100, 100);
    testingTools.setResearchPoints(DivisionName.AGRICULTURE, option.waitForAgricultureRP);
  }
  await buyTeaAndThrowParty(ns, DivisionName.AGRICULTURE);
  buyAdvert(ns, DivisionName.AGRICULTURE, 2);
  const dataArray = new CorporationOptimizer().optimizeStorageAndFactory(
    agricultureIndustryData,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_STORAGE),
    // Assume that all warehouses are at the same level
    ns.corporation.getWarehouse(DivisionName.AGRICULTURE, CityName.Sector12).level,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_FACTORIES),
    getDivisionResearches(ns, DivisionName.AGRICULTURE),
    ns.corporation.getCorporation().funds,
    false
  );
  if (dataArray.length === 0) {
    throw new Error("Cannot find optimal data");
  }
  const optimalData = dataArray[dataArray.length - 1];
  buyUpgrade(ns, UpgradeName.SMART_STORAGE, optimalData.smartStorageLevel);
  buyUpgrade(ns, UpgradeName.SMART_FACTORIES, optimalData.smartFactoriesLevel);
  for (const city of cities) {
    upgradeWarehouse(ns, DivisionName.AGRICULTURE, city, optimalData.warehouseLevel);
  }
  await waitUntilHavingEnoughResearchPoints(
    ns,
    [
      {
        divisionName: DivisionName.AGRICULTURE,
        researchPoint: option.waitForAgricultureRP
      }
    ]
  );
  assignJobs(
    ns,
    DivisionName.AGRICULTURE,
    generateOfficeSetupsForEarlyRounds(
      option.agricultureOfficeSize,
      false
    )
  );
  const optimalAmountOfBoostMaterials = await findOptimalAmountOfBoostMaterials(
    ns,
    DivisionName.AGRICULTURE,
    agricultureIndustryData,
    CityName.Sector12,
    true,
    option.boostMaterialsRatio
  );
  await stockMaterials(
    ns,
    DivisionName.AGRICULTURE,
    generateMaterialsOrders(
      cities,
      [
        { name: MaterialName.AI_CORES, count: optimalAmountOfBoostMaterials[0] },
        { name: MaterialName.HARDWARE, count: optimalAmountOfBoostMaterials[1] },
        { name: MaterialName.REAL_ESTATE, count: optimalAmountOfBoostMaterials[2] },
        { name: MaterialName.ROBOTS, count: optimalAmountOfBoostMaterials[3] }
      ]
    )
  );
  if (config.auto === true) {
    await waitForOffer(ns, 10, 10, 49e10);
    ns.print(`Round 1: Accept offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}`);
    corporationEventLogger.generateOfferAcceptanceEvent(ns);
    ns.corporation.acceptInvestmentOffer();
    await round2();
  }
}
async function round2(option = PrecalculatedRound2Option.OPTION2) {
  ns.print(`Use: ${JSON.stringify(option)}`);
  if (enableTestingTools && config.auto === false) {
    resetStatistics();
    testingTools.setFunds(49e10);
  }
  buyUnlock(ns, UnlockName.EXPORT);
  ns.print("Upgrade Agriculture division");
  upgradeOffices(
    ns,
    DivisionName.AGRICULTURE,
    generateOfficeSetups(
      cities,
      option.agricultureOfficeSize,
      [
        { name: EmployeePosition.RESEARCH_DEVELOPMENT, count: option.agricultureOfficeSize }
      ]
    )
  );
  await createDivision(ns, DivisionName.CHEMICAL, 3, 2);
  for (const city of cities) {
    ns.corporation.cancelExportMaterial(DivisionName.AGRICULTURE, city, DivisionName.CHEMICAL, city, "Plants");
    ns.corporation.exportMaterial(DivisionName.AGRICULTURE, city, DivisionName.CHEMICAL, city, "Plants", exportString);
    ns.corporation.cancelExportMaterial(DivisionName.CHEMICAL, city, DivisionName.AGRICULTURE, city, "Chemicals");
    ns.corporation.exportMaterial(DivisionName.CHEMICAL, city, DivisionName.AGRICULTURE, city, "Chemicals", exportString);
    ns.corporation.sellMaterial(DivisionName.CHEMICAL, city, MaterialName.CHEMICALS, "MAX", "MP");
  }
  testingTools.setResearchPoints(DivisionName.AGRICULTURE, 55);
  if (enableTestingTools && config.auto === false) {
    testingTools.setEnergyAndMorale(DivisionName.AGRICULTURE, 100, 100);
    testingTools.setEnergyAndMorale(DivisionName.CHEMICAL, 100, 100);
    testingTools.setResearchPoints(DivisionName.AGRICULTURE, option.waitForAgricultureRP);
    testingTools.setResearchPoints(DivisionName.CHEMICAL, option.waitForChemicalRP);
  }
  await buyTeaAndThrowParty(ns, DivisionName.AGRICULTURE);
  await buyTeaAndThrowParty(ns, DivisionName.CHEMICAL);
  buyAdvert(ns, DivisionName.AGRICULTURE, 8);
  const dataArray = new CorporationOptimizer().optimizeStorageAndFactory(
    agricultureIndustryData,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_STORAGE),
    // Assume that all warehouses are at the same level
    ns.corporation.getWarehouse(DivisionName.AGRICULTURE, CityName.Sector12).level,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_FACTORIES),
    getDivisionResearches(ns, DivisionName.AGRICULTURE),
    ns.corporation.getCorporation().funds,
    false
  );
  if (dataArray.length === 0) {
    throw new Error("Cannot find optimal data");
  }
  const optimalData = dataArray[dataArray.length - 1];
  buyUpgrade(ns, UpgradeName.SMART_STORAGE, optimalData.smartStorageLevel);
  buyUpgrade(ns, UpgradeName.SMART_FACTORIES, optimalData.smartFactoriesLevel);
  for (const city of cities) {
    upgradeWarehouse(ns, DivisionName.AGRICULTURE, city, optimalData.warehouseLevel);
  }
  await waitUntilHavingEnoughResearchPoints(
    ns,
    [
      {
        divisionName: DivisionName.AGRICULTURE,
        researchPoint: option.waitForAgricultureRP
      },
      {
        divisionName: DivisionName.CHEMICAL,
        researchPoint: option.waitForChemicalRP
      }
    ]
  );
  buyAdvert(
    ns,
    DivisionName.AGRICULTURE,
    getMaxAffordableAdVertLevel(
      ns.corporation.getHireAdVertCount(DivisionName.AGRICULTURE),
      ns.corporation.getCorporation().funds
    )
  );
  assignJobs(
    ns,
    DivisionName.AGRICULTURE,
    generateOfficeSetupsForEarlyRounds(
      option.agricultureOfficeSize,
      option.increaseBusiness
    )
  );
  assignJobs(
    ns,
    DivisionName.CHEMICAL,
    generateOfficeSetupsForEarlyRounds(3)
  );
  const optimalAmountOfBoostMaterialsForAgriculture = await findOptimalAmountOfBoostMaterials(
    ns,
    DivisionName.AGRICULTURE,
    agricultureIndustryData,
    CityName.Sector12,
    true,
    option.agricultureBoostMaterialsRatio
  );
  const optimalAmountOfBoostMaterialsForChemical = await findOptimalAmountOfBoostMaterials(
    ns,
    DivisionName.CHEMICAL,
    chemicalIndustryData,
    CityName.Sector12,
    true,
    0.95
  );
  await Promise.allSettled([
    stockMaterials(
      ns,
      DivisionName.AGRICULTURE,
      generateMaterialsOrders(
        cities,
        [
          { name: MaterialName.AI_CORES, count: optimalAmountOfBoostMaterialsForAgriculture[0] },
          { name: MaterialName.HARDWARE, count: optimalAmountOfBoostMaterialsForAgriculture[1] },
          { name: MaterialName.REAL_ESTATE, count: optimalAmountOfBoostMaterialsForAgriculture[2] },
          { name: MaterialName.ROBOTS, count: optimalAmountOfBoostMaterialsForAgriculture[3] }
        ]
      )
    ),
    stockMaterials(
      ns,
      DivisionName.CHEMICAL,
      generateMaterialsOrders(
        cities,
        [
          { name: MaterialName.AI_CORES, count: optimalAmountOfBoostMaterialsForChemical[0] },
          { name: MaterialName.HARDWARE, count: optimalAmountOfBoostMaterialsForChemical[1] },
          { name: MaterialName.REAL_ESTATE, count: optimalAmountOfBoostMaterialsForChemical[2] },
          { name: MaterialName.ROBOTS, count: optimalAmountOfBoostMaterialsForChemical[3] }
        ]
      )
    )
  ]);
  if (config.auto === true) {
    await waitForOffer(ns, 15, 10, 11e12);
    ns.print(`Round 2: Accept offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}`);
    corporationEventLogger.generateOfferAcceptanceEvent(ns);
    ns.corporation.acceptInvestmentOffer();
    await round3();
  }
}
async function round3(option = PrecalculatedRound3Option.OPTION1) {
  if (hasDivision(ns, DivisionName.TOBACCO)) {
    ns.spawn(ns.getScriptName(), { spawnDelay: 500 }, "--improveAllDivisions");
    return;
  }
  ns.print(`Use: ${JSON.stringify(option)}`);
  if (enableTestingTools && config.auto === false) {
    resetStatistics();
    testingTools.setFunds(11e12);
  }
  buyUnlock(ns, UnlockName.MARKET_RESEARCH_DEMAND);
  buyUnlock(ns, UnlockName.MARKET_DATA_COMPETITION);
  if (ns.corporation.getCorporation().divisions.length === 20) {
    throw new Error("You need to sell 1 division");
  }
  await createDivision(ns, DivisionName.TOBACCO, 3, 1);
  try {
    createDummyDivisions(ns, 20 - ns.corporation.getCorporation().divisions.length);
  } catch (reason) {
    ns.print(`Failed to create 20 dummy divisions: ${reason}`);
  }
  for (const city of cities) {
    ns.corporation.cancelExportMaterial(DivisionName.AGRICULTURE, city, DivisionName.TOBACCO, city, "Plants");
    ns.corporation.exportMaterial(DivisionName.AGRICULTURE, city, DivisionName.TOBACCO, city, "Plants", exportString);
    ns.corporation.cancelExportMaterial(DivisionName.AGRICULTURE, city, DivisionName.CHEMICAL, city, "Plants");
    ns.corporation.exportMaterial(DivisionName.AGRICULTURE, city, DivisionName.CHEMICAL, city, "Plants", exportString);
  }
  const agricultureDivision = ns.corporation.getDivision(DivisionName.AGRICULTURE);
  const chemicalDivision = ns.corporation.getDivision(DivisionName.CHEMICAL);
  const tobaccoDivision = ns.corporation.getDivision(DivisionName.TOBACCO);
  const agricultureDivisionBudget = 15e10;
  const chemicalDivisionBudget = 3e10;
  while (ns.corporation.getDivision(DivisionName.TOBACCO).productionMult === 0) {
    await ns.corporation.nextUpdate();
  }
  await improveProductDivision(
    DivisionName.TOBACCO,
    ns.corporation.getCorporation().funds * 0.99 - agricultureDivisionBudget - chemicalDivisionBudget - 1e9,
    false,
    false,
    false
  );
  developNewProduct(
    ns,
    DivisionName.TOBACCO,
    mainProductDevelopmentCity,
    1e9
  );
  corporationEventLogger.generateNewProductEvent(ns, DivisionName.TOBACCO);
  await improveSupportDivision(
    DivisionName.AGRICULTURE,
    agricultureDivisionBudget,
    defaultBudgetRatioForSupportDivision,
    false,
    false
  );
  await improveSupportDivision(
    DivisionName.CHEMICAL,
    chemicalDivisionBudget,
    defaultBudgetRatioForSupportDivision,
    false,
    false
  );
  await Promise.allSettled([
    buyBoostMaterials(ns, agricultureDivision),
    buyBoostMaterials(ns, chemicalDivision),
    buyBoostMaterials(ns, tobaccoDivision)
  ]);
  ns.spawn(ns.getScriptName(), { spawnDelay: 500 }, "--improveAllDivisions");
}
async function improveAllDivisions() {
  let cycleCount = corporationEventLogger.cycle;
  const pendingImprovingProductDivisions1 = /* @__PURE__ */ new Map();
  const pendingImprovingProductDivisions2 = /* @__PURE__ */ new Map();
  const pendingImprovingSupportDivisions = /* @__PURE__ */ new Map();
  const pendingBuyingBoostMaterialsDivisions = /* @__PURE__ */ new Set();
  const buyBoostMaterialsIfNeeded = (divisionName) => {
    if (!pendingBuyingBoostMaterialsDivisions.has(divisionName)) {
      pendingBuyingBoostMaterialsDivisions.add(divisionName);
      ns.print(`Buying boost materials for division: ${divisionName}`);
      buyBoostMaterials(ns, ns.corporation.getDivision(divisionName)).then(() => {
        ns.print(`Finish buying boost materials for division: ${divisionName}`);
        pendingBuyingBoostMaterialsDivisions.delete(divisionName);
      });
    }
  };
  for (const city of cities) {
    ns.corporation.cancelExportMaterial(DivisionName.AGRICULTURE, city, DivisionName.TOBACCO, city, "Plants");
    ns.corporation.exportMaterial(DivisionName.AGRICULTURE, city, DivisionName.TOBACCO, city, "Plants", exportString);
    ns.corporation.cancelExportMaterial(DivisionName.AGRICULTURE, city, DivisionName.CHEMICAL, city, "Plants");
    ns.corporation.exportMaterial(DivisionName.AGRICULTURE, city, DivisionName.CHEMICAL, city, "Plants", exportString);
  }
  await improveProductDivision(
    DivisionName.TOBACCO,
    ns.corporation.getCorporation().funds * 0.99 - 1e9,
    false,
    false,
    false
  );
  buyBoostMaterialsIfNeeded(DivisionName.TOBACCO);
  let reservedFunds = 0;
  const increaseReservedFunds = (amount) => {
    console.log(`Increase reservedFunds by ${ns.formatNumber(amount)}`);
    reservedFunds += amount;
    console.log(`New reservedFunds: ${ns.formatNumber(reservedFunds)}`);
  };
  const decreaseReservedFunds = (amount) => {
    console.log(`Decrease reservedFunds by ${ns.formatNumber(amount)}`);
    reservedFunds -= amount;
    console.log(`New reservedFunds: ${ns.formatNumber(reservedFunds)}`);
  };
  let preparingToAcceptOffer = false;
  while (true) {
    ++cycleCount;
    const currentRound = ns.corporation.getInvestmentOffer().round;
    const profit = getProfit(ns);
    console.log(
      `cycleCount: ${cycleCount}. Funds: ${ns.formatNumber(ns.corporation.getCorporation().funds)}. Profit: ${ns.formatNumber(profit)}` + (currentRound <= 4 ? `. Offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}` : "")
    );
    await buyResearch();
    if (ns.corporation.getDivision(DivisionName.TOBACCO).awareness !== Number.MAX_VALUE) {
      const currentWilsonLevel = ns.corporation.getUpgradeLevel(UpgradeName.WILSON_ANALYTICS);
      const maxWilsonLevel = getMaxAffordableUpgradeLevel(UpgradeName.WILSON_ANALYTICS, currentWilsonLevel, profit);
      if (maxWilsonLevel > currentWilsonLevel) {
        buyUpgrade(ns, UpgradeName.WILSON_ANALYTICS, maxWilsonLevel);
      }
      if (profit >= thresholdOfFocusingOnAdvert) {
        const currentAdvertLevel = ns.corporation.getHireAdVertCount(DivisionName.TOBACCO);
        const maxAdvertLevel = getMaxAffordableAdVertLevel(
          currentAdvertLevel,
          (ns.corporation.getCorporation().funds - reservedFunds) * 0.6
        );
        if (maxAdvertLevel > currentAdvertLevel) {
          buyAdvert(ns, DivisionName.TOBACCO, maxAdvertLevel);
        }
      }
    }
    const totalFunds = ns.corporation.getCorporation().funds - reservedFunds;
    let availableFunds = totalFunds;
    let maxNumberOfProducts = maxNumberOfProductsInRound3;
    if (currentRound === 4) {
      maxNumberOfProducts = maxNumberOfProductsInRound4;
    }
    if (currentRound === 3 || currentRound === 4) {
      const productIdArray = getProductIdArray(ns, DivisionName.TOBACCO);
      let numberOfDevelopedProducts = 0;
      if (productIdArray.length > 0) {
        numberOfDevelopedProducts = Math.max(...productIdArray) + 1;
      }
      if (numberOfDevelopedProducts >= maxNumberOfProducts) {
        const products = ns.corporation.getDivision(DivisionName.TOBACCO).products;
        const allProductsAreFinished = products.every((productName) => {
          const product = ns.corporation.getProduct(DivisionName.TOBACCO, mainProductDevelopmentCity, productName);
          return product.developmentProgress === 100;
        });
        const getNewestProduct = () => {
          return ns.corporation.getProduct(DivisionName.TOBACCO, mainProductDevelopmentCity, products[products.length - 1]);
        };
        const newestProduct = getNewestProduct();
        if (!preparingToAcceptOffer && newestProduct.developmentProgress > 98 && newestProduct.developmentProgress < 100) {
          preparingToAcceptOffer = true;
        }
        if (allProductsAreFinished) {
          const productDevelopmentBudget = totalFunds * 0.01;
          const newProductName = developNewProduct(
            ns,
            DivisionName.TOBACCO,
            mainProductDevelopmentCity,
            productDevelopmentBudget
          );
          if (newProductName) {
            corporationEventLogger.generateNewProductEvent(ns, DivisionName.TOBACCO);
            availableFunds -= productDevelopmentBudget;
          }
          while (getNewestProduct().effectiveRating === 0) {
            await waitForNumberOfCycles(ns, 1);
            ++cycleCount;
          }
          await switchAllOfficesToProfitSetup(
            tobaccoIndustryData,
            // We must use the latest data of product
            getNewestProduct()
          );
          let expectedOffer = Number.MAX_VALUE;
          if (currentRound === 3) {
            expectedOffer = 1e16;
          } else if (currentRound === 4) {
            expectedOffer = 1e20;
          }
          const currentCycle = corporationEventLogger.cycle;
          await waitForOffer(ns, 10, 5, expectedOffer);
          cycleCount += corporationEventLogger.cycle - currentCycle;
          console.log(
            `Cycle: ${cycleCount}. Accept offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}`
          );
          ns.print(
            `Cycle: ${cycleCount}. Accept offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}; Expected ${expectedOffer}`
          );
          corporationEventLogger.generateOfferAcceptanceEvent(ns);
          ns.corporation.acceptInvestmentOffer();
          preparingToAcceptOffer = false;
          continue;
        }
      }
    }
    if (profit <= 1e40 || availableFunds >= 1e72) {
      let productDevelopmentBudget = totalFunds * 0.01;
      if (availableFunds >= 1e72) {
        productDevelopmentBudget = Math.max(productDevelopmentBudget, 1e72);
      }
      const newProductName = developNewProduct(
        ns,
        DivisionName.TOBACCO,
        mainProductDevelopmentCity,
        productDevelopmentBudget
      );
      if (newProductName) {
        console.log(`Develop ${newProductName}`);
        corporationEventLogger.generateNewProductEvent(ns, DivisionName.TOBACCO);
        availableFunds -= productDevelopmentBudget;
      }
    } else {
      const products = ns.corporation.getDivision(DivisionName.TOBACCO).products;
      const allProductsAreFinished = products.every((productName) => {
        const product = ns.corporation.getProduct(DivisionName.TOBACCO, mainProductDevelopmentCity, productName);
        return product.developmentProgress === 100;
      });
      if (allProductsAreFinished) {
        corporationEventLogger.generateSkipDevelopingNewProductEvent(ns);
      }
    }
    const tobaccoHasRevenue = ns.corporation.getDivision(DivisionName.TOBACCO).lastCycleRevenue > 0;
    const budgetForTobaccoDivision = totalFunds * 0.9;
    if (tobaccoHasRevenue && (cycleCount % 5 === 0 || needToUpgradeDivision(DivisionName.TOBACCO, budgetForTobaccoDivision))) {
      availableFunds -= budgetForTobaccoDivision;
      if (!pendingImprovingProductDivisions1.has(DivisionName.TOBACCO)) {
        const nonOfficesBudget = budgetForTobaccoDivision * (1 - budgetRatioForProductDivision.office);
        increaseReservedFunds(nonOfficesBudget);
        pendingImprovingProductDivisions1.set(
          DivisionName.TOBACCO,
          nonOfficesBudget
        );
        console.log(`Upgrade ${DivisionName.TOBACCO}-1, budget: ${ns.formatNumber(nonOfficesBudget)}`);
        console.time(DivisionName.TOBACCO + "-1");
        improveProductDivision(
          DivisionName.TOBACCO,
          budgetForTobaccoDivision,
          true,
          false,
          false
        ).catch((reason) => {
          console.error(`Error occurred when upgrading ${DivisionName.TOBACCO}`, reason);
        }).finally(() => {
          console.timeEnd(DivisionName.TOBACCO + "-1");
          decreaseReservedFunds(pendingImprovingProductDivisions1.get(DivisionName.TOBACCO) ?? 0);
          pendingImprovingProductDivisions1.delete(DivisionName.TOBACCO);
          buyBoostMaterialsIfNeeded(DivisionName.TOBACCO);
        });
      }
      if (!pendingImprovingProductDivisions2.has(DivisionName.TOBACCO) && !preparingToAcceptOffer) {
        const officesBudget = budgetForTobaccoDivision * budgetRatioForProductDivision.office;
        increaseReservedFunds(officesBudget);
        pendingImprovingProductDivisions2.set(DivisionName.TOBACCO, officesBudget);
        console.log(`Upgrade ${DivisionName.TOBACCO}-2, budget: ${ns.formatNumber(officesBudget)}`);
        console.time(DivisionName.TOBACCO + "-2");
        improveProductDivisionOffices(
          DivisionName.TOBACCO,
          tobaccoIndustryData,
          officesBudget,
          false,
          false
        ).catch((reason) => {
          console.error(`Error occurred when upgrading ${DivisionName.TOBACCO}`, reason);
        }).finally(() => {
          console.timeEnd(DivisionName.TOBACCO + "-2");
          decreaseReservedFunds(pendingImprovingProductDivisions2.get(DivisionName.TOBACCO) ?? 0);
          pendingImprovingProductDivisions2.delete(DivisionName.TOBACCO);
        });
      }
    }
    const budgetForAgricultureDivision = Math.max(
      Math.min(profit * (currentRound <= 4 ? 0.9 : 0.99), totalFunds * 0.09, availableFunds),
      0
    );
    if (tobaccoHasRevenue && (cycleCount % 10 === 0 || needToUpgradeDivision(DivisionName.AGRICULTURE, budgetForAgricultureDivision)) && !pendingImprovingSupportDivisions.has(DivisionName.AGRICULTURE)) {
      availableFunds -= budgetForAgricultureDivision;
      increaseReservedFunds(budgetForAgricultureDivision);
      pendingImprovingSupportDivisions.set(DivisionName.AGRICULTURE, budgetForAgricultureDivision);
      console.log(`Upgrade ${DivisionName.AGRICULTURE}, budget: ${ns.formatNumber(budgetForAgricultureDivision)}`);
      console.time(DivisionName.AGRICULTURE);
      improveSupportDivision(
        DivisionName.AGRICULTURE,
        budgetForAgricultureDivision,
        defaultBudgetRatioForSupportDivision,
        false,
        false
      ).catch((reason) => {
        console.error(`Error occurred when upgrading ${DivisionName.AGRICULTURE}`, reason);
      }).finally(() => {
        console.timeEnd(DivisionName.AGRICULTURE);
        decreaseReservedFunds(pendingImprovingSupportDivisions.get(DivisionName.AGRICULTURE) ?? 0);
        pendingImprovingSupportDivisions.delete(DivisionName.AGRICULTURE);
        buyBoostMaterialsIfNeeded(DivisionName.AGRICULTURE);
      });
    }
    const budgetForChemicalDivision = Math.max(
      Math.min(profit * (currentRound <= 4 ? 0.1 : 0.01), totalFunds * 0.01, availableFunds),
      0
    );
    if (tobaccoHasRevenue && (cycleCount % 15 === 0 || needToUpgradeDivision(DivisionName.CHEMICAL, budgetForChemicalDivision)) && !pendingImprovingSupportDivisions.has(DivisionName.CHEMICAL)) {
      availableFunds -= budgetForChemicalDivision;
      increaseReservedFunds(budgetForChemicalDivision);
      pendingImprovingSupportDivisions.set(DivisionName.CHEMICAL, budgetForChemicalDivision);
      console.log(`Upgrade ${DivisionName.CHEMICAL}, budget: ${ns.formatNumber(budgetForChemicalDivision)}`);
      console.time(DivisionName.CHEMICAL);
      improveSupportDivision(
        DivisionName.CHEMICAL,
        budgetForChemicalDivision,
        defaultBudgetRatioForSupportDivision,
        false,
        false
      ).catch((reason) => {
        console.error(`Error occurred when upgrading ${DivisionName.CHEMICAL}`, reason);
      }).finally(() => {
        console.timeEnd(DivisionName.CHEMICAL);
        decreaseReservedFunds(pendingImprovingSupportDivisions.get(DivisionName.CHEMICAL) ?? 0);
        pendingImprovingSupportDivisions.delete(DivisionName.CHEMICAL);
        buyBoostMaterialsIfNeeded(DivisionName.CHEMICAL);
      });
    }
    const producedPlants = ns.corporation.getMaterial(DivisionName.AGRICULTURE, mainProductDevelopmentCity, MaterialName.PLANTS).productionAmount;
    const consumedPlants = Math.abs(
      ns.corporation.getMaterial(DivisionName.TOBACCO, mainProductDevelopmentCity, MaterialName.PLANTS).productionAmount
    );
    if (consumedPlants > 0 && producedPlants / consumedPlants < 1) {
      console.debug(`plants ratio: ${producedPlants / consumedPlants}`);
    }
    await waitForNextTimeStateHappens(ns, CorpState.START);
  }
}
function needToUpgradeDivision(divisionName, budget) {
  const office = ns.corporation.getOffice(divisionName, CityName.Sector12);
  let expectedUpgradeSize = 30;
  if (ns.corporation.getInvestmentOffer().round <= 4) {
    expectedUpgradeSize = Math.min(office.size / 2, 30);
  }
  const maxOfficeSize = getMaxAffordableOfficeSize(office.size, budget / 6);
  const needToUpgrade = maxOfficeSize >= office.size + expectedUpgradeSize;
  if (needToUpgrade) {
    console.debug(
      `needToUpgrade ${divisionName}, budget: ${ns.formatNumber(budget)}, office.size: ${office.size}, maxOfficeSize: ${maxOfficeSize}}`
    );
  }
  return needToUpgrade;
}
function getBalancingModifierForProfitProgress() {
  if (getProfit(ns) >= 1e35) {
    return {
      profit: 1,
      progress: 2.5
    };
  }
  return {
    profit: 1,
    progress: 5
  };
}
async function switchAllOfficesToProfitSetup(industryData, newestProduct) {
  const mainOffice = ns.corporation.getOffice(DivisionName.TOBACCO, mainProductDevelopmentCity);
  const officeSetup = {
    city: mainProductDevelopmentCity,
    size: mainOffice.numEmployees,
    jobs: {
      Operations: 0,
      Engineer: 0,
      Business: 0,
      Management: 0,
      "Research & Development": 0
    }
  };
  if (usePrecalculatedEmployeeRatioForProfitSetup) {
    const precalculatedEmployeeRatioForProfitSetup = ns.corporation.getInvestmentOffer().round === 3 ? precalculatedEmployeeRatioForProfitSetupOfRound3 : precalculatedEmployeeRatioForProfitSetupOfRound4;
    officeSetup.jobs.Operations = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProfitSetup.operations);
    officeSetup.jobs.Engineer = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProfitSetup.engineer);
    officeSetup.jobs.Business = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProfitSetup.business);
    officeSetup.jobs.Management = officeSetup.size - (officeSetup.jobs.Operations + officeSetup.jobs.Engineer + officeSetup.jobs.Business);
  } else {
    const dataArray = await optimizeOffice(
      nsx,
      ns.corporation.getDivision(DivisionName.TOBACCO),
      industryData,
      mainProductDevelopmentCity,
      mainOffice.numEmployees,
      0,
      newestProduct,
      true,
      "profit",
      getBalancingModifierForProfitProgress(),
      0,
      // Do not rerun
      20,
      // Half of defaultPerformanceModifierForOfficeBenchmark
      false
    );
    const optimalData = dataArray[dataArray.length - 1];
    console.log(`Optimize all offices for "profit"`, optimalData);
    officeSetup.jobs = {
      Operations: optimalData.operations,
      Engineer: optimalData.engineer,
      Business: optimalData.business,
      Management: optimalData.management,
      "Research & Development": 0
    };
  }
  assignJobs(
    ns,
    DivisionName.TOBACCO,
    [officeSetup]
  );
  for (const city of supportProductDevelopmentCities) {
    const office = ns.corporation.getOffice(DivisionName.TOBACCO, city);
    const operations = Math.max(
      Math.floor(office.numEmployees * (officeSetup.jobs.Operations / mainOffice.numEmployees)),
      1
    );
    const engineer = Math.max(
      Math.floor(office.numEmployees * (officeSetup.jobs.Engineer / mainOffice.numEmployees)),
      1
    );
    const business = Math.max(
      Math.floor(office.numEmployees * (officeSetup.jobs.Business / mainOffice.numEmployees)),
      1
    );
    const management = office.numEmployees - (operations + engineer + business);
    assignJobs(
      ns,
      DivisionName.TOBACCO,
      [
        {
          city,
          size: office.numEmployees,
          jobs: {
            Operations: operations,
            Engineer: engineer,
            Business: business,
            Management: management,
            "Research & Development": 0
          }
        }
      ]
    );
  }
}
async function buyResearch() {
  if (ns.corporation.getInvestmentOffer().round <= 3) {
    return;
  }
  const buyResearches = (divisionName) => {
    let researchPriorities;
    if (divisionName === DivisionName.AGRICULTURE || divisionName === DivisionName.CHEMICAL) {
      researchPriorities = researchPrioritiesForSupportDivision;
    } else {
      researchPriorities = researchPrioritiesForProductDivision;
    }
    for (const researchPriority of researchPriorities) {
      if (ns.corporation.getInvestmentOffer().round === 4 && researchPriority.research !== ResearchName.HI_TECH_RND_LABORATORY) {
        break;
      }
      if (ns.corporation.hasResearched(divisionName, researchPriority.research)) {
        continue;
      }
      const researchCost = ns.corporation.getResearchCost(divisionName, researchPriority.research);
      if (ns.corporation.getDivision(divisionName).researchPoints < researchCost * researchPriority.costMultiplier) {
        break;
      }
      ns.corporation.research(divisionName, researchPriority.research);
    }
  };
  buyResearches(DivisionName.AGRICULTURE);
  buyResearches(DivisionName.CHEMICAL);
  buyResearches(DivisionName.TOBACCO);
}
async function improveSupportDivision(divisionName, totalBudget, budgetRatio, dryRun, enableLogging) {
  if (totalBudget < 0) {
    return;
  }
  const logger = new Logger(enableLogging);
  const currentFunds = ns.corporation.getCorporation().funds;
  const warehouseBudget = totalBudget * budgetRatio.warehouse / 6;
  const officeBudget = totalBudget * budgetRatio.office / 6;
  const officeSetups = [];
  for (const city2 of cities) {
    logger.city = city2;
    const currentWarehouseLevel = ns.corporation.getWarehouse(divisionName, city2).level;
    const newWarehouseLevel = getMaxAffordableWarehouseLevel(currentWarehouseLevel, warehouseBudget);
    if (newWarehouseLevel > currentWarehouseLevel && !dryRun) {
      ns.corporation.upgradeWarehouse(divisionName, city2, newWarehouseLevel - currentWarehouseLevel);
    }
    logger.log(
      `Division ${divisionName}: currentWarehouseLevel: ${currentWarehouseLevel}, newWarehouseLevel: ${ns.corporation.getWarehouse(divisionName, city2).level}`
    );
  }
  const city = CityName.Sector12;
  logger.city = city;
  const office = ns.corporation.getOffice(divisionName, city);
  const maxOfficeSize = getMaxAffordableOfficeSize(office.size, officeBudget);
  logger.log(`City: ${city}. currentOfficeSize: ${office.size}, maxOfficeSize: ${maxOfficeSize}`);
  if (maxOfficeSize < 6) {
    throw new Error(`Budget for office is too low. Division: ${divisionName}. Office's budget: ${ns.formatNumber(officeBudget)}`);
  }
  const rndEmployee = Math.min(
    Math.floor(maxOfficeSize * 0.2),
    maxOfficeSize - 3
  );
  const nonRnDEmployees = maxOfficeSize - rndEmployee;
  const officeSetup = {
    city,
    size: maxOfficeSize,
    jobs: {
      Operations: 0,
      Engineer: 0,
      Business: 0,
      Management: 0,
      "Research & Development": rndEmployee
    }
  };
  if (usePrecalculatedEmployeeRatioForSupportDivisions) {
    officeSetup.jobs.Operations = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForSupportDivisions.operations);
    officeSetup.jobs.Business = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForSupportDivisions.business);
    officeSetup.jobs.Management = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForSupportDivisions.management);
    officeSetup.jobs.Engineer = nonRnDEmployees - (officeSetup.jobs.Operations + officeSetup.jobs.Business + officeSetup.jobs.Management);
  } else {
    let item;
    switch (divisionName) {
      case DivisionName.AGRICULTURE:
        item = ns.corporation.getMaterial(divisionName, city, MaterialName.PLANTS);
        break;
      case DivisionName.CHEMICAL:
        item = ns.corporation.getMaterial(divisionName, city, MaterialName.CHEMICALS);
        break;
      default:
        throw new Error(`Invalid division: ${divisionName}`);
    }
    if (nonRnDEmployees <= 3) {
      throw new Error("Invalid R&D ratio");
    }
    const division = ns.corporation.getDivision(divisionName);
    const industryData = ns.corporation.getIndustryData(division.type);
    const dataArray = await optimizeOffice(
      nsx,
      division,
      industryData,
      city,
      nonRnDEmployees,
      rndEmployee,
      item,
      true,
      "rawProduction",
      getBalancingModifierForProfitProgress(),
      0,
      // Do not rerun
      20,
      // Half of defaultPerformanceModifierForOfficeBenchmark
      enableLogging,
      {
        engineer: Math.floor(nonRnDEmployees * 0.625),
        business: 0
      }
    );
    if (dataArray.length === 0) {
      throw new Error(`Cannot calculate optimal office setup. Division: ${divisionName}, nonRnDEmployees: ${nonRnDEmployees}`);
    } else {
      const optimalData = dataArray[dataArray.length - 1];
      officeSetup.jobs = {
        Operations: optimalData.operations,
        Engineer: optimalData.engineer,
        Business: optimalData.business,
        Management: optimalData.management,
        "Research & Development": rndEmployee
      };
    }
    logger.log("Optimal officeSetup:", JSON.stringify(officeSetup));
  }
  for (const city2 of cities) {
    officeSetups.push({
      city: city2,
      size: officeSetup.size,
      jobs: officeSetup.jobs
    });
  }
  logger.city = void 0;
  if (!dryRun) {
    upgradeOffices(ns, divisionName, officeSetups);
  }
  logger.log(`Spent: ${ns.formatNumber(currentFunds - ns.corporation.getCorporation().funds)}`);
}
function improveProductDivisionRawProduction(divisionName, industryData, divisionResearches, budget, dryRun, benchmark, enableLogging) {
  const logger = new Logger(enableLogging);
  const dataArray = benchmark.optimizeStorageAndFactory(
    industryData,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_STORAGE),
    // Assume that all warehouses are at the same level
    ns.corporation.getWarehouse(divisionName, CityName.Sector12).level,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_FACTORIES),
    divisionResearches,
    budget,
    enableLogging
  );
  if (dataArray.length === 0) {
    return;
  }
  const optimalData = dataArray[dataArray.length - 1];
  logger.log(`rawProduction: ${JSON.stringify(optimalData)}`);
  if (!dryRun) {
    buyUpgrade(ns, UpgradeName.SMART_STORAGE, optimalData.smartStorageLevel);
    buyUpgrade(ns, UpgradeName.SMART_FACTORIES, optimalData.smartFactoriesLevel);
    for (const city of cities) {
      const currentWarehouseLevel = ns.corporation.getWarehouse(divisionName, city).level;
      if (optimalData.warehouseLevel > currentWarehouseLevel) {
        ns.corporation.upgradeWarehouse(
          divisionName,
          city,
          optimalData.warehouseLevel - currentWarehouseLevel
        );
      }
    }
  }
}
function improveProductDivisionWilsonAdvert(divisionName, industryData, divisionResearches, budget, dryRun, benchmark, enableLogging) {
  const logger = new Logger(enableLogging);
  const division = ns.corporation.getDivision(divisionName);
  const dataArray = benchmark.optimizeWilsonAndAdvert(
    industryData,
    ns.corporation.getUpgradeLevel(UpgradeName.WILSON_ANALYTICS),
    ns.corporation.getHireAdVertCount(divisionName),
    division.awareness,
    division.popularity,
    divisionResearches,
    budget,
    enableLogging
  );
  if (dataArray.length === 0) {
    return;
  }
  const optimalData = dataArray[dataArray.length - 1];
  logger.log(`wilsonAdvert: ${JSON.stringify(optimalData)}`);
  if (!dryRun) {
    buyUpgrade(ns, UpgradeName.WILSON_ANALYTICS, optimalData.wilsonLevel);
    buyAdvert(ns, divisionName, optimalData.advertLevel);
  }
}
async function improveProductDivisionMainOffice(divisionName, industryData, budget, dryRun, enableLogging) {
  const logger = new Logger(enableLogging);
  const profit = getProfit(ns);
  const division = ns.corporation.getDivision(divisionName);
  const office = ns.corporation.getOffice(divisionName, mainProductDevelopmentCity);
  const maxOfficeSize = getMaxAffordableOfficeSize(office.size, budget);
  if (maxOfficeSize < office.size) {
    return;
  }
  const officeSetup = {
    city: mainProductDevelopmentCity,
    size: maxOfficeSize,
    jobs: {
      Operations: 0,
      Engineer: 0,
      Business: 0,
      Management: 0,
      "Research & Development": 0
    }
  };
  const products = division.products;
  let item;
  let sortType;
  let useCurrentItemData = true;
  if (usePrecalculatedEmployeeRatioForProductDivision) {
    let precalculatedEmployeeRatioForProductDivision;
    if (ns.corporation.getInvestmentOffer().round === 3) {
      precalculatedEmployeeRatioForProductDivision = precalculatedEmployeeRatioForProductDivisionRound3;
    } else if (ns.corporation.getInvestmentOffer().round === 4) {
      precalculatedEmployeeRatioForProductDivision = precalculatedEmployeeRatioForProductDivisionRound4;
    } else if (ns.corporation.getInvestmentOffer().round === 5 && profit < 1e30) {
      precalculatedEmployeeRatioForProductDivision = precalculatedEmployeeRatioForProductDivisionRound5_1;
    } else if (ns.corporation.getInvestmentOffer().round === 5 && profit >= 1e30) {
      precalculatedEmployeeRatioForProductDivision = precalculatedEmployeeRatioForProductDivisionRound5_2;
    } else {
      throw new Error("Invalid precalculated employee ratio");
    }
    officeSetup.jobs.Operations = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProductDivision.operations);
    officeSetup.jobs.Engineer = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProductDivision.engineer);
    officeSetup.jobs.Business = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProductDivision.business);
    if (officeSetup.jobs.Business === 0) {
      officeSetup.jobs.Business = 1;
    }
    officeSetup.jobs.Management = officeSetup.size - (officeSetup.jobs.Operations + officeSetup.jobs.Engineer + officeSetup.jobs.Business);
  } else {
    if (ns.corporation.getInvestmentOffer().round === 3 || ns.corporation.getInvestmentOffer().round === 4) {
      sortType = "progress";
    } else {
      sortType = "profit_progress";
    }
    let bestProduct = null;
    let highestEffectiveRating = Number.MIN_VALUE;
    for (const productName of products) {
      const product = ns.corporation.getProduct(divisionName, mainProductDevelopmentCity, productName);
      if (product.developmentProgress < 100) {
        continue;
      }
      if (product.effectiveRating > highestEffectiveRating) {
        bestProduct = product;
        highestEffectiveRating = product.effectiveRating;
      }
    }
    if (!bestProduct) {
      useCurrentItemData = false;
      item = {
        name: sampleProductName,
        demand: 54,
        competition: 35,
        rating: 36e3,
        effectiveRating: 36e3,
        stats: {
          quality: 42e3,
          performance: 46e3,
          durability: 2e4,
          reliability: 31e3,
          aesthetics: 25e3,
          features: 37e3
        },
        // Material's market price is different between cities. We use Sector12's price as reference price.
        productionCost: getProductMarketPrice(ns, division, industryData, CityName.Sector12),
        desiredSellPrice: 0,
        desiredSellAmount: 0,
        stored: 0,
        productionAmount: 0,
        actualSellAmount: 0,
        developmentProgress: 100,
        advertisingInvestment: ns.corporation.getCorporation().funds * 0.01 / 2,
        designInvestment: ns.corporation.getCorporation().funds * 0.01 / 2,
        size: 0.05
      };
    } else {
      item = bestProduct;
      logger.log(`Use product: ${JSON.stringify(item)}`);
    }
    const dataArray = await optimizeOffice(
      nsx,
      division,
      industryData,
      mainProductDevelopmentCity,
      maxOfficeSize,
      0,
      item,
      useCurrentItemData,
      sortType,
      getBalancingModifierForProfitProgress(),
      maxRerunWhenOptimizingOfficeForProductDivision,
      defaultPerformanceModifierForOfficeBenchmark,
      enableLogging
    );
    if (dataArray.length === 0) {
      throw new Error(`Cannot calculate optimal office setup. maxTotalEmployees: ${maxOfficeSize}`);
    }
    const optimalData = dataArray[dataArray.length - 1];
    officeSetup.jobs = {
      Operations: optimalData.operations,
      Engineer: optimalData.engineer,
      Business: optimalData.business,
      Management: optimalData.management,
      "Research & Development": 0
    };
  }
  logger.log(`mainOffice: ${JSON.stringify(officeSetup)}`);
  if (!dryRun) {
    upgradeOffices(ns, divisionName, [officeSetup]);
  }
}
async function improveProductDivisionSupportOffices(divisionName, budget, dryRun, enableLogging) {
  const logger = new Logger(enableLogging);
  const officeSetups = [];
  if (budget > ns.corporation.getCorporation().funds) {
    console.warn(
      `Budget is higher than current funds. Budget: ${ns.formatNumber(budget)}, funds: ${ns.formatNumber(ns.corporation.getCorporation().funds)}`
    );
    budget = ns.corporation.getCorporation().funds * 0.9;
  }
  const budgetForEachOffice = budget / 5;
  for (const city of supportProductDevelopmentCities) {
    const office = ns.corporation.getOffice(divisionName, city);
    const maxOfficeSize = getMaxAffordableOfficeSize(office.size, budgetForEachOffice);
    if (maxOfficeSize < 5) {
      throw new Error(`Budget for office is too low. Division: ${divisionName}. Office's budget: ${ns.formatNumber(budgetForEachOffice)}`);
    }
    if (maxOfficeSize < office.size) {
      continue;
    }
    const officeSetup = {
      city,
      size: maxOfficeSize,
      jobs: {
        Operations: 0,
        Engineer: 0,
        Business: 0,
        Management: 0,
        "Research & Development": 0
      }
    };
    if (ns.corporation.getInvestmentOffer().round === 3 && maxNumberOfProductsInRound3 === 1) {
      officeSetup.jobs.Operations = 0;
      officeSetup.jobs.Engineer = 0;
      officeSetup.jobs.Business = 0;
      officeSetup.jobs.Management = 0;
      officeSetup.jobs["Research & Development"] = maxOfficeSize;
    } else if (ns.corporation.getInvestmentOffer().round === 3 || ns.corporation.getInvestmentOffer().round === 4) {
      officeSetup.jobs.Operations = 1;
      officeSetup.jobs.Engineer = 1;
      officeSetup.jobs.Business = 1;
      officeSetup.jobs.Management = 1;
      officeSetup.jobs["Research & Development"] = maxOfficeSize - 4;
    } else {
      const rndEmployee = Math.min(
        Math.floor(maxOfficeSize * 0.5),
        maxOfficeSize - 4
      );
      const nonRnDEmployees = maxOfficeSize - rndEmployee;
      officeSetup.jobs.Operations = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForProfitSetupOfRound4.operations);
      officeSetup.jobs.Engineer = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForProfitSetupOfRound4.engineer);
      officeSetup.jobs.Business = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForProfitSetupOfRound4.business);
      officeSetup.jobs.Management = nonRnDEmployees - (officeSetup.jobs.Operations + officeSetup.jobs.Engineer + officeSetup.jobs.Business);
      officeSetup.jobs["Research & Development"] = rndEmployee;
    }
    officeSetups.push(officeSetup);
  }
  logger.log(`supportOffices: ${JSON.stringify(officeSetups)}`);
  if (!dryRun) {
    upgradeOffices(ns, divisionName, officeSetups);
  }
}
async function improveProductDivisionOffices(divisionName, industryData, budget, dryRun, enableLogging) {
  let ratio = {
    mainOffice: 0.5,
    supportOffices: 0.5
  };
  if (ns.corporation.getInvestmentOffer().round === 3) {
    ratio = {
      mainOffice: 0.75,
      supportOffices: 0.25
    };
  }
  await improveProductDivisionMainOffice(
    divisionName,
    industryData,
    budget * ratio.mainOffice,
    dryRun,
    enableLogging
  );
  await improveProductDivisionSupportOffices(
    divisionName,
    budget * ratio.supportOffices,
    dryRun,
    enableLogging
  );
}
async function improveProductDivision(divisionName, totalBudget, skipUpgradingOffice, dryRun, enableLogging) {
  if (totalBudget < 0) {
    return;
  }
  const logger = new Logger(enableLogging);
  const division = ns.corporation.getDivision(divisionName);
  const industryData = ns.corporation.getIndustryData(division.type);
  const divisionResearches = getDivisionResearches(ns, divisionName);
  const benchmark = new CorporationOptimizer();
  const currentFunds = ns.corporation.getCorporation().funds;
  if (getProfit(ns) >= thresholdOfFocusingOnAdvert) {
    budgetRatioForProductDivision = budgetRatioForProductDivisionWithoutAdvert;
  }
  const employeeStatUpgradesBudget = totalBudget * budgetRatioForProductDivision.employeeStatUpgrades;
  const currentCreativityUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS);
  const currentCharismaUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.SPEECH_PROCESSOR_IMPLANTS);
  const currentIntelligenceUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.NEURAL_ACCELERATORS);
  const currentEfficiencyUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.FOCUS_WIRES);
  const newCreativityUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS,
    currentCreativityUpgradeLevel,
    employeeStatUpgradesBudget / 4
  );
  const newCharismaUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.SPEECH_PROCESSOR_IMPLANTS,
    currentCharismaUpgradeLevel,
    employeeStatUpgradesBudget / 4
  );
  const newIntelligenceUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.NEURAL_ACCELERATORS,
    currentIntelligenceUpgradeLevel,
    employeeStatUpgradesBudget / 4
  );
  const newEfficiencyUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.FOCUS_WIRES,
    currentEfficiencyUpgradeLevel,
    employeeStatUpgradesBudget / 4
  );
  if (!dryRun) {
    buyUpgrade(ns, UpgradeName.NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS, newCreativityUpgradeLevel);
    buyUpgrade(ns, UpgradeName.SPEECH_PROCESSOR_IMPLANTS, newCharismaUpgradeLevel);
    buyUpgrade(ns, UpgradeName.NEURAL_ACCELERATORS, newIntelligenceUpgradeLevel);
    buyUpgrade(ns, UpgradeName.FOCUS_WIRES, newEfficiencyUpgradeLevel);
  }
  const salesBotBudget = totalBudget * budgetRatioForProductDivision.salesBot;
  const currentSalesBotUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.ABC_SALES_BOTS);
  const newSalesBotUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.ABC_SALES_BOTS,
    currentSalesBotUpgradeLevel,
    salesBotBudget
  );
  if (!dryRun) {
    buyUpgrade(ns, UpgradeName.ABC_SALES_BOTS, newSalesBotUpgradeLevel);
  }
  const projectInsightBudget = totalBudget * budgetRatioForProductDivision.projectInsight;
  const currentProjectInsightUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.PROJECT_INSIGHT);
  const newProjectInsightUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.PROJECT_INSIGHT,
    currentProjectInsightUpgradeLevel,
    projectInsightBudget
  );
  if (!dryRun) {
    buyUpgrade(ns, UpgradeName.PROJECT_INSIGHT, newProjectInsightUpgradeLevel);
  }
  const rawProductionBudget = totalBudget * budgetRatioForProductDivision.rawProduction;
  improveProductDivisionRawProduction(
    division.name,
    industryData,
    divisionResearches,
    rawProductionBudget,
    dryRun,
    benchmark,
    enableLogging
  );
  const wilsonAdvertBudget = totalBudget * budgetRatioForProductDivision.wilsonAdvert;
  improveProductDivisionWilsonAdvert(
    division.name,
    industryData,
    divisionResearches,
    wilsonAdvertBudget,
    dryRun,
    benchmark,
    enableLogging
  );
  if (!skipUpgradingOffice) {
    const officesBudget = totalBudget * budgetRatioForProductDivision.office;
    await improveProductDivisionOffices(
      division.name,
      industryData,
      officesBudget,
      dryRun,
      enableLogging
    );
  }
  logger.log(`Spent: ${ns.formatNumber(currentFunds - ns.corporation.getCorporation().funds)}`);
}
function resetStatistics() {
  globalThis.Player.corporation.cycleCount = 0;
  globalThis.corporationCycleHistory = [];
  corporationEventLogger.cycle = 0;
  corporationEventLogger.clearEventData();
}
async function test() {
}
async function main(nsContext) {
  init(nsContext);
  // if (ns.getResetInfo().currentNode !== 3) {
  //   throw new Error("This script is specialized for BN3");
  // }
  config = ns.flags(defaultConfig);
  if (config.help === true) {
    ns.tprint(`Default config: ${defaultConfig}`);
    return;
  }
  ns.disableLog("ALL");
  ns.clearLog();
  if (!ns.corporation.hasCorporation()) {
    if (!ns.corporation.createCorporation("Corp", config.selfFund)) {
      ns.print(`Cannot create corporation`);
      return;
    }
  }
  nsx.addAtExitCallback(() => {
    clearPurchaseOrders(ns, false);
  });
  agricultureIndustryData = ns.corporation.getIndustryData(IndustryType.AGRICULTURE);
  chemicalIndustryData = ns.corporation.getIndustryData(IndustryType.CHEMICAL);
  tobaccoIndustryData = ns.corporation.getIndustryData(IndustryType.TOBACCO);
  if (config.benchmark === true) {
    exposeGameInternalObjects();
    testingTools.resetRNGData();
    enableTestingTools = true;
  }
  if (config.round1 === true) {
    await round1();
    return;
  }
  if (config.round2 === true) {
    await round2();
    return;
  }
  if (config.round3 === true) {
    await round3();
    return;
  }
  if (config.improveAllDivisions === true) {
    nsx.killProcessesSpawnFromSameScript();
    ns.tail();
    await improveAllDivisions();
    return;
  }
  if (config.test) {
    ns.tail();
    await test();
    return;
  }
}
export {
  autocomplete,
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBdXRvY29tcGxldGVEYXRhLCBDb3JwSW5kdXN0cnlEYXRhLCBNYXRlcmlhbCwgTlMsIFByb2R1Y3QgfSBmcm9tIFwiQG5zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBOZXRzY3JpcHRFeHRlbnNpb24sXHJcbiAgICBOZXRzY3JpcHRGbGFncyxcclxuICAgIE5ldHNjcmlwdEZsYWdzU2NoZW1hLFxyXG4gICAgcGFyc2VBdXRvQ29tcGxldGVEYXRhRnJvbURlZmF1bHRDb25maWdcclxufSBmcm9tIFwiL2xpYnMvTmV0c2NyaXB0RXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDaXR5TmFtZSxcclxuICAgIENvcnBTdGF0ZSxcclxuICAgIERpdmlzaW9uUmVzZWFyY2hlcyxcclxuICAgIEVtcGxveWVlUG9zaXRpb24sXHJcbiAgICBnZXRNYXhBZmZvcmRhYmxlQWRWZXJ0TGV2ZWwsXHJcbiAgICBnZXRNYXhBZmZvcmRhYmxlT2ZmaWNlU2l6ZSxcclxuICAgIGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwsXHJcbiAgICBnZXRNYXhBZmZvcmRhYmxlV2FyZWhvdXNlTGV2ZWwsXHJcbiAgICBJbmR1c3RyeVR5cGUsXHJcbiAgICBNYXRlcmlhbE5hbWUsXHJcbiAgICBPZmZpY2VTZXR1cCxcclxuICAgIFJlc2VhcmNoTmFtZSxcclxuICAgIFJlc2VhcmNoUHJpb3JpdHksXHJcbiAgICBVbmxvY2tOYW1lLFxyXG4gICAgVXBncmFkZU5hbWVcclxufSBmcm9tIFwiL2NvcnBvcmF0aW9uRm9ybXVsYXNcIjtcclxuaW1wb3J0IHtcclxuICAgIGFzc2lnbkpvYnMsXHJcbiAgICBidXlBZHZlcnQsXHJcbiAgICBidXlCb29zdE1hdGVyaWFscyxcclxuICAgIGJ1eVRlYUFuZFRocm93UGFydHksXHJcbiAgICBidXlVbmxvY2ssXHJcbiAgICBidXlVcGdyYWRlLFxyXG4gICAgY2l0aWVzLFxyXG4gICAgY2xlYXJQdXJjaGFzZU9yZGVycyxcclxuICAgIGNyZWF0ZURpdmlzaW9uLFxyXG4gICAgY3JlYXRlRHVtbXlEaXZpc2lvbnMsXHJcbiAgICBkZXZlbG9wTmV3UHJvZHVjdCxcclxuICAgIERpdmlzaW9uTmFtZSxcclxuICAgIGV4cG9ydFN0cmluZyxcclxuICAgIGZpbmRPcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFscyxcclxuICAgIGdlbmVyYXRlTWF0ZXJpYWxzT3JkZXJzLFxyXG4gICAgZ2VuZXJhdGVPZmZpY2VTZXR1cHMsXHJcbiAgICBnZXREaXZpc2lvblJlc2VhcmNoZXMsXHJcbiAgICBnZXRQcm9kdWN0SWRBcnJheSxcclxuICAgIGdldFByb2R1Y3RNYXJrZXRQcmljZSxcclxuICAgIGdldFByb2ZpdCxcclxuICAgIGhhc0RpdmlzaW9uLFxyXG4gICAgTG9nZ2VyLFxyXG4gICAgcmVzZWFyY2hQcmlvcml0aWVzRm9yUHJvZHVjdERpdmlzaW9uLFxyXG4gICAgcmVzZWFyY2hQcmlvcml0aWVzRm9yU3VwcG9ydERpdmlzaW9uLFxyXG4gICAgc2FtcGxlUHJvZHVjdE5hbWUsXHJcbiAgICBzdG9ja01hdGVyaWFscyxcclxuICAgIHVwZ3JhZGVPZmZpY2VzLFxyXG4gICAgdXBncmFkZVdhcmVob3VzZSxcclxuICAgIHdhaXRGb3JOdW1iZXJPZkN5Y2xlcyxcclxuICAgIHdhaXRGb3JPZmZlcixcclxuICAgIHdhaXRGb3JOZXh0VGltZVN0YXRlSGFwcGVucyxcclxuICAgIHdhaXRVbnRpbEhhdmluZ0Vub3VnaFJlc2VhcmNoUG9pbnRzLFxyXG4gICAgZ2VuZXJhdGVPZmZpY2VTZXR1cHNGb3JFYXJseVJvdW5kc1xyXG59IGZyb20gXCIvY29ycG9yYXRpb25VdGlsc1wiO1xyXG5pbXBvcnQgeyBvcHRpbWl6ZU9mZmljZSB9IGZyb20gXCIvY29ycG9yYXRpb25PcHRpbWl6ZXJUb29sc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQmFsYW5jaW5nTW9kaWZpZXJGb3JQcm9maXRQcm9ncmVzcyxcclxuICAgIENvcnBvcmF0aW9uT3B0aW1pemVyLFxyXG4gICAgZGVmYXVsdFBlcmZvcm1hbmNlTW9kaWZpZXJGb3JPZmZpY2VCZW5jaG1hcmssXHJcbiAgICBPZmZpY2VCZW5jaG1hcmtTb3J0VHlwZSxcclxuICAgIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uUm91bmQzLFxyXG4gICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDQsXHJcbiAgICBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kNV8xLFxyXG4gICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDVfMixcclxuICAgIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXBPZlJvdW5kMyxcclxuICAgIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXBPZlJvdW5kNCxcclxuICAgIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yU3VwcG9ydERpdmlzaW9uc1xyXG59IGZyb20gXCIvY29ycG9yYXRpb25PcHRpbWl6ZXJcIjtcclxuaW1wb3J0ICogYXMgdGVzdGluZ1Rvb2xzIGZyb20gXCIvY29ycG9yYXRpb25UZXN0aW5nVG9vbHNcIjtcclxuaW1wb3J0IHsgY29ycG9yYXRpb25FdmVudExvZ2dlciB9IGZyb20gXCIvY29ycG9yYXRpb25FdmVudExvZ2dlclwiO1xyXG5pbXBvcnQgeyBleHBvc2VHYW1lSW50ZXJuYWxPYmplY3RzIH0gZnJvbSBcIi9leHBsb2l0c1wiO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG5leHBvcnQgZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGRhdGE6IEF1dG9jb21wbGV0ZURhdGEsIGZsYWdzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBwYXJzZUF1dG9Db21wbGV0ZURhdGFGcm9tRGVmYXVsdENvbmZpZyhkYXRhLCBkZWZhdWx0Q29uZmlnKTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJvdW5kMU9wdGlvbiB7XHJcbiAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IG51bWJlcjtcclxuICAgIHdhaXRGb3JBZ3JpY3VsdHVyZVJQOiBudW1iZXI7XHJcbiAgICBib29zdE1hdGVyaWFsc1JhdGlvOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFByZWNhbGN1bGF0ZWRSb3VuZDFPcHRpb24gPSB7XHJcbiAgICAvLyAxNDk4IC0gNjEuMzQ0ZTkgLSA1MDQuOGU5IC0gNDQzLjQ1NmU5IC0gNC44OW0vcyAtIDE3LjYwNGIvaFxyXG4gICAgT1BUSU9OMTogPFJvdW5kMU9wdGlvbj57XHJcbiAgICAgICAgYWdyaWN1bHR1cmVPZmZpY2VTaXplOiAzLFxyXG4gICAgICAgIHdhaXRGb3JBZ3JpY3VsdHVyZVJQOiA1NSxcclxuICAgICAgICBib29zdE1hdGVyaWFsc1JhdGlvOiAwLjg5XHJcbiAgICAgICAgLy8gYm9vc3RNYXRlcmlhbHNSYXRpbzogMC44OCAvLyBTbWFydCBTdXBwbHkgLSBBZHZlcnQgMVxyXG4gICAgfSxcclxuICAgIC8vIDE2NDkgLSA1MS40NmU5IC0gNTU3LjFlOSAtIDUwNS42NGU5IC0gNS4zODFlNi9zIC0gMTkuMzcxL2hcclxuICAgIE9QVElPTjI6IDxSb3VuZDFPcHRpb24+e1xyXG4gICAgICAgIGFncmljdWx0dXJlT2ZmaWNlU2l6ZTogNCxcclxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNTUsXHJcbiAgICAgICAgYm9vc3RNYXRlcmlhbHNSYXRpbzogMC44NlxyXG4gICAgICAgIC8vIGJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuODQgLy8gU21hcnQgU3VwcGx5XHJcbiAgICB9LFxyXG4gICAgLy8gMTU4OCAtIDQyLjcwNGU5IC0gNTM2LjhlOSAtIDQ5NC4wOTZlOSAtIDUuMTc2bS9zIC0gMTguNjMzYi9oXHJcbiAgICBPUFRJT04zOiA8Um91bmQxT3B0aW9uPntcclxuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDUsXHJcbiAgICAgICAgd2FpdEZvckFncmljdWx0dXJlUlA6IDU1LFxyXG4gICAgICAgIGJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuODRcclxuICAgIH0sXHJcbiAgICAvLyAxNDQxIC0gMzQuMTNlOSAtIDQ4Ny41ZTkgLSA0NTMuMzdlOSAtIDQuNjk0bS9zIC0gMTYuODk4Yi9oXHJcbiAgICBPUFRJT040OiA8Um91bmQxT3B0aW9uPntcclxuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDYsXHJcbiAgICAgICAgd2FpdEZvckFncmljdWx0dXJlUlA6IDU1LFxyXG4gICAgICAgIGJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuODE1XHJcbiAgICB9LFxyXG59IGFzIGNvbnN0O1xyXG5cclxuaW50ZXJmYWNlIFJvdW5kMk9wdGlvbiB7XHJcbiAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IG51bWJlcjtcclxuICAgIGluY3JlYXNlQnVzaW5lc3M6IGJvb2xlYW47XHJcbiAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogbnVtYmVyO1xyXG4gICAgd2FpdEZvckNoZW1pY2FsUlA6IG51bWJlcjtcclxuICAgIGFncmljdWx0dXJlQm9vc3RNYXRlcmlhbHNSYXRpbzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBQcmVjYWxjdWxhdGVkUm91bmQyT3B0aW9uID0ge1xyXG4gICAgLy8gMTUuMjY2ZTEyIDE3MjgyIDgwNC4xNzVcclxuICAgIE9QVElPTjE6IDxSb3VuZDJPcHRpb24+e1xyXG4gICAgICAgIGFncmljdWx0dXJlT2ZmaWNlU2l6ZTogOCwgLy8gMy0xLTEtM1xyXG4gICAgICAgIGluY3JlYXNlQnVzaW5lc3M6IGZhbHNlLFxyXG4gICAgICAgIHdhaXRGb3JBZ3JpY3VsdHVyZVJQOiA5MDMsXHJcbiAgICAgICAgd2FpdEZvckNoZW1pY2FsUlA6IDUxNixcclxuICAgICAgICBhZ3JpY3VsdHVyZUJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuNzVcclxuICAgIH0sXHJcbiAgICAvLyAxNC41N2UxMiAxNjQ4NSA4MTUuMTg4XHJcbiAgICBPUFRJT04yOiA8Um91bmQyT3B0aW9uPntcclxuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDgsXHJcbiAgICAgICAgaW5jcmVhc2VCdXNpbmVzczogdHJ1ZSxcclxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNzAzLFxyXG4gICAgICAgIHdhaXRGb3JDaGVtaWNhbFJQOiAzOTMsXHJcbiAgICAgICAgYWdyaWN1bHR1cmVCb29zdE1hdGVyaWFsc1JhdGlvOiAwLjc2XHJcbiAgICB9LFxyXG4gICAgLy8gMTQuNDc0ZTEyXHJcbiAgICBPUFRJT04zOiA8Um91bmQyT3B0aW9uPntcclxuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDgsXHJcbiAgICAgICAgaW5jcmVhc2VCdXNpbmVzczogdHJ1ZSxcclxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNjUzLFxyXG4gICAgICAgIHdhaXRGb3JDaGVtaWNhbFJQOiAzNjIsXHJcbiAgICAgICAgYWdyaWN1bHR1cmVCb29zdE1hdGVyaWFsc1JhdGlvOiAwLjc1NVxyXG4gICAgfSxcclxuICAgIC8vIDEzLjk5NGUxMlxyXG4gICAgT1BUSU9ONDogPFJvdW5kMk9wdGlvbj57XHJcbiAgICAgICAgYWdyaWN1bHR1cmVPZmZpY2VTaXplOiA4LFxyXG4gICAgICAgIGluY3JlYXNlQnVzaW5lc3M6IHRydWUsXHJcbiAgICAgICAgd2FpdEZvckFncmljdWx0dXJlUlA6IDYwMixcclxuICAgICAgICB3YWl0Rm9yQ2hlbWljYWxSUDogMzMxLFxyXG4gICAgICAgIGFncmljdWx0dXJlQm9vc3RNYXRlcmlhbHNSYXRpbzogMC43NFxyXG4gICAgfSxcclxuICAgIC8vIDEzLjc0MmUxMlxyXG4gICAgT1BUSU9ONTogPFJvdW5kMk9wdGlvbj57XHJcbiAgICAgICAgYWdyaWN1bHR1cmVPZmZpY2VTaXplOiA4LCAvLyAyLTEtMy0yXHJcbiAgICAgICAgaW5jcmVhc2VCdXNpbmVzczogdHJ1ZSxcclxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNjAyLFxyXG4gICAgICAgIHdhaXRGb3JDaGVtaWNhbFJQOiAzMzEsXHJcbiAgICAgICAgYWdyaWN1bHR1cmVCb29zdE1hdGVyaWFsc1JhdGlvOiAwLjc3XHJcbiAgICB9LFxyXG4gICAgLy8gMTMuNDI1ZTEyXHJcbiAgICBPUFRJT042OiA8Um91bmQyT3B0aW9uPntcclxuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDgsXHJcbiAgICAgICAgaW5jcmVhc2VCdXNpbmVzczogdHJ1ZSxcclxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNTUxLFxyXG4gICAgICAgIHdhaXRGb3JDaGVtaWNhbFJQOiAzMDAsXHJcbiAgICAgICAgYWdyaWN1bHR1cmVCb29zdE1hdGVyaWFsc1JhdGlvOiAwLjcxXHJcbiAgICB9LFxyXG4gICAgLy8gMTMuN2UxMlxyXG4gICAgT1BUSU9ONzogPFJvdW5kMk9wdGlvbj57XHJcbiAgICAgICAgYWdyaWN1bHR1cmVPZmZpY2VTaXplOiA4LCAvLyAyLTEtMy0yXHJcbiAgICAgICAgaW5jcmVhc2VCdXNpbmVzczogdHJ1ZSxcclxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNTUxLFxyXG4gICAgICAgIHdhaXRGb3JDaGVtaWNhbFJQOiAzMDAsXHJcbiAgICAgICAgYWdyaWN1bHR1cmVCb29zdE1hdGVyaWFsc1JhdGlvOiAwLjc3XHJcbiAgICB9LFxyXG4gICAgLy8gMTMuNmUxMlxyXG4gICAgT1BUSU9OODogPFJvdW5kMk9wdGlvbj57XHJcbiAgICAgICAgYWdyaWN1bHR1cmVPZmZpY2VTaXplOiA4LCAvLyAyLTEtMy0yXHJcbiAgICAgICAgaW5jcmVhc2VCdXNpbmVzczogdHJ1ZSxcclxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNTAwLFxyXG4gICAgICAgIHdhaXRGb3JDaGVtaWNhbFJQOiAyNjksXHJcbiAgICAgICAgYWdyaWN1bHR1cmVCb29zdE1hdGVyaWFsc1JhdGlvOiAwLjc3XHJcbiAgICB9LFxyXG4gICAgLy8gMTNlMTJcclxuICAgIE9QVElPTjk6IDxSb3VuZDJPcHRpb24+e1xyXG4gICAgICAgIGFncmljdWx0dXJlT2ZmaWNlU2l6ZTogOCwgLy8gMi0xLTMtMlxyXG4gICAgICAgIGluY3JlYXNlQnVzaW5lc3M6IHRydWUsXHJcbiAgICAgICAgd2FpdEZvckFncmljdWx0dXJlUlA6IDQ1MCxcclxuICAgICAgICB3YWl0Rm9yQ2hlbWljYWxSUDogMjM4LFxyXG4gICAgICAgIGFncmljdWx0dXJlQm9vc3RNYXRlcmlhbHNSYXRpbzogMC43M1xyXG4gICAgfSxcclxuICAgIC8vIDEwLjg4NGUxMlxyXG4gICAgT1BUSU9OMTA6IDxSb3VuZDJPcHRpb24+e1xyXG4gICAgICAgIGFncmljdWx0dXJlT2ZmaWNlU2l6ZTogOCwgLy8gMi0xLTMtMlxyXG4gICAgICAgIGluY3JlYXNlQnVzaW5lc3M6IHRydWUsXHJcbiAgICAgICAgd2FpdEZvckFncmljdWx0dXJlUlA6IDMwMixcclxuICAgICAgICB3YWl0Rm9yQ2hlbWljYWxSUDogMTQ4LFxyXG4gICAgICAgIGFncmljdWx0dXJlQm9vc3RNYXRlcmlhbHNSYXRpbzogMC42MVxyXG4gICAgfVxyXG59IGFzIGNvbnN0O1xyXG5cclxuaW50ZXJmYWNlIFJvdW5kM09wdGlvbiB7XHJcbn1cclxuXHJcbmNvbnN0IFByZWNhbGN1bGF0ZWRSb3VuZDNPcHRpb24gPSB7XHJcbiAgICBPUFRJT04xOiA8Um91bmQzT3B0aW9uPnt9LFxyXG59IGFzIGNvbnN0O1xyXG5cclxuY29uc3QgZGVmYXVsdEJ1ZGdldFJhdGlvRm9yU3VwcG9ydERpdmlzaW9uID0ge1xyXG4gICAgd2FyZWhvdXNlOiAwLjEsXHJcbiAgICBvZmZpY2U6IDAuOVxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEJ1ZGdldFJhdGlvRm9yUHJvZHVjdERpdmlzaW9uID0ge1xyXG4gICAgcmF3UHJvZHVjdGlvbjogMSAvIDIzLFxyXG4gICAgd2lsc29uQWR2ZXJ0OiA0IC8gMjMsXHJcbiAgICBvZmZpY2U6IDggLyAyMyxcclxuICAgIGVtcGxveWVlU3RhdFVwZ3JhZGVzOiA4IC8gMjMsXHJcbiAgICBzYWxlc0JvdDogMSAvIDIzLFxyXG4gICAgcHJvamVjdEluc2lnaHQ6IDEgLyAyMyxcclxufTtcclxuXHJcbmNvbnN0IGJ1ZGdldFJhdGlvRm9yUHJvZHVjdERpdmlzaW9uV2l0aG91dEFkdmVydCA9IHtcclxuICAgIHJhd1Byb2R1Y3Rpb246IDEgLyAxOSxcclxuICAgIHdpbHNvbkFkdmVydDogMCxcclxuICAgIG9mZmljZTogOCAvIDE5LFxyXG4gICAgZW1wbG95ZWVTdGF0VXBncmFkZXM6IDggLyAxOSxcclxuICAgIHNhbGVzQm90OiAxIC8gMTksXHJcbiAgICBwcm9qZWN0SW5zaWdodDogMSAvIDE5LFxyXG59O1xyXG5cclxuY29uc3QgbWF4UmVydW5XaGVuT3B0aW1pemluZ09mZmljZUZvclByb2R1Y3REaXZpc2lvbiA9IDA7XHJcblxyXG5jb25zdCB1c2VQcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclN1cHBvcnREaXZpc2lvbnMgPSB0cnVlO1xyXG5cclxuY29uc3QgdXNlUHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9maXRTZXR1cCA9IHRydWU7XHJcblxyXG5jb25zdCB1c2VQcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvbiA9IHRydWU7XHJcblxyXG5jb25zdCBtYXhOdW1iZXJPZlByb2R1Y3RzSW5Sb3VuZDMgPSAxO1xyXG5cclxuY29uc3QgbWF4TnVtYmVyT2ZQcm9kdWN0c0luUm91bmQ0ID0gMjtcclxuXHJcbmNvbnN0IHRocmVzaG9sZE9mRm9jdXNpbmdPbkFkdmVydCA9IDFlMTg7XHJcblxyXG5sZXQgbnM6IE5TO1xyXG5sZXQgbnN4OiBOZXRzY3JpcHRFeHRlbnNpb247XHJcbmxldCBjb25maWc6IE5ldHNjcmlwdEZsYWdzO1xyXG5sZXQgZW5hYmxlVGVzdGluZ1Rvb2xzOiBib29sZWFuID0gZmFsc2U7XHJcbmxldCBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eTogQ2l0eU5hbWU7XHJcbmxldCBzdXBwb3J0UHJvZHVjdERldmVsb3BtZW50Q2l0aWVzOiBDaXR5TmFtZVtdO1xyXG5sZXQgYWdyaWN1bHR1cmVJbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGE7XHJcbmxldCBjaGVtaWNhbEluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YTtcclxubGV0IHRvYmFjY29JbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGE7XHJcbmxldCBidWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbiA9IGRlZmF1bHRCdWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbjtcclxuXHJcbmNvbnN0IGRlZmF1bHRDb25maWc6IE5ldHNjcmlwdEZsYWdzU2NoZW1hID0gW1xyXG4gICAgW1wiYmVuY2htYXJrXCIsIGZhbHNlXSxcclxuICAgIFtcImF1dG9cIiwgZmFsc2VdLFxyXG4gICAgW1wic2VsZkZ1bmRcIiwgZmFsc2VdLFxyXG4gICAgW1wicm91bmQxXCIsIGZhbHNlXSxcclxuICAgIFtcInJvdW5kMlwiLCBmYWxzZV0sXHJcbiAgICBbXCJyb3VuZDNcIiwgZmFsc2VdLFxyXG4gICAgW1wiaW1wcm92ZUFsbERpdmlzaW9uc1wiLCBmYWxzZV0sXHJcbiAgICBbXCJ0ZXN0XCIsIGZhbHNlXSxcclxuICAgIFtcImhlbHBcIiwgZmFsc2VdLFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gaW5pdChuc0NvbnRleHQ6IE5TKTogdm9pZCB7XHJcbiAgICBucyA9IG5zQ29udGV4dDtcclxuICAgIG5zeCA9IG5ldyBOZXRzY3JpcHRFeHRlbnNpb24obnMpO1xyXG4gICAgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHkgPSBucy5lbnVtcy5DaXR5TmFtZS5TZWN0b3IxMjtcclxuICAgIHN1cHBvcnRQcm9kdWN0RGV2ZWxvcG1lbnRDaXRpZXMgPSBPYmplY3QudmFsdWVzKG5zLmVudW1zLkNpdHlOYW1lKVxyXG4gICAgICAgIC5maWx0ZXIoY2l0eU5hbWUgPT4gY2l0eU5hbWUgIT09IG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcm91bmQxKG9wdGlvbjogUm91bmQxT3B0aW9uID0gUHJlY2FsY3VsYXRlZFJvdW5kMU9wdGlvbi5PUFRJT04yKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBucy5wcmludChgVXNlOiAke0pTT04uc3RyaW5naWZ5KG9wdGlvbil9YCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIEFncmljdWx0dXJlIGRpdmlzaW9uXHJcbiAgICBhd2FpdCBjcmVhdGVEaXZpc2lvbihucywgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLCBvcHRpb24uYWdyaWN1bHR1cmVPZmZpY2VTaXplLCAxKTtcclxuICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcclxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5zZWxsTWF0ZXJpYWwoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLCBjaXR5LCBNYXRlcmlhbE5hbWUuUExBTlRTLCBcIk1BWFwiLCBcIk1QXCIpO1xyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGNpdHksIE1hdGVyaWFsTmFtZS5GT09ELCBcIk1BWFwiLCBcIk1QXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbmFibGVUZXN0aW5nVG9vbHMgJiYgY29uZmlnLmF1dG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGVzdGluZ1Rvb2xzLnNldEVuZXJneUFuZE1vcmFsZShEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIDEwMCwgMTAwKTtcclxuICAgICAgICB0ZXN0aW5nVG9vbHMuc2V0UmVzZWFyY2hQb2ludHMoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLCBvcHRpb24ud2FpdEZvckFncmljdWx0dXJlUlApO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGJ1eVRlYUFuZFRocm93UGFydHkobnMsIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSk7XHJcblxyXG4gICAgYnV5QWR2ZXJ0KG5zLCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIDIpO1xyXG5cclxuICAgIGNvbnN0IGRhdGFBcnJheSA9IG5ldyBDb3Jwb3JhdGlvbk9wdGltaXplcigpLm9wdGltaXplU3RvcmFnZUFuZEZhY3RvcnkoXHJcbiAgICAgICAgYWdyaWN1bHR1cmVJbmR1c3RyeURhdGEsXHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLlNNQVJUX1NUT1JBR0UpLFxyXG4gICAgICAgIC8vIEFzc3VtZSB0aGF0IGFsbCB3YXJlaG91c2VzIGFyZSBhdCB0aGUgc2FtZSBsZXZlbFxyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldFdhcmVob3VzZShEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIENpdHlOYW1lLlNlY3RvcjEyKS5sZXZlbCxcclxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuU01BUlRfRkFDVE9SSUVTKSxcclxuICAgICAgICBnZXREaXZpc2lvblJlc2VhcmNoZXMobnMsIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSksXHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcyxcclxuICAgICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIGlmIChkYXRhQXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgb3B0aW1hbCBkYXRhXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3B0aW1hbERhdGEgPSBkYXRhQXJyYXlbZGF0YUFycmF5Lmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGJ1eVVwZ3JhZGUobnMsIFVwZ3JhZGVOYW1lLlNNQVJUX1NUT1JBR0UsIG9wdGltYWxEYXRhLnNtYXJ0U3RvcmFnZUxldmVsKTtcclxuICAgIGJ1eVVwZ3JhZGUobnMsIFVwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFUywgb3B0aW1hbERhdGEuc21hcnRGYWN0b3JpZXNMZXZlbCk7XHJcbiAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XHJcbiAgICAgICAgdXBncmFkZVdhcmVob3VzZShucywgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLCBjaXR5LCBvcHRpbWFsRGF0YS53YXJlaG91c2VMZXZlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgd2FpdFVudGlsSGF2aW5nRW5vdWdoUmVzZWFyY2hQb2ludHMoXHJcbiAgICAgICAgbnMsXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkaXZpc2lvbk5hbWU6IERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSxcclxuICAgICAgICAgICAgICAgIHJlc2VhcmNoUG9pbnQ6IG9wdGlvbi53YWl0Rm9yQWdyaWN1bHR1cmVSUFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgKTtcclxuXHJcbiAgICBhc3NpZ25Kb2JzKFxyXG4gICAgICAgIG5zLFxyXG4gICAgICAgIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSxcclxuICAgICAgICBnZW5lcmF0ZU9mZmljZVNldHVwc0ZvckVhcmx5Um91bmRzKFxyXG4gICAgICAgICAgICBvcHRpb24uYWdyaWN1bHR1cmVPZmZpY2VTaXplLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW1hbEFtb3VudE9mQm9vc3RNYXRlcmlhbHMgPSBhd2FpdCBmaW5kT3B0aW1hbEFtb3VudE9mQm9vc3RNYXRlcmlhbHMoXHJcbiAgICAgICAgbnMsXHJcbiAgICAgICAgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxyXG4gICAgICAgIGFncmljdWx0dXJlSW5kdXN0cnlEYXRhLFxyXG4gICAgICAgIENpdHlOYW1lLlNlY3RvcjEyLFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgb3B0aW9uLmJvb3N0TWF0ZXJpYWxzUmF0aW9cclxuICAgICk7XHJcbiAgICBhd2FpdCBzdG9ja01hdGVyaWFscyhcclxuICAgICAgICBucyxcclxuICAgICAgICBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsXHJcbiAgICAgICAgZ2VuZXJhdGVNYXRlcmlhbHNPcmRlcnMoXHJcbiAgICAgICAgICAgIGNpdGllcyxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBNYXRlcmlhbE5hbWUuQUlfQ09SRVMsIGNvdW50OiBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc1swXSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBNYXRlcmlhbE5hbWUuSEFSRFdBUkUsIGNvdW50OiBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc1sxXSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBNYXRlcmlhbE5hbWUuUkVBTF9FU1RBVEUsIGNvdW50OiBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc1syXSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBNYXRlcmlhbE5hbWUuUk9CT1RTLCBjb3VudDogb3B0aW1hbEFtb3VudE9mQm9vc3RNYXRlcmlhbHNbM10gfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoY29uZmlnLmF1dG8gPT09IHRydWUpIHtcclxuICAgICAgICBhd2FpdCB3YWl0Rm9yT2ZmZXIobnMsIDEwLCAxMCwgNDkwZTkpO1xyXG4gICAgICAgIG5zLnByaW50KGBSb3VuZCAxOiBBY2NlcHQgb2ZmZXI6ICR7bnMuZm9ybWF0TnVtYmVyKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLmZ1bmRzKX1gKTtcclxuICAgICAgICBjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyLmdlbmVyYXRlT2ZmZXJBY2NlcHRhbmNlRXZlbnQobnMpO1xyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmFjY2VwdEludmVzdG1lbnRPZmZlcigpO1xyXG4gICAgICAgIGF3YWl0IHJvdW5kMigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByb3VuZDIob3B0aW9uOiBSb3VuZDJPcHRpb24gPSBQcmVjYWxjdWxhdGVkUm91bmQyT3B0aW9uLk9QVElPTjIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIG5zLnByaW50KGBVc2U6ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9uKX1gKTtcclxuXHJcbiAgICBpZiAoZW5hYmxlVGVzdGluZ1Rvb2xzICYmIGNvbmZpZy5hdXRvID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJlc2V0U3RhdGlzdGljcygpO1xyXG4gICAgICAgIHRlc3RpbmdUb29scy5zZXRGdW5kcyg0OTBlOSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV5VW5sb2NrKG5zLCBVbmxvY2tOYW1lLkVYUE9SVCk7XHJcblxyXG4gICAgLy8gVXBncmFkZSBBZ3JpY3VsdHVyZVxyXG4gICAgbnMucHJpbnQoXCJVcGdyYWRlIEFncmljdWx0dXJlIGRpdmlzaW9uXCIpO1xyXG4gICAgdXBncmFkZU9mZmljZXMoXHJcbiAgICAgICAgbnMsXHJcbiAgICAgICAgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxyXG4gICAgICAgIGdlbmVyYXRlT2ZmaWNlU2V0dXBzKFxyXG4gICAgICAgICAgICBjaXRpZXMsXHJcbiAgICAgICAgICAgIG9wdGlvbi5hZ3JpY3VsdHVyZU9mZmljZVNpemUsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5SRVNFQVJDSF9ERVZFTE9QTUVOVCwgY291bnQ6IG9wdGlvbi5hZ3JpY3VsdHVyZU9mZmljZVNpemUgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgQ2hlbWljYWwgZGl2aXNpb25cclxuICAgIGF3YWl0IGNyZWF0ZURpdmlzaW9uKG5zLCBEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsIDMsIDIpO1xyXG4gICAgLy8gSW1wb3J0IG1hdGVyaWFscywgc2VsbC9leHBvcnQgcHJvZHVjZWQgbWF0ZXJpYWxzXHJcbiAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XHJcbiAgICAgICAgLy8gRXhwb3J0IFBsYW50cyBmcm9tIEFncmljdWx0dXJlIHRvIENoZW1pY2FsXHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24uY2FuY2VsRXhwb3J0TWF0ZXJpYWwoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLCBjaXR5LCBEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsIGNpdHksIFwiUGxhbnRzXCIpO1xyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmV4cG9ydE1hdGVyaWFsKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgRGl2aXNpb25OYW1lLkNIRU1JQ0FMLCBjaXR5LCBcIlBsYW50c1wiLCBleHBvcnRTdHJpbmcpO1xyXG5cclxuICAgICAgICAvLyBFeHBvcnQgQ2hlbWljYWxzIGZyb20gQ2hlbWljYWwgdG8gQWdyaWN1bHR1cmVcclxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5jYW5jZWxFeHBvcnRNYXRlcmlhbChEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsIGNpdHksIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgXCJDaGVtaWNhbHNcIik7XHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZXhwb3J0TWF0ZXJpYWwoRGl2aXNpb25OYW1lLkNIRU1JQ0FMLCBjaXR5LCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGNpdHksIFwiQ2hlbWljYWxzXCIsIGV4cG9ydFN0cmluZyk7XHJcbiAgICAgICAgLy8gU2VsbCBDaGVtaWNhbHNcclxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5zZWxsTWF0ZXJpYWwoRGl2aXNpb25OYW1lLkNIRU1JQ0FMLCBjaXR5LCBNYXRlcmlhbE5hbWUuQ0hFTUlDQUxTLCBcIk1BWFwiLCBcIk1QXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRlc3RpbmdUb29scy5zZXRSZXNlYXJjaFBvaW50cyhEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIDU1KTtcclxuICAgIGlmIChlbmFibGVUZXN0aW5nVG9vbHMgJiYgY29uZmlnLmF1dG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGVzdGluZ1Rvb2xzLnNldEVuZXJneUFuZE1vcmFsZShEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIDEwMCwgMTAwKTtcclxuICAgICAgICB0ZXN0aW5nVG9vbHMuc2V0RW5lcmd5QW5kTW9yYWxlKERpdmlzaW9uTmFtZS5DSEVNSUNBTCwgMTAwLCAxMDApO1xyXG4gICAgICAgIHRlc3RpbmdUb29scy5zZXRSZXNlYXJjaFBvaW50cyhEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIG9wdGlvbi53YWl0Rm9yQWdyaWN1bHR1cmVSUCk7XHJcbiAgICAgICAgdGVzdGluZ1Rvb2xzLnNldFJlc2VhcmNoUG9pbnRzKERpdmlzaW9uTmFtZS5DSEVNSUNBTCwgb3B0aW9uLndhaXRGb3JDaGVtaWNhbFJQKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBidXlUZWFBbmRUaHJvd1BhcnR5KG5zLCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUpO1xyXG4gICAgYXdhaXQgYnV5VGVhQW5kVGhyb3dQYXJ0eShucywgRGl2aXNpb25OYW1lLkNIRU1JQ0FMKTtcclxuXHJcbiAgICBidXlBZHZlcnQobnMsIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgOCk7XHJcblxyXG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IENvcnBvcmF0aW9uT3B0aW1pemVyKCkub3B0aW1pemVTdG9yYWdlQW5kRmFjdG9yeShcclxuICAgICAgICBhZ3JpY3VsdHVyZUluZHVzdHJ5RGF0YSxcclxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuU01BUlRfU1RPUkFHRSksXHJcbiAgICAgICAgLy8gQXNzdW1lIHRoYXQgYWxsIHdhcmVob3VzZXMgYXJlIGF0IHRoZSBzYW1lIGxldmVsXHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0V2FyZWhvdXNlKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgQ2l0eU5hbWUuU2VjdG9yMTIpLmxldmVsLFxyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5TTUFSVF9GQUNUT1JJRVMpLFxyXG4gICAgICAgIGdldERpdmlzaW9uUmVzZWFyY2hlcyhucywgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKSxcclxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmZ1bmRzLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgaWYgKGRhdGFBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBvcHRpbWFsIGRhdGFcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpbWFsRGF0YSA9IGRhdGFBcnJheVtkYXRhQXJyYXkubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuU01BUlRfU1RPUkFHRSwgb3B0aW1hbERhdGEuc21hcnRTdG9yYWdlTGV2ZWwpO1xyXG4gICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuU01BUlRfRkFDVE9SSUVTLCBvcHRpbWFsRGF0YS5zbWFydEZhY3Rvcmllc0xldmVsKTtcclxuICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcclxuICAgICAgICB1cGdyYWRlV2FyZWhvdXNlKG5zLCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGNpdHksIG9wdGltYWxEYXRhLndhcmVob3VzZUxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB3YWl0VW50aWxIYXZpbmdFbm91Z2hSZXNlYXJjaFBvaW50cyhcclxuICAgICAgICBucyxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpdmlzaW9uTmFtZTogRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxyXG4gICAgICAgICAgICAgICAgcmVzZWFyY2hQb2ludDogb3B0aW9uLndhaXRGb3JBZ3JpY3VsdHVyZVJQXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpdmlzaW9uTmFtZTogRGl2aXNpb25OYW1lLkNIRU1JQ0FMLFxyXG4gICAgICAgICAgICAgICAgcmVzZWFyY2hQb2ludDogb3B0aW9uLndhaXRGb3JDaGVtaWNhbFJQXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICApO1xyXG5cclxuICAgIGJ1eUFkdmVydChcclxuICAgICAgICBucyxcclxuICAgICAgICBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsXHJcbiAgICAgICAgZ2V0TWF4QWZmb3JkYWJsZUFkVmVydExldmVsKFxyXG4gICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5nZXRIaXJlQWRWZXJ0Q291bnQoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKSxcclxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kc1xyXG4gICAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgYXNzaWduSm9icyhcclxuICAgICAgICBucyxcclxuICAgICAgICBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsXHJcbiAgICAgICAgZ2VuZXJhdGVPZmZpY2VTZXR1cHNGb3JFYXJseVJvdW5kcyhcclxuICAgICAgICAgICAgb3B0aW9uLmFncmljdWx0dXJlT2ZmaWNlU2l6ZSxcclxuICAgICAgICAgICAgb3B0aW9uLmluY3JlYXNlQnVzaW5lc3NcclxuICAgICAgICApXHJcbiAgICApO1xyXG4gICAgYXNzaWduSm9icyhcclxuICAgICAgICBucyxcclxuICAgICAgICBEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsXHJcbiAgICAgICAgZ2VuZXJhdGVPZmZpY2VTZXR1cHNGb3JFYXJseVJvdW5kcygzKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc0ZvckFncmljdWx0dXJlID0gYXdhaXQgZmluZE9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzKFxyXG4gICAgICAgIG5zLFxyXG4gICAgICAgIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSxcclxuICAgICAgICBhZ3JpY3VsdHVyZUluZHVzdHJ5RGF0YSxcclxuICAgICAgICBDaXR5TmFtZS5TZWN0b3IxMixcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIG9wdGlvbi5hZ3JpY3VsdHVyZUJvb3N0TWF0ZXJpYWxzUmF0aW9cclxuICAgICk7XHJcbiAgICBjb25zdCBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc0ZvckNoZW1pY2FsID0gYXdhaXQgZmluZE9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzKFxyXG4gICAgICAgIG5zLFxyXG4gICAgICAgIERpdmlzaW9uTmFtZS5DSEVNSUNBTCxcclxuICAgICAgICBjaGVtaWNhbEluZHVzdHJ5RGF0YSxcclxuICAgICAgICBDaXR5TmFtZS5TZWN0b3IxMixcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIDAuOTVcclxuICAgICk7XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoW1xyXG4gICAgICAgIHN0b2NrTWF0ZXJpYWxzKFxyXG4gICAgICAgICAgICBucyxcclxuICAgICAgICAgICAgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxyXG4gICAgICAgICAgICBnZW5lcmF0ZU1hdGVyaWFsc09yZGVycyhcclxuICAgICAgICAgICAgICAgIGNpdGllcyxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5BSV9DT1JFUywgY291bnQ6IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzRm9yQWdyaWN1bHR1cmVbMF0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5IQVJEV0FSRSwgY291bnQ6IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzRm9yQWdyaWN1bHR1cmVbMV0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5SRUFMX0VTVEFURSwgY291bnQ6IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzRm9yQWdyaWN1bHR1cmVbMl0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5ST0JPVFMsIGNvdW50OiBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc0ZvckFncmljdWx0dXJlWzNdIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApLFxyXG4gICAgICAgIHN0b2NrTWF0ZXJpYWxzKFxyXG4gICAgICAgICAgICBucyxcclxuICAgICAgICAgICAgRGl2aXNpb25OYW1lLkNIRU1JQ0FMLFxyXG4gICAgICAgICAgICBnZW5lcmF0ZU1hdGVyaWFsc09yZGVycyhcclxuICAgICAgICAgICAgICAgIGNpdGllcyxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5BSV9DT1JFUywgY291bnQ6IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzRm9yQ2hlbWljYWxbMF0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5IQVJEV0FSRSwgY291bnQ6IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzRm9yQ2hlbWljYWxbMV0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5SRUFMX0VTVEFURSwgY291bnQ6IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzRm9yQ2hlbWljYWxbMl0gfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5ST0JPVFMsIGNvdW50OiBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc0ZvckNoZW1pY2FsWzNdIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICBdKTtcclxuXHJcbiAgICBpZiAoY29uZmlnLmF1dG8gPT09IHRydWUpIHtcclxuICAgICAgICBhd2FpdCB3YWl0Rm9yT2ZmZXIobnMsIDE1LCAxMCwgMTFlMTIpO1xyXG4gICAgICAgIG5zLnByaW50KGBSb3VuZCAyOiBBY2NlcHQgb2ZmZXI6ICR7bnMuZm9ybWF0TnVtYmVyKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLmZ1bmRzKX1gKTtcclxuICAgICAgICBjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyLmdlbmVyYXRlT2ZmZXJBY2NlcHRhbmNlRXZlbnQobnMpO1xyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmFjY2VwdEludmVzdG1lbnRPZmZlcigpO1xyXG4gICAgICAgIGF3YWl0IHJvdW5kMygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByb3VuZDMob3B0aW9uOiBSb3VuZDNPcHRpb24gPSBQcmVjYWxjdWxhdGVkUm91bmQzT3B0aW9uLk9QVElPTjEpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmIChoYXNEaXZpc2lvbihucywgRGl2aXNpb25OYW1lLlRPQkFDQ08pKSB7XHJcbiAgICAgICAgbnMuc3Bhd24obnMuZ2V0U2NyaXB0TmFtZSgpLCB7IHNwYXduRGVsYXk6IDUwMCB9LCBcIi0taW1wcm92ZUFsbERpdmlzaW9uc1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbnMucHJpbnQoYFVzZTogJHtKU09OLnN0cmluZ2lmeShvcHRpb24pfWApO1xyXG5cclxuICAgIGlmIChlbmFibGVUZXN0aW5nVG9vbHMgJiYgY29uZmlnLmF1dG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmVzZXRTdGF0aXN0aWNzKCk7XHJcbiAgICAgICAgdGVzdGluZ1Rvb2xzLnNldEZ1bmRzKDExZTEyKTtcclxuICAgIH1cclxuXHJcbiAgICBidXlVbmxvY2sobnMsIFVubG9ja05hbWUuTUFSS0VUX1JFU0VBUkNIX0RFTUFORCk7XHJcbiAgICBidXlVbmxvY2sobnMsIFVubG9ja05hbWUuTUFSS0VUX0RBVEFfQ09NUEVUSVRJT04pO1xyXG5cclxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmRpdmlzaW9ucy5sZW5ndGggPT09IDIwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG5lZWQgdG8gc2VsbCAxIGRpdmlzaW9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSBUb2JhY2NvIGRpdmlzaW9uXHJcbiAgICBhd2FpdCBjcmVhdGVEaXZpc2lvbihucywgRGl2aXNpb25OYW1lLlRPQkFDQ08sIDMsIDEpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBkdW1teSBkaXZpc2lvbnNcclxuICAgIGNyZWF0ZUR1bW15RGl2aXNpb25zKG5zLCAyMCAtIG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZGl2aXNpb25zLmxlbmd0aCk7XHJcblxyXG4gICAgLy8gSW1wb3J0IG1hdGVyaWFsc1xyXG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xyXG4gICAgICAgIC8vIFdlIG11c3QgcHJpb3JpdGl6ZSBUb2JhY2NvIG92ZXIgQ2hlbWljYWwgd2hlbiBzZXR0aW5nIHVwIGV4cG9ydCByb3V0ZXNcclxuICAgICAgICAvLyBFeHBvcnQgUGxhbnRzIGZyb20gQWdyaWN1bHR1cmUgdG8gVG9iYWNjb1xyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmNhbmNlbEV4cG9ydE1hdGVyaWFsKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgRGl2aXNpb25OYW1lLlRPQkFDQ08sIGNpdHksIFwiUGxhbnRzXCIpO1xyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmV4cG9ydE1hdGVyaWFsKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgRGl2aXNpb25OYW1lLlRPQkFDQ08sIGNpdHksIFwiUGxhbnRzXCIsIGV4cG9ydFN0cmluZyk7XHJcblxyXG4gICAgICAgIC8vIEV4cG9ydCBQbGFudHMgZnJvbSBBZ3JpY3VsdHVyZSB0byBDaGVtaWNhbFxyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmNhbmNlbEV4cG9ydE1hdGVyaWFsKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgRGl2aXNpb25OYW1lLkNIRU1JQ0FMLCBjaXR5LCBcIlBsYW50c1wiKTtcclxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5leHBvcnRNYXRlcmlhbChEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGNpdHksIERpdmlzaW9uTmFtZS5DSEVNSUNBTCwgY2l0eSwgXCJQbGFudHNcIiwgZXhwb3J0U3RyaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZ3JpY3VsdHVyZURpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKTtcclxuICAgIGNvbnN0IGNoZW1pY2FsRGl2aXNpb24gPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihEaXZpc2lvbk5hbWUuQ0hFTUlDQUwpO1xyXG4gICAgY29uc3QgdG9iYWNjb0RpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xyXG5cclxuICAgIGNvbnN0IGFncmljdWx0dXJlRGl2aXNpb25CdWRnZXQgPSAxNTBlOTtcclxuICAgIGNvbnN0IGNoZW1pY2FsRGl2aXNpb25CdWRnZXQgPSAzMGU5O1xyXG5cclxuICAgIC8vIGRpdmlzaW9uLnByb2R1Y3Rpb25NdWx0IGlzIDAgd2hlbiBkaXZpc2lvbiBpcyBjcmVhdGVkLiBJdCB3aWxsIGJlIHVwZGF0ZWQgaW4gbmV4dCBzdGF0ZS5cclxuICAgIHdoaWxlIChucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihEaXZpc2lvbk5hbWUuVE9CQUNDTykucHJvZHVjdGlvbk11bHQgPT09IDApIHtcclxuICAgICAgICBhd2FpdCBucy5jb3Jwb3JhdGlvbi5uZXh0VXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgaW1wcm92ZVByb2R1Y3REaXZpc2lvbihcclxuICAgICAgICBEaXZpc2lvbk5hbWUuVE9CQUNDTyxcclxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmZ1bmRzICogMC45OVxyXG4gICAgICAgIC0gYWdyaWN1bHR1cmVEaXZpc2lvbkJ1ZGdldCAtIGNoZW1pY2FsRGl2aXNpb25CdWRnZXQgLSAxZTksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgZmFsc2VcclxuICAgICk7XHJcblxyXG4gICAgZGV2ZWxvcE5ld1Byb2R1Y3QoXHJcbiAgICAgICAgbnMsXHJcbiAgICAgICAgRGl2aXNpb25OYW1lLlRPQkFDQ08sXHJcbiAgICAgICAgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHksXHJcbiAgICAgICAgMWU5XHJcbiAgICApO1xyXG4gICAgY29ycG9yYXRpb25FdmVudExvZ2dlci5nZW5lcmF0ZU5ld1Byb2R1Y3RFdmVudChucywgRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xyXG5cclxuICAgIGF3YWl0IGltcHJvdmVTdXBwb3J0RGl2aXNpb24oXHJcbiAgICAgICAgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxyXG4gICAgICAgIGFncmljdWx0dXJlRGl2aXNpb25CdWRnZXQsXHJcbiAgICAgICAgZGVmYXVsdEJ1ZGdldFJhdGlvRm9yU3VwcG9ydERpdmlzaW9uLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGltcHJvdmVTdXBwb3J0RGl2aXNpb24oXHJcbiAgICAgICAgRGl2aXNpb25OYW1lLkNIRU1JQ0FMLFxyXG4gICAgICAgIGNoZW1pY2FsRGl2aXNpb25CdWRnZXQsXHJcbiAgICAgICAgZGVmYXVsdEJ1ZGdldFJhdGlvRm9yU3VwcG9ydERpdmlzaW9uLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChbXHJcbiAgICAgICAgYnV5Qm9vc3RNYXRlcmlhbHMobnMsIGFncmljdWx0dXJlRGl2aXNpb24pLFxyXG4gICAgICAgIGJ1eUJvb3N0TWF0ZXJpYWxzKG5zLCBjaGVtaWNhbERpdmlzaW9uKSxcclxuICAgICAgICBidXlCb29zdE1hdGVyaWFscyhucywgdG9iYWNjb0RpdmlzaW9uKSxcclxuICAgIF0pO1xyXG5cclxuICAgIG5zLnNwYXduKG5zLmdldFNjcmlwdE5hbWUoKSwgeyBzcGF3bkRlbGF5OiA1MDAgfSwgXCItLWltcHJvdmVBbGxEaXZpc2lvbnNcIik7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGltcHJvdmVBbGxEaXZpc2lvbnMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBsZXQgY3ljbGVDb3VudCA9IGNvcnBvcmF0aW9uRXZlbnRMb2dnZXIuY3ljbGU7XHJcbiAgICAvLyBUaGlzIGlzIHVzZWQgZm9yIGNhbGxpbmcgaW1wcm92ZVByb2R1Y3REaXZpc2lvbiB3aXRoIHNraXBVcGdyYWRpbmdPZmZpY2UgPSB0cnVlXHJcbiAgICBjb25zdCBwZW5kaW5nSW1wcm92aW5nUHJvZHVjdERpdmlzaW9uczEgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgLy8gVGhpcyBpcyB1c2VkIGZvciBtYW51YWxseSBjYWxsaW5nIGltcHJvdmVQcm9kdWN0RGl2aXNpb25PZmZpY2VzXHJcbiAgICBjb25zdCBwZW5kaW5nSW1wcm92aW5nUHJvZHVjdERpdmlzaW9uczIgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgY29uc3QgcGVuZGluZ0ltcHJvdmluZ1N1cHBvcnREaXZpc2lvbnMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgY29uc3QgcGVuZGluZ0J1eWluZ0Jvb3N0TWF0ZXJpYWxzRGl2aXNpb25zID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICBjb25zdCBidXlCb29zdE1hdGVyaWFsc0lmTmVlZGVkID0gKGRpdmlzaW9uTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKCFwZW5kaW5nQnV5aW5nQm9vc3RNYXRlcmlhbHNEaXZpc2lvbnMuaGFzKGRpdmlzaW9uTmFtZSkpIHtcclxuICAgICAgICAgICAgcGVuZGluZ0J1eWluZ0Jvb3N0TWF0ZXJpYWxzRGl2aXNpb25zLmFkZChkaXZpc2lvbk5hbWUpO1xyXG4gICAgICAgICAgICBucy5wcmludChgQnV5aW5nIGJvb3N0IG1hdGVyaWFscyBmb3IgZGl2aXNpb246ICR7ZGl2aXNpb25OYW1lfWApO1xyXG4gICAgICAgICAgICBidXlCb29zdE1hdGVyaWFscyhucywgbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBucy5wcmludChgRmluaXNoIGJ1eWluZyBib29zdCBtYXRlcmlhbHMgZm9yIGRpdmlzaW9uOiAke2RpdmlzaW9uTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmdCdXlpbmdCb29zdE1hdGVyaWFsc0RpdmlzaW9ucy5kZWxldGUoZGl2aXNpb25OYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBhd2FpdCBpbXByb3ZlUHJvZHVjdERpdmlzaW9uKFxyXG4gICAgICAgIERpdmlzaW9uTmFtZS5UT0JBQ0NPLFxyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHMgKiAwLjk5IC0gMWU5LFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgYnV5Qm9vc3RNYXRlcmlhbHNJZk5lZWRlZChEaXZpc2lvbk5hbWUuVE9CQUNDTyk7XHJcblxyXG4gICAgbGV0IHJlc2VydmVkRnVuZHMgPSAwO1xyXG4gICAgY29uc3QgaW5jcmVhc2VSZXNlcnZlZEZ1bmRzID0gKGFtb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEluY3JlYXNlIHJlc2VydmVkRnVuZHMgYnkgJHtucy5mb3JtYXROdW1iZXIoYW1vdW50KX1gKTtcclxuICAgICAgICByZXNlcnZlZEZ1bmRzICs9IGFtb3VudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTmV3IHJlc2VydmVkRnVuZHM6ICR7bnMuZm9ybWF0TnVtYmVyKHJlc2VydmVkRnVuZHMpfWApO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGRlY3JlYXNlUmVzZXJ2ZWRGdW5kcyA9IChhbW91bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBEZWNyZWFzZSByZXNlcnZlZEZ1bmRzIGJ5ICR7bnMuZm9ybWF0TnVtYmVyKGFtb3VudCl9YCk7XHJcbiAgICAgICAgcmVzZXJ2ZWRGdW5kcyAtPSBhbW91bnQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE5ldyByZXNlcnZlZEZ1bmRzOiAke25zLmZvcm1hdE51bWJlcihyZXNlcnZlZEZ1bmRzKX1gKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gV2UgdXNlIHByZXBhcmluZ1RvQWNjZXB0T2ZmZXIgdG8gcHJldmVudCBvcHRpbWl6aW5nIG9mZmljZSByaWdodCBiZWZvcmUgd2Ugc3dpdGNoIGFsbCBvZmZpY2VzIHRvIFwicHJvZml0XCIgc2V0dXAuXHJcbiAgICAvLyBUaGlzIGVsaW1pbmF0ZXMgYSBwb3RlbnRpYWwgcmFjZSBjb25kaXRpb24uXHJcbiAgICBsZXQgcHJlcGFyaW5nVG9BY2NlcHRPZmZlciA9IGZhbHNlO1xyXG4gICAgLy8gbm9pbnNwZWN0aW9uIEluZmluaXRlTG9vcEpTXHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICsrY3ljbGVDb3VudDtcclxuICAgICAgICBjb25zdCBjdXJyZW50Um91bmQgPSBucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZDtcclxuICAgICAgICBjb25zdCBwcm9maXQgPSBnZXRQcm9maXQobnMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgY3ljbGVDb3VudDogJHtjeWNsZUNvdW50fS4gRnVuZHM6ICR7bnMuZm9ybWF0TnVtYmVyKG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHMpfS4gUHJvZml0OiAke25zLmZvcm1hdE51bWJlcihwcm9maXQpfWBcclxuICAgICAgICAgICAgKyAoKGN1cnJlbnRSb3VuZCA8PSA0KSA/IGAuIE9mZmVyOiAke25zLmZvcm1hdE51bWJlcihucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5mdW5kcyl9YCA6IFwiXCIpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYXdhaXQgYnV5UmVzZWFyY2goKTtcclxuXHJcbiAgICAgICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKERpdmlzaW9uTmFtZS5UT0JBQ0NPKS5hd2FyZW5lc3MgIT09IE51bWJlci5NQVhfVkFMVUUpIHtcclxuICAgICAgICAgICAgLy8gQnV5IFdpbHNvbiBBU0FQIGlmIHdlIGNhbiBhZmZvcmQgaXQgd2l0aCB0aGUgbGFzdCBjeWNsZSdzIHByb2ZpdC4gQnVkZ2V0IGZvciBXaWxzb24gYW5kIEFkdmVydCBpcyBqdXN0IHBhcnQgb2ZcclxuICAgICAgICAgICAgLy8gY3VycmVudCBmdW5kcywgaXQncyB1c3VhbGx5IHRvbyBsb3cgZm9yIG91ciBiZW5jaG1hcmsgdG8gY2FsY3VsYXRlIHRoZSBvcHRpbWFsIGNvbWJpbmF0aW9uLiBUaGUgYmVuY2htYXJrIGlzXHJcbiAgICAgICAgICAgIC8vIG1vc3Qgc3VpdGFibGUgZm9yIGJpZy1idWRnZXQgc2l0dWF0aW9uLCBsaWtlIGFmdGVyIGFjY2VwdGluZyBpbnZlc3RtZW50IG9mZmVyLlxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50V2lsc29uTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuV0lMU09OX0FOQUxZVElDUyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFdpbHNvbkxldmVsID0gZ2V0TWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5XSUxTT05fQU5BTFlUSUNTLCBjdXJyZW50V2lsc29uTGV2ZWwsIHByb2ZpdCk7XHJcbiAgICAgICAgICAgIGlmIChtYXhXaWxzb25MZXZlbCA+IGN1cnJlbnRXaWxzb25MZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuV0lMU09OX0FOQUxZVElDUywgbWF4V2lsc29uTGV2ZWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBQcmlvcml0aXplIEFkdmVydFxyXG4gICAgICAgICAgICBpZiAocHJvZml0ID49IHRocmVzaG9sZE9mRm9jdXNpbmdPbkFkdmVydCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFkdmVydExldmVsID0gbnMuY29ycG9yYXRpb24uZ2V0SGlyZUFkVmVydENvdW50KERpdmlzaW9uTmFtZS5UT0JBQ0NPKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1heEFkdmVydExldmVsID0gZ2V0TWF4QWZmb3JkYWJsZUFkVmVydExldmVsKFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBZHZlcnRMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAobnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcyAtIHJlc2VydmVkRnVuZHMpICogMC42XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1heEFkdmVydExldmVsID4gY3VycmVudEFkdmVydExldmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV5QWR2ZXJ0KG5zLCBEaXZpc2lvbk5hbWUuVE9CQUNDTywgbWF4QWR2ZXJ0TGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0b3RhbEZ1bmRzID0gbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcyAtIHJlc2VydmVkRnVuZHM7XHJcbiAgICAgICAgbGV0IGF2YWlsYWJsZUZ1bmRzID0gdG90YWxGdW5kcztcclxuXHJcbiAgICAgICAgLy8gSW4gcm91bmQgMyBhbmQgNCwgd2Ugb25seSBkZXZlbG9wIHVwIHRvIG1heE51bWJlck9mUHJvZHVjdHNcclxuICAgICAgICBsZXQgbWF4TnVtYmVyT2ZQcm9kdWN0cyA9IG1heE51bWJlck9mUHJvZHVjdHNJblJvdW5kMztcclxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID09PSA0KSB7XHJcbiAgICAgICAgICAgIG1heE51bWJlck9mUHJvZHVjdHMgPSBtYXhOdW1iZXJPZlByb2R1Y3RzSW5Sb3VuZDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50Um91bmQgPT09IDMgfHwgY3VycmVudFJvdW5kID09PSA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZEFycmF5ID0gZ2V0UHJvZHVjdElkQXJyYXkobnMsIERpdmlzaW9uTmFtZS5UT0JBQ0NPKTtcclxuICAgICAgICAgICAgbGV0IG51bWJlck9mRGV2ZWxvcGVkUHJvZHVjdHMgPSAwO1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdElkQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZEZXZlbG9wZWRQcm9kdWN0cyA9IE1hdGgubWF4KC4uLnByb2R1Y3RJZEFycmF5KSArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG51bWJlck9mRGV2ZWxvcGVkUHJvZHVjdHMgPj0gbWF4TnVtYmVyT2ZQcm9kdWN0cykge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYWxsIHByb2R1Y3RzIGFyZSBmaW5pc2hlZCwgd2Ugd2FpdCBmb3IgMTUgY3ljbGVzLCB0aGVuIGFjY2VwdCBpbnZlc3RtZW50IG9mZmVyLlxyXG4gICAgICAgICAgICAgICAgLy8gV2UgdGFrZSBhIFwic25hcHNob3RcIiBvZiBwcm9kdWN0IGxpc3QgaGVyZS4gV2hlbiB3ZSB1c2UgdGhlIHN0YW5kYXJkIHNldHVwLCB3ZSB1c2Ugb25seSAxIHNsb3Qgb2ZcclxuICAgICAgICAgICAgICAgIC8vIHByb2R1Y3Qgc2xvdHMgd2hpbGUgd2FpdGluZyBmb3Igb2ZmZXIuIEluIHRoYXQgY2FzZSwgd2UgY2FuIGRldmVsb3AgdGhlIG5leHQgcHJvZHVjdCB3aGlsZSB3YWl0aW5nLlxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBcInNuYXBzaG90XCIgZW5zdXJlcyB0aGUgcHJvZHVjdCBsaXN0IHRoYXQgd2UgdXNlIHRvIGNhbGN1bGF0ZSB0aGUgXCJwcm9maXRcIiBzZXR1cCBkb2VzIG5vdCBpbmNsdWRlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgZGV2ZWxvcGluZyBwcm9kdWN0LlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihEaXZpc2lvbk5hbWUuVE9CQUNDTykucHJvZHVjdHM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxQcm9kdWN0c0FyZUZpbmlzaGVkID0gcHJvZHVjdHMuZXZlcnkocHJvZHVjdE5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBucy5jb3Jwb3JhdGlvbi5nZXRQcm9kdWN0KERpdmlzaW9uTmFtZS5UT0JBQ0NPLCBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSwgcHJvZHVjdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmRldmVsb3BtZW50UHJvZ3Jlc3MgPT09IDEwMDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0TmV3ZXN0UHJvZHVjdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnMuY29ycG9yYXRpb24uZ2V0UHJvZHVjdChEaXZpc2lvbk5hbWUuVE9CQUNDTywgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHksIHByb2R1Y3RzW3Byb2R1Y3RzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdlc3RQcm9kdWN0ID0gZ2V0TmV3ZXN0UHJvZHVjdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmVwYXJpbmdUb0FjY2VwdE9mZmVyXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgbmV3ZXN0UHJvZHVjdC5kZXZlbG9wbWVudFByb2dyZXNzID4gOThcclxuICAgICAgICAgICAgICAgICAgICAmJiBuZXdlc3RQcm9kdWN0LmRldmVsb3BtZW50UHJvZ3Jlc3MgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVwYXJpbmdUb0FjY2VwdE9mZmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhbGxQcm9kdWN0c0FyZUZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0ID0gdG90YWxGdW5kcyAqIDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvZHVjdE5hbWUgPSBkZXZlbG9wTmV3UHJvZHVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERpdmlzaW9uTmFtZS5UT0JBQ0NPLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvZHVjdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29ycG9yYXRpb25FdmVudExvZ2dlci5nZW5lcmF0ZU5ld1Byb2R1Y3RFdmVudChucywgRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVGdW5kcyAtPSBwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IHVudGlsIG5ld2VzdCBwcm9kdWN0J3MgZWZmZWN0aXZlUmF0aW5nIGlzIG5vdCAwXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGdldE5ld2VzdFByb2R1Y3QoKS5lZmZlY3RpdmVSYXRpbmcgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2FpdEZvck51bWJlck9mQ3ljbGVzKG5zLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKytjeWNsZUNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3dpdGNoIGFsbCBvZmZpY2VzIHRvIFwicHJvZml0XCIgc2V0dXAgdG8gbWF4aW1pemUgdGhlIG9mZmVyXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc3dpdGNoQWxsT2ZmaWNlc1RvUHJvZml0U2V0dXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYmFjY29JbmR1c3RyeURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG11c3QgdXNlIHRoZSBsYXRlc3QgZGF0YSBvZiBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE5ld2VzdFByb2R1Y3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBleHBlY3RlZE9mZmVyID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJvdW5kID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkT2ZmZXIgPSAxZTE2O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJvdW5kID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkT2ZmZXIgPSAxZTIwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q3ljbGUgPSBjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyLmN5Y2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHdhaXRGb3JPZmZlcihucywgMTAsIDUsIGV4cGVjdGVkT2ZmZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN5Y2xlQ291bnQgKz0gKGNvcnBvcmF0aW9uRXZlbnRMb2dnZXIuY3ljbGUgLSBjdXJyZW50Q3ljbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgQ3ljbGU6ICR7Y3ljbGVDb3VudH0uIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBgQWNjZXB0IG9mZmVyOiAke25zLmZvcm1hdE51bWJlcihucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5mdW5kcyl9YFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ycG9yYXRpb25FdmVudExvZ2dlci5nZW5lcmF0ZU9mZmVyQWNjZXB0YW5jZUV2ZW50KG5zKTtcclxuICAgICAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5hY2NlcHRJbnZlc3RtZW50T2ZmZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmVwYXJpbmdUb0FjY2VwdE9mZmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNraXAgZGV2ZWxvcGluZyBuZXcgcHJvZHVjdCBpZiB3ZSBhcmUgYXQgdGhlIG5lYXIgZW5kIG9mIGV4cG9uZW50aWFsIHBoYXNlXHJcbiAgICAgICAgaWYgKHByb2ZpdCA8PSAxZTQwIHx8IGF2YWlsYWJsZUZ1bmRzID49IDFlNzIpIHtcclxuICAgICAgICAgICAgbGV0IHByb2R1Y3REZXZlbG9wbWVudEJ1ZGdldCA9IHRvdGFsRnVuZHMgKiAwLjAxO1xyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSB1c2UgYXQgbGVhc3QgMWU3MiBmb3IgcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0IGFmdGVyIGV4cG9uZW50aWFsIHBoYXNlXHJcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVGdW5kcyA+PSAxZTcyKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXQgPSBNYXRoLm1heChwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXQsIDFlNzIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2R1Y3ROYW1lID0gZGV2ZWxvcE5ld1Byb2R1Y3QoXHJcbiAgICAgICAgICAgICAgICBucyxcclxuICAgICAgICAgICAgICAgIERpdmlzaW9uTmFtZS5UT0JBQ0NPLFxyXG4gICAgICAgICAgICAgICAgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHksXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG5ld1Byb2R1Y3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGV2ZWxvcCAke25ld1Byb2R1Y3ROYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgY29ycG9yYXRpb25FdmVudExvZ2dlci5nZW5lcmF0ZU5ld1Byb2R1Y3RFdmVudChucywgRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xyXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlRnVuZHMgLT0gcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihEaXZpc2lvbk5hbWUuVE9CQUNDTykucHJvZHVjdHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFByb2R1Y3RzQXJlRmluaXNoZWQgPSBwcm9kdWN0cy5ldmVyeShwcm9kdWN0TmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbnMuY29ycG9yYXRpb24uZ2V0UHJvZHVjdChEaXZpc2lvbk5hbWUuVE9CQUNDTywgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHksIHByb2R1Y3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmRldmVsb3BtZW50UHJvZ3Jlc3MgPT09IDEwMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChhbGxQcm9kdWN0c0FyZUZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyLmdlbmVyYXRlU2tpcERldmVsb3BpbmdOZXdQcm9kdWN0RXZlbnQobnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0b2JhY2NvSGFzUmV2ZW51ZSA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKERpdmlzaW9uTmFtZS5UT0JBQ0NPKS5sYXN0Q3ljbGVSZXZlbnVlID4gMDtcclxuICAgICAgICBjb25zdCBidWRnZXRGb3JUb2JhY2NvRGl2aXNpb24gPSB0b3RhbEZ1bmRzICogMC45O1xyXG4gICAgICAgIGlmICh0b2JhY2NvSGFzUmV2ZW51ZVxyXG4gICAgICAgICAgICAmJiAoY3ljbGVDb3VudCAlIDUgPT09IDAgfHwgbmVlZFRvVXBncmFkZURpdmlzaW9uKERpdmlzaW9uTmFtZS5UT0JBQ0NPLCBidWRnZXRGb3JUb2JhY2NvRGl2aXNpb24pKSkge1xyXG4gICAgICAgICAgICBhdmFpbGFibGVGdW5kcyAtPSBidWRnZXRGb3JUb2JhY2NvRGl2aXNpb247XHJcblxyXG4gICAgICAgICAgICAvLyBTa2lwIHVwZ3JhZGluZyBvZmZpY2UgaW4gdGhlIGZvbGxvd2luZyBmdW5jdGlvbiBjYWxsLiBXZSBuZWVkIHRvIGJ1eSBjb3Jwb3JhdGlvbidzIHVwZ3JhZGVzIEFTQVAsIHNvIHdlXHJcbiAgICAgICAgICAgIC8vIHdpbGwgdXBncmFkZSBvZmZpY2VzIGluIGEgc2VwYXJhdGUgY2FsbCBsYXRlci5cclxuICAgICAgICAgICAgaWYgKCFwZW5kaW5nSW1wcm92aW5nUHJvZHVjdERpdmlzaW9uczEuaGFzKERpdmlzaW9uTmFtZS5UT0JBQ0NPKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9uT2ZmaWNlc0J1ZGdldCA9IGJ1ZGdldEZvclRvYmFjY29EaXZpc2lvbiAqICgxIC0gYnVkZ2V0UmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24ub2ZmaWNlKTtcclxuICAgICAgICAgICAgICAgIGluY3JlYXNlUmVzZXJ2ZWRGdW5kcyhub25PZmZpY2VzQnVkZ2V0KTtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmdJbXByb3ZpbmdQcm9kdWN0RGl2aXNpb25zMS5zZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgRGl2aXNpb25OYW1lLlRPQkFDQ08sXHJcbiAgICAgICAgICAgICAgICAgICAgbm9uT2ZmaWNlc0J1ZGdldFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVcGdyYWRlICR7RGl2aXNpb25OYW1lLlRPQkFDQ099LTEsIGJ1ZGdldDogJHtucy5mb3JtYXROdW1iZXIobm9uT2ZmaWNlc0J1ZGdldCl9YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRpbWUoRGl2aXNpb25OYW1lLlRPQkFDQ08gKyBcIi0xXCIpO1xyXG4gICAgICAgICAgICAgICAgaW1wcm92ZVByb2R1Y3REaXZpc2lvbihcclxuICAgICAgICAgICAgICAgICAgICBEaXZpc2lvbk5hbWUuVE9CQUNDTyxcclxuICAgICAgICAgICAgICAgICAgICBidWRnZXRGb3JUb2JhY2NvRGl2aXNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKS5jYXRjaChyZWFzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIG9jY3VycmVkIHdoZW4gdXBncmFkaW5nICR7RGl2aXNpb25OYW1lLlRPQkFDQ099YCwgcmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGltZUVuZChEaXZpc2lvbk5hbWUuVE9CQUNDTyArIFwiLTFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjcmVhc2VSZXNlcnZlZEZ1bmRzKHBlbmRpbmdJbXByb3ZpbmdQcm9kdWN0RGl2aXNpb25zMS5nZXQoRGl2aXNpb25OYW1lLlRPQkFDQ08pID8/IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdJbXByb3ZpbmdQcm9kdWN0RGl2aXNpb25zMS5kZWxldGUoRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1eUJvb3N0TWF0ZXJpYWxzSWZOZWVkZWQoRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVwZ3JhZGUgb2ZmaWNlcyBvZiBwcm9kdWN0IGRpdmlzaW9uXHJcbiAgICAgICAgICAgIGlmICghcGVuZGluZ0ltcHJvdmluZ1Byb2R1Y3REaXZpc2lvbnMyLmhhcyhEaXZpc2lvbk5hbWUuVE9CQUNDTylcclxuICAgICAgICAgICAgICAgICYmICFwcmVwYXJpbmdUb0FjY2VwdE9mZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvZmZpY2VzQnVkZ2V0ID0gYnVkZ2V0Rm9yVG9iYWNjb0RpdmlzaW9uICogYnVkZ2V0UmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24ub2ZmaWNlO1xyXG4gICAgICAgICAgICAgICAgaW5jcmVhc2VSZXNlcnZlZEZ1bmRzKG9mZmljZXNCdWRnZXQpO1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0ltcHJvdmluZ1Byb2R1Y3REaXZpc2lvbnMyLnNldChEaXZpc2lvbk5hbWUuVE9CQUNDTywgb2ZmaWNlc0J1ZGdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXBncmFkZSAke0RpdmlzaW9uTmFtZS5UT0JBQ0NPfS0yLCBidWRnZXQ6ICR7bnMuZm9ybWF0TnVtYmVyKG9mZmljZXNCdWRnZXQpfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS50aW1lKERpdmlzaW9uTmFtZS5UT0JBQ0NPICsgXCItMlwiKTtcclxuICAgICAgICAgICAgICAgIGltcHJvdmVQcm9kdWN0RGl2aXNpb25PZmZpY2VzKFxyXG4gICAgICAgICAgICAgICAgICAgIERpdmlzaW9uTmFtZS5UT0JBQ0NPLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYmFjY29JbmR1c3RyeURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgb2ZmaWNlc0J1ZGdldCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKS5jYXRjaChyZWFzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIG9jY3VycmVkIHdoZW4gdXBncmFkaW5nICR7RGl2aXNpb25OYW1lLlRPQkFDQ099YCwgcmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGltZUVuZChEaXZpc2lvbk5hbWUuVE9CQUNDTyArIFwiLTJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjcmVhc2VSZXNlcnZlZEZ1bmRzKHBlbmRpbmdJbXByb3ZpbmdQcm9kdWN0RGl2aXNpb25zMi5nZXQoRGl2aXNpb25OYW1lLlRPQkFDQ08pID8/IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdJbXByb3ZpbmdQcm9kdWN0RGl2aXNpb25zMi5kZWxldGUoRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1ZGdldEZvckFncmljdWx0dXJlRGl2aXNpb24gPSBNYXRoLm1heChcclxuICAgICAgICAgICAgTWF0aC5taW4ocHJvZml0ICogKGN1cnJlbnRSb3VuZCA8PSA0ID8gMC45IDogMC45OSksIHRvdGFsRnVuZHMgKiAwLjA5LCBhdmFpbGFibGVGdW5kcyksXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICh0b2JhY2NvSGFzUmV2ZW51ZVxyXG4gICAgICAgICAgICAmJiAoY3ljbGVDb3VudCAlIDEwID09PSAwIHx8IG5lZWRUb1VwZ3JhZGVEaXZpc2lvbihEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGJ1ZGdldEZvckFncmljdWx0dXJlRGl2aXNpb24pKVxyXG4gICAgICAgICAgICAmJiAhcGVuZGluZ0ltcHJvdmluZ1N1cHBvcnREaXZpc2lvbnMuaGFzKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSkpIHtcclxuICAgICAgICAgICAgYXZhaWxhYmxlRnVuZHMgLT0gYnVkZ2V0Rm9yQWdyaWN1bHR1cmVEaXZpc2lvbjtcclxuICAgICAgICAgICAgaW5jcmVhc2VSZXNlcnZlZEZ1bmRzKGJ1ZGdldEZvckFncmljdWx0dXJlRGl2aXNpb24pO1xyXG4gICAgICAgICAgICBwZW5kaW5nSW1wcm92aW5nU3VwcG9ydERpdmlzaW9ucy5zZXQoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLCBidWRnZXRGb3JBZ3JpY3VsdHVyZURpdmlzaW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFVwZ3JhZGUgJHtEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkV9LCBidWRnZXQ6ICR7bnMuZm9ybWF0TnVtYmVyKGJ1ZGdldEZvckFncmljdWx0dXJlRGl2aXNpb24pfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLnRpbWUoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKTtcclxuICAgICAgICAgICAgaW1wcm92ZVN1cHBvcnREaXZpc2lvbihcclxuICAgICAgICAgICAgICAgIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSxcclxuICAgICAgICAgICAgICAgIGJ1ZGdldEZvckFncmljdWx0dXJlRGl2aXNpb24sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0QnVkZ2V0UmF0aW9Gb3JTdXBwb3J0RGl2aXNpb24sXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICkuY2F0Y2gocmVhc29uID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIG9jY3VycmVkIHdoZW4gdXBncmFkaW5nICR7RGl2aXNpb25OYW1lLkFHUklDVUxUVVJFfWAsIHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS50aW1lRW5kKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSk7XHJcbiAgICAgICAgICAgICAgICBkZWNyZWFzZVJlc2VydmVkRnVuZHMocGVuZGluZ0ltcHJvdmluZ1N1cHBvcnREaXZpc2lvbnMuZ2V0KERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSkgPz8gMCk7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nSW1wcm92aW5nU3VwcG9ydERpdmlzaW9ucy5kZWxldGUoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKTtcclxuICAgICAgICAgICAgICAgIGJ1eUJvb3N0TWF0ZXJpYWxzSWZOZWVkZWQoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1ZGdldEZvckNoZW1pY2FsRGl2aXNpb24gPSBNYXRoLm1heChcclxuICAgICAgICAgICAgTWF0aC5taW4ocHJvZml0ICogKGN1cnJlbnRSb3VuZCA8PSA0ID8gMC4xIDogMC4wMSksIHRvdGFsRnVuZHMgKiAwLjAxLCBhdmFpbGFibGVGdW5kcyksXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICh0b2JhY2NvSGFzUmV2ZW51ZVxyXG4gICAgICAgICAgICAmJiAoY3ljbGVDb3VudCAlIDE1ID09PSAwIHx8IG5lZWRUb1VwZ3JhZGVEaXZpc2lvbihEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsIGJ1ZGdldEZvckNoZW1pY2FsRGl2aXNpb24pKVxyXG4gICAgICAgICAgICAmJiAhcGVuZGluZ0ltcHJvdmluZ1N1cHBvcnREaXZpc2lvbnMuaGFzKERpdmlzaW9uTmFtZS5DSEVNSUNBTCkpIHtcclxuICAgICAgICAgICAgYXZhaWxhYmxlRnVuZHMgLT0gYnVkZ2V0Rm9yQ2hlbWljYWxEaXZpc2lvbjtcclxuICAgICAgICAgICAgaW5jcmVhc2VSZXNlcnZlZEZ1bmRzKGJ1ZGdldEZvckNoZW1pY2FsRGl2aXNpb24pO1xyXG4gICAgICAgICAgICBwZW5kaW5nSW1wcm92aW5nU3VwcG9ydERpdmlzaW9ucy5zZXQoRGl2aXNpb25OYW1lLkNIRU1JQ0FMLCBidWRnZXRGb3JDaGVtaWNhbERpdmlzaW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFVwZ3JhZGUgJHtEaXZpc2lvbk5hbWUuQ0hFTUlDQUx9LCBidWRnZXQ6ICR7bnMuZm9ybWF0TnVtYmVyKGJ1ZGdldEZvckNoZW1pY2FsRGl2aXNpb24pfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLnRpbWUoRGl2aXNpb25OYW1lLkNIRU1JQ0FMKTtcclxuICAgICAgICAgICAgaW1wcm92ZVN1cHBvcnREaXZpc2lvbihcclxuICAgICAgICAgICAgICAgIERpdmlzaW9uTmFtZS5DSEVNSUNBTCxcclxuICAgICAgICAgICAgICAgIGJ1ZGdldEZvckNoZW1pY2FsRGl2aXNpb24sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0QnVkZ2V0UmF0aW9Gb3JTdXBwb3J0RGl2aXNpb24sXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICkuY2F0Y2gocmVhc29uID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIG9jY3VycmVkIHdoZW4gdXBncmFkaW5nICR7RGl2aXNpb25OYW1lLkNIRU1JQ0FMfWAsIHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS50aW1lRW5kKERpdmlzaW9uTmFtZS5DSEVNSUNBTCk7XHJcbiAgICAgICAgICAgICAgICBkZWNyZWFzZVJlc2VydmVkRnVuZHMocGVuZGluZ0ltcHJvdmluZ1N1cHBvcnREaXZpc2lvbnMuZ2V0KERpdmlzaW9uTmFtZS5DSEVNSUNBTCkgPz8gMCk7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nSW1wcm92aW5nU3VwcG9ydERpdmlzaW9ucy5kZWxldGUoRGl2aXNpb25OYW1lLkNIRU1JQ0FMKTtcclxuICAgICAgICAgICAgICAgIGJ1eUJvb3N0TWF0ZXJpYWxzSWZOZWVkZWQoRGl2aXNpb25OYW1lLkNIRU1JQ0FMKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWNlZFBsYW50cyA9IG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHksIE1hdGVyaWFsTmFtZS5QTEFOVFMpLnByb2R1Y3Rpb25BbW91bnQ7XHJcbiAgICAgICAgY29uc3QgY29uc3VtZWRQbGFudHMgPSBNYXRoLmFicyhcclxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoRGl2aXNpb25OYW1lLlRPQkFDQ08sIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LCBNYXRlcmlhbE5hbWUuUExBTlRTKS5wcm9kdWN0aW9uQW1vdW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoY29uc3VtZWRQbGFudHMgPiAwICYmIHByb2R1Y2VkUGxhbnRzIC8gY29uc3VtZWRQbGFudHMgPCAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYHBsYW50cyByYXRpbzogJHtwcm9kdWNlZFBsYW50cyAvIGNvbnN1bWVkUGxhbnRzfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgd2FpdEZvck5leHRUaW1lU3RhdGVIYXBwZW5zKG5zLCBDb3JwU3RhdGUuU1RBUlQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZWVkVG9VcGdyYWRlRGl2aXNpb24oZGl2aXNpb25OYW1lOiBzdHJpbmcsIGJ1ZGdldDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBvZmZpY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRPZmZpY2UoZGl2aXNpb25OYW1lLCBDaXR5TmFtZS5TZWN0b3IxMik7XHJcbiAgICBsZXQgZXhwZWN0ZWRVcGdyYWRlU2l6ZSA9IDMwO1xyXG4gICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLnJvdW5kIDw9IDQpIHtcclxuICAgICAgICBleHBlY3RlZFVwZ3JhZGVTaXplID0gTWF0aC5taW4ob2ZmaWNlLnNpemUgLyAyLCAzMCk7XHJcbiAgICB9XHJcbiAgICAvLyBBc3N1bWUgdGhhdCB3ZSB1c2UgZW50aXJlIGJ1ZGdldCB0byB1cGdyYWRlIG9mZmljZXMuIFRoaXMgaXMgbm90IGNvcnJlY3QsIGJ1dCBpdCBzaW1wbGlmaWVzIHRoZSBjYWxjdWxhdGlvbi5cclxuICAgIGNvbnN0IG1heE9mZmljZVNpemUgPSBnZXRNYXhBZmZvcmRhYmxlT2ZmaWNlU2l6ZShvZmZpY2Uuc2l6ZSwgYnVkZ2V0IC8gNik7XHJcbiAgICBjb25zdCBuZWVkVG9VcGdyYWRlID0gbWF4T2ZmaWNlU2l6ZSA+PSBvZmZpY2Uuc2l6ZSArIGV4cGVjdGVkVXBncmFkZVNpemU7XHJcbiAgICBpZiAobmVlZFRvVXBncmFkZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXHJcbiAgICAgICAgICAgIGBuZWVkVG9VcGdyYWRlICR7ZGl2aXNpb25OYW1lfSwgYnVkZ2V0OiAke25zLmZvcm1hdE51bWJlcihidWRnZXQpfSwgb2ZmaWNlLnNpemU6ICR7b2ZmaWNlLnNpemV9LCBgXHJcbiAgICAgICAgICAgICsgYG1heE9mZmljZVNpemU6ICR7bWF4T2ZmaWNlU2l6ZX19YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmVlZFRvVXBncmFkZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QmFsYW5jaW5nTW9kaWZpZXJGb3JQcm9maXRQcm9ncmVzcygpOiBCYWxhbmNpbmdNb2RpZmllckZvclByb2ZpdFByb2dyZXNzIHtcclxuICAgIGlmIChnZXRQcm9maXQobnMpID49IDFlMzUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9maXQ6IDEsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAyLjVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9maXQ6IDEsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IDVcclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN3aXRjaEFsbE9mZmljZXNUb1Byb2ZpdFNldHVwKGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSwgbmV3ZXN0UHJvZHVjdDogUHJvZHVjdCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgbWFpbk9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShEaXZpc2lvbk5hbWUuVE9CQUNDTywgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHkpO1xyXG4gICAgY29uc3Qgb2ZmaWNlU2V0dXA6IE9mZmljZVNldHVwID0ge1xyXG4gICAgICAgIGNpdHk6IG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LFxyXG4gICAgICAgIHNpemU6IG1haW5PZmZpY2UubnVtRW1wbG95ZWVzLFxyXG4gICAgICAgIGpvYnM6IHtcclxuICAgICAgICAgICAgT3BlcmF0aW9uczogMCxcclxuICAgICAgICAgICAgRW5naW5lZXI6IDAsXHJcbiAgICAgICAgICAgIEJ1c2luZXNzOiAwLFxyXG4gICAgICAgICAgICBNYW5hZ2VtZW50OiAwLFxyXG4gICAgICAgICAgICBcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIjogMCxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKHVzZVByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXApIHtcclxuICAgICAgICBjb25zdCBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwID1cclxuICAgICAgICAgICAgKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLnJvdW5kID09PSAzKVxyXG4gICAgICAgICAgICAgICAgPyBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwT2ZSb3VuZDNcclxuICAgICAgICAgICAgICAgIDogcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9maXRTZXR1cE9mUm91bmQ0O1xyXG4gICAgICAgIG9mZmljZVNldHVwLmpvYnMuT3BlcmF0aW9ucyA9IE1hdGguZmxvb3Iob2ZmaWNlU2V0dXAuc2l6ZSAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXAub3BlcmF0aW9ucyk7XHJcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5FbmdpbmVlciA9IE1hdGguZmxvb3Iob2ZmaWNlU2V0dXAuc2l6ZSAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXAuZW5naW5lZXIpO1xyXG4gICAgICAgIG9mZmljZVNldHVwLmpvYnMuQnVzaW5lc3MgPSBNYXRoLmZsb29yKG9mZmljZVNldHVwLnNpemUgKiBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwLmJ1c2luZXNzKTtcclxuICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLk1hbmFnZW1lbnQgPSBvZmZpY2VTZXR1cC5zaXplIC0gKG9mZmljZVNldHVwLmpvYnMuT3BlcmF0aW9ucyArIG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgKyBvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gYXdhaXQgb3B0aW1pemVPZmZpY2UoXHJcbiAgICAgICAgICAgIG5zeCxcclxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oRGl2aXNpb25OYW1lLlRPQkFDQ08pLFxyXG4gICAgICAgICAgICBpbmR1c3RyeURhdGEsXHJcbiAgICAgICAgICAgIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LFxyXG4gICAgICAgICAgICBtYWluT2ZmaWNlLm51bUVtcGxveWVlcyxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgbmV3ZXN0UHJvZHVjdCxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgXCJwcm9maXRcIixcclxuICAgICAgICAgICAgZ2V0QmFsYW5jaW5nTW9kaWZpZXJGb3JQcm9maXRQcm9ncmVzcygpLFxyXG4gICAgICAgICAgICAwLCAvLyBEbyBub3QgcmVydW5cclxuICAgICAgICAgICAgMjAsIC8vIEhhbGYgb2YgZGVmYXVsdFBlcmZvcm1hbmNlTW9kaWZpZXJGb3JPZmZpY2VCZW5jaG1hcmtcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG9wdGltYWxEYXRhID0gZGF0YUFycmF5W2RhdGFBcnJheS5sZW5ndGggLSAxXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgT3B0aW1pemUgYWxsIG9mZmljZXMgZm9yIFwicHJvZml0XCJgLCBvcHRpbWFsRGF0YSk7XHJcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icyA9IHtcclxuICAgICAgICAgICAgT3BlcmF0aW9uczogb3B0aW1hbERhdGEub3BlcmF0aW9ucyxcclxuICAgICAgICAgICAgRW5naW5lZXI6IG9wdGltYWxEYXRhLmVuZ2luZWVyLFxyXG4gICAgICAgICAgICBCdXNpbmVzczogb3B0aW1hbERhdGEuYnVzaW5lc3MsXHJcbiAgICAgICAgICAgIE1hbmFnZW1lbnQ6IG9wdGltYWxEYXRhLm1hbmFnZW1lbnQsXHJcbiAgICAgICAgICAgIFwiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBhc3NpZ25Kb2JzKFxyXG4gICAgICAgIG5zLFxyXG4gICAgICAgIERpdmlzaW9uTmFtZS5UT0JBQ0NPLFxyXG4gICAgICAgIFtvZmZpY2VTZXR1cF1cclxuICAgICk7XHJcbiAgICAvLyBSZXVzZSB0aGUgcmF0aW8gb2YgbWFpbiBvZmZpY2UuIFRoaXMgaXMgbm90IGVudGlyZWx5IGNvcnJlY3QsIGJ1dCBpdCdzIHN0aWxsIGdvb2QgZW5vdWdoLiBXZSBkb1xyXG4gICAgLy8gdGhpcyB0byByZWR1Y2UgdGhlIGNvbXB1dGluZyB0aW1lIG5lZWRlZCB0byBmaW5kIGFuZCBzd2l0Y2ggdG8gdGhlIG9wdGltYWwgb2ZmaWNlIHNldHVwcy5cclxuICAgIGZvciAoY29uc3QgY2l0eSBvZiBzdXBwb3J0UHJvZHVjdERldmVsb3BtZW50Q2l0aWVzKSB7XHJcbiAgICAgICAgY29uc3Qgb2ZmaWNlID0gbnMuY29ycG9yYXRpb24uZ2V0T2ZmaWNlKERpdmlzaW9uTmFtZS5UT0JBQ0NPLCBjaXR5KTtcclxuICAgICAgICBjb25zdCBvcGVyYXRpb25zID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3Iob2ZmaWNlLm51bUVtcGxveWVlcyAqIChvZmZpY2VTZXR1cC5qb2JzLk9wZXJhdGlvbnMgLyBtYWluT2ZmaWNlLm51bUVtcGxveWVlcykpLCAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBlbmdpbmVlciA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKG9mZmljZS5udW1FbXBsb3llZXMgKiAob2ZmaWNlU2V0dXAuam9icy5FbmdpbmVlciAvIG1haW5PZmZpY2UubnVtRW1wbG95ZWVzKSksIDFcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3Iob2ZmaWNlLm51bUVtcGxveWVlcyAqIChvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzIC8gbWFpbk9mZmljZS5udW1FbXBsb3llZXMpKSwgMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbWFuYWdlbWVudCA9IG9mZmljZS5udW1FbXBsb3llZXMgLSAob3BlcmF0aW9ucyArIGVuZ2luZWVyICsgYnVzaW5lc3MpO1xyXG4gICAgICAgIGFzc2lnbkpvYnMoXHJcbiAgICAgICAgICAgIG5zLFxyXG4gICAgICAgICAgICBEaXZpc2lvbk5hbWUuVE9CQUNDTyxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IGNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogb2ZmaWNlLm51bUVtcGxveWVlcyxcclxuICAgICAgICAgICAgICAgICAgICBqb2JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9wZXJhdGlvbnM6IG9wZXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVuZ2luZWVyOiBlbmdpbmVlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQnVzaW5lc3M6IGJ1c2luZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYW5hZ2VtZW50OiBtYW5hZ2VtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBidXlSZXNlYXJjaCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIC8vIERvIG5vdCBidXkgYW55IHJlc2VhcmNoIGluIHJvdW5kIDNcclxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA8PSAzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnV5UmVzZWFyY2hlcyA9IChkaXZpc2lvbk5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGxldCByZXNlYXJjaFByaW9yaXRpZXM6IFJlc2VhcmNoUHJpb3JpdHlbXTtcclxuICAgICAgICBpZiAoZGl2aXNpb25OYW1lID09PSBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUgfHwgZGl2aXNpb25OYW1lID09PSBEaXZpc2lvbk5hbWUuQ0hFTUlDQUwpIHtcclxuICAgICAgICAgICAgcmVzZWFyY2hQcmlvcml0aWVzID0gcmVzZWFyY2hQcmlvcml0aWVzRm9yU3VwcG9ydERpdmlzaW9uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc2VhcmNoUHJpb3JpdGllcyA9IHJlc2VhcmNoUHJpb3JpdGllc0ZvclByb2R1Y3REaXZpc2lvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCByZXNlYXJjaFByaW9yaXR5IG9mIHJlc2VhcmNoUHJpb3JpdGllcykge1xyXG4gICAgICAgICAgICAvLyBPbmx5IGJ1eSBSJkQgTGFib3JhdG9yeSBpbiByb3VuZCA0XHJcbiAgICAgICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA9PT0gNFxyXG4gICAgICAgICAgICAgICAgJiYgcmVzZWFyY2hQcmlvcml0eS5yZXNlYXJjaCAhPT0gUmVzZWFyY2hOYW1lLkhJX1RFQ0hfUk5EX0xBQk9SQVRPUlkpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5oYXNSZXNlYXJjaGVkKGRpdmlzaW9uTmFtZSwgcmVzZWFyY2hQcmlvcml0eS5yZXNlYXJjaCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2VhcmNoQ29zdCA9IG5zLmNvcnBvcmF0aW9uLmdldFJlc2VhcmNoQ29zdChkaXZpc2lvbk5hbWUsIHJlc2VhcmNoUHJpb3JpdHkucmVzZWFyY2gpO1xyXG4gICAgICAgICAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKS5yZXNlYXJjaFBvaW50cyA8IHJlc2VhcmNoQ29zdCAqIHJlc2VhcmNoUHJpb3JpdHkuY29zdE11bHRpcGxpZXIpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnJlc2VhcmNoKGRpdmlzaW9uTmFtZSwgcmVzZWFyY2hQcmlvcml0eS5yZXNlYXJjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBidXlSZXNlYXJjaGVzKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSk7XHJcbiAgICBidXlSZXNlYXJjaGVzKERpdmlzaW9uTmFtZS5DSEVNSUNBTCk7XHJcbiAgICBidXlSZXNlYXJjaGVzKERpdmlzaW9uTmFtZS5UT0JBQ0NPKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGFsbCBjaXR5IHNldHVwcyAob2ZmaWNlICsgd2FyZWhvdXNlKSBpbiB0aGUgZGl2aXNpb24gYXJlIHRoZSBzYW1lXHJcbiAqXHJcbiAqIEBwYXJhbSBkaXZpc2lvbk5hbWVcclxuICogQHBhcmFtIHRvdGFsQnVkZ2V0XHJcbiAqIEBwYXJhbSBidWRnZXRSYXRpb1xyXG4gKiBAcGFyYW0gZHJ5UnVuXHJcbiAqIEBwYXJhbSBlbmFibGVMb2dnaW5nXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBpbXByb3ZlU3VwcG9ydERpdmlzaW9uKFxyXG4gICAgZGl2aXNpb25OYW1lOiBzdHJpbmcsXHJcbiAgICB0b3RhbEJ1ZGdldDogbnVtYmVyLFxyXG4gICAgYnVkZ2V0UmF0aW86IHtcclxuICAgICAgICB3YXJlaG91c2U6IG51bWJlcjtcclxuICAgICAgICBvZmZpY2U6IG51bWJlcjtcclxuICAgIH0sXHJcbiAgICBkcnlSdW46IGJvb2xlYW4sXHJcbiAgICBlbmFibGVMb2dnaW5nOiBib29sZWFuXHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRvdGFsQnVkZ2V0IDwgMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoZW5hYmxlTG9nZ2luZyk7XHJcbiAgICBjb25zdCBjdXJyZW50RnVuZHMgPSBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmZ1bmRzO1xyXG5cclxuICAgIGNvbnN0IHdhcmVob3VzZUJ1ZGdldCA9IHRvdGFsQnVkZ2V0ICogYnVkZ2V0UmF0aW8ud2FyZWhvdXNlIC8gNjtcclxuICAgIGNvbnN0IG9mZmljZUJ1ZGdldCA9IHRvdGFsQnVkZ2V0ICogYnVkZ2V0UmF0aW8ub2ZmaWNlIC8gNjtcclxuICAgIGNvbnN0IG9mZmljZVNldHVwczogT2ZmaWNlU2V0dXBbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xyXG4gICAgICAgIGxvZ2dlci5jaXR5ID0gY2l0eTtcclxuICAgICAgICBjb25zdCBjdXJyZW50V2FyZWhvdXNlTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb25OYW1lLCBjaXR5KS5sZXZlbDtcclxuICAgICAgICBjb25zdCBuZXdXYXJlaG91c2VMZXZlbCA9IGdldE1heEFmZm9yZGFibGVXYXJlaG91c2VMZXZlbChjdXJyZW50V2FyZWhvdXNlTGV2ZWwsIHdhcmVob3VzZUJ1ZGdldCk7XHJcbiAgICAgICAgaWYgKG5ld1dhcmVob3VzZUxldmVsID4gY3VycmVudFdhcmVob3VzZUxldmVsICYmICFkcnlSdW4pIHtcclxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24udXBncmFkZVdhcmVob3VzZShkaXZpc2lvbk5hbWUsIGNpdHksIG5ld1dhcmVob3VzZUxldmVsIC0gY3VycmVudFdhcmVob3VzZUxldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nZ2VyLmxvZyhcclxuICAgICAgICAgICAgYERpdmlzaW9uICR7ZGl2aXNpb25OYW1lfTogY3VycmVudFdhcmVob3VzZUxldmVsOiAke2N1cnJlbnRXYXJlaG91c2VMZXZlbH0sIGBcclxuICAgICAgICAgICAgKyBgbmV3V2FyZWhvdXNlTGV2ZWw6ICR7bnMuY29ycG9yYXRpb24uZ2V0V2FyZWhvdXNlKGRpdmlzaW9uTmFtZSwgY2l0eSkubGV2ZWx9YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2UgdXNlIFNlY3Rvci0xMidzIG9mZmljZSBhcyB0aGUgYmFzZSB0byBmaW5kIHRoZSBvcHRpbWFsIHNldHVwIGZvciBhbGwgY2l0aWVzJyBvZmZpY2VzLiBUaGlzIGlzIG5vdCBlbnRpcmVseVxyXG4gICAgLy8gYWNjdXJhdGUsIGJlY2F1c2UgZWFjaCBvZmZpY2UgaGFzIGRpZmZlcmVudCBlbXBsb3llZSdzIHN0YXRzLiBIb3dldmVyLCB0aGUgb3B0aW1hbCBzZXR1cCBvZiBlYWNoIG9mZmljZSB3b24ndCBiZVxyXG4gICAgLy8gbXVjaCBkaWZmZXJlbnQgZXZlbiB3aXRoIHRoYXQgY29uY2Vybi5cclxuICAgIGNvbnN0IGNpdHkgPSBDaXR5TmFtZS5TZWN0b3IxMjtcclxuICAgIGxvZ2dlci5jaXR5ID0gY2l0eTtcclxuICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbk5hbWUsIGNpdHkpO1xyXG4gICAgY29uc3QgbWF4T2ZmaWNlU2l6ZSA9IGdldE1heEFmZm9yZGFibGVPZmZpY2VTaXplKG9mZmljZS5zaXplLCBvZmZpY2VCdWRnZXQpO1xyXG4gICAgbG9nZ2VyLmxvZyhgQ2l0eTogJHtjaXR5fS4gY3VycmVudE9mZmljZVNpemU6ICR7b2ZmaWNlLnNpemV9LCBtYXhPZmZpY2VTaXplOiAke21heE9mZmljZVNpemV9YCk7XHJcbiAgICBpZiAobWF4T2ZmaWNlU2l6ZSA8IDYpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJ1ZGdldCBmb3Igb2ZmaWNlIGlzIHRvbyBsb3cuIERpdmlzaW9uOiAke2RpdmlzaW9uTmFtZX0uIE9mZmljZSdzIGJ1ZGdldDogJHtucy5mb3JtYXROdW1iZXIob2ZmaWNlQnVkZ2V0KX1gKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJuZEVtcGxveWVlID0gTWF0aC5taW4oXHJcbiAgICAgICAgTWF0aC5mbG9vcihtYXhPZmZpY2VTaXplICogMC4yKSxcclxuICAgICAgICBtYXhPZmZpY2VTaXplIC0gM1xyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vblJuREVtcGxveWVlcyA9IG1heE9mZmljZVNpemUgLSBybmRFbXBsb3llZTtcclxuICAgIGNvbnN0IG9mZmljZVNldHVwOiBPZmZpY2VTZXR1cCA9IHtcclxuICAgICAgICBjaXR5OiBjaXR5LFxyXG4gICAgICAgIHNpemU6IG1heE9mZmljZVNpemUsXHJcbiAgICAgICAgam9iczoge1xyXG4gICAgICAgICAgICBPcGVyYXRpb25zOiAwLFxyXG4gICAgICAgICAgICBFbmdpbmVlcjogMCxcclxuICAgICAgICAgICAgQnVzaW5lc3M6IDAsXHJcbiAgICAgICAgICAgIE1hbmFnZW1lbnQ6IDAsXHJcbiAgICAgICAgICAgIFwiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiOiBybmRFbXBsb3llZSxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKHVzZVByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yU3VwcG9ydERpdmlzaW9ucykge1xyXG4gICAgICAgIG9mZmljZVNldHVwLmpvYnMuT3BlcmF0aW9ucyA9IE1hdGguZmxvb3Iobm9uUm5ERW1wbG95ZWVzICogcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JTdXBwb3J0RGl2aXNpb25zLm9wZXJhdGlvbnMpO1xyXG4gICAgICAgIG9mZmljZVNldHVwLmpvYnMuQnVzaW5lc3MgPSBNYXRoLmZsb29yKG5vblJuREVtcGxveWVlcyAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yU3VwcG9ydERpdmlzaW9ucy5idXNpbmVzcyk7XHJcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5NYW5hZ2VtZW50ID0gTWF0aC5mbG9vcihub25SbkRFbXBsb3llZXMgKiBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclN1cHBvcnREaXZpc2lvbnMubWFuYWdlbWVudCk7XHJcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5FbmdpbmVlciA9IG5vblJuREVtcGxveWVlcyAtIChvZmZpY2VTZXR1cC5qb2JzLk9wZXJhdGlvbnMgKyBvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzICsgb2ZmaWNlU2V0dXAuam9icy5NYW5hZ2VtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IE1hdGVyaWFsO1xyXG4gICAgICAgIHN3aXRjaCAoZGl2aXNpb25OYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFOlxyXG4gICAgICAgICAgICAgICAgaXRlbSA9IG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgY2l0eSwgTWF0ZXJpYWxOYW1lLlBMQU5UUyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXZpc2lvbk5hbWUuQ0hFTUlDQUw6XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBNYXRlcmlhbE5hbWUuQ0hFTUlDQUxTKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRpdmlzaW9uOiAke2RpdmlzaW9uTmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vblJuREVtcGxveWVlcyA8PSAzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgUiZEIHJhdGlvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaXZpc2lvbiA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSk7XHJcbiAgICAgICAgY29uc3QgaW5kdXN0cnlEYXRhID0gbnMuY29ycG9yYXRpb24uZ2V0SW5kdXN0cnlEYXRhKGRpdmlzaW9uLnR5cGUpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFBcnJheSA9IGF3YWl0IG9wdGltaXplT2ZmaWNlKFxyXG4gICAgICAgICAgICBuc3gsXHJcbiAgICAgICAgICAgIGRpdmlzaW9uLFxyXG4gICAgICAgICAgICBpbmR1c3RyeURhdGEsXHJcbiAgICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICAgIG5vblJuREVtcGxveWVlcyxcclxuICAgICAgICAgICAgcm5kRW1wbG95ZWUsXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIFwicmF3UHJvZHVjdGlvblwiLFxyXG4gICAgICAgICAgICBnZXRCYWxhbmNpbmdNb2RpZmllckZvclByb2ZpdFByb2dyZXNzKCksXHJcbiAgICAgICAgICAgIDAsIC8vIERvIG5vdCByZXJ1blxyXG4gICAgICAgICAgICAyMCwgLy8gSGFsZiBvZiBkZWZhdWx0UGVyZm9ybWFuY2VNb2RpZmllckZvck9mZmljZUJlbmNobWFya1xyXG4gICAgICAgICAgICBlbmFibGVMb2dnaW5nLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbmdpbmVlcjogTWF0aC5mbG9vcihub25SbkRFbXBsb3llZXMgKiAwLjYyNSksXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzczogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZGF0YUFycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjYWxjdWxhdGUgb3B0aW1hbCBvZmZpY2Ugc2V0dXAuIERpdmlzaW9uOiAke2RpdmlzaW9uTmFtZX0sIG5vblJuREVtcGxveWVlczogJHtub25SbkRFbXBsb3llZXN9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW1hbERhdGEgPSBkYXRhQXJyYXlbZGF0YUFycmF5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBvZmZpY2VTZXR1cC5qb2JzID0ge1xyXG4gICAgICAgICAgICAgICAgT3BlcmF0aW9uczogb3B0aW1hbERhdGEub3BlcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgIEVuZ2luZWVyOiBvcHRpbWFsRGF0YS5lbmdpbmVlcixcclxuICAgICAgICAgICAgICAgIEJ1c2luZXNzOiBvcHRpbWFsRGF0YS5idXNpbmVzcyxcclxuICAgICAgICAgICAgICAgIE1hbmFnZW1lbnQ6IG9wdGltYWxEYXRhLm1hbmFnZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIjogcm5kRW1wbG95ZWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ2dlci5sb2coXCJPcHRpbWFsIG9mZmljZVNldHVwOlwiLCBKU09OLnN0cmluZ2lmeShvZmZpY2VTZXR1cCkpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xyXG4gICAgICAgIG9mZmljZVNldHVwcy5wdXNoKHtcclxuICAgICAgICAgICAgY2l0eTogY2l0eSxcclxuICAgICAgICAgICAgc2l6ZTogb2ZmaWNlU2V0dXAuc2l6ZSxcclxuICAgICAgICAgICAgam9iczogb2ZmaWNlU2V0dXAuam9ic1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9nZ2VyLmNpdHkgPSB1bmRlZmluZWQ7XHJcbiAgICBpZiAoIWRyeVJ1bikge1xyXG4gICAgICAgIHVwZ3JhZGVPZmZpY2VzKG5zLCBkaXZpc2lvbk5hbWUsIG9mZmljZVNldHVwcyk7XHJcbiAgICB9XHJcbiAgICBsb2dnZXIubG9nKGBTcGVudDogJHtucy5mb3JtYXROdW1iZXIoY3VycmVudEZ1bmRzIC0gbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcyl9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGltcHJvdmVQcm9kdWN0RGl2aXNpb25SYXdQcm9kdWN0aW9uKFxyXG4gICAgZGl2aXNpb25OYW1lOiBzdHJpbmcsXHJcbiAgICBpbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGEsXHJcbiAgICBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyxcclxuICAgIGJ1ZGdldDogbnVtYmVyLFxyXG4gICAgZHJ5UnVuOiBib29sZWFuLFxyXG4gICAgYmVuY2htYXJrOiBDb3Jwb3JhdGlvbk9wdGltaXplcixcclxuICAgIGVuYWJsZUxvZ2dpbmc6IGJvb2xlYW5cclxuKTogdm9pZCB7XHJcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKGVuYWJsZUxvZ2dpbmcpO1xyXG4gICAgY29uc3QgZGF0YUFycmF5ID0gYmVuY2htYXJrLm9wdGltaXplU3RvcmFnZUFuZEZhY3RvcnkoXHJcbiAgICAgICAgaW5kdXN0cnlEYXRhLFxyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5TTUFSVF9TVE9SQUdFKSxcclxuICAgICAgICAvLyBBc3N1bWUgdGhhdCBhbGwgd2FyZWhvdXNlcyBhcmUgYXQgdGhlIHNhbWUgbGV2ZWxcclxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb25OYW1lLCBDaXR5TmFtZS5TZWN0b3IxMikubGV2ZWwsXHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFUyksXHJcbiAgICAgICAgZGl2aXNpb25SZXNlYXJjaGVzLFxyXG4gICAgICAgIGJ1ZGdldCxcclxuICAgICAgICBlbmFibGVMb2dnaW5nXHJcbiAgICApO1xyXG4gICAgaWYgKGRhdGFBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpbWFsRGF0YSA9IGRhdGFBcnJheVtkYXRhQXJyYXkubGVuZ3RoIC0gMV07XHJcbiAgICBsb2dnZXIubG9nKGByYXdQcm9kdWN0aW9uOiAke0pTT04uc3RyaW5naWZ5KG9wdGltYWxEYXRhKX1gKTtcclxuICAgIGlmICghZHJ5UnVuKSB7XHJcbiAgICAgICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuU01BUlRfU1RPUkFHRSwgb3B0aW1hbERhdGEuc21hcnRTdG9yYWdlTGV2ZWwpO1xyXG4gICAgICAgIGJ1eVVwZ3JhZGUobnMsIFVwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFUywgb3B0aW1hbERhdGEuc21hcnRGYWN0b3JpZXNMZXZlbCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50V2FyZWhvdXNlTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb25OYW1lLCBjaXR5KS5sZXZlbDtcclxuICAgICAgICAgICAgaWYgKG9wdGltYWxEYXRhLndhcmVob3VzZUxldmVsID4gY3VycmVudFdhcmVob3VzZUxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi51cGdyYWRlV2FyZWhvdXNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGltYWxEYXRhLndhcmVob3VzZUxldmVsIC0gY3VycmVudFdhcmVob3VzZUxldmVsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbXByb3ZlUHJvZHVjdERpdmlzaW9uV2lsc29uQWR2ZXJ0KFxyXG4gICAgZGl2aXNpb25OYW1lOiBzdHJpbmcsXHJcbiAgICBpbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGEsXHJcbiAgICBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyxcclxuICAgIGJ1ZGdldDogbnVtYmVyLFxyXG4gICAgZHJ5UnVuOiBib29sZWFuLFxyXG4gICAgYmVuY2htYXJrOiBDb3Jwb3JhdGlvbk9wdGltaXplcixcclxuICAgIGVuYWJsZUxvZ2dpbmc6IGJvb2xlYW5cclxuKTogdm9pZCB7XHJcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKGVuYWJsZUxvZ2dpbmcpO1xyXG4gICAgY29uc3QgZGl2aXNpb24gPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihkaXZpc2lvbk5hbWUpO1xyXG4gICAgY29uc3QgZGF0YUFycmF5ID0gYmVuY2htYXJrLm9wdGltaXplV2lsc29uQW5kQWR2ZXJ0KFxyXG4gICAgICAgIGluZHVzdHJ5RGF0YSxcclxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuV0lMU09OX0FOQUxZVElDUyksXHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0SGlyZUFkVmVydENvdW50KGRpdmlzaW9uTmFtZSksXHJcbiAgICAgICAgZGl2aXNpb24uYXdhcmVuZXNzLFxyXG4gICAgICAgIGRpdmlzaW9uLnBvcHVsYXJpdHksXHJcbiAgICAgICAgZGl2aXNpb25SZXNlYXJjaGVzLFxyXG4gICAgICAgIGJ1ZGdldCxcclxuICAgICAgICBlbmFibGVMb2dnaW5nXHJcbiAgICApO1xyXG4gICAgaWYgKGRhdGFBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpbWFsRGF0YSA9IGRhdGFBcnJheVtkYXRhQXJyYXkubGVuZ3RoIC0gMV07XHJcbiAgICBsb2dnZXIubG9nKGB3aWxzb25BZHZlcnQ6ICR7SlNPTi5zdHJpbmdpZnkob3B0aW1hbERhdGEpfWApO1xyXG4gICAgaWYgKCFkcnlSdW4pIHtcclxuICAgICAgICBidXlVcGdyYWRlKG5zLCBVcGdyYWRlTmFtZS5XSUxTT05fQU5BTFlUSUNTLCBvcHRpbWFsRGF0YS53aWxzb25MZXZlbCk7XHJcbiAgICAgICAgYnV5QWR2ZXJ0KG5zLCBkaXZpc2lvbk5hbWUsIG9wdGltYWxEYXRhLmFkdmVydExldmVsKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW1wcm92ZVByb2R1Y3REaXZpc2lvbk1haW5PZmZpY2UoXHJcbiAgICBkaXZpc2lvbk5hbWU6IHN0cmluZyxcclxuICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcclxuICAgIGJ1ZGdldDogbnVtYmVyLFxyXG4gICAgZHJ5UnVuOiBib29sZWFuLFxyXG4gICAgZW5hYmxlTG9nZ2luZzogYm9vbGVhblxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoZW5hYmxlTG9nZ2luZyk7XHJcbiAgICBjb25zdCBwcm9maXQgPSBnZXRQcm9maXQobnMpO1xyXG4gICAgY29uc3QgZGl2aXNpb24gPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihkaXZpc2lvbk5hbWUpO1xyXG4gICAgY29uc3Qgb2ZmaWNlID0gbnMuY29ycG9yYXRpb24uZ2V0T2ZmaWNlKGRpdmlzaW9uTmFtZSwgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHkpO1xyXG4gICAgY29uc3QgbWF4T2ZmaWNlU2l6ZSA9IGdldE1heEFmZm9yZGFibGVPZmZpY2VTaXplKG9mZmljZS5zaXplLCBidWRnZXQpO1xyXG4gICAgaWYgKG1heE9mZmljZVNpemUgPCBvZmZpY2Uuc2l6ZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG9mZmljZVNldHVwOiBPZmZpY2VTZXR1cCA9IHtcclxuICAgICAgICBjaXR5OiBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSxcclxuICAgICAgICBzaXplOiBtYXhPZmZpY2VTaXplLFxyXG4gICAgICAgIGpvYnM6IHtcclxuICAgICAgICAgICAgT3BlcmF0aW9uczogMCxcclxuICAgICAgICAgICAgRW5naW5lZXI6IDAsXHJcbiAgICAgICAgICAgIEJ1c2luZXNzOiAwLFxyXG4gICAgICAgICAgICBNYW5hZ2VtZW50OiAwLFxyXG4gICAgICAgICAgICBcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIjogMCxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBkaXZpc2lvbi5wcm9kdWN0cztcclxuICAgIGxldCBpdGVtOiBQcm9kdWN0O1xyXG4gICAgbGV0IHNvcnRUeXBlOiBPZmZpY2VCZW5jaG1hcmtTb3J0VHlwZTtcclxuICAgIGxldCB1c2VDdXJyZW50SXRlbURhdGEgPSB0cnVlO1xyXG4gICAgaWYgKHVzZVByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uKSB7XHJcbiAgICAgICAgbGV0IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uO1xyXG4gICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA9PT0gMykge1xyXG4gICAgICAgICAgICBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvbiA9IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uUm91bmQzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkucm91bmQgPT09IDQpIHtcclxuICAgICAgICAgICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24gPSBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kNDtcclxuICAgICAgICB9IGVsc2UgaWYgKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLnJvdW5kID09PSA1ICYmIHByb2ZpdCA8IDFlMzApIHtcclxuICAgICAgICAgICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24gPSBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kNV8xO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkucm91bmQgPT09IDUgJiYgcHJvZml0ID49IDFlMzApIHtcclxuICAgICAgICAgICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24gPSBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kNV8yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcHJlY2FsY3VsYXRlZCBlbXBsb3llZSByYXRpb1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5PcGVyYXRpb25zID0gTWF0aC5mbG9vcihvZmZpY2VTZXR1cC5zaXplICogcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24ub3BlcmF0aW9ucyk7XHJcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5FbmdpbmVlciA9IE1hdGguZmxvb3Iob2ZmaWNlU2V0dXAuc2l6ZSAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uLmVuZ2luZWVyKTtcclxuICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzID0gTWF0aC5mbG9vcihvZmZpY2VTZXR1cC5zaXplICogcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24uYnVzaW5lc3MpO1xyXG4gICAgICAgIGlmIChvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzID09PSAwKSB7XHJcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnMuQnVzaW5lc3MgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLk1hbmFnZW1lbnQgPSBvZmZpY2VTZXR1cC5zaXplIC0gKG9mZmljZVNldHVwLmpvYnMuT3BlcmF0aW9ucyArIG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgKyBvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLnJvdW5kID09PSAzXHJcbiAgICAgICAgICAgIHx8IG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLnJvdW5kID09PSA0KSB7XHJcbiAgICAgICAgICAgIHNvcnRUeXBlID0gXCJwcm9ncmVzc1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNvcnRUeXBlID0gXCJwcm9maXRfcHJvZ3Jlc3NcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJlc3RQcm9kdWN0ID0gbnVsbDtcclxuICAgICAgICBsZXQgaGlnaGVzdEVmZmVjdGl2ZVJhdGluZyA9IE51bWJlci5NSU5fVkFMVUU7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0TmFtZSBvZiBwcm9kdWN0cykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbnMuY29ycG9yYXRpb24uZ2V0UHJvZHVjdChkaXZpc2lvbk5hbWUsIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LCBwcm9kdWN0TmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LmRldmVsb3BtZW50UHJvZ3Jlc3MgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LmVmZmVjdGl2ZVJhdGluZyA+IGhpZ2hlc3RFZmZlY3RpdmVSYXRpbmcpIHtcclxuICAgICAgICAgICAgICAgIGJlc3RQcm9kdWN0ID0gcHJvZHVjdDtcclxuICAgICAgICAgICAgICAgIGhpZ2hlc3RFZmZlY3RpdmVSYXRpbmcgPSBwcm9kdWN0LmVmZmVjdGl2ZVJhdGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJlc3RQcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIHVzZUN1cnJlbnRJdGVtRGF0YSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogc2FtcGxlUHJvZHVjdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZW1hbmQ6IDU0LFxyXG4gICAgICAgICAgICAgICAgY29tcGV0aXRpb246IDM1LFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiAzNjAwMCxcclxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVJhdGluZzogMzYwMDAsXHJcbiAgICAgICAgICAgICAgICBzdGF0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1YWxpdHk6IDQyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlOiA0NjAwMCxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhYmlsaXR5OiAyMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICByZWxpYWJpbGl0eTogMzEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYWVzdGhldGljczogMjUwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM6IDM3MDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIE1hdGVyaWFsJ3MgbWFya2V0IHByaWNlIGlzIGRpZmZlcmVudCBiZXR3ZWVuIGNpdGllcy4gV2UgdXNlIFNlY3RvcjEyJ3MgcHJpY2UgYXMgcmVmZXJlbmNlIHByaWNlLlxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbkNvc3Q6IGdldFByb2R1Y3RNYXJrZXRQcmljZShucywgZGl2aXNpb24sIGluZHVzdHJ5RGF0YSwgQ2l0eU5hbWUuU2VjdG9yMTIpLFxyXG4gICAgICAgICAgICAgICAgZGVzaXJlZFNlbGxQcmljZTogMCxcclxuICAgICAgICAgICAgICAgIGRlc2lyZWRTZWxsQW1vdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgc3RvcmVkOiAwLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbkFtb3VudDogMCxcclxuICAgICAgICAgICAgICAgIGFjdHVhbFNlbGxBbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICBkZXZlbG9wbWVudFByb2dyZXNzOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBhZHZlcnRpc2luZ0ludmVzdG1lbnQ6IG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHMgKiAwLjAxIC8gMixcclxuICAgICAgICAgICAgICAgIGRlc2lnbkludmVzdG1lbnQ6IG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHMgKiAwLjAxIC8gMixcclxuICAgICAgICAgICAgICAgIHNpemU6IDAuMDUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbSA9IGJlc3RQcm9kdWN0O1xyXG4gICAgICAgICAgICBsb2dnZXIubG9nKGBVc2UgcHJvZHVjdDogJHtKU09OLnN0cmluZ2lmeShpdGVtKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gYXdhaXQgb3B0aW1pemVPZmZpY2UoXHJcbiAgICAgICAgICAgIG5zeCxcclxuICAgICAgICAgICAgZGl2aXNpb24sXHJcbiAgICAgICAgICAgIGluZHVzdHJ5RGF0YSxcclxuICAgICAgICAgICAgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHksXHJcbiAgICAgICAgICAgIG1heE9mZmljZVNpemUsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICAgIHVzZUN1cnJlbnRJdGVtRGF0YSxcclxuICAgICAgICAgICAgc29ydFR5cGUsXHJcbiAgICAgICAgICAgIGdldEJhbGFuY2luZ01vZGlmaWVyRm9yUHJvZml0UHJvZ3Jlc3MoKSxcclxuICAgICAgICAgICAgbWF4UmVydW5XaGVuT3B0aW1pemluZ09mZmljZUZvclByb2R1Y3REaXZpc2lvbixcclxuICAgICAgICAgICAgZGVmYXVsdFBlcmZvcm1hbmNlTW9kaWZpZXJGb3JPZmZpY2VCZW5jaG1hcmssXHJcbiAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmdcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChkYXRhQXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGNhbGN1bGF0ZSBvcHRpbWFsIG9mZmljZSBzZXR1cC4gbWF4VG90YWxFbXBsb3llZXM6ICR7bWF4T2ZmaWNlU2l6ZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb3B0aW1hbERhdGEgPSBkYXRhQXJyYXlbZGF0YUFycmF5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIG9mZmljZVNldHVwLmpvYnMgPSB7XHJcbiAgICAgICAgICAgIE9wZXJhdGlvbnM6IG9wdGltYWxEYXRhLm9wZXJhdGlvbnMsXHJcbiAgICAgICAgICAgIEVuZ2luZWVyOiBvcHRpbWFsRGF0YS5lbmdpbmVlcixcclxuICAgICAgICAgICAgQnVzaW5lc3M6IG9wdGltYWxEYXRhLmJ1c2luZXNzLFxyXG4gICAgICAgICAgICBNYW5hZ2VtZW50OiBvcHRpbWFsRGF0YS5tYW5hZ2VtZW50LFxyXG4gICAgICAgICAgICBcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIjogMCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2dlci5sb2coYG1haW5PZmZpY2U6ICR7SlNPTi5zdHJpbmdpZnkob2ZmaWNlU2V0dXApfWApO1xyXG4gICAgaWYgKCFkcnlSdW4pIHtcclxuICAgICAgICB1cGdyYWRlT2ZmaWNlcyhucywgZGl2aXNpb25OYW1lLCBbb2ZmaWNlU2V0dXBdKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW1wcm92ZVByb2R1Y3REaXZpc2lvblN1cHBvcnRPZmZpY2VzKFxyXG4gICAgZGl2aXNpb25OYW1lOiBzdHJpbmcsXHJcbiAgICBidWRnZXQ6IG51bWJlcixcclxuICAgIGRyeVJ1bjogYm9vbGVhbixcclxuICAgIGVuYWJsZUxvZ2dpbmc6IGJvb2xlYW5cclxuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKGVuYWJsZUxvZ2dpbmcpO1xyXG4gICAgY29uc3Qgb2ZmaWNlU2V0dXBzOiBPZmZpY2VTZXR1cFtdID0gW107XHJcbiAgICBpZiAoYnVkZ2V0ID4gbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcykge1xyXG4gICAgICAgIC8vIEJ5cGFzcyB1c2FnZSBvZiBsb2dnZXIuIElmIHRoaXMgaGFwcGVucywgdGhlcmUgaXMgcmFjZSBjb25kaXRpb24uIFdlIG11c3QgYmUgbm90aWZpZWQgYWJvdXQgaXQuXHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICBgQnVkZ2V0IGlzIGhpZ2hlciB0aGFuIGN1cnJlbnQgZnVuZHMuIEJ1ZGdldDogJHtucy5mb3JtYXROdW1iZXIoYnVkZ2V0KX0sIGBcclxuICAgICAgICAgICAgKyBgZnVuZHM6ICR7bnMuZm9ybWF0TnVtYmVyKG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHMpfWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGJ1ZGdldCA9IG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHMgKiAwLjk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBidWRnZXRGb3JFYWNoT2ZmaWNlID0gYnVkZ2V0IC8gNTtcclxuICAgIGZvciAoY29uc3QgY2l0eSBvZiBzdXBwb3J0UHJvZHVjdERldmVsb3BtZW50Q2l0aWVzKSB7XHJcbiAgICAgICAgY29uc3Qgb2ZmaWNlID0gbnMuY29ycG9yYXRpb24uZ2V0T2ZmaWNlKGRpdmlzaW9uTmFtZSwgY2l0eSk7XHJcbiAgICAgICAgY29uc3QgbWF4T2ZmaWNlU2l6ZSA9IGdldE1heEFmZm9yZGFibGVPZmZpY2VTaXplKG9mZmljZS5zaXplLCBidWRnZXRGb3JFYWNoT2ZmaWNlKTtcclxuICAgICAgICBpZiAobWF4T2ZmaWNlU2l6ZSA8IDUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCdWRnZXQgZm9yIG9mZmljZSBpcyB0b28gbG93LiBEaXZpc2lvbjogJHtkaXZpc2lvbk5hbWV9LiBPZmZpY2UncyBidWRnZXQ6ICR7bnMuZm9ybWF0TnVtYmVyKGJ1ZGdldEZvckVhY2hPZmZpY2UpfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF4T2ZmaWNlU2l6ZSA8IG9mZmljZS5zaXplKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvZmZpY2VTZXR1cDogT2ZmaWNlU2V0dXAgPSB7XHJcbiAgICAgICAgICAgIGNpdHk6IGNpdHksXHJcbiAgICAgICAgICAgIHNpemU6IG1heE9mZmljZVNpemUsXHJcbiAgICAgICAgICAgIGpvYnM6IHtcclxuICAgICAgICAgICAgICAgIE9wZXJhdGlvbnM6IDAsXHJcbiAgICAgICAgICAgICAgICBFbmdpbmVlcjogMCxcclxuICAgICAgICAgICAgICAgIEJ1c2luZXNzOiAwLFxyXG4gICAgICAgICAgICAgICAgTWFuYWdlbWVudDogMCxcclxuICAgICAgICAgICAgICAgIFwiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiOiAwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkucm91bmQgPT09IDMgJiYgbWF4TnVtYmVyT2ZQcm9kdWN0c0luUm91bmQzID09PSAxKSB7XHJcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnMuT3BlcmF0aW9ucyA9IDA7XHJcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgPSAwO1xyXG4gICAgICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzID0gMDtcclxuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5NYW5hZ2VtZW50ID0gMDtcclxuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9ic1tcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIl0gPSBtYXhPZmZpY2VTaXplO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkucm91bmQgPT09IDMgfHwgbnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkucm91bmQgPT09IDQpIHtcclxuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5PcGVyYXRpb25zID0gMTtcclxuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5FbmdpbmVlciA9IDE7XHJcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnMuQnVzaW5lc3MgPSAxO1xyXG4gICAgICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLk1hbmFnZW1lbnQgPSAxO1xyXG4gICAgICAgICAgICBvZmZpY2VTZXR1cC5qb2JzW1wiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiXSA9IG1heE9mZmljZVNpemUgLSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJuZEVtcGxveWVlID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG1heE9mZmljZVNpemUgKiAwLjUpLFxyXG4gICAgICAgICAgICAgICAgbWF4T2ZmaWNlU2l6ZSAtIDRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3Qgbm9uUm5ERW1wbG95ZWVzID0gbWF4T2ZmaWNlU2l6ZSAtIHJuZEVtcGxveWVlO1xyXG4gICAgICAgICAgICAvLyBSZXVzZSB0aGUgcmF0aW8gb2YgXCJwcm9maXRcIiBzZXR1cCBpbiByb3VuZCA0LiBJdCdzIGdvb2QgZW5vdWdoLlxyXG4gICAgICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLk9wZXJhdGlvbnMgPSBNYXRoLmZsb29yKG5vblJuREVtcGxveWVlcyAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXBPZlJvdW5kNC5vcGVyYXRpb25zKTtcclxuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5FbmdpbmVlciA9IE1hdGguZmxvb3Iobm9uUm5ERW1wbG95ZWVzICogcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9maXRTZXR1cE9mUm91bmQ0LmVuZ2luZWVyKTtcclxuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5CdXNpbmVzcyA9IE1hdGguZmxvb3Iobm9uUm5ERW1wbG95ZWVzICogcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9maXRTZXR1cE9mUm91bmQ0LmJ1c2luZXNzKTtcclxuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5NYW5hZ2VtZW50ID0gbm9uUm5ERW1wbG95ZWVzIC0gKG9mZmljZVNldHVwLmpvYnMuT3BlcmF0aW9ucyArIG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgKyBvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzKTtcclxuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9ic1tcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIl0gPSBybmRFbXBsb3llZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2ZmaWNlU2V0dXBzLnB1c2gob2ZmaWNlU2V0dXApO1xyXG4gICAgfVxyXG4gICAgbG9nZ2VyLmxvZyhgc3VwcG9ydE9mZmljZXM6ICR7SlNPTi5zdHJpbmdpZnkob2ZmaWNlU2V0dXBzKX1gKTtcclxuICAgIGlmICghZHJ5UnVuKSB7XHJcbiAgICAgICAgdXBncmFkZU9mZmljZXMobnMsIGRpdmlzaW9uTmFtZSwgb2ZmaWNlU2V0dXBzKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW1wcm92ZVByb2R1Y3REaXZpc2lvbk9mZmljZXMoXHJcbiAgICBkaXZpc2lvbk5hbWU6IHN0cmluZyxcclxuICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcclxuICAgIGJ1ZGdldDogbnVtYmVyLFxyXG4gICAgZHJ5UnVuOiBib29sZWFuLFxyXG4gICAgZW5hYmxlTG9nZ2luZzogYm9vbGVhblxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGxldCByYXRpbyA9IHtcclxuICAgICAgICBtYWluT2ZmaWNlOiAwLjUsXHJcbiAgICAgICAgc3VwcG9ydE9mZmljZXM6IDAuNVxyXG4gICAgfTtcclxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA9PT0gMykge1xyXG4gICAgICAgIHJhdGlvID0ge1xyXG4gICAgICAgICAgICBtYWluT2ZmaWNlOiAwLjc1LFxyXG4gICAgICAgICAgICBzdXBwb3J0T2ZmaWNlczogMC4yNVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBhd2FpdCBpbXByb3ZlUHJvZHVjdERpdmlzaW9uTWFpbk9mZmljZShcclxuICAgICAgICBkaXZpc2lvbk5hbWUsXHJcbiAgICAgICAgaW5kdXN0cnlEYXRhLFxyXG4gICAgICAgIGJ1ZGdldCAqIHJhdGlvLm1haW5PZmZpY2UsXHJcbiAgICAgICAgZHJ5UnVuLFxyXG4gICAgICAgIGVuYWJsZUxvZ2dpbmdcclxuICAgICk7XHJcbiAgICBhd2FpdCBpbXByb3ZlUHJvZHVjdERpdmlzaW9uU3VwcG9ydE9mZmljZXMoXHJcbiAgICAgICAgZGl2aXNpb25OYW1lLFxyXG4gICAgICAgIGJ1ZGdldCAqIHJhdGlvLnN1cHBvcnRPZmZpY2VzLFxyXG4gICAgICAgIGRyeVJ1bixcclxuICAgICAgICBlbmFibGVMb2dnaW5nXHJcbiAgICApO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbXByb3ZlUHJvZHVjdERpdmlzaW9uKFxyXG4gICAgZGl2aXNpb25OYW1lOiBzdHJpbmcsXHJcbiAgICB0b3RhbEJ1ZGdldDogbnVtYmVyLFxyXG4gICAgc2tpcFVwZ3JhZGluZ09mZmljZTogYm9vbGVhbixcclxuICAgIGRyeVJ1bjogYm9vbGVhbixcclxuICAgIGVuYWJsZUxvZ2dpbmc6IGJvb2xlYW5cclxuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodG90YWxCdWRnZXQgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihlbmFibGVMb2dnaW5nKTtcclxuICAgIGNvbnN0IGRpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKTtcclxuICAgIGNvbnN0IGluZHVzdHJ5RGF0YSA9IG5zLmNvcnBvcmF0aW9uLmdldEluZHVzdHJ5RGF0YShkaXZpc2lvbi50eXBlKTtcclxuICAgIGNvbnN0IGRpdmlzaW9uUmVzZWFyY2hlcyA9IGdldERpdmlzaW9uUmVzZWFyY2hlcyhucywgZGl2aXNpb25OYW1lKTtcclxuICAgIGNvbnN0IGJlbmNobWFyayA9IG5ldyBDb3Jwb3JhdGlvbk9wdGltaXplcigpO1xyXG4gICAgY29uc3QgY3VycmVudEZ1bmRzID0gbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcztcclxuXHJcbiAgICBpZiAoZ2V0UHJvZml0KG5zKSA+PSB0aHJlc2hvbGRPZkZvY3VzaW5nT25BZHZlcnQpIHtcclxuICAgICAgICBidWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbiA9IGJ1ZGdldFJhdGlvRm9yUHJvZHVjdERpdmlzaW9uV2l0aG91dEFkdmVydDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbXBsb3llZVN0YXRVcGdyYWRlc1xyXG4gICAgY29uc3QgZW1wbG95ZWVTdGF0VXBncmFkZXNCdWRnZXQgPSB0b3RhbEJ1ZGdldCAqIGJ1ZGdldFJhdGlvRm9yUHJvZHVjdERpdmlzaW9uLmVtcGxveWVlU3RhdFVwZ3JhZGVzO1xyXG4gICAgY29uc3QgY3VycmVudENyZWF0aXZpdHlVcGdyYWRlTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuTlVPUFRJTUFMX05PT1RST1BJQ19JTkpFQ1RPUl9JTVBMQU5UUyk7XHJcbiAgICBjb25zdCBjdXJyZW50Q2hhcmlzbWFVcGdyYWRlTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuU1BFRUNIX1BST0NFU1NPUl9JTVBMQU5UUyk7XHJcbiAgICBjb25zdCBjdXJyZW50SW50ZWxsaWdlbmNlVXBncmFkZUxldmVsID0gbnMuY29ycG9yYXRpb24uZ2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLk5FVVJBTF9BQ0NFTEVSQVRPUlMpO1xyXG4gICAgY29uc3QgY3VycmVudEVmZmljaWVuY3lVcGdyYWRlTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuRk9DVVNfV0lSRVMpO1xyXG4gICAgY29uc3QgbmV3Q3JlYXRpdml0eVVwZ3JhZGVMZXZlbCA9IGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwoXHJcbiAgICAgICAgVXBncmFkZU5hbWUuTlVPUFRJTUFMX05PT1RST1BJQ19JTkpFQ1RPUl9JTVBMQU5UUyxcclxuICAgICAgICBjdXJyZW50Q3JlYXRpdml0eVVwZ3JhZGVMZXZlbCxcclxuICAgICAgICBlbXBsb3llZVN0YXRVcGdyYWRlc0J1ZGdldCAvIDRcclxuICAgICk7XHJcbiAgICBjb25zdCBuZXdDaGFyaXNtYVVwZ3JhZGVMZXZlbCA9IGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwoXHJcbiAgICAgICAgVXBncmFkZU5hbWUuU1BFRUNIX1BST0NFU1NPUl9JTVBMQU5UUyxcclxuICAgICAgICBjdXJyZW50Q2hhcmlzbWFVcGdyYWRlTGV2ZWwsXHJcbiAgICAgICAgZW1wbG95ZWVTdGF0VXBncmFkZXNCdWRnZXQgLyA0XHJcbiAgICApO1xyXG4gICAgY29uc3QgbmV3SW50ZWxsaWdlbmNlVXBncmFkZUxldmVsID0gZ2V0TWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbChcclxuICAgICAgICBVcGdyYWRlTmFtZS5ORVVSQUxfQUNDRUxFUkFUT1JTLFxyXG4gICAgICAgIGN1cnJlbnRJbnRlbGxpZ2VuY2VVcGdyYWRlTGV2ZWwsXHJcbiAgICAgICAgZW1wbG95ZWVTdGF0VXBncmFkZXNCdWRnZXQgLyA0XHJcbiAgICApO1xyXG4gICAgY29uc3QgbmV3RWZmaWNpZW5jeVVwZ3JhZGVMZXZlbCA9IGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwoXHJcbiAgICAgICAgVXBncmFkZU5hbWUuRk9DVVNfV0lSRVMsXHJcbiAgICAgICAgY3VycmVudEVmZmljaWVuY3lVcGdyYWRlTGV2ZWwsXHJcbiAgICAgICAgZW1wbG95ZWVTdGF0VXBncmFkZXNCdWRnZXQgLyA0XHJcbiAgICApO1xyXG4gICAgaWYgKCFkcnlSdW4pIHtcclxuICAgICAgICBidXlVcGdyYWRlKG5zLCBVcGdyYWRlTmFtZS5OVU9QVElNQUxfTk9PVFJPUElDX0lOSkVDVE9SX0lNUExBTlRTLCBuZXdDcmVhdGl2aXR5VXBncmFkZUxldmVsKTtcclxuICAgICAgICBidXlVcGdyYWRlKG5zLCBVcGdyYWRlTmFtZS5TUEVFQ0hfUFJPQ0VTU09SX0lNUExBTlRTLCBuZXdDaGFyaXNtYVVwZ3JhZGVMZXZlbCk7XHJcbiAgICAgICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuTkVVUkFMX0FDQ0VMRVJBVE9SUywgbmV3SW50ZWxsaWdlbmNlVXBncmFkZUxldmVsKTtcclxuICAgICAgICBidXlVcGdyYWRlKG5zLCBVcGdyYWRlTmFtZS5GT0NVU19XSVJFUywgbmV3RWZmaWNpZW5jeVVwZ3JhZGVMZXZlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2FsZXNCb3RcclxuICAgIGNvbnN0IHNhbGVzQm90QnVkZ2V0ID0gdG90YWxCdWRnZXQgKiBidWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbi5zYWxlc0JvdDtcclxuICAgIGNvbnN0IGN1cnJlbnRTYWxlc0JvdFVwZ3JhZGVMZXZlbCA9IG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5BQkNfU0FMRVNfQk9UUyk7XHJcbiAgICBjb25zdCBuZXdTYWxlc0JvdFVwZ3JhZGVMZXZlbCA9IGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwoXHJcbiAgICAgICAgVXBncmFkZU5hbWUuQUJDX1NBTEVTX0JPVFMsXHJcbiAgICAgICAgY3VycmVudFNhbGVzQm90VXBncmFkZUxldmVsLFxyXG4gICAgICAgIHNhbGVzQm90QnVkZ2V0XHJcbiAgICApO1xyXG4gICAgaWYgKCFkcnlSdW4pIHtcclxuICAgICAgICBidXlVcGdyYWRlKG5zLCBVcGdyYWRlTmFtZS5BQkNfU0FMRVNfQk9UUywgbmV3U2FsZXNCb3RVcGdyYWRlTGV2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByb2plY3RJbnNpZ2h0XHJcbiAgICBjb25zdCBwcm9qZWN0SW5zaWdodEJ1ZGdldCA9IHRvdGFsQnVkZ2V0ICogYnVkZ2V0UmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24ucHJvamVjdEluc2lnaHQ7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEluc2lnaHRVcGdyYWRlTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuUFJPSkVDVF9JTlNJR0hUKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnNpZ2h0VXBncmFkZUxldmVsID0gZ2V0TWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbChcclxuICAgICAgICBVcGdyYWRlTmFtZS5QUk9KRUNUX0lOU0lHSFQsXHJcbiAgICAgICAgY3VycmVudFByb2plY3RJbnNpZ2h0VXBncmFkZUxldmVsLFxyXG4gICAgICAgIHByb2plY3RJbnNpZ2h0QnVkZ2V0XHJcbiAgICApO1xyXG4gICAgaWYgKCFkcnlSdW4pIHtcclxuICAgICAgICBidXlVcGdyYWRlKG5zLCBVcGdyYWRlTmFtZS5QUk9KRUNUX0lOU0lHSFQsIG5ld1Byb2plY3RJbnNpZ2h0VXBncmFkZUxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByYXdQcm9kdWN0aW9uXHJcbiAgICBjb25zdCByYXdQcm9kdWN0aW9uQnVkZ2V0ID0gdG90YWxCdWRnZXQgKiBidWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbi5yYXdQcm9kdWN0aW9uO1xyXG4gICAgaW1wcm92ZVByb2R1Y3REaXZpc2lvblJhd1Byb2R1Y3Rpb24oXHJcbiAgICAgICAgZGl2aXNpb24ubmFtZSxcclxuICAgICAgICBpbmR1c3RyeURhdGEsXHJcbiAgICAgICAgZGl2aXNpb25SZXNlYXJjaGVzLFxyXG4gICAgICAgIHJhd1Byb2R1Y3Rpb25CdWRnZXQsXHJcbiAgICAgICAgZHJ5UnVuLFxyXG4gICAgICAgIGJlbmNobWFyayxcclxuICAgICAgICBlbmFibGVMb2dnaW5nXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHdpbHNvbkFkdmVydFxyXG4gICAgY29uc3Qgd2lsc29uQWR2ZXJ0QnVkZ2V0ID0gdG90YWxCdWRnZXQgKiBidWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbi53aWxzb25BZHZlcnQ7XHJcbiAgICBpbXByb3ZlUHJvZHVjdERpdmlzaW9uV2lsc29uQWR2ZXJ0KFxyXG4gICAgICAgIGRpdmlzaW9uLm5hbWUsXHJcbiAgICAgICAgaW5kdXN0cnlEYXRhLFxyXG4gICAgICAgIGRpdmlzaW9uUmVzZWFyY2hlcyxcclxuICAgICAgICB3aWxzb25BZHZlcnRCdWRnZXQsXHJcbiAgICAgICAgZHJ5UnVuLFxyXG4gICAgICAgIGJlbmNobWFyayxcclxuICAgICAgICBlbmFibGVMb2dnaW5nXHJcbiAgICApO1xyXG5cclxuICAgIC8vIG9mZmljZVxyXG4gICAgaWYgKCFza2lwVXBncmFkaW5nT2ZmaWNlKSB7XHJcbiAgICAgICAgY29uc3Qgb2ZmaWNlc0J1ZGdldCA9IHRvdGFsQnVkZ2V0ICogYnVkZ2V0UmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24ub2ZmaWNlO1xyXG4gICAgICAgIGF3YWl0IGltcHJvdmVQcm9kdWN0RGl2aXNpb25PZmZpY2VzKFxyXG4gICAgICAgICAgICBkaXZpc2lvbi5uYW1lLFxyXG4gICAgICAgICAgICBpbmR1c3RyeURhdGEsXHJcbiAgICAgICAgICAgIG9mZmljZXNCdWRnZXQsXHJcbiAgICAgICAgICAgIGRyeVJ1bixcclxuICAgICAgICAgICAgZW5hYmxlTG9nZ2luZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VyLmxvZyhgU3BlbnQ6ICR7bnMuZm9ybWF0TnVtYmVyKGN1cnJlbnRGdW5kcyAtIG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHMpfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldFN0YXRpc3RpY3MoKSB7XHJcbiAgICBnbG9iYWxUaGlzLlBsYXllci5jb3Jwb3JhdGlvbiEuY3ljbGVDb3VudCA9IDA7XHJcbiAgICBnbG9iYWxUaGlzLmNvcnBvcmF0aW9uQ3ljbGVIaXN0b3J5ID0gW107XHJcbiAgICBjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyLmN5Y2xlID0gMDtcclxuICAgIGNvcnBvcmF0aW9uRXZlbnRMb2dnZXIuY2xlYXJFdmVudERhdGEoKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdGVzdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4obnNDb250ZXh0OiBOUyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaW5pdChuc0NvbnRleHQpO1xyXG5cclxuICAgIGlmIChucy5nZXRSZXNldEluZm8oKS5jdXJyZW50Tm9kZSAhPT0gMykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IGlzIHNwZWNpYWxpemVkIGZvciBCTjNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnID0gbnMuZmxhZ3MoZGVmYXVsdENvbmZpZyk7XHJcbiAgICBpZiAoY29uZmlnLmhlbHAgPT09IHRydWUpIHtcclxuICAgICAgICBucy50cHJpbnQoYERlZmF1bHQgY29uZmlnOiAke2RlZmF1bHRDb25maWd9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIG5zLmRpc2FibGVMb2coXCJBTExcIik7XHJcbiAgICAvLyBucy50YWlsKCk7XHJcbiAgICBucy5jbGVhckxvZygpO1xyXG5cclxuICAgIGlmICghbnMuY29ycG9yYXRpb24uaGFzQ29ycG9yYXRpb24oKSkge1xyXG4gICAgICAgIGlmICghbnMuY29ycG9yYXRpb24uY3JlYXRlQ29ycG9yYXRpb24oXCJDb3JwXCIsIGNvbmZpZy5zZWxmRnVuZCBhcyBib29sZWFuKSkge1xyXG4gICAgICAgICAgICBucy5wcmludChgQ2Fubm90IGNyZWF0ZSBjb3Jwb3JhdGlvbmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENsZWFyIHB1cmNoYXNlIG9yZGVyIG9mIGJvb3N0IG1hdGVyaWFscyB3aGVuIHNjcmlwdCBleGl0c1xyXG4gICAgbnN4LmFkZEF0RXhpdENhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjbGVhclB1cmNoYXNlT3JkZXJzKG5zLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZ3JpY3VsdHVyZUluZHVzdHJ5RGF0YSA9IG5zLmNvcnBvcmF0aW9uLmdldEluZHVzdHJ5RGF0YShJbmR1c3RyeVR5cGUuQUdSSUNVTFRVUkUpO1xyXG4gICAgY2hlbWljYWxJbmR1c3RyeURhdGEgPSBucy5jb3Jwb3JhdGlvbi5nZXRJbmR1c3RyeURhdGEoSW5kdXN0cnlUeXBlLkNIRU1JQ0FMKTtcclxuICAgIHRvYmFjY29JbmR1c3RyeURhdGEgPSBucy5jb3Jwb3JhdGlvbi5nZXRJbmR1c3RyeURhdGEoSW5kdXN0cnlUeXBlLlRPQkFDQ08pO1xyXG5cclxuICAgIGlmIChjb25maWcuYmVuY2htYXJrID09PSB0cnVlKSB7XHJcbiAgICAgICAgZXhwb3NlR2FtZUludGVybmFsT2JqZWN0cygpO1xyXG4gICAgICAgIHRlc3RpbmdUb29scy5yZXNldFJOR0RhdGEoKTtcclxuICAgICAgICBlbmFibGVUZXN0aW5nVG9vbHMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcucm91bmQxID09PSB0cnVlKSB7XHJcbiAgICAgICAgYXdhaXQgcm91bmQxKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5yb3VuZDIgPT09IHRydWUpIHtcclxuICAgICAgICBhd2FpdCByb3VuZDIoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLnJvdW5kMyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGF3YWl0IHJvdW5kMygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuaW1wcm92ZUFsbERpdmlzaW9ucyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG5zeC5raWxsUHJvY2Vzc2VzU3Bhd25Gcm9tU2FtZVNjcmlwdCgpO1xyXG4gICAgICAgIG5zLnRhaWwoKTtcclxuICAgICAgICBhd2FpdCBpbXByb3ZlQWxsRGl2aXNpb25zKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy50ZXN0KSB7XHJcbiAgICAgICAgbnMudGFpbCgpO1xyXG4gICAgICAgIGF3YWl0IHRlc3QoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQ0E7QUFBQSxFQUNJO0FBQUEsRUFHQTtBQUFBLE9BQ0c7QUFDUDtBQUFBLEVBQ0k7QUFBQSxFQUNBO0FBQUEsRUFFQTtBQUFB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
