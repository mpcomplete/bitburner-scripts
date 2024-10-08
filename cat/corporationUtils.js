import { getRecordEntries, getRecordKeys } from "src/cat/libs/Record";
import { parseNumber } from "src/cat/libs/utils";
import { Ceres } from "src/cat/libs/Ceres";
import {
  CityName,
  CorpState,
  EmployeePosition,
  getAdvertisingFactors,
  getBusinessFactor,
  getDivisionRawProduction,
  getMarketFactor,
  getResearchRPMultiplier,
  getResearchSalesMultiplier,
  getUpgradeBenefit,
  IndustryType,
  MaterialName,
  productMarketPriceMultiplier,
  ResearchName,
  UnlockName,
  UpgradeName
} from "src/cat/corporationFormulas";
import { CorpMaterialsData } from "src/cat/data/CorpMaterialsData";
var DivisionName = /* @__PURE__ */ ((DivisionName2) => {
  DivisionName2["AGRICULTURE"] = "Agriculture";
  DivisionName2["CHEMICAL"] = "Chemical";
  DivisionName2["TOBACCO"] = "Tobacco";
  return DivisionName2;
})(DivisionName || {});
const cities = [
  CityName.Sector12,
  CityName.Aevum,
  CityName.Chongqing,
  CityName.NewTokyo,
  CityName.Ishima,
  CityName.Volhaven
];
const materials = Object.values(MaterialName);
const boostMaterials = [
  MaterialName.AI_CORES,
  MaterialName.HARDWARE,
  MaterialName.REAL_ESTATE,
  MaterialName.ROBOTS
];
const costMultiplierForEmployeeStatsResearch = 5;
const costMultiplierForProductionResearch = 10;
const researchPrioritiesForSupportDivision = [
  { research: ResearchName.HI_TECH_RND_LABORATORY, costMultiplier: 1 },
  { research: ResearchName.OVERCLOCK, costMultiplier: costMultiplierForEmployeeStatsResearch },
  { research: ResearchName.STIMU, costMultiplier: costMultiplierForEmployeeStatsResearch },
  { research: ResearchName.AUTO_DRUG, costMultiplier: 13.5 },
  { research: ResearchName.GO_JUICE, costMultiplier: costMultiplierForEmployeeStatsResearch },
  { research: ResearchName.CPH4_INJECT, costMultiplier: costMultiplierForEmployeeStatsResearch },
  { research: ResearchName.SELF_CORRECTING_ASSEMBLERS, costMultiplier: costMultiplierForProductionResearch },
  { research: ResearchName.DRONES, costMultiplier: 50 },
  { research: ResearchName.DRONES_ASSEMBLY, costMultiplier: costMultiplierForProductionResearch },
  { research: ResearchName.DRONES_TRANSPORT, costMultiplier: costMultiplierForProductionResearch }
];
const researchPrioritiesForProductDivision = [
  ...researchPrioritiesForSupportDivision,
  { research: ResearchName.UPGRADE_FULCRUM, costMultiplier: costMultiplierForProductionResearch }
  // Do not buy these researches
  // {research: ResearchName.UPGRADE_CAPACITY_1, costMultiplier: costMultiplierForProductionResearch},
  // {research: ResearchName.UPGRADE_CAPACITY_2, costMultiplier: costMultiplierForProductionResearch},
];
const exportString = "(IPROD+IINV/10)*(-1)";
const dummyDivisionNamePrefix = "z-";
const sampleProductName = "Sample product";
const smartSupplyData = /* @__PURE__ */ new Map();
const productMarkupData = /* @__PURE__ */ new Map();
const setOfDivisionsWaitingForRP = /* @__PURE__ */ new Set();
class Logger {
  #enableLogging;
  city;
  constructor(enableLogging, city) {
    this.#enableLogging = enableLogging;
    this.city = city;
  }
  log(...args) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.log(...args);
    }
  }
  warn(...args) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.warn(...args);
    }
  }
  error(...args) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.error(...args);
    }
  }
  time(label) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.time(label);
    }
  }
  timeEnd(label) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.timeEnd(label);
    }
  }
  timeLog(label) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.timeLog(label);
    }
  }
}
function showWarning(ns, warningMessage) {
  console.warn(warningMessage);
  ns.print(warningMessage);
  ns.toast(warningMessage, "warning");
}
function loopAllDivisionsAndCities(ns, callback) {
  for (const division of ns.corporation.getCorporation().divisions) {
    if (division.startsWith(dummyDivisionNamePrefix)) {
      continue;
    }
    for (const city of cities) {
      callback(division, city);
    }
  }
}
async function loopAllDivisionsAndCitiesAsyncCallback(ns, callback) {
  for (const division of ns.corporation.getCorporation().divisions) {
    if (division.startsWith(dummyDivisionNamePrefix)) {
      continue;
    }
    for (const city of cities) {
      await callback(division, city);
    }
  }
}
async function waitUntilAfterStateHappens(ns, state) {
  while (true) {
    if (ns.corporation.getCorporation().prevState === state) {
      break;
    }
    await ns.corporation.nextUpdate();
  }
}
async function waitForNextTimeStateHappens(ns, state) {
  while (true) {
    await ns.corporation.nextUpdate();
    if (ns.corporation.getCorporation().prevState === state) {
      break;
    }
  }
}
async function waitForNumberOfCycles(ns, numberOfCycles) {
  const currentState = ns.corporation.getCorporation().prevState;
  let count = 0;
  while (count < numberOfCycles) {
    await waitForNextTimeStateHappens(ns, currentState);
    ++count;
  }
}
function getProfit(ns) {
  const corporation = ns.corporation.getCorporation();
  return corporation.revenue - corporation.expenses;
}
function hasDivision(ns, divisionName) {
  return ns.corporation.getCorporation().divisions.includes(divisionName);
}
function buyUpgrade(ns, upgrade, targetLevel) {
  for (let i = ns.corporation.getUpgradeLevel(upgrade); i < targetLevel; i++) {
    ns.corporation.levelUpgrade(upgrade);
  }
  if (ns.corporation.getUpgradeLevel(upgrade) < targetLevel) {
    ns.print(`ERROR: Cannot buy enough upgrade level`);
  }
}
function buyAdvert(ns, divisionName, targetLevel) {
  for (let i = ns.corporation.getHireAdVertCount(divisionName); i < targetLevel; i++) {
    ns.corporation.hireAdVert(divisionName);
  }
  if (ns.corporation.getHireAdVertCount(divisionName) < targetLevel) {
    ns.print(`ERROR: Cannot buy enough Advert level`);
  }
}
function buyUnlock(ns, unlockName) {
  if (ns.corporation.hasUnlock(unlockName)) {
    return;
  }
  ns.corporation.purchaseUnlock(unlockName);
}
function upgradeWarehouse(ns, divisionName, city, targetLevel) {
  const amount = targetLevel - ns.corporation.getWarehouse(divisionName, city).level;
  if (amount < 1) {
    return;
  }
  ns.corporation.upgradeWarehouse(divisionName, city, amount);
}
async function buyTeaAndThrowParty(ns, divisionName) {
  const epsilon = 0.5;
  while (true) {
    let finish = true;
    for (const city of cities) {
      const office = ns.corporation.getOffice(divisionName, city);
      if (office.avgEnergy < office.maxEnergy - epsilon) {
        ns.corporation.buyTea(divisionName, city);
        finish = false;
      }
      if (office.avgMorale < office.maxMorale - epsilon) {
        ns.corporation.throwParty(divisionName, city, 5e5);
        finish = false;
      }
    }
    if (finish) {
      break;
    }
    await ns.corporation.nextUpdate();
  }
}
function buyTeaAndThrowPartyForAllDivisions(ns) {
  if (ns.corporation.getInvestmentOffer().round >= 3 || ns.corporation.getCorporation().public) {
    loopAllDivisionsAndCities(ns, (divisionName, city) => {
      ns.corporation.buyTea(divisionName, city);
      ns.corporation.throwParty(divisionName, city, 5e5);
    });
    return;
  }
  const epsilon = 0.5;
  loopAllDivisionsAndCities(ns, (divisionName, city) => {
    const office = ns.corporation.getOffice(divisionName, city);
    if (office.avgEnergy < office.maxEnergy - epsilon) {
      ns.corporation.buyTea(divisionName, city);
    }
    if (office.avgMorale < office.maxMorale - epsilon) {
      ns.corporation.throwParty(divisionName, city, 5e5);
    }
  });
}
function generateOfficeSetupsForEarlyRounds(size, increaseBusiness = false) {
  let officeSetup;
  switch (size) {
    case 3:
      officeSetup = [
        { name: EmployeePosition.OPERATIONS, count: 1 },
        { name: EmployeePosition.ENGINEER, count: 1 },
        { name: EmployeePosition.BUSINESS, count: 1 },
        { name: EmployeePosition.MANAGEMENT, count: 0 }
      ];
      break;
    case 4:
      officeSetup = [
        { name: EmployeePosition.OPERATIONS, count: 1 },
        { name: EmployeePosition.ENGINEER, count: 1 },
        { name: EmployeePosition.BUSINESS, count: 1 },
        { name: EmployeePosition.MANAGEMENT, count: 1 }
      ];
      break;
    case 5:
      officeSetup = [
        { name: EmployeePosition.OPERATIONS, count: 2 },
        { name: EmployeePosition.ENGINEER, count: 1 },
        { name: EmployeePosition.BUSINESS, count: 1 },
        { name: EmployeePosition.MANAGEMENT, count: 1 }
      ];
      break;
    case 6:
      if (increaseBusiness) {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 2 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 2 },
          { name: EmployeePosition.MANAGEMENT, count: 1 }
        ];
      } else {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 2 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 1 },
          { name: EmployeePosition.MANAGEMENT, count: 2 }
        ];
      }
      break;
    case 7:
      if (increaseBusiness) {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 2 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 2 },
          { name: EmployeePosition.MANAGEMENT, count: 2 }
        ];
      } else {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 3 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 1 },
          { name: EmployeePosition.MANAGEMENT, count: 2 }
        ];
      }
      break;
    case 8:
      if (increaseBusiness) {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 3 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 2 },
          { name: EmployeePosition.MANAGEMENT, count: 2 }
          // { name: EmployeePosition.OPERATIONS, count: 2 },
          // { name: EmployeePosition.ENGINEER, count: 1 },
          // { name: EmployeePosition.BUSINESS, count: 3 },
          // { name: EmployeePosition.MANAGEMENT, count: 2 },
        ];
      } else {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 3 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 1 },
          { name: EmployeePosition.MANAGEMENT, count: 3 }
        ];
      }
      break;
    default:
      throw new Error(`Invalid office size: ${size}`);
  }
  return generateOfficeSetups(
    cities,
    size,
    officeSetup
  );
}
function generateOfficeSetups(cities2, size, jobs) {
  const officeSetupJobs = {
    Operations: 0,
    Engineer: 0,
    Business: 0,
    Management: 0,
    "Research & Development": 0,
    Intern: 0
  };
  for (const job of jobs) {
    switch (job.name) {
      case EmployeePosition.OPERATIONS:
        officeSetupJobs.Operations = job.count;
        break;
      case EmployeePosition.ENGINEER:
        officeSetupJobs.Engineer = job.count;
        break;
      case EmployeePosition.BUSINESS:
        officeSetupJobs.Business = job.count;
        break;
      case EmployeePosition.MANAGEMENT:
        officeSetupJobs.Management = job.count;
        break;
      case EmployeePosition.RESEARCH_DEVELOPMENT:
        officeSetupJobs["Research & Development"] = job.count;
        break;
      case EmployeePosition.INTERN:
        officeSetupJobs.Intern = job.count;
        break;
      default:
        throw new Error(`Invalid job: ${job.name}`);
    }
  }
  const officeSetups = [];
  for (const city of cities2) {
    officeSetups.push({
      city,
      size,
      jobs: officeSetupJobs
    });
  }
  return officeSetups;
}
function assignJobs(ns, divisionName, officeSetups) {
  for (const officeSetup of officeSetups) {
    for (const jobName of Object.values(EmployeePosition)) {
      ns.corporation.setAutoJobAssignment(divisionName, officeSetup.city, jobName, 0);
    }
    for (const [jobName, count] of Object.entries(officeSetup.jobs)) {
      if (!ns.corporation.setAutoJobAssignment(divisionName, officeSetup.city, jobName, count)) {
        ns.print(`Cannot assign job properly. City: ${officeSetup.city}, job: ${jobName}, count: ${count}`);
      }
    }
  }
}
function upgradeOffices(ns, divisionName, officeSetups) {
  for (const officeSetup of officeSetups) {
    const office = ns.corporation.getOffice(divisionName, officeSetup.city);
    if (officeSetup.size < office.size) {
      ns.print(`Office's new size is smaller than current size. City: ${officeSetup.city}`);
      continue;
    }
    if (officeSetup.size > office.size) {
      ns.corporation.upgradeOfficeSize(divisionName, officeSetup.city, officeSetup.size - office.size);
    }
    while (ns.corporation.hireEmployee(divisionName, officeSetup.city, EmployeePosition.RESEARCH_DEVELOPMENT)) {
    }
  }
  assignJobs(ns, divisionName, officeSetups);
  ns.print(`Upgrade offices completed`);
}
function clearPurchaseOrders(ns, clearInputMaterialOrders = true) {
  loopAllDivisionsAndCities(ns, (divisionName, city) => {
    for (const materialName of boostMaterials) {
      ns.corporation.buyMaterial(divisionName, city, materialName, 0);
      ns.corporation.sellMaterial(divisionName, city, materialName, "0", "MP");
    }
    if (clearInputMaterialOrders) {
      const division = ns.corporation.getDivision(divisionName);
      const industrialData = ns.corporation.getIndustryData(division.type);
      for (const materialName of getRecordKeys(industrialData.requiredMaterials)) {
        ns.corporation.buyMaterial(divisionName, city, materialName, 0);
        ns.corporation.sellMaterial(divisionName, city, materialName, "0", "MP");
      }
    }
  });
}
function generateMaterialsOrders(cities2, materials2) {
  const orders = [];
  for (const city of cities2) {
    orders.push({
      city,
      materials: materials2
    });
  }
  return orders;
}
async function stockMaterials(ns, divisionName, orders, bulkPurchase = false, discardExceeded = false) {
  let count = 0;
  while (true) {
    if (count === 5) {
      const warningMessage = `It takes too many cycles to stock up on materials. Division: ${divisionName}, orders: ${JSON.stringify(orders)}`;
      showWarning(ns, warningMessage);
      break;
    }
    let finish = true;
    for (const order of orders) {
      for (const material of order.materials) {
        const storedAmount = ns.corporation.getMaterial(divisionName, order.city, material.name).stored;
        if (storedAmount === material.count) {
          ns.corporation.buyMaterial(divisionName, order.city, material.name, 0);
          ns.corporation.sellMaterial(divisionName, order.city, material.name, "0", "MP");
          continue;
        }
        if (storedAmount < material.count) {
          if (bulkPurchase) {
            ns.corporation.bulkPurchase(divisionName, order.city, material.name, material.count - storedAmount);
          } else {
            ns.corporation.buyMaterial(divisionName, order.city, material.name, (material.count - storedAmount) / 10);
            ns.corporation.sellMaterial(divisionName, order.city, material.name, "0", "MP");
          }
          finish = false;
        } else if (discardExceeded) {
          ns.corporation.buyMaterial(divisionName, order.city, material.name, 0);
          ns.corporation.sellMaterial(divisionName, order.city, material.name, ((storedAmount - material.count) / 10).toString(), "0");
          finish = false;
        }
      }
    }
    if (finish) {
      break;
    }
    await waitForNextTimeStateHappens(ns, CorpState.PURCHASE);
    ++count;
  }
}
function getCorporationUpgradeLevels(ns) {
  const corporationUpgradeLevels = {
    [UpgradeName.SMART_FACTORIES]: 0,
    [UpgradeName.SMART_STORAGE]: 0,
    [UpgradeName.DREAM_SENSE]: 0,
    [UpgradeName.WILSON_ANALYTICS]: 0,
    [UpgradeName.NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS]: 0,
    [UpgradeName.SPEECH_PROCESSOR_IMPLANTS]: 0,
    [UpgradeName.NEURAL_ACCELERATORS]: 0,
    [UpgradeName.FOCUS_WIRES]: 0,
    [UpgradeName.ABC_SALES_BOTS]: 0,
    [UpgradeName.PROJECT_INSIGHT]: 0
  };
  for (const upgradeName of Object.values(UpgradeName)) {
    corporationUpgradeLevels[upgradeName] = ns.corporation.getUpgradeLevel(upgradeName);
  }
  return corporationUpgradeLevels;
}
function getDivisionResearches(ns, divisionName) {
  const divisionResearches = {
    [ResearchName.HI_TECH_RND_LABORATORY]: false,
    [ResearchName.AUTO_BREW]: false,
    [ResearchName.AUTO_PARTY]: false,
    [ResearchName.AUTO_DRUG]: false,
    [ResearchName.CPH4_INJECT]: false,
    [ResearchName.DRONES]: false,
    [ResearchName.DRONES_ASSEMBLY]: false,
    [ResearchName.DRONES_TRANSPORT]: false,
    [ResearchName.GO_JUICE]: false,
    [ResearchName.HR_BUDDY_RECRUITMENT]: false,
    [ResearchName.HR_BUDDY_TRAINING]: false,
    [ResearchName.MARKET_TA_1]: false,
    [ResearchName.MARKET_TA_2]: false,
    [ResearchName.OVERCLOCK]: false,
    [ResearchName.SELF_CORRECTING_ASSEMBLERS]: false,
    [ResearchName.STIMU]: false,
    [ResearchName.UPGRADE_CAPACITY_1]: false,
    [ResearchName.UPGRADE_CAPACITY_2]: false,
    [ResearchName.UPGRADE_DASHBOARD]: false,
    [ResearchName.UPGRADE_FULCRUM]: false
  };
  for (const researchName of Object.values(ResearchName)) {
    divisionResearches[researchName] = ns.corporation.hasResearched(divisionName, researchName);
  }
  return divisionResearches;
}
async function createDivision(ns, divisionName, officeSize, warehouseLevel) {
  if (!hasDivision(ns, divisionName)) {
    let industryType;
    switch (divisionName) {
      case "Agriculture" /* AGRICULTURE */:
        industryType = IndustryType.AGRICULTURE;
        break;
      case "Chemical" /* CHEMICAL */:
        industryType = IndustryType.CHEMICAL;
        break;
      case "Tobacco" /* TOBACCO */:
        industryType = IndustryType.TOBACCO;
        break;
      default:
        throw new Error(`Invalid division name: ${divisionName}`);
    }
    ns.corporation.expandIndustry(industryType, divisionName);
  }
  const division = ns.corporation.getDivision(divisionName);
  ns.print(`Initializing division: ${divisionName}`);
  for (const city of cities) {
    if (!division.cities.includes(city)) {
      ns.corporation.expandCity(divisionName, city);
      ns.print(`Expand ${divisionName} to ${city}`);
    }
    if (!ns.corporation.hasWarehouse(divisionName, city)) {
      ns.corporation.purchaseWarehouse(divisionName, city);
    }
  }
  upgradeOffices(
    ns,
    divisionName,
    generateOfficeSetups(
      cities,
      officeSize,
      [
        {
          name: EmployeePosition.RESEARCH_DEVELOPMENT,
          count: officeSize
        }
      ]
    )
  );
  for (const city of cities) {
    upgradeWarehouse(ns, divisionName, city, warehouseLevel);
    if (ns.corporation.hasUnlock(UnlockName.SMART_SUPPLY)) {
      ns.corporation.setSmartSupply(divisionName, city, true);
    }
  }
  return ns.corporation.getDivision(divisionName);
}
function getOptimalBoostMaterialQuantities(industryData, spaceConstraint, round = true) {
  const { aiCoreFactor, hardwareFactor, realEstateFactor, robotFactor } = industryData;
  const boostMaterialCoefficients = [aiCoreFactor, hardwareFactor, realEstateFactor, robotFactor];
  const boostMaterialSizes = boostMaterials.map((mat) => CorpMaterialsData[mat].size);
  const calculateOptimalQuantities = (matCoefficients, matSizes) => {
    const sumOfCoefficients = matCoefficients.reduce((a, b) => a + b, 0);
    const sumOfSizes = matSizes.reduce((a, b) => a + b, 0);
    const result = [];
    for (let i = 0; i < matSizes.length; ++i) {
      let matCount = (spaceConstraint - 500 * (matSizes[i] / matCoefficients[i] * (sumOfCoefficients - matCoefficients[i]) - (sumOfSizes - matSizes[i]))) / (sumOfCoefficients / matCoefficients[i]) / matSizes[i];
      if (matCoefficients[i] <= 0 || matCount < 0) {
        return calculateOptimalQuantities(
          matCoefficients.toSpliced(i, 1),
          matSizes.toSpliced(i, 1)
        ).toSpliced(i, 0, 0);
      } else {
        if (round) {
          matCount = Math.round(matCount);
        }
        result.push(matCount);
      }
    }
    return result;
  };
  return calculateOptimalQuantities(boostMaterialCoefficients, boostMaterialSizes);
}
function getExportRoutes(ns) {
  const exportRoutes = [];
  for (const material of materials) {
    loopAllDivisionsAndCities(ns, (divisionName, sourceCity) => {
      const exports = ns.corporation.getMaterial(divisionName, sourceCity, material).exports;
      if (exports.length === 0) {
        return;
      }
      for (const exportRoute of exports) {
        exportRoutes.push({
          material,
          sourceCity,
          sourceDivision: divisionName,
          destinationDivision: exportRoute.division,
          destinationCity: exportRoute.city,
          destinationAmount: exportRoute.amount
        });
      }
    });
  }
  return exportRoutes;
}
function buildSmartSupplyKey(divisionName, city) {
  return `${divisionName}|${city}`;
}
function getRawProduction(ns, division, city, isProduct2) {
  const office = ns.corporation.getOffice(division.name, city);
  let rawProduction = getDivisionRawProduction(
    isProduct2,
    {
      operationsProduction: office.employeeProductionByJob.Operations,
      engineerProduction: office.employeeProductionByJob.Engineer,
      managementProduction: office.employeeProductionByJob.Management
    },
    division.productionMult,
    getCorporationUpgradeLevels(ns),
    getDivisionResearches(ns, division.name)
  );
  rawProduction = rawProduction * 10;
  return rawProduction;
}
function getLimitedRawProduction(ns, division, city, industrialData, warehouse, isProduct2, productSize) {
  let rawProduction = getRawProduction(ns, division, city, isProduct2);
  let requiredStorageSpaceOfEachOutputUnit = 0;
  if (isProduct2) {
    requiredStorageSpaceOfEachOutputUnit += productSize;
  } else {
    for (const outputMaterialName of industrialData.producedMaterials) {
      requiredStorageSpaceOfEachOutputUnit += ns.corporation.getMaterialData(outputMaterialName).size;
    }
  }
  for (const [requiredMaterialName, requiredMaterialCoefficient] of getRecordEntries(industrialData.requiredMaterials)) {
    requiredStorageSpaceOfEachOutputUnit -= ns.corporation.getMaterialData(requiredMaterialName).size * requiredMaterialCoefficient;
  }
  if (requiredStorageSpaceOfEachOutputUnit > 0) {
    const maxNumberOfOutputUnits = Math.floor(
      (warehouse.size - warehouse.sizeUsed) / requiredStorageSpaceOfEachOutputUnit
    );
    rawProduction = Math.min(rawProduction, maxNumberOfOutputUnits);
  }
  rawProduction = Math.max(rawProduction, 0);
  return rawProduction;
}
function setSmartSupplyData(ns) {
  if (ns.corporation.getCorporation().prevState !== CorpState.PURCHASE) {
    return;
  }
  loopAllDivisionsAndCities(ns, (divisionName, city) => {
    const division = ns.corporation.getDivision(divisionName);
    const industrialData = ns.corporation.getIndustryData(division.type);
    const warehouse = ns.corporation.getWarehouse(division.name, city);
    let totalRawProduction = 0;
    if (industrialData.makesMaterials) {
      totalRawProduction += getLimitedRawProduction(
        ns,
        division,
        city,
        industrialData,
        warehouse,
        false
      );
    }
    if (industrialData.makesProducts) {
      for (const productName of division.products) {
        const product = ns.corporation.getProduct(divisionName, city, productName);
        if (product.developmentProgress < 100) {
          continue;
        }
        totalRawProduction += getLimitedRawProduction(
          ns,
          division,
          city,
          industrialData,
          warehouse,
          true,
          product.size
        );
      }
    }
    smartSupplyData.set(buildSmartSupplyKey(divisionName, city), totalRawProduction);
  });
}
function detectWarehouseCongestion(ns, division, industrialData, city, warehouseCongestionData) {
  const requiredMaterials = getRecordEntries(industrialData.requiredMaterials);
  let isWarehouseCongested = false;
  const warehouseCongestionDataKey = `${division.name}|${city}`;
  const items = [];
  if (industrialData.producedMaterials) {
    for (const materialName of industrialData.producedMaterials) {
      items.push(ns.corporation.getMaterial(division.name, city, materialName));
    }
  }
  if (industrialData.makesProducts) {
    for (const productName of division.products) {
      const product = ns.corporation.getProduct(division.name, city, productName);
      if (product.developmentProgress < 100) {
        continue;
      }
      items.push(product);
    }
  }
  for (const item of items) {
    if (item.productionAmount !== 0) {
      warehouseCongestionData.set(warehouseCongestionDataKey, 0);
      continue;
    }
    let numberOfCongestionTimes = warehouseCongestionData.get(warehouseCongestionDataKey) + 1;
    if (Number.isNaN(numberOfCongestionTimes)) {
      numberOfCongestionTimes = 0;
    }
    warehouseCongestionData.set(warehouseCongestionDataKey, numberOfCongestionTimes);
    break;
  }
  if (warehouseCongestionData.get(warehouseCongestionDataKey) > 5) {
    isWarehouseCongested = true;
  }
  if (isWarehouseCongested) {
    showWarning(ns, `Warehouse may be congested. Division: ${division.name}, city: ${city}.`);
    for (const [materialName] of requiredMaterials) {
      ns.corporation.buyMaterial(division.name, city, materialName, 0);
      ns.corporation.sellMaterial(division.name, city, materialName, "MAX", "0");
    }
    warehouseCongestionData.set(warehouseCongestionDataKey, 0);
  } else {
    for (const [materialName] of requiredMaterials) {
      const material = ns.corporation.getMaterial(division.name, city, materialName);
      if (material.desiredSellAmount !== 0) {
        ns.corporation.sellMaterial(division.name, city, materialName, "0", "0");
      }
    }
  }
  return isWarehouseCongested;
}
function buyOptimalAmountOfInputMaterials(ns, warehouseCongestionData) {
  if (ns.corporation.getCorporation().nextState !== "PURCHASE") {
    return;
  }
  loopAllDivisionsAndCities(ns, (divisionName, city) => {
    const division = ns.corporation.getDivision(divisionName);
    const industrialData = ns.corporation.getIndustryData(division.type);
    const office = ns.corporation.getOffice(division.name, city);
    const requiredMaterials = getRecordEntries(industrialData.requiredMaterials);
    let isWarehouseCongested = false;
    if (!setOfDivisionsWaitingForRP.has(divisionName) && office.employeeJobs["Research & Development"] !== office.numEmployees) {
      isWarehouseCongested = detectWarehouseCongestion(
        ns,
        division,
        industrialData,
        city,
        warehouseCongestionData
      );
    }
    if (isWarehouseCongested) {
      return;
    }
    const warehouse = ns.corporation.getWarehouse(division.name, city);
    const inputMaterials = {};
    for (const [materialName, materialCoefficient] of requiredMaterials) {
      inputMaterials[materialName] = {
        requiredQuantity: 0,
        coefficient: materialCoefficient
      };
    }
    for (const inputMaterialData of Object.values(inputMaterials)) {
      const requiredQuantity = (smartSupplyData.get(buildSmartSupplyKey(divisionName, city)) ?? 0) * inputMaterialData.coefficient;
      inputMaterialData.requiredQuantity += requiredQuantity;
    }
    for (const [materialName, inputMaterialData] of getRecordEntries(inputMaterials)) {
      const materialData = ns.corporation.getMaterialData(materialName);
      const maxAcceptableQuantity = Math.floor((warehouse.size - warehouse.sizeUsed) / materialData.size);
      const limitedRequiredQuantity = Math.min(inputMaterialData.requiredQuantity, maxAcceptableQuantity);
      if (limitedRequiredQuantity > 0) {
        inputMaterialData.requiredQuantity = limitedRequiredQuantity;
      }
    }
    let leastAmountOfOutputUnits = Number.MAX_VALUE;
    for (const { requiredQuantity, coefficient } of Object.values(inputMaterials)) {
      const amountOfOutputUnits = requiredQuantity / coefficient;
      if (amountOfOutputUnits < leastAmountOfOutputUnits) {
        leastAmountOfOutputUnits = amountOfOutputUnits;
      }
    }
    for (const inputMaterialData of Object.values(inputMaterials)) {
      inputMaterialData.requiredQuantity = leastAmountOfOutputUnits * inputMaterialData.coefficient;
    }
    let requiredSpace = 0;
    for (const [materialName, inputMaterialData] of getRecordEntries(inputMaterials)) {
      requiredSpace += inputMaterialData.requiredQuantity * ns.corporation.getMaterialData(materialName).size;
    }
    const freeSpace = warehouse.size - warehouse.sizeUsed;
    if (requiredSpace > freeSpace) {
      const constrainedStorageSpaceMultiplier = freeSpace / requiredSpace;
      for (const inputMaterialData of Object.values(inputMaterials)) {
        inputMaterialData.requiredQuantity = Math.floor(inputMaterialData.requiredQuantity * constrainedStorageSpaceMultiplier);
      }
    }
    for (const [materialName, inputMaterialData] of getRecordEntries(inputMaterials)) {
      const material = ns.corporation.getMaterial(divisionName, city, materialName);
      inputMaterialData.requiredQuantity = Math.max(0, inputMaterialData.requiredQuantity - material.stored);
    }
    for (const [materialName, inputMaterialData] of getRecordEntries(inputMaterials)) {
      ns.corporation.buyMaterial(divisionName, city, materialName, inputMaterialData.requiredQuantity / 10);
    }
  });
}
async function findOptimalAmountOfBoostMaterials(ns, divisionName, industryData, city, useWarehouseSize, ratio) {
  const warehouseSize = ns.corporation.getWarehouse(divisionName, city).size;
  if (useWarehouseSize) {
    return getOptimalBoostMaterialQuantities(industryData, warehouseSize * ratio);
  }
  await waitUntilAfterStateHappens(ns, CorpState.PRODUCTION);
  const availableSpace = ns.corporation.getWarehouse(divisionName, city).size - ns.corporation.getWarehouse(divisionName, city).sizeUsed;
  return getOptimalBoostMaterialQuantities(industryData, availableSpace * ratio);
}
async function waitUntilHavingEnoughResearchPoints(ns, conditions) {
  ns.print(`Waiting for research points: ${JSON.stringify(conditions)}`);
  while (true) {
    let finish = true;
    for (const condition of conditions) {
      if (ns.corporation.getDivision(condition.divisionName).researchPoints >= condition.researchPoint) {
        setOfDivisionsWaitingForRP.delete(condition.divisionName);
        continue;
      }
      setOfDivisionsWaitingForRP.add(condition.divisionName);
      finish = false;
    }
    if (finish) {
      break;
    }
    await ns.corporation.nextUpdate();
  }
  ns.print(`Finished waiting for research points. Conditions: ${JSON.stringify(conditions)}`);
}
function getProductIdArray(ns, divisionName) {
  const products = ns.corporation.getDivision(divisionName).products;
  return products.map((productName) => {
    const productNameParts = productName.split("-");
    if (productNameParts.length != 3) {
      return NaN;
    }
    return parseNumber(productNameParts[1]);
  }).filter((productIndex) => !Number.isNaN(productIndex));
}
function generateNextProductName(ns, divisionName, productDevelopmentBudget) {
  if (!Number.isFinite(productDevelopmentBudget) || productDevelopmentBudget < 1e3) {
    throw new Error(`Invalid budget: ${productDevelopmentBudget}`);
  }
  const productIdArray = getProductIdArray(ns, divisionName);
  if (productIdArray.length === 0) {
    return `${divisionName}-00000-${productDevelopmentBudget.toExponential(5)}`;
  }
  return `${divisionName}-${(Math.max(...productIdArray) + 1).toString().padStart(5, "0")}-${productDevelopmentBudget.toExponential(5)}`;
}
function getMaxNumberOfProducts(ns, divisionName) {
  let maxNumberOfProducts = 3;
  if (ns.corporation.hasResearched(divisionName, ResearchName.UPGRADE_CAPACITY_1)) {
    maxNumberOfProducts = 4;
  }
  if (ns.corporation.hasResearched(divisionName, ResearchName.UPGRADE_CAPACITY_2)) {
    maxNumberOfProducts = 5;
  }
  return maxNumberOfProducts;
}
function developNewProduct(ns, divisionName, mainProductDevelopmentCity, productDevelopmentBudget) {
  const products = ns.corporation.getDivision(divisionName).products;
  let hasDevelopingProduct = false;
  let bestProduct = null;
  let worstProduct = null;
  let maxProductRating = Number.MIN_VALUE;
  let minProductRating = Number.MAX_VALUE;
  for (const productName2 of products) {
    const product = ns.corporation.getProduct(divisionName, mainProductDevelopmentCity, productName2);
    if (product.developmentProgress < 100) {
      hasDevelopingProduct = true;
      break;
    }
    const productRating = product.rating;
    if (productRating < minProductRating) {
      worstProduct = product;
      minProductRating = productRating;
    }
    if (productRating > maxProductRating) {
      bestProduct = product;
      maxProductRating = productRating;
    }
  }
  if (hasDevelopingProduct) {
    return null;
  }
  if (!bestProduct && products.length > 0) {
    throw new Error("Cannot find the best product");
  }
  if (!worstProduct && products.length > 0) {
    throw new Error("Cannot find the worst product to discontinue");
  }
  if (bestProduct) {
    const bestProductBudget = bestProduct.designInvestment + bestProduct.advertisingInvestment;
    if (productDevelopmentBudget < bestProductBudget * 0.5 && products.length >= 3) {
      const warningMessage = `Budget for new product is too low: ${ns.formatNumber(productDevelopmentBudget)}. Current best product's budget: ${ns.formatNumber(bestProductBudget)}`;
      showWarning(
        ns,
        warningMessage
      );
    }
  }
  if (worstProduct && products.length === getMaxNumberOfProducts(ns, divisionName)) {
    ns.corporation.discontinueProduct(divisionName, worstProduct.name);
  }
  const productName = generateNextProductName(ns, divisionName, productDevelopmentBudget);
  ns.corporation.makeProduct(
    divisionName,
    mainProductDevelopmentCity,
    productName,
    productDevelopmentBudget / 2,
    productDevelopmentBudget / 2
  );
  return productName;
}
function getNewestProductName(ns, divisionName) {
  const products = ns.corporation.getDivision(divisionName).products;
  if (products.length === 0) {
    return null;
  }
  return products[products.length - 1];
}
async function calculateProductMarkup(divisionRP, industryScienceFactor, product, employeeProductionByJob) {
  const designInvestmentMultiplier = 1 + Math.pow(product.designInvestment, 0.1) / 100;
  const researchPointMultiplier = 1 + Math.pow(divisionRP, industryScienceFactor) / 800;
  const k = designInvestmentMultiplier * researchPointMultiplier;
  const balanceMultiplier = function(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) {
    const totalCreationJobFactors2 = creationJobFactorsEngineer + creationJobFactorsManagement + creationJobFactorsRnD + creationJobFactorsOperations + creationJobFactorsBusiness;
    const engineerRatio = creationJobFactorsEngineer / totalCreationJobFactors2;
    const managementRatio2 = creationJobFactorsManagement / totalCreationJobFactors2;
    const researchAndDevelopmentRatio = creationJobFactorsRnD / totalCreationJobFactors2;
    const operationsRatio = creationJobFactorsOperations / totalCreationJobFactors2;
    const businessRatio2 = creationJobFactorsBusiness / totalCreationJobFactors2;
    return 1.2 * engineerRatio + 0.9 * managementRatio2 + 1.3 * researchAndDevelopmentRatio + 1.5 * operationsRatio + businessRatio2;
  };
  const f1 = function([creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness]) {
    return k * balanceMultiplier(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) * (0.1 * creationJobFactorsEngineer + 0.05 * creationJobFactorsManagement + 0.05 * creationJobFactorsRnD + 0.02 * creationJobFactorsOperations + 0.02 * creationJobFactorsBusiness) - product.stats.quality;
  };
  const f2 = function([creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness]) {
    return k * balanceMultiplier(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) * (0.15 * creationJobFactorsEngineer + 0.02 * creationJobFactorsManagement + 0.02 * creationJobFactorsRnD + 0.02 * creationJobFactorsOperations + 0.02 * creationJobFactorsBusiness) - product.stats.performance;
  };
  const f3 = function([creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness]) {
    return k * balanceMultiplier(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) * (0.05 * creationJobFactorsEngineer + 0.02 * creationJobFactorsManagement + 0.08 * creationJobFactorsRnD + 0.05 * creationJobFactorsOperations + 0.05 * creationJobFactorsBusiness) - product.stats.durability;
  };
  const f4 = function([creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness]) {
    return k * balanceMultiplier(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) * (0.02 * creationJobFactorsEngineer + 0.08 * creationJobFactorsManagement + 0.02 * creationJobFactorsRnD + 0.05 * creationJobFactorsOperations + 0.08 * creationJobFactorsBusiness) - product.stats.reliability;
  };
  const f5 = function([creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness]) {
    return k * balanceMultiplier(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) * (0.08 * creationJobFactorsManagement + 0.05 * creationJobFactorsRnD + 0.02 * creationJobFactorsOperations + 0.1 * creationJobFactorsBusiness) - product.stats.aesthetics;
  };
  let solverResult = {
    success: false,
    message: "",
    x: [],
    report: "string"
  };
  const solver = new Ceres();
  await solver.promise.then(function() {
    solver.add_function(f1);
    solver.add_function(f2);
    solver.add_function(f3);
    solver.add_function(f4);
    solver.add_function(f5);
    let guess = [1, 1, 1, 1, 1];
    if (employeeProductionByJob) {
      guess = [
        employeeProductionByJob.engineerProduction,
        employeeProductionByJob.managementProduction,
        employeeProductionByJob.researchAndDevelopmentProduction,
        employeeProductionByJob.operationsProduction,
        employeeProductionByJob.businessProduction
      ];
    }
    solverResult = solver.solve(guess);
    solver.remove();
  });
  if (!solverResult.success) {
    throw new Error(`ERROR: Cannot find hidden stats of product: ${JSON.stringify(product)}`);
  }
  const totalCreationJobFactors = solverResult.x[0] + solverResult.x[1] + solverResult.x[2] + solverResult.x[3] + solverResult.x[4];
  const managementRatio = solverResult.x[1] / totalCreationJobFactors;
  const businessRatio = solverResult.x[4] / totalCreationJobFactors;
  const advertisingInvestmentMultiplier = 1 + Math.pow(product.advertisingInvestment, 0.1) / 100;
  const businessManagementRatio = Math.max(businessRatio + managementRatio, 1 / totalCreationJobFactors);
  return 100 / (advertisingInvestmentMultiplier * Math.pow(product.stats.quality + 1e-3, 0.65) * businessManagementRatio);
}
function isProduct(item) {
  return "rating" in item;
}
function validateProductMarkupMap(ns) {
  for (const productKey of productMarkupData.keys()) {
    const productKeyInfo = productKey.split("|");
    const divisionName = productKeyInfo[0];
    const productName = productKeyInfo[2];
    if (!ns.corporation.getDivision(divisionName).products.includes(productName)) {
      productMarkupData.delete(productKey);
    }
  }
}
async function getProductMarkup(division, industryData, city, item, office) {
  let productMarkup;
  const productMarkupKey = `${division.name}|${city}|${item.name}`;
  productMarkup = productMarkupData.get(productMarkupKey);
  if (!productMarkup) {
    productMarkup = await calculateProductMarkup(
      division.researchPoints,
      industryData.scienceFactor,
      item,
      office ? {
        operationsProduction: office.employeeProductionByJob.Operations,
        engineerProduction: office.employeeProductionByJob.Engineer,
        businessProduction: office.employeeProductionByJob.Business,
        managementProduction: office.employeeProductionByJob.Management,
        researchAndDevelopmentProduction: office.employeeProductionByJob["Research & Development"]
      } : void 0
    );
    productMarkupData.set(productMarkupKey, productMarkup);
  }
  return productMarkup;
}
async function getOptimalSellingPrice(ns, division, industryData, city, item) {
  const itemIsProduct = isProduct(item);
  if (itemIsProduct && item.developmentProgress < 100) {
    throw new Error(`Product is not finished. Product: ${JSON.stringify(item)}`);
  }
  if (!ns.corporation.hasUnlock(UnlockName.MARKET_RESEARCH_DEMAND)) {
    throw new Error(`You must unlock "Market Research - Demand"`);
  }
  if (!ns.corporation.hasUnlock(UnlockName.MARKET_DATA_COMPETITION)) {
    throw new Error(`You must unlock "Market Data - Competition"`);
  }
  if (ns.corporation.getCorporation().nextState !== "SALE") {
    return "0";
  }
  const expectedSalesVolume = item.stored / 10;
  if (expectedSalesVolume < 1e-5) {
    return "0";
  }
  const office = ns.corporation.getOffice(division.name, city);
  let productMarkup;
  let markupLimit;
  let itemMultiplier;
  let marketPrice;
  if (itemIsProduct) {
    productMarkup = await getProductMarkup(
      division,
      industryData,
      city,
      item,
      office
    );
    markupLimit = Math.max(item.effectiveRating, 1e-3) / productMarkup;
    itemMultiplier = 0.5 * Math.pow(item.effectiveRating, 0.65);
    marketPrice = item.productionCost;
  } else {
    markupLimit = item.quality / ns.corporation.getMaterialData(item.name).baseMarkup;
    itemMultiplier = item.quality + 1e-3;
    marketPrice = item.marketPrice;
  }
  const businessFactor = getBusinessFactor(office.employeeProductionByJob[EmployeePosition.BUSINESS]);
  const advertisingFactor = getAdvertisingFactors(division.awareness, division.popularity, industryData.advertisingFactor)[0];
  const marketFactor = getMarketFactor(item.demand, item.competition);
  const salesMultipliers = itemMultiplier * businessFactor * advertisingFactor * marketFactor * getUpgradeBenefit(UpgradeName.ABC_SALES_BOTS, ns.corporation.getUpgradeLevel(UpgradeName.ABC_SALES_BOTS)) * getResearchSalesMultiplier(getDivisionResearches(ns, division.name));
  const optimalPrice = markupLimit / Math.sqrt(expectedSalesVolume / salesMultipliers) + marketPrice;
  return optimalPrice.toString();
}
async function setOptimalSellingPriceForEverything(ns) {
  if (ns.corporation.getCorporation().nextState !== "SALE") {
    return;
  }
  if (!ns.corporation.hasUnlock(UnlockName.MARKET_RESEARCH_DEMAND) || !ns.corporation.hasUnlock(UnlockName.MARKET_DATA_COMPETITION)) {
    return;
  }
  await loopAllDivisionsAndCitiesAsyncCallback(ns, async (divisionName, city) => {
    const division = ns.corporation.getDivision(divisionName);
    const industryData = ns.corporation.getIndustryData(division.type);
    const products = division.products;
    const hasMarketTA2 = ns.corporation.hasResearched(divisionName, ResearchName.MARKET_TA_2);
    if (industryData.makesProducts) {
      for (const productName of products) {
        const product = ns.corporation.getProduct(divisionName, city, productName);
        if (product.developmentProgress < 100) {
          continue;
        }
        if (hasMarketTA2) {
          ns.corporation.setProductMarketTA2(divisionName, productName, true);
          continue;
        }
        const optimalPrice = await getOptimalSellingPrice(ns, division, industryData, city, product);
        if (parseNumber(optimalPrice) > 0) {
          ns.corporation.sellProduct(divisionName, city, productName, "MAX", optimalPrice, false);
        }
      }
    }
    if (industryData.makesMaterials) {
      for (const materialName of industryData.producedMaterials) {
        const material = ns.corporation.getMaterial(divisionName, city, materialName);
        if (hasMarketTA2) {
          ns.corporation.setMaterialMarketTA2(divisionName, city, materialName, true);
          continue;
        }
        const optimalPrice = await getOptimalSellingPrice(ns, division, industryData, city, material);
        if (parseNumber(optimalPrice) > 0) {
          ns.corporation.sellMaterial(divisionName, city, materialName, "MAX", optimalPrice);
        }
      }
    }
  });
}
function getResearchPointGainRate(ns, divisionName) {
  let totalGainRate = 0;
  for (const city of cities) {
    const office = ns.corporation.getOffice(divisionName, city);
    totalGainRate += 4 * 4e-3 * Math.pow(office.employeeProductionByJob[EmployeePosition.RESEARCH_DEVELOPMENT], 0.5) * getUpgradeBenefit(UpgradeName.PROJECT_INSIGHT, ns.corporation.getUpgradeLevel(UpgradeName.PROJECT_INSIGHT)) * getResearchRPMultiplier(getDivisionResearches(ns, divisionName));
  }
  return totalGainRate;
}
async function buyBoostMaterials(ns, division) {
  const funds = ns.corporation.getCorporation().funds;
  if (funds < 1e10) {
    throw new Error(`Funds is too small to buy boost materials. Funds: ${ns.formatNumber(funds)}.`);
  }
  const industryData = ns.corporation.getIndustryData(division.type);
  let reservedSpaceRatio = 0.2;
  const ratio = 0.1;
  if (industryData.makesProducts) {
    reservedSpaceRatio = 0.1;
  }
  let count = 0;
  while (true) {
    await waitForNextTimeStateHappens(ns, CorpState.EXPORT);
    if (count === 20) {
      const warningMessage = `It takes too many cycles to buy boost materials. Division: ${division.name}.`;
      showWarning(ns, warningMessage);
      break;
    }
    let finish = true;
    const orders = [];
    for (const city of cities) {
      const warehouse = ns.corporation.getWarehouse(division.name, city);
      const availableSpace = warehouse.size - warehouse.sizeUsed;
      if (availableSpace < warehouse.size * reservedSpaceRatio) {
        continue;
      }
      let effectiveRatio = ratio;
      if (availableSpace / warehouse.size < 0.5 && division.type === IndustryType.AGRICULTURE || availableSpace / warehouse.size < 0.75 && (division.type === IndustryType.CHEMICAL || division.type === IndustryType.TOBACCO)) {
        effectiveRatio = 0.2;
      }
      const boostMaterialQuantities = getOptimalBoostMaterialQuantities(industryData, availableSpace * effectiveRatio);
      orders.push({
        city,
        materials: [
          {
            name: MaterialName.AI_CORES,
            count: ns.corporation.getMaterial(division.name, city, MaterialName.AI_CORES).stored + boostMaterialQuantities[0]
          },
          {
            name: MaterialName.HARDWARE,
            count: ns.corporation.getMaterial(division.name, city, MaterialName.HARDWARE).stored + boostMaterialQuantities[1]
          },
          {
            name: MaterialName.REAL_ESTATE,
            count: ns.corporation.getMaterial(division.name, city, MaterialName.REAL_ESTATE).stored + boostMaterialQuantities[2]
          },
          {
            name: MaterialName.ROBOTS,
            count: ns.corporation.getMaterial(division.name, city, MaterialName.ROBOTS).stored + boostMaterialQuantities[3]
          }
        ]
      });
      finish = false;
    }
    if (finish) {
      break;
    }
    await stockMaterials(
      ns,
      division.name,
      orders,
      true
    );
    ++count;
  }
}
function getProductMarketPrice(ns, division, industryData, city) {
  let productMarketPrice = 0;
  for (const [materialName, materialCoefficient] of getRecordEntries(industryData.requiredMaterials)) {
    const materialMarketPrice = ns.corporation.getMaterial(division.name, city, materialName).marketPrice;
    productMarketPrice += materialMarketPrice * materialCoefficient;
  }
  return productMarketPrice * productMarketPriceMultiplier;
}
function createDummyDivisions(ns, numberOfDivisions) {
  const divisions = ns.corporation.getCorporation().divisions;
  for (let i = 0; i < numberOfDivisions; i++) {
    const dummyDivisionName = dummyDivisionNamePrefix + i.toString().padStart(2, "0");
    if (divisions.includes(dummyDivisionName)) {
      continue;
    }
    ns.corporation.expandIndustry(IndustryType.RESTAURANT, dummyDivisionName);
    const division = ns.corporation.getDivision(dummyDivisionName);
    for (const city of cities) {
      if (!division.cities.includes(city)) {
        ns.corporation.expandCity(dummyDivisionName, city);
      }
      if (!ns.corporation.hasWarehouse(dummyDivisionName, city)) {
        ns.corporation.purchaseWarehouse(dummyDivisionName, city);
      }
    }
  }
}
async function waitForOffer(ns, numberOfInitCycles, maxAdditionalCycles, expectedOffer) {
  await waitForNumberOfCycles(ns, numberOfInitCycles);
  let offer = ns.corporation.getInvestmentOffer().funds;
  for (let i = 0; i < maxAdditionalCycles; i++) {
    await waitForNumberOfCycles(ns, 1);
    console.log(`Offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}`);
    if (ns.corporation.getInvestmentOffer().funds < offer * 1.001) {
      break;
    }
    offer = ns.corporation.getInvestmentOffer().funds;
  }
  if (ns.corporation.getInvestmentOffer().funds < expectedOffer) {
    ns.alert(
      `Offer is lower than expected value. Offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}. Expected value: ${ns.formatNumber(expectedOffer)}.`
    );
  }
}
export {
  DivisionName,
  Logger,
  assignJobs,
  boostMaterials,
  buyAdvert,
  buyBoostMaterials,
  buyOptimalAmountOfInputMaterials,
  buyTeaAndThrowParty,
  buyTeaAndThrowPartyForAllDivisions,
  buyUnlock,
  buyUpgrade,
  calculateProductMarkup,
  cities,
  clearPurchaseOrders,
  createDivision,
  createDummyDivisions,
  developNewProduct,
  dummyDivisionNamePrefix,
  exportString,
  findOptimalAmountOfBoostMaterials,
  generateMaterialsOrders,
  generateNextProductName,
  generateOfficeSetups,
  generateOfficeSetupsForEarlyRounds,
  getCorporationUpgradeLevels,
  getDivisionResearches,
  getExportRoutes,
  getLimitedRawProduction,
  getNewestProductName,
  getOptimalBoostMaterialQuantities,
  getOptimalSellingPrice,
  getProductIdArray,
  getProductMarketPrice,
  getProductMarkup,
  getProfit,
  getRawProduction,
  getResearchPointGainRate,
  hasDivision,
  isProduct,
  loopAllDivisionsAndCities,
  loopAllDivisionsAndCitiesAsyncCallback,
  materials,
  researchPrioritiesForProductDivision,
  researchPrioritiesForSupportDivision,
  sampleProductName,
  setOptimalSellingPriceForEverything,
  setSmartSupplyData,
  showWarning,
  stockMaterials,
  upgradeOffices,
  upgradeWarehouse,
  validateProductMarkupMap,
  waitForNextTimeStateHappens,
  waitForNumberOfCycles,
  waitForOffer,
  waitUntilAfterStateHappens,
  waitUntilHavingEnoughResearchPoints
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uVXRpbHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XHJcbiAgICBDb3JwSW5kdXN0cnlEYXRhLFxyXG4gICAgQ29ycEluZHVzdHJ5TmFtZSxcclxuICAgIENvcnBNYXRlcmlhbE5hbWUsXHJcbiAgICBEaXZpc2lvbixcclxuICAgIE1hdGVyaWFsLFxyXG4gICAgTlMsXHJcbiAgICBPZmZpY2UsXHJcbiAgICBQcm9kdWN0LFxyXG4gICAgV2FyZWhvdXNlXHJcbn0gZnJvbSBcIkBuc1wiO1xyXG5pbXBvcnQgeyBnZXRSZWNvcmRFbnRyaWVzLCBnZXRSZWNvcmRLZXlzLCBQYXJ0aWFsUmVjb3JkIH0gZnJvbSBcIi9saWJzL1JlY29yZFwiO1xyXG5pbXBvcnQgeyBwYXJzZU51bWJlciB9IGZyb20gXCIvbGlicy91dGlsc1wiO1xyXG5pbXBvcnQgeyBDZXJlcyB9IGZyb20gXCIvbGlicy9DZXJlc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQ2VyZXNTb2x2ZXJSZXN1bHQsXHJcbiAgICBDaXR5TmFtZSxcclxuICAgIENvcnBvcmF0aW9uVXBncmFkZUxldmVscyxcclxuICAgIENvcnBTdGF0ZSxcclxuICAgIERpdmlzaW9uUmVzZWFyY2hlcyxcclxuICAgIEVtcGxveWVlUG9zaXRpb24sXHJcbiAgICBFeHBvcnRSb3V0ZSxcclxuICAgIGdldEFkdmVydGlzaW5nRmFjdG9ycyxcclxuICAgIGdldEJ1c2luZXNzRmFjdG9yLFxyXG4gICAgZ2V0RGl2aXNpb25SYXdQcm9kdWN0aW9uLFxyXG4gICAgZ2V0TWFya2V0RmFjdG9yLFxyXG4gICAgZ2V0UmVzZWFyY2hSUE11bHRpcGxpZXIsXHJcbiAgICBnZXRSZXNlYXJjaFNhbGVzTXVsdGlwbGllcixcclxuICAgIGdldFVwZ3JhZGVCZW5lZml0LFxyXG4gICAgSW5kdXN0cnlUeXBlLFxyXG4gICAgTWF0ZXJpYWxOYW1lLFxyXG4gICAgTWF0ZXJpYWxPcmRlcixcclxuICAgIE9mZmljZVNldHVwLFxyXG4gICAgT2ZmaWNlU2V0dXBKb2JzLFxyXG4gICAgcHJvZHVjdE1hcmtldFByaWNlTXVsdGlwbGllcixcclxuICAgIFJlc2VhcmNoTmFtZSxcclxuICAgIFJlc2VhcmNoUHJpb3JpdHksXHJcbiAgICBVbmxvY2tOYW1lLFxyXG4gICAgVXBncmFkZU5hbWVcclxufSBmcm9tIFwiL2NvcnBvcmF0aW9uRm9ybXVsYXNcIjtcclxuaW1wb3J0IHsgQ29ycE1hdGVyaWFsc0RhdGEgfSBmcm9tIFwiL2RhdGEvQ29ycE1hdGVyaWFsc0RhdGFcIjtcclxuXHJcbmV4cG9ydCBlbnVtIERpdmlzaW9uTmFtZSB7XHJcbiAgICBBR1JJQ1VMVFVSRSA9IFwiQWdyaWN1bHR1cmVcIixcclxuICAgIENIRU1JQ0FMID0gXCJDaGVtaWNhbFwiLFxyXG4gICAgVE9CQUNDTyA9IFwiVG9iYWNjb1wiLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2l0aWVzOiBDaXR5TmFtZVtdID0gW1xyXG4gICAgQ2l0eU5hbWUuU2VjdG9yMTIsXHJcbiAgICBDaXR5TmFtZS5BZXZ1bSxcclxuICAgIENpdHlOYW1lLkNob25ncWluZyxcclxuICAgIENpdHlOYW1lLk5ld1Rva3lvLFxyXG4gICAgQ2l0eU5hbWUuSXNoaW1hLFxyXG4gICAgQ2l0eU5hbWUuVm9saGF2ZW5cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXRlcmlhbHMgPSBPYmplY3QudmFsdWVzKE1hdGVyaWFsTmFtZSk7XHJcblxyXG5leHBvcnQgY29uc3QgYm9vc3RNYXRlcmlhbHMgPSBbXHJcbiAgICBNYXRlcmlhbE5hbWUuQUlfQ09SRVMsXHJcbiAgICBNYXRlcmlhbE5hbWUuSEFSRFdBUkUsXHJcbiAgICBNYXRlcmlhbE5hbWUuUkVBTF9FU1RBVEUsXHJcbiAgICBNYXRlcmlhbE5hbWUuUk9CT1RTLFxyXG5dO1xyXG5cclxuY29uc3QgY29zdE11bHRpcGxpZXJGb3JFbXBsb3llZVN0YXRzUmVzZWFyY2ggPSA1O1xyXG5jb25zdCBjb3N0TXVsdGlwbGllckZvclByb2R1Y3Rpb25SZXNlYXJjaCA9IDEwO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc2VhcmNoUHJpb3JpdGllc0ZvclN1cHBvcnREaXZpc2lvbjogUmVzZWFyY2hQcmlvcml0eVtdID0gW1xyXG4gICAgeyByZXNlYXJjaDogUmVzZWFyY2hOYW1lLkhJX1RFQ0hfUk5EX0xBQk9SQVRPUlksIGNvc3RNdWx0aXBsaWVyOiAxIH0sXHJcbiAgICB7IHJlc2VhcmNoOiBSZXNlYXJjaE5hbWUuT1ZFUkNMT0NLLCBjb3N0TXVsdGlwbGllcjogY29zdE11bHRpcGxpZXJGb3JFbXBsb3llZVN0YXRzUmVzZWFyY2ggfSxcclxuICAgIHsgcmVzZWFyY2g6IFJlc2VhcmNoTmFtZS5TVElNVSwgY29zdE11bHRpcGxpZXI6IGNvc3RNdWx0aXBsaWVyRm9yRW1wbG95ZWVTdGF0c1Jlc2VhcmNoIH0sXHJcbiAgICB7IHJlc2VhcmNoOiBSZXNlYXJjaE5hbWUuQVVUT19EUlVHLCBjb3N0TXVsdGlwbGllcjogMTMuNSB9LFxyXG4gICAgeyByZXNlYXJjaDogUmVzZWFyY2hOYW1lLkdPX0pVSUNFLCBjb3N0TXVsdGlwbGllcjogY29zdE11bHRpcGxpZXJGb3JFbXBsb3llZVN0YXRzUmVzZWFyY2ggfSxcclxuICAgIHsgcmVzZWFyY2g6IFJlc2VhcmNoTmFtZS5DUEg0X0lOSkVDVCwgY29zdE11bHRpcGxpZXI6IGNvc3RNdWx0aXBsaWVyRm9yRW1wbG95ZWVTdGF0c1Jlc2VhcmNoIH0sXHJcblxyXG4gICAgeyByZXNlYXJjaDogUmVzZWFyY2hOYW1lLlNFTEZfQ09SUkVDVElOR19BU1NFTUJMRVJTLCBjb3N0TXVsdGlwbGllcjogY29zdE11bHRpcGxpZXJGb3JQcm9kdWN0aW9uUmVzZWFyY2ggfSxcclxuICAgIHsgcmVzZWFyY2g6IFJlc2VhcmNoTmFtZS5EUk9ORVMsIGNvc3RNdWx0aXBsaWVyOiA1MCB9LFxyXG4gICAgeyByZXNlYXJjaDogUmVzZWFyY2hOYW1lLkRST05FU19BU1NFTUJMWSwgY29zdE11bHRpcGxpZXI6IGNvc3RNdWx0aXBsaWVyRm9yUHJvZHVjdGlvblJlc2VhcmNoIH0sXHJcbiAgICB7IHJlc2VhcmNoOiBSZXNlYXJjaE5hbWUuRFJPTkVTX1RSQU5TUE9SVCwgY29zdE11bHRpcGxpZXI6IGNvc3RNdWx0aXBsaWVyRm9yUHJvZHVjdGlvblJlc2VhcmNoIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZWFyY2hQcmlvcml0aWVzRm9yUHJvZHVjdERpdmlzaW9uOiBSZXNlYXJjaFByaW9yaXR5W10gPSBbXHJcbiAgICAuLi5yZXNlYXJjaFByaW9yaXRpZXNGb3JTdXBwb3J0RGl2aXNpb24sXHJcbiAgICB7IHJlc2VhcmNoOiBSZXNlYXJjaE5hbWUuVVBHUkFERV9GVUxDUlVNLCBjb3N0TXVsdGlwbGllcjogY29zdE11bHRpcGxpZXJGb3JQcm9kdWN0aW9uUmVzZWFyY2ggfSxcclxuICAgIC8vIERvIG5vdCBidXkgdGhlc2UgcmVzZWFyY2hlc1xyXG4gICAgLy8ge3Jlc2VhcmNoOiBSZXNlYXJjaE5hbWUuVVBHUkFERV9DQVBBQ0lUWV8xLCBjb3N0TXVsdGlwbGllcjogY29zdE11bHRpcGxpZXJGb3JQcm9kdWN0aW9uUmVzZWFyY2h9LFxyXG4gICAgLy8ge3Jlc2VhcmNoOiBSZXNlYXJjaE5hbWUuVVBHUkFERV9DQVBBQ0lUWV8yLCBjb3N0TXVsdGlwbGllcjogY29zdE11bHRpcGxpZXJGb3JQcm9kdWN0aW9uUmVzZWFyY2h9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4cG9ydFN0cmluZyA9IFwiKElQUk9EK0lJTlYvMTApKigtMSlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkdW1teURpdmlzaW9uTmFtZVByZWZpeCA9IFwiei1cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzYW1wbGVQcm9kdWN0TmFtZSA9IFwiU2FtcGxlIHByb2R1Y3RcIjtcclxuXHJcbi8vIEtleTogZGl2aXNpb25OYW1lfGNpdHlcclxuY29uc3Qgc21hcnRTdXBwbHlEYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcclxuXHJcbi8vIEtleTogZGl2aXNpb25OYW1lfGNpdHl8cHJvZHVjdE5hbWVcclxuY29uc3QgcHJvZHVjdE1hcmt1cERhdGE6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG5cclxuY29uc3Qgc2V0T2ZEaXZpc2lvbnNXYWl0aW5nRm9yUlA6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuICAgIHJlYWRvbmx5ICNlbmFibGVMb2dnaW5nOiBib29sZWFuO1xyXG4gICAgY2l0eT86IENpdHlOYW1lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuYWJsZUxvZ2dpbmc6IGJvb2xlYW4sIGNpdHk/OiBDaXR5TmFtZSkge1xyXG4gICAgICAgIHRoaXMuI2VuYWJsZUxvZ2dpbmcgPSBlbmFibGVMb2dnaW5nO1xyXG4gICAgICAgIHRoaXMuY2l0eSA9IGNpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyguLi5hcmdzOiB1bmtub3duW10pIHtcclxuICAgICAgICBpZiAoIXRoaXMuI2VuYWJsZUxvZ2dpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaXR5ID09PSB1bmRlZmluZWQgfHwgdGhpcy5jaXR5ID09PSBDaXR5TmFtZS5TZWN0b3IxMikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdhcm4oLi4uYXJnczogdW5rbm93bltdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLiNlbmFibGVMb2dnaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2l0eSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuY2l0eSA9PT0gQ2l0eU5hbWUuU2VjdG9yMTIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXJyb3IoLi4uYXJnczogdW5rbm93bltdKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLiNlbmFibGVMb2dnaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2l0eSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuY2l0eSA9PT0gQ2l0eU5hbWUuU2VjdG9yMTIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRpbWUobGFiZWw6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy4jZW5hYmxlTG9nZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNpdHkgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmNpdHkgPT09IENpdHlOYW1lLlNlY3RvcjEyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUudGltZShsYWJlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0aW1lRW5kKGxhYmVsOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuI2VuYWJsZUxvZ2dpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaXR5ID09PSB1bmRlZmluZWQgfHwgdGhpcy5jaXR5ID09PSBDaXR5TmFtZS5TZWN0b3IxMikge1xyXG4gICAgICAgICAgICBjb25zb2xlLnRpbWVFbmQobGFiZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGltZUxvZyhsYWJlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLiNlbmFibGVMb2dnaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2l0eSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuY2l0eSA9PT0gQ2l0eU5hbWUuU2VjdG9yMTIpIHtcclxuICAgICAgICAgICAgY29uc29sZS50aW1lTG9nKGxhYmVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93V2FybmluZyhuczogTlMsIHdhcm5pbmdNZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUud2Fybih3YXJuaW5nTWVzc2FnZSk7XHJcbiAgICBucy5wcmludCh3YXJuaW5nTWVzc2FnZSk7XHJcbiAgICBucy50b2FzdCh3YXJuaW5nTWVzc2FnZSwgXCJ3YXJuaW5nXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9vcEFsbERpdmlzaW9uc0FuZENpdGllcyhuczogTlMsIGNhbGxiYWNrOiAoZGl2aXNpb25OYW1lOiBzdHJpbmcsIGNpdHk6IENpdHlOYW1lKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGRpdmlzaW9uIG9mIG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZGl2aXNpb25zKSB7XHJcbiAgICAgICAgaWYgKGRpdmlzaW9uLnN0YXJ0c1dpdGgoZHVtbXlEaXZpc2lvbk5hbWVQcmVmaXgpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRpdmlzaW9uLCBjaXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb29wQWxsRGl2aXNpb25zQW5kQ2l0aWVzQXN5bmNDYWxsYmFjayhcclxuICAgIG5zOiBOUyxcclxuICAgIGNhbGxiYWNrOiAoZGl2aXNpb25OYW1lOiBzdHJpbmcsIGNpdHk6IENpdHlOYW1lKSA9PiBQcm9taXNlPHZvaWQ+XHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgZm9yIChjb25zdCBkaXZpc2lvbiBvZiBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmRpdmlzaW9ucykge1xyXG4gICAgICAgIGlmIChkaXZpc2lvbi5zdGFydHNXaXRoKGR1bW15RGl2aXNpb25OYW1lUHJlZml4KSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xyXG4gICAgICAgICAgICBhd2FpdCBjYWxsYmFjayhkaXZpc2lvbiwgY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdFVudGlsQWZ0ZXJTdGF0ZUhhcHBlbnMobnM6IE5TLCBzdGF0ZTogQ29ycFN0YXRlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLnByZXZTdGF0ZSA9PT0gc3RhdGUpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IG5zLmNvcnBvcmF0aW9uLm5leHRVcGRhdGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JOZXh0VGltZVN0YXRlSGFwcGVucyhuczogTlMsIHN0YXRlOiBDb3JwU3RhdGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgYXdhaXQgbnMuY29ycG9yYXRpb24ubmV4dFVwZGF0ZSgpO1xyXG4gICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLnByZXZTdGF0ZSA9PT0gc3RhdGUpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdEZvck51bWJlck9mQ3ljbGVzKG5zOiBOUywgbnVtYmVyT2ZDeWNsZXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5wcmV2U3RhdGU7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgd2hpbGUgKGNvdW50IDwgbnVtYmVyT2ZDeWNsZXMpIHtcclxuICAgICAgICBhd2FpdCB3YWl0Rm9yTmV4dFRpbWVTdGF0ZUhhcHBlbnMobnMsIGN1cnJlbnRTdGF0ZSBhcyBDb3JwU3RhdGUpO1xyXG4gICAgICAgICsrY291bnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9maXQobnM6IE5TKSB7XHJcbiAgICBjb25zdCBjb3Jwb3JhdGlvbiA9IG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCk7XHJcbiAgICByZXR1cm4gY29ycG9yYXRpb24ucmV2ZW51ZSAtIGNvcnBvcmF0aW9uLmV4cGVuc2VzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzRGl2aXNpb24obnM6IE5TLCBkaXZpc2lvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZGl2aXNpb25zLmluY2x1ZGVzKGRpdmlzaW9uTmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidXlVcGdyYWRlKG5zOiBOUywgdXBncmFkZTogVXBncmFkZU5hbWUsIHRhcmdldExldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IGkgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwodXBncmFkZSk7IGkgPCB0YXJnZXRMZXZlbDsgaSsrKSB7XHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24ubGV2ZWxVcGdyYWRlKHVwZ3JhZGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbCh1cGdyYWRlKSA8IHRhcmdldExldmVsKSB7XHJcbiAgICAgICAgbnMucHJpbnQoYEVSUk9SOiBDYW5ub3QgYnV5IGVub3VnaCB1cGdyYWRlIGxldmVsYCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidXlBZHZlcnQobnM6IE5TLCBkaXZpc2lvbk5hbWU6IHN0cmluZywgdGFyZ2V0TGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IG5zLmNvcnBvcmF0aW9uLmdldEhpcmVBZFZlcnRDb3VudChkaXZpc2lvbk5hbWUpOyBpIDwgdGFyZ2V0TGV2ZWw7IGkrKykge1xyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmhpcmVBZFZlcnQoZGl2aXNpb25OYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRIaXJlQWRWZXJ0Q291bnQoZGl2aXNpb25OYW1lKSA8IHRhcmdldExldmVsKSB7XHJcbiAgICAgICAgbnMucHJpbnQoYEVSUk9SOiBDYW5ub3QgYnV5IGVub3VnaCBBZHZlcnQgbGV2ZWxgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1eVVubG9jayhuczogTlMsIHVubG9ja05hbWU6IFVubG9ja05hbWUpOiB2b2lkIHtcclxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5oYXNVbmxvY2sodW5sb2NrTmFtZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBucy5jb3Jwb3JhdGlvbi5wdXJjaGFzZVVubG9jayh1bmxvY2tOYW1lKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdhcmVob3VzZSBzdGFydHMgYXQgbGV2ZWwgMVxyXG4gKlxyXG4gKiBAcGFyYW0gbnNcclxuICogQHBhcmFtIGRpdmlzaW9uTmFtZVxyXG4gKiBAcGFyYW0gY2l0eVxyXG4gKiBAcGFyYW0gdGFyZ2V0TGV2ZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGdyYWRlV2FyZWhvdXNlKG5zOiBOUywgZGl2aXNpb25OYW1lOiBzdHJpbmcsIGNpdHk6IENpdHlOYW1lLCB0YXJnZXRMZXZlbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBhbW91bnQgPSB0YXJnZXRMZXZlbCAtIG5zLmNvcnBvcmF0aW9uLmdldFdhcmVob3VzZShkaXZpc2lvbk5hbWUsIGNpdHkpLmxldmVsO1xyXG4gICAgaWYgKGFtb3VudCA8IDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBucy5jb3Jwb3JhdGlvbi51cGdyYWRlV2FyZWhvdXNlKGRpdmlzaW9uTmFtZSwgY2l0eSwgYW1vdW50KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEJ1eWluZyB0ZWEvdGhyb3dpbmcgcGFydHkgZm9yIGVhY2ggb2ZmaWNlXHJcbiAqXHJcbiAqIEBwYXJhbSBuc1xyXG4gKiBAcGFyYW0gZGl2aXNpb25OYW1lXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYnV5VGVhQW5kVGhyb3dQYXJ0eShuczogTlMsIGRpdmlzaW9uTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBlcHNpbG9uID0gMC41O1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBsZXQgZmluaXNoID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbk5hbWUsIGNpdHkpO1xyXG4gICAgICAgICAgICBpZiAob2ZmaWNlLmF2Z0VuZXJneSA8IG9mZmljZS5tYXhFbmVyZ3kgLSBlcHNpbG9uKSB7XHJcbiAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5idXlUZWEoZGl2aXNpb25OYW1lLCBjaXR5KTtcclxuICAgICAgICAgICAgICAgIGZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvZmZpY2UuYXZnTW9yYWxlIDwgb2ZmaWNlLm1heE1vcmFsZSAtIGVwc2lsb24pIHtcclxuICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnRocm93UGFydHkoZGl2aXNpb25OYW1lLCBjaXR5LCA1MDAwMDApO1xyXG4gICAgICAgICAgICAgICAgZmluaXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbmlzaCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbnMuY29ycG9yYXRpb24ubmV4dFVwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQnV5aW5nIHRlYS90aHJvd2luZyBwYXJ0eSBvbmNlIGZvciBlYWNoIG9mZmljZSBpbiBhbGwgZGl2aXNpb25zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnV5VGVhQW5kVGhyb3dQYXJ0eUZvckFsbERpdmlzaW9ucyhuczogTlMpOiB2b2lkIHtcclxuICAgIC8vIElmIHdlIGFyZSBpbiByb3VuZCAzKywgd2UgYnV5IHRlYSBhbmQgdGhyb3cgcGFydHkgZXZlcnkgY3ljbGUgdG8gbWFpbnRhaW4gbWF4IGVuZXJneS9tb3JhbGVcclxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA+PSAzIHx8IG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkucHVibGljKSB7XHJcbiAgICAgICAgbG9vcEFsbERpdmlzaW9uc0FuZENpdGllcyhucywgKGRpdmlzaW9uTmFtZTogc3RyaW5nLCBjaXR5OiBDaXR5TmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5idXlUZWEoZGl2aXNpb25OYW1lLCBjaXR5KTtcclxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24udGhyb3dQYXJ0eShkaXZpc2lvbk5hbWUsIGNpdHksIDUwMDAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXBzaWxvbiA9IDAuNTtcclxuICAgIGxvb3BBbGxEaXZpc2lvbnNBbmRDaXRpZXMobnMsIChkaXZpc2lvbk5hbWU6IHN0cmluZywgY2l0eTogQ2l0eU5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBvZmZpY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRPZmZpY2UoZGl2aXNpb25OYW1lLCBjaXR5KTtcclxuICAgICAgICBpZiAob2ZmaWNlLmF2Z0VuZXJneSA8IG9mZmljZS5tYXhFbmVyZ3kgLSBlcHNpbG9uKSB7XHJcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmJ1eVRlYShkaXZpc2lvbk5hbWUsIGNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2ZmaWNlLmF2Z01vcmFsZSA8IG9mZmljZS5tYXhNb3JhbGUgLSBlcHNpbG9uKSB7XHJcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnRocm93UGFydHkoZGl2aXNpb25OYW1lLCBjaXR5LCA1MDAwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPZmZpY2VTZXR1cHNGb3JFYXJseVJvdW5kcyhzaXplOiBudW1iZXIsIGluY3JlYXNlQnVzaW5lc3MgPSBmYWxzZSk6IE9mZmljZVNldHVwW10ge1xyXG4gICAgbGV0IG9mZmljZVNldHVwO1xyXG4gICAgc3dpdGNoIChzaXplKSB7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBvZmZpY2VTZXR1cCA9IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5PUEVSQVRJT05TLCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSLCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkJVU0lORVNTLCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLk1BTkFHRU1FTlQsIGNvdW50OiAwIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgb2ZmaWNlU2V0dXAgPSBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uT1BFUkFUSU9OUywgY291bnQ6IDEgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5FTkdJTkVFUiwgY291bnQ6IDEgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUywgY291bnQ6IDEgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5ULCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIG9mZmljZVNldHVwID0gW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLk9QRVJBVElPTlMsIGNvdW50OiAyIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uRU5HSU5FRVIsIGNvdW50OiAxIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uQlVTSU5FU1MsIGNvdW50OiAxIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uTUFOQUdFTUVOVCwgY291bnQ6IDEgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICBpZiAoaW5jcmVhc2VCdXNpbmVzcykge1xyXG4gICAgICAgICAgICAgICAgb2ZmaWNlU2V0dXAgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLk9QRVJBVElPTlMsIGNvdW50OiAyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSLCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUywgY291bnQ6IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uTUFOQUdFTUVOVCwgY291bnQ6IDEgfSxcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2ZmaWNlU2V0dXAgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLk9QRVJBVElPTlMsIGNvdW50OiAyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSLCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUywgY291bnQ6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uTUFOQUdFTUVOVCwgY291bnQ6IDIgfSxcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICBpZiAoaW5jcmVhc2VCdXNpbmVzcykge1xyXG4gICAgICAgICAgICAgICAgb2ZmaWNlU2V0dXAgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLk9QRVJBVElPTlMsIGNvdW50OiAyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSLCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUywgY291bnQ6IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uTUFOQUdFTUVOVCwgY291bnQ6IDIgfSxcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2ZmaWNlU2V0dXAgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLk9QRVJBVElPTlMsIGNvdW50OiAzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSLCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUywgY291bnQ6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uTUFOQUdFTUVOVCwgY291bnQ6IDIgfSxcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICBpZiAoaW5jcmVhc2VCdXNpbmVzcykge1xyXG4gICAgICAgICAgICAgICAgb2ZmaWNlU2V0dXAgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLk9QRVJBVElPTlMsIGNvdW50OiAzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSLCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUywgY291bnQ6IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uTUFOQUdFTUVOVCwgY291bnQ6IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uT1BFUkFUSU9OUywgY291bnQ6IDIgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uRU5HSU5FRVIsIGNvdW50OiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8geyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkJVU0lORVNTLCBjb3VudDogMyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5ULCBjb3VudDogMiB9LFxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvZmZpY2VTZXR1cCA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uT1BFUkFUSU9OUywgY291bnQ6IDMgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uRU5HSU5FRVIsIGNvdW50OiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkJVU0lORVNTLCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5ULCBjb3VudDogMyB9LFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgb2ZmaWNlIHNpemU6ICR7c2l6ZX1gKTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZW5lcmF0ZU9mZmljZVNldHVwcyhcclxuICAgICAgICBjaXRpZXMsXHJcbiAgICAgICAgc2l6ZSxcclxuICAgICAgICBvZmZpY2VTZXR1cFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlT2ZmaWNlU2V0dXBzKGNpdGllczogQ2l0eU5hbWVbXSwgc2l6ZTogbnVtYmVyLCBqb2JzOiB7XHJcbiAgICBuYW1lOiBFbXBsb3llZVBvc2l0aW9uO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxufVtdKTogT2ZmaWNlU2V0dXBbXSB7XHJcbiAgICBjb25zdCBvZmZpY2VTZXR1cEpvYnM6IE9mZmljZVNldHVwSm9icyA9IHtcclxuICAgICAgICBPcGVyYXRpb25zOiAwLFxyXG4gICAgICAgIEVuZ2luZWVyOiAwLFxyXG4gICAgICAgIEJ1c2luZXNzOiAwLFxyXG4gICAgICAgIE1hbmFnZW1lbnQ6IDAsXHJcbiAgICAgICAgXCJSZXNlYXJjaCAmIERldmVsb3BtZW50XCI6IDAsXHJcbiAgICAgICAgSW50ZXJuOiAwLFxyXG4gICAgfTtcclxuICAgIGZvciAoY29uc3Qgam9iIG9mIGpvYnMpIHtcclxuICAgICAgICBzd2l0Y2ggKGpvYi5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRW1wbG95ZWVQb3NpdGlvbi5PUEVSQVRJT05TOlxyXG4gICAgICAgICAgICAgICAgb2ZmaWNlU2V0dXBKb2JzLk9wZXJhdGlvbnMgPSBqb2IuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSOlxyXG4gICAgICAgICAgICAgICAgb2ZmaWNlU2V0dXBKb2JzLkVuZ2luZWVyID0gam9iLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUzpcclxuICAgICAgICAgICAgICAgIG9mZmljZVNldHVwSm9icy5CdXNpbmVzcyA9IGpvYi5jb3VudDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEVtcGxveWVlUG9zaXRpb24uTUFOQUdFTUVOVDpcclxuICAgICAgICAgICAgICAgIG9mZmljZVNldHVwSm9icy5NYW5hZ2VtZW50ID0gam9iLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRW1wbG95ZWVQb3NpdGlvbi5SRVNFQVJDSF9ERVZFTE9QTUVOVDpcclxuICAgICAgICAgICAgICAgIG9mZmljZVNldHVwSm9ic1tcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIl0gPSBqb2IuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFbXBsb3llZVBvc2l0aW9uLklOVEVSTjpcclxuICAgICAgICAgICAgICAgIG9mZmljZVNldHVwSm9icy5JbnRlcm4gPSBqb2IuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBqb2I6ICR7am9iLm5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb2ZmaWNlU2V0dXBzOiBPZmZpY2VTZXR1cFtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XHJcbiAgICAgICAgb2ZmaWNlU2V0dXBzLnB1c2goe1xyXG4gICAgICAgICAgICBjaXR5OiBjaXR5LFxyXG4gICAgICAgICAgICBzaXplOiBzaXplLFxyXG4gICAgICAgICAgICBqb2JzOiBvZmZpY2VTZXR1cEpvYnNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvZmZpY2VTZXR1cHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25Kb2JzKG5zOiBOUywgZGl2aXNpb25OYW1lOiBzdHJpbmcsIG9mZmljZVNldHVwczogT2ZmaWNlU2V0dXBbXSk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBvZmZpY2VTZXR1cCBvZiBvZmZpY2VTZXR1cHMpIHtcclxuICAgICAgICAvLyBSZXNldCBhbGwgam9ic1xyXG4gICAgICAgIGZvciAoY29uc3Qgam9iTmFtZSBvZiBPYmplY3QudmFsdWVzKEVtcGxveWVlUG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNldEF1dG9Kb2JBc3NpZ25tZW50KGRpdmlzaW9uTmFtZSwgb2ZmaWNlU2V0dXAuY2l0eSwgam9iTmFtZSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFzc2lnbiBqb2JzXHJcbiAgICAgICAgZm9yIChjb25zdCBbam9iTmFtZSwgY291bnRdIG9mIE9iamVjdC5lbnRyaWVzKG9mZmljZVNldHVwLmpvYnMpKSB7XHJcbiAgICAgICAgICAgIGlmICghbnMuY29ycG9yYXRpb24uc2V0QXV0b0pvYkFzc2lnbm1lbnQoZGl2aXNpb25OYW1lLCBvZmZpY2VTZXR1cC5jaXR5LCBqb2JOYW1lLCBjb3VudCkpIHtcclxuICAgICAgICAgICAgICAgIG5zLnByaW50KGBDYW5ub3QgYXNzaWduIGpvYiBwcm9wZXJseS4gQ2l0eTogJHtvZmZpY2VTZXR1cC5jaXR5fSwgam9iOiAke2pvYk5hbWV9LCBjb3VudDogJHtjb3VudH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZ3JhZGVPZmZpY2VzKG5zOiBOUywgZGl2aXNpb25OYW1lOiBzdHJpbmcsIG9mZmljZVNldHVwczogT2ZmaWNlU2V0dXBbXSk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBvZmZpY2VTZXR1cCBvZiBvZmZpY2VTZXR1cHMpIHtcclxuICAgICAgICBjb25zdCBvZmZpY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRPZmZpY2UoZGl2aXNpb25OYW1lLCBvZmZpY2VTZXR1cC5jaXR5KTtcclxuICAgICAgICBpZiAob2ZmaWNlU2V0dXAuc2l6ZSA8IG9mZmljZS5zaXplKSB7XHJcbiAgICAgICAgICAgIG5zLnByaW50KGBPZmZpY2UncyBuZXcgc2l6ZSBpcyBzbWFsbGVyIHRoYW4gY3VycmVudCBzaXplLiBDaXR5OiAke29mZmljZVNldHVwLmNpdHl9YCk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2ZmaWNlU2V0dXAuc2l6ZSA+IG9mZmljZS5zaXplKSB7XHJcbiAgICAgICAgICAgIC8vIFVwZ3JhZGUgb2ZmaWNlXHJcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnVwZ3JhZGVPZmZpY2VTaXplKGRpdmlzaW9uTmFtZSwgb2ZmaWNlU2V0dXAuY2l0eSwgb2ZmaWNlU2V0dXAuc2l6ZSAtIG9mZmljZS5zaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSGlyZSBlbXBsb3llZXNcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcclxuICAgICAgICB3aGlsZSAobnMuY29ycG9yYXRpb24uaGlyZUVtcGxveWVlKGRpdmlzaW9uTmFtZSwgb2ZmaWNlU2V0dXAuY2l0eSwgRW1wbG95ZWVQb3NpdGlvbi5SRVNFQVJDSF9ERVZFTE9QTUVOVCkpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBBc3NpZ24gam9ic1xyXG4gICAgYXNzaWduSm9icyhucywgZGl2aXNpb25OYW1lLCBvZmZpY2VTZXR1cHMpO1xyXG4gICAgbnMucHJpbnQoYFVwZ3JhZGUgb2ZmaWNlcyBjb21wbGV0ZWRgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUHVyY2hhc2VPcmRlcnMobnM6IE5TLCBjbGVhcklucHV0TWF0ZXJpYWxPcmRlcnM6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICBsb29wQWxsRGl2aXNpb25zQW5kQ2l0aWVzKG5zLCAoZGl2aXNpb25OYW1lLCBjaXR5KSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBtYXRlcmlhbE5hbWUgb2YgYm9vc3RNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uYnV5TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUsIDApO1xyXG4gICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5zZWxsTWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUsIFwiMFwiLCBcIk1QXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xlYXJJbnB1dE1hdGVyaWFsT3JkZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kdXN0cmlhbERhdGEgPSBucy5jb3Jwb3JhdGlvbi5nZXRJbmR1c3RyeURhdGEoZGl2aXNpb24udHlwZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWxOYW1lIG9mIGdldFJlY29yZEtleXMoaW5kdXN0cmlhbERhdGEucmVxdWlyZWRNYXRlcmlhbHMpKSB7XHJcbiAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5idXlNYXRlcmlhbChkaXZpc2lvbk5hbWUsIGNpdHksIG1hdGVyaWFsTmFtZSwgMCk7XHJcbiAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5zZWxsTWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUsIFwiMFwiLCBcIk1QXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1hdGVyaWFsc09yZGVycyhcclxuICAgIGNpdGllczogQ2l0eU5hbWVbXSxcclxuICAgIG1hdGVyaWFsczoge1xyXG4gICAgICAgIG5hbWU6IE1hdGVyaWFsTmFtZTtcclxuICAgICAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgfVtdXHJcbik6IE1hdGVyaWFsT3JkZXJbXSB7XHJcbiAgICBjb25zdCBvcmRlcnM6IE1hdGVyaWFsT3JkZXJbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xyXG4gICAgICAgIG9yZGVycy5wdXNoKHtcclxuICAgICAgICAgICAgY2l0eTogY2l0eSxcclxuICAgICAgICAgICAgbWF0ZXJpYWxzOiBtYXRlcmlhbHNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcmRlcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdG9ja01hdGVyaWFscyhcclxuICAgIG5zOiBOUyxcclxuICAgIGRpdmlzaW9uTmFtZTogc3RyaW5nLFxyXG4gICAgb3JkZXJzOiBNYXRlcmlhbE9yZGVyW10sXHJcbiAgICBidWxrUHVyY2hhc2UgPSBmYWxzZSxcclxuICAgIGRpc2NhcmRFeGNlZWRlZCA9IGZhbHNlXHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSA1KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhcm5pbmdNZXNzYWdlID0gYEl0IHRha2VzIHRvbyBtYW55IGN5Y2xlcyB0byBzdG9jayB1cCBvbiBtYXRlcmlhbHMuIERpdmlzaW9uOiAke2RpdmlzaW9uTmFtZX0sIGBcclxuICAgICAgICAgICAgICAgICsgYG9yZGVyczogJHtKU09OLnN0cmluZ2lmeShvcmRlcnMpfWA7XHJcbiAgICAgICAgICAgIHNob3dXYXJuaW5nKG5zLCB3YXJuaW5nTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmluaXNoID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGNvbnN0IG9yZGVyIG9mIG9yZGVycykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIG9yZGVyLm1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmVkQW1vdW50ID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBvcmRlci5jaXR5LCBtYXRlcmlhbC5uYW1lKS5zdG9yZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmVkQW1vdW50ID09PSBtYXRlcmlhbC5jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmJ1eU1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgb3JkZXIuY2l0eSwgbWF0ZXJpYWwubmFtZSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uc2VsbE1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgb3JkZXIuY2l0eSwgbWF0ZXJpYWwubmFtZSwgXCIwXCIsIFwiTVBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBCdXlcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yZWRBbW91bnQgPCBtYXRlcmlhbC5jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidWxrUHVyY2hhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uYnVsa1B1cmNoYXNlKGRpdmlzaW9uTmFtZSwgb3JkZXIuY2l0eSwgbWF0ZXJpYWwubmFtZSwgbWF0ZXJpYWwuY291bnQgLSBzdG9yZWRBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmJ1eU1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgb3JkZXIuY2l0eSwgbWF0ZXJpYWwubmFtZSwgKG1hdGVyaWFsLmNvdW50IC0gc3RvcmVkQW1vdW50KSAvIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uc2VsbE1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgb3JkZXIuY2l0eSwgbWF0ZXJpYWwubmFtZSwgXCIwXCIsIFwiTVBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRGlzY2FyZFxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlzY2FyZEV4Y2VlZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uYnV5TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBvcmRlci5jaXR5LCBtYXRlcmlhbC5uYW1lLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5zZWxsTWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBvcmRlci5jaXR5LCBtYXRlcmlhbC5uYW1lLCAoKHN0b3JlZEFtb3VudCAtIG1hdGVyaWFsLmNvdW50KSAvIDEwKS50b1N0cmluZygpLCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpbmlzaCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgd2FpdEZvck5leHRUaW1lU3RhdGVIYXBwZW5zKG5zLCBDb3JwU3RhdGUuUFVSQ0hBU0UpO1xyXG4gICAgICAgICsrY291bnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHMobnM6IE5TKTogQ29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzIHtcclxuICAgIGNvbnN0IGNvcnBvcmF0aW9uVXBncmFkZUxldmVsczogQ29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzID0ge1xyXG4gICAgICAgIFtVcGdyYWRlTmFtZS5TTUFSVF9GQUNUT1JJRVNdOiAwLFxyXG4gICAgICAgIFtVcGdyYWRlTmFtZS5TTUFSVF9TVE9SQUdFXTogMCxcclxuICAgICAgICBbVXBncmFkZU5hbWUuRFJFQU1fU0VOU0VdOiAwLFxyXG4gICAgICAgIFtVcGdyYWRlTmFtZS5XSUxTT05fQU5BTFlUSUNTXTogMCxcclxuICAgICAgICBbVXBncmFkZU5hbWUuTlVPUFRJTUFMX05PT1RST1BJQ19JTkpFQ1RPUl9JTVBMQU5UU106IDAsXHJcbiAgICAgICAgW1VwZ3JhZGVOYW1lLlNQRUVDSF9QUk9DRVNTT1JfSU1QTEFOVFNdOiAwLFxyXG4gICAgICAgIFtVcGdyYWRlTmFtZS5ORVVSQUxfQUNDRUxFUkFUT1JTXTogMCxcclxuICAgICAgICBbVXBncmFkZU5hbWUuRk9DVVNfV0lSRVNdOiAwLFxyXG4gICAgICAgIFtVcGdyYWRlTmFtZS5BQkNfU0FMRVNfQk9UU106IDAsXHJcbiAgICAgICAgW1VwZ3JhZGVOYW1lLlBST0pFQ1RfSU5TSUdIVF06IDBcclxuICAgIH07XHJcbiAgICBmb3IgKGNvbnN0IHVwZ3JhZGVOYW1lIG9mIE9iamVjdC52YWx1ZXMoVXBncmFkZU5hbWUpKSB7XHJcbiAgICAgICAgY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzW3VwZ3JhZGVOYW1lXSA9IG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbCh1cGdyYWRlTmFtZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGl2aXNpb25SZXNlYXJjaGVzKG5zOiBOUywgZGl2aXNpb25OYW1lOiBzdHJpbmcpOiBEaXZpc2lvblJlc2VhcmNoZXMge1xyXG4gICAgY29uc3QgZGl2aXNpb25SZXNlYXJjaGVzOiBEaXZpc2lvblJlc2VhcmNoZXMgPSB7XHJcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5ISV9URUNIX1JORF9MQUJPUkFUT1JZXTogZmFsc2UsXHJcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5BVVRPX0JSRVddOiBmYWxzZSxcclxuICAgICAgICBbUmVzZWFyY2hOYW1lLkFVVE9fUEFSVFldOiBmYWxzZSxcclxuICAgICAgICBbUmVzZWFyY2hOYW1lLkFVVE9fRFJVR106IGZhbHNlLFxyXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuQ1BINF9JTkpFQ1RdOiBmYWxzZSxcclxuICAgICAgICBbUmVzZWFyY2hOYW1lLkRST05FU106IGZhbHNlLFxyXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuRFJPTkVTX0FTU0VNQkxZXTogZmFsc2UsXHJcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5EUk9ORVNfVFJBTlNQT1JUXTogZmFsc2UsXHJcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5HT19KVUlDRV06IGZhbHNlLFxyXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuSFJfQlVERFlfUkVDUlVJVE1FTlRdOiBmYWxzZSxcclxuICAgICAgICBbUmVzZWFyY2hOYW1lLkhSX0JVRERZX1RSQUlOSU5HXTogZmFsc2UsXHJcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5NQVJLRVRfVEFfMV06IGZhbHNlLFxyXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuTUFSS0VUX1RBXzJdOiBmYWxzZSxcclxuICAgICAgICBbUmVzZWFyY2hOYW1lLk9WRVJDTE9DS106IGZhbHNlLFxyXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuU0VMRl9DT1JSRUNUSU5HX0FTU0VNQkxFUlNdOiBmYWxzZSxcclxuICAgICAgICBbUmVzZWFyY2hOYW1lLlNUSU1VXTogZmFsc2UsXHJcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5VUEdSQURFX0NBUEFDSVRZXzFdOiBmYWxzZSxcclxuICAgICAgICBbUmVzZWFyY2hOYW1lLlVQR1JBREVfQ0FQQUNJVFlfMl06IGZhbHNlLFxyXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuVVBHUkFERV9EQVNIQk9BUkRdOiBmYWxzZSxcclxuICAgICAgICBbUmVzZWFyY2hOYW1lLlVQR1JBREVfRlVMQ1JVTV06IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgZm9yIChjb25zdCByZXNlYXJjaE5hbWUgb2YgT2JqZWN0LnZhbHVlcyhSZXNlYXJjaE5hbWUpKSB7XHJcbiAgICAgICAgZGl2aXNpb25SZXNlYXJjaGVzW3Jlc2VhcmNoTmFtZV0gPSBucy5jb3Jwb3JhdGlvbi5oYXNSZXNlYXJjaGVkKGRpdmlzaW9uTmFtZSwgcmVzZWFyY2hOYW1lKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXZpc2lvblJlc2VhcmNoZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEaXZpc2lvbihuczogTlMsIGRpdmlzaW9uTmFtZTogc3RyaW5nLCBvZmZpY2VTaXplOiBudW1iZXIsIHdhcmVob3VzZUxldmVsOiBudW1iZXIpOiBQcm9taXNlPERpdmlzaW9uPiB7XHJcbiAgICAvLyBDcmVhdGUgZGl2aXNpb24gaWYgbm90IGV4aXN0c1xyXG4gICAgaWYgKCFoYXNEaXZpc2lvbihucywgZGl2aXNpb25OYW1lKSkge1xyXG4gICAgICAgIGxldCBpbmR1c3RyeVR5cGU7XHJcbiAgICAgICAgc3dpdGNoIChkaXZpc2lvbk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkU6XHJcbiAgICAgICAgICAgICAgICBpbmR1c3RyeVR5cGUgPSBJbmR1c3RyeVR5cGUuQUdSSUNVTFRVUkU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXZpc2lvbk5hbWUuQ0hFTUlDQUw6XHJcbiAgICAgICAgICAgICAgICBpbmR1c3RyeVR5cGUgPSBJbmR1c3RyeVR5cGUuQ0hFTUlDQUw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXZpc2lvbk5hbWUuVE9CQUNDTzpcclxuICAgICAgICAgICAgICAgIGluZHVzdHJ5VHlwZSA9IEluZHVzdHJ5VHlwZS5UT0JBQ0NPO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGl2aXNpb24gbmFtZTogJHtkaXZpc2lvbk5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmV4cGFuZEluZHVzdHJ5KGluZHVzdHJ5VHlwZSwgZGl2aXNpb25OYW1lKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKTtcclxuICAgIG5zLnByaW50KGBJbml0aWFsaXppbmcgZGl2aXNpb246ICR7ZGl2aXNpb25OYW1lfWApO1xyXG5cclxuICAgIC8vIEV4cGFuZCB0byBhbGwgY2l0aWVzXHJcbiAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XHJcbiAgICAgICAgaWYgKCFkaXZpc2lvbi5jaXRpZXMuaW5jbHVkZXMoY2l0eSkpIHtcclxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uZXhwYW5kQ2l0eShkaXZpc2lvbk5hbWUsIGNpdHkpO1xyXG4gICAgICAgICAgICBucy5wcmludChgRXhwYW5kICR7ZGl2aXNpb25OYW1lfSB0byAke2NpdHl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEJ1eSB3YXJlaG91c2VcclxuICAgICAgICBpZiAoIW5zLmNvcnBvcmF0aW9uLmhhc1dhcmVob3VzZShkaXZpc2lvbk5hbWUsIGNpdHkpKSB7XHJcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnB1cmNoYXNlV2FyZWhvdXNlKGRpdmlzaW9uTmFtZSwgY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IHVwIGFsbCBjaXRpZXNcclxuICAgIHVwZ3JhZGVPZmZpY2VzKFxyXG4gICAgICAgIG5zLFxyXG4gICAgICAgIGRpdmlzaW9uTmFtZSxcclxuICAgICAgICBnZW5lcmF0ZU9mZmljZVNldHVwcyhcclxuICAgICAgICAgICAgY2l0aWVzLFxyXG4gICAgICAgICAgICBvZmZpY2VTaXplLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5SRVNFQVJDSF9ERVZFTE9QTUVOVCxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogb2ZmaWNlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcclxuICAgICAgICB1cGdyYWRlV2FyZWhvdXNlKG5zLCBkaXZpc2lvbk5hbWUsIGNpdHksIHdhcmVob3VzZUxldmVsKTtcclxuICAgICAgICAvLyBFbmFibGUgU21hcnQgU3VwcGx5XHJcbiAgICAgICAgaWYgKG5zLmNvcnBvcmF0aW9uLmhhc1VubG9jayhVbmxvY2tOYW1lLlNNQVJUX1NVUFBMWSkpIHtcclxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uc2V0U21hcnRTdXBwbHkoZGl2aXNpb25OYW1lLCBjaXR5LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9wdGltYWxCb29zdE1hdGVyaWFsUXVhbnRpdGllcyhcclxuICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcclxuICAgIHNwYWNlQ29uc3RyYWludDogbnVtYmVyLFxyXG4gICAgcm91bmQ6IGJvb2xlYW4gPSB0cnVlXHJcbik6IG51bWJlcltdIHtcclxuICAgIGNvbnN0IHsgYWlDb3JlRmFjdG9yLCBoYXJkd2FyZUZhY3RvciwgcmVhbEVzdGF0ZUZhY3Rvciwgcm9ib3RGYWN0b3IgfSA9IGluZHVzdHJ5RGF0YTtcclxuICAgIGNvbnN0IGJvb3N0TWF0ZXJpYWxDb2VmZmljaWVudHMgPSBbYWlDb3JlRmFjdG9yISwgaGFyZHdhcmVGYWN0b3IhLCByZWFsRXN0YXRlRmFjdG9yISwgcm9ib3RGYWN0b3IhXTtcclxuICAgIGNvbnN0IGJvb3N0TWF0ZXJpYWxTaXplcyA9IGJvb3N0TWF0ZXJpYWxzLm1hcChtYXQgPT4gQ29ycE1hdGVyaWFsc0RhdGFbbWF0XS5zaXplKTtcclxuXHJcbiAgICBjb25zdCBjYWxjdWxhdGVPcHRpbWFsUXVhbnRpdGllcyA9IChcclxuICAgICAgICBtYXRDb2VmZmljaWVudHM6IG51bWJlcltdLFxyXG4gICAgICAgIG1hdFNpemVzOiBudW1iZXJbXVxyXG4gICAgKTogbnVtYmVyW10gPT4ge1xyXG4gICAgICAgIGNvbnN0IHN1bU9mQ29lZmZpY2llbnRzID0gbWF0Q29lZmZpY2llbnRzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gICAgICAgIGNvbnN0IHN1bU9mU2l6ZXMgPSBtYXRTaXplcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdFNpemVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXRDb3VudCA9XHJcbiAgICAgICAgICAgICAgICAoc3BhY2VDb25zdHJhaW50IC0gNTAwICogKChtYXRTaXplc1tpXSAvIG1hdENvZWZmaWNpZW50c1tpXSkgKiAoc3VtT2ZDb2VmZmljaWVudHMgLSBtYXRDb2VmZmljaWVudHNbaV0pIC0gKHN1bU9mU2l6ZXMgLSBtYXRTaXplc1tpXSkpKVxyXG4gICAgICAgICAgICAgICAgLyAoc3VtT2ZDb2VmZmljaWVudHMgLyBtYXRDb2VmZmljaWVudHNbaV0pXHJcbiAgICAgICAgICAgICAgICAvIG1hdFNpemVzW2ldO1xyXG4gICAgICAgICAgICBpZiAobWF0Q29lZmZpY2llbnRzW2ldIDw9IDAgfHwgbWF0Q291bnQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsY3VsYXRlT3B0aW1hbFF1YW50aXRpZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Q29lZmZpY2llbnRzLnRvU3BsaWNlZChpLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICBtYXRTaXplcy50b1NwbGljZWQoaSwgMSlcclxuICAgICAgICAgICAgICAgICkudG9TcGxpY2VkKGksIDAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Q291bnQgPSBNYXRoLnJvdW5kKG1hdENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1hdENvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBjYWxjdWxhdGVPcHRpbWFsUXVhbnRpdGllcyhib29zdE1hdGVyaWFsQ29lZmZpY2llbnRzLCBib29zdE1hdGVyaWFsU2l6ZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXhwb3J0Um91dGVzKG5zOiBOUyk6IEV4cG9ydFJvdXRlW10ge1xyXG4gICAgY29uc3QgZXhwb3J0Um91dGVzOiBFeHBvcnRSb3V0ZVtdID0gW107XHJcbiAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIG1hdGVyaWFscykge1xyXG4gICAgICAgIGxvb3BBbGxEaXZpc2lvbnNBbmRDaXRpZXMobnMsIChkaXZpc2lvbk5hbWUsIHNvdXJjZUNpdHkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXhwb3J0cyA9IG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgc291cmNlQ2l0eSwgbWF0ZXJpYWwpLmV4cG9ydHM7XHJcbiAgICAgICAgICAgIGlmIChleHBvcnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXhwb3J0Um91dGUgb2YgZXhwb3J0cykge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0Um91dGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbCxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VDaXR5OiBzb3VyY2VDaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZURpdmlzaW9uOiBkaXZpc2lvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25EaXZpc2lvbjogZXhwb3J0Um91dGUuZGl2aXNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25DaXR5OiBleHBvcnRSb3V0ZS5jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uQW1vdW50OiBleHBvcnRSb3V0ZS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV4cG9ydFJvdXRlcztcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRTbWFydFN1cHBseUtleShkaXZpc2lvbk5hbWU6IHN0cmluZywgY2l0eTogQ2l0eU5hbWUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke2RpdmlzaW9uTmFtZX18JHtjaXR5fWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYXdQcm9kdWN0aW9uKFxyXG4gICAgbnM6IE5TLFxyXG4gICAgZGl2aXNpb246IERpdmlzaW9uLFxyXG4gICAgY2l0eTogQ2l0eU5hbWUsXHJcbiAgICBpc1Byb2R1Y3Q6IGJvb2xlYW5cclxuKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbi5uYW1lLCBjaXR5KTtcclxuICAgIGxldCByYXdQcm9kdWN0aW9uID0gZ2V0RGl2aXNpb25SYXdQcm9kdWN0aW9uKFxyXG4gICAgICAgIGlzUHJvZHVjdCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbnNQcm9kdWN0aW9uOiBvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IuT3BlcmF0aW9ucyxcclxuICAgICAgICAgICAgZW5naW5lZXJQcm9kdWN0aW9uOiBvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IuRW5naW5lZXIsXHJcbiAgICAgICAgICAgIG1hbmFnZW1lbnRQcm9kdWN0aW9uOiBvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IuTWFuYWdlbWVudFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGl2aXNpb24ucHJvZHVjdGlvbk11bHQsXHJcbiAgICAgICAgZ2V0Q29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzKG5zKSxcclxuICAgICAgICBnZXREaXZpc2lvblJlc2VhcmNoZXMobnMsIGRpdmlzaW9uLm5hbWUpXHJcbiAgICApO1xyXG4gICAgcmF3UHJvZHVjdGlvbiA9IHJhd1Byb2R1Y3Rpb24gKiAxMDtcclxuICAgIHJldHVybiByYXdQcm9kdWN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGltaXRlZFJhd1Byb2R1Y3Rpb24oXHJcbiAgICBuczogTlMsXHJcbiAgICBkaXZpc2lvbjogRGl2aXNpb24sXHJcbiAgICBjaXR5OiBDaXR5TmFtZSxcclxuICAgIGluZHVzdHJpYWxEYXRhOiBDb3JwSW5kdXN0cnlEYXRhLFxyXG4gICAgd2FyZWhvdXNlOiBXYXJlaG91c2UsXHJcbiAgICBpc1Byb2R1Y3Q6IGJvb2xlYW4sXHJcbiAgICBwcm9kdWN0U2l6ZT86IG51bWJlclxyXG4pOiBudW1iZXIge1xyXG4gICAgbGV0IHJhd1Byb2R1Y3Rpb24gPSBnZXRSYXdQcm9kdWN0aW9uKG5zLCBkaXZpc2lvbiwgY2l0eSwgaXNQcm9kdWN0KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgcmVxdWlyZWQgc3RvcmFnZSBzcGFjZSBvZiBlYWNoIG91dHB1dCB1bml0LiBJdCBpcyB0aGUgbmV0IGNoYW5nZSBpbiB3YXJlaG91c2UncyBzdG9yYWdlIHNwYWNlIHdoZW5cclxuICAgIC8vIHByb2R1Y2luZyBhbiBvdXRwdXQgdW5pdC5cclxuICAgIGxldCByZXF1aXJlZFN0b3JhZ2VTcGFjZU9mRWFjaE91dHB1dFVuaXQgPSAwO1xyXG4gICAgaWYgKGlzUHJvZHVjdCkge1xyXG4gICAgICAgIHJlcXVpcmVkU3RvcmFnZVNwYWNlT2ZFYWNoT3V0cHV0VW5pdCArPSBwcm9kdWN0U2l6ZSE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoY29uc3Qgb3V0cHV0TWF0ZXJpYWxOYW1lIG9mIGluZHVzdHJpYWxEYXRhLnByb2R1Y2VkTWF0ZXJpYWxzISkge1xyXG4gICAgICAgICAgICByZXF1aXJlZFN0b3JhZ2VTcGFjZU9mRWFjaE91dHB1dFVuaXQgKz0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWxEYXRhKG91dHB1dE1hdGVyaWFsTmFtZSkuc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IFtyZXF1aXJlZE1hdGVyaWFsTmFtZSwgcmVxdWlyZWRNYXRlcmlhbENvZWZmaWNpZW50XSBvZiBnZXRSZWNvcmRFbnRyaWVzKGluZHVzdHJpYWxEYXRhLnJlcXVpcmVkTWF0ZXJpYWxzKSkge1xyXG4gICAgICAgIHJlcXVpcmVkU3RvcmFnZVNwYWNlT2ZFYWNoT3V0cHV0VW5pdCAtPSBucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbERhdGEocmVxdWlyZWRNYXRlcmlhbE5hbWUpLnNpemUgKiByZXF1aXJlZE1hdGVyaWFsQ29lZmZpY2llbnQ7XHJcbiAgICB9XHJcbiAgICAvLyBMaW1pdCB0aGUgcmF3IHByb2R1Y3Rpb24gaWYgbmVlZGVkXHJcbiAgICBpZiAocmVxdWlyZWRTdG9yYWdlU3BhY2VPZkVhY2hPdXRwdXRVbml0ID4gMCkge1xyXG4gICAgICAgIGNvbnN0IG1heE51bWJlck9mT3V0cHV0VW5pdHMgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAod2FyZWhvdXNlLnNpemUgLSB3YXJlaG91c2Uuc2l6ZVVzZWQpIC8gcmVxdWlyZWRTdG9yYWdlU3BhY2VPZkVhY2hPdXRwdXRVbml0XHJcbiAgICAgICAgKTtcclxuICAgICAgICByYXdQcm9kdWN0aW9uID0gTWF0aC5taW4ocmF3UHJvZHVjdGlvbiwgbWF4TnVtYmVyT2ZPdXRwdXRVbml0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmF3UHJvZHVjdGlvbiA9IE1hdGgubWF4KHJhd1Byb2R1Y3Rpb24sIDApO1xyXG4gICAgcmV0dXJuIHJhd1Byb2R1Y3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTbWFydFN1cHBseURhdGEobnM6IE5TKTogdm9pZCB7XHJcbiAgICAvLyBPbmx5IHNldCBzbWFydCBzdXBwbHkgZGF0YSBhZnRlciBcIlBVUkNIQVNFXCIgc3RhdGVcclxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLnByZXZTdGF0ZSAhPT0gQ29ycFN0YXRlLlBVUkNIQVNFKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbG9vcEFsbERpdmlzaW9uc0FuZENpdGllcyhucywgKGRpdmlzaW9uTmFtZSwgY2l0eSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKTtcclxuICAgICAgICBjb25zdCBpbmR1c3RyaWFsRGF0YSA9IG5zLmNvcnBvcmF0aW9uLmdldEluZHVzdHJ5RGF0YShkaXZpc2lvbi50eXBlKTtcclxuICAgICAgICBjb25zdCB3YXJlaG91c2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb24ubmFtZSwgY2l0eSk7XHJcbiAgICAgICAgbGV0IHRvdGFsUmF3UHJvZHVjdGlvbiA9IDA7XHJcblxyXG4gICAgICAgIGlmIChpbmR1c3RyaWFsRGF0YS5tYWtlc01hdGVyaWFscykge1xyXG4gICAgICAgICAgICB0b3RhbFJhd1Byb2R1Y3Rpb24gKz0gZ2V0TGltaXRlZFJhd1Byb2R1Y3Rpb24oXHJcbiAgICAgICAgICAgICAgICBucyxcclxuICAgICAgICAgICAgICAgIGRpdmlzaW9uLFxyXG4gICAgICAgICAgICAgICAgY2l0eSxcclxuICAgICAgICAgICAgICAgIGluZHVzdHJpYWxEYXRhLFxyXG4gICAgICAgICAgICAgICAgd2FyZWhvdXNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmR1c3RyaWFsRGF0YS5tYWtlc1Byb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZHVjdE5hbWUgb2YgZGl2aXNpb24ucHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBucy5jb3Jwb3JhdGlvbi5nZXRQcm9kdWN0KGRpdmlzaW9uTmFtZSwgY2l0eSwgcHJvZHVjdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QuZGV2ZWxvcG1lbnRQcm9ncmVzcyA8IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG90YWxSYXdQcm9kdWN0aW9uICs9IGdldExpbWl0ZWRSYXdQcm9kdWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgIG5zLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kdXN0cmlhbERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgd2FyZWhvdXNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zaXplXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzbWFydFN1cHBseURhdGEuc2V0KGJ1aWxkU21hcnRTdXBwbHlLZXkoZGl2aXNpb25OYW1lLCBjaXR5KSwgdG90YWxSYXdQcm9kdWN0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZXRlY3RXYXJlaG91c2VDb25nZXN0aW9uKFxyXG4gICAgbnM6IE5TLFxyXG4gICAgZGl2aXNpb246IERpdmlzaW9uLFxyXG4gICAgaW5kdXN0cmlhbERhdGE6IENvcnBJbmR1c3RyeURhdGEsXHJcbiAgICBjaXR5OiBDaXR5TmFtZSxcclxuICAgIHdhcmVob3VzZUNvbmdlc3Rpb25EYXRhOiBNYXA8c3RyaW5nLCBudW1iZXI+XHJcbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgcmVxdWlyZWRNYXRlcmlhbHMgPSBnZXRSZWNvcmRFbnRyaWVzKGluZHVzdHJpYWxEYXRhLnJlcXVpcmVkTWF0ZXJpYWxzKTtcclxuICAgIGxldCBpc1dhcmVob3VzZUNvbmdlc3RlZCA9IGZhbHNlO1xyXG4gICAgY29uc3Qgd2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGFLZXkgPSBgJHtkaXZpc2lvbi5uYW1lfXwke2NpdHl9YDtcclxuICAgIGNvbnN0IGl0ZW1zOiAoTWF0ZXJpYWwgfCBQcm9kdWN0KVtdID0gW107XHJcbiAgICBpZiAoaW5kdXN0cmlhbERhdGEucHJvZHVjZWRNYXRlcmlhbHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsTmFtZSBvZiBpbmR1c3RyaWFsRGF0YS5wcm9kdWNlZE1hdGVyaWFscykge1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsKGRpdmlzaW9uLm5hbWUsIGNpdHksIG1hdGVyaWFsTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpbmR1c3RyaWFsRGF0YS5tYWtlc1Byb2R1Y3RzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0TmFtZSBvZiBkaXZpc2lvbi5wcm9kdWN0cykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbnMuY29ycG9yYXRpb24uZ2V0UHJvZHVjdChkaXZpc2lvbi5uYW1lLCBjaXR5LCBwcm9kdWN0TmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LmRldmVsb3BtZW50UHJvZ3Jlc3MgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucHJvZHVjdGlvbkFtb3VudCAhPT0gMCkge1xyXG4gICAgICAgICAgICB3YXJlaG91c2VDb25nZXN0aW9uRGF0YS5zZXQod2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGFLZXksIDApO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaXRlbS5wcm9kdWN0aW9uQW1vdW50ID09PSAwIG1lYW5zIHRoYXQgZGl2aXNpb24gZG9lcyBub3QgcHJvZHVjZSBtYXRlcmlhbC9wcm9kdWN0IGxhc3QgY3ljbGUuXHJcbiAgICAgICAgbGV0IG51bWJlck9mQ29uZ2VzdGlvblRpbWVzID0gd2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGEuZ2V0KHdhcmVob3VzZUNvbmdlc3Rpb25EYXRhS2V5KSEgKyAxO1xyXG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4obnVtYmVyT2ZDb25nZXN0aW9uVGltZXMpKSB7XHJcbiAgICAgICAgICAgIG51bWJlck9mQ29uZ2VzdGlvblRpbWVzID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGEuc2V0KHdhcmVob3VzZUNvbmdlc3Rpb25EYXRhS2V5LCBudW1iZXJPZkNvbmdlc3Rpb25UaW1lcyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyBJZiB0aGF0IGhhcHBlbnMgbW9yZSB0aGFuIDUgdGltZXMsIHRoZSB3YXJlaG91c2UgaXMgdmVyeSBsaWtlbHkgY29uZ2VzdGVkLlxyXG4gICAgaWYgKHdhcmVob3VzZUNvbmdlc3Rpb25EYXRhLmdldCh3YXJlaG91c2VDb25nZXN0aW9uRGF0YUtleSkhID4gNSkge1xyXG4gICAgICAgIGlzV2FyZWhvdXNlQ29uZ2VzdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIFdlIG5lZWQgdG8gbWl0aWdhdGUgdGhpcyBzaXR1YXRpb24uIERpc2NhcmRpbmcgc3RvcmVkIGlucHV0IG1hdGVyaWFsIGlzIHRoZSBzaW1wbGVzdCBzb2x1dGlvbi5cclxuICAgIGlmIChpc1dhcmVob3VzZUNvbmdlc3RlZCkge1xyXG4gICAgICAgIHNob3dXYXJuaW5nKG5zLCBgV2FyZWhvdXNlIG1heSBiZSBjb25nZXN0ZWQuIERpdmlzaW9uOiAke2RpdmlzaW9uLm5hbWV9LCBjaXR5OiAke2NpdHl9LmApO1xyXG4gICAgICAgIGZvciAoY29uc3QgW21hdGVyaWFsTmFtZV0gb2YgcmVxdWlyZWRNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgcHVyY2hhc2VcclxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uYnV5TWF0ZXJpYWwoZGl2aXNpb24ubmFtZSwgY2l0eSwgbWF0ZXJpYWxOYW1lLCAwKTtcclxuICAgICAgICAgICAgLy8gRGlzY2FyZCBzdG9yZWQgaW5wdXQgbWF0ZXJpYWxcclxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uc2VsbE1hdGVyaWFsKGRpdmlzaW9uLm5hbWUsIGNpdHksIG1hdGVyaWFsTmFtZSwgXCJNQVhcIiwgXCIwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3YXJlaG91c2VDb25nZXN0aW9uRGF0YS5zZXQod2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGFLZXksIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGNvbnN0IFttYXRlcmlhbE5hbWVdIG9mIHJlcXVpcmVkTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb24ubmFtZSwgY2l0eSwgbWF0ZXJpYWxOYW1lKTtcclxuICAgICAgICAgICAgaWYgKG1hdGVyaWFsLmRlc2lyZWRTZWxsQW1vdW50ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdG9wIGRpc2NhcmRpbmcgaW5wdXQgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbi5uYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUsIFwiMFwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNXYXJlaG91c2VDb25nZXN0ZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDdXN0b20gU21hcnQgU3VwcGx5IHNjcmlwdFxyXG4gKlxyXG4gKiBAcGFyYW0gbnNcclxuICogQHBhcmFtIHdhcmVob3VzZUNvbmdlc3Rpb25EYXRhXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnV5T3B0aW1hbEFtb3VudE9mSW5wdXRNYXRlcmlhbHMobnM6IE5TLCB3YXJlaG91c2VDb25nZXN0aW9uRGF0YTogTWFwPHN0cmluZywgbnVtYmVyPik6IHZvaWQge1xyXG4gICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkubmV4dFN0YXRlICE9PSBcIlBVUkNIQVNFXCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBMb29wIGFuZCBzZXQgYnV5IGFtb3VudFxyXG4gICAgbG9vcEFsbERpdmlzaW9uc0FuZENpdGllcyhucywgKGRpdmlzaW9uTmFtZSwgY2l0eSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKTtcclxuICAgICAgICBjb25zdCBpbmR1c3RyaWFsRGF0YSA9IG5zLmNvcnBvcmF0aW9uLmdldEluZHVzdHJ5RGF0YShkaXZpc2lvbi50eXBlKTtcclxuICAgICAgICBjb25zdCBvZmZpY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRPZmZpY2UoZGl2aXNpb24ubmFtZSwgY2l0eSk7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRNYXRlcmlhbHMgPSBnZXRSZWNvcmRFbnRyaWVzKGluZHVzdHJpYWxEYXRhLnJlcXVpcmVkTWF0ZXJpYWxzKTtcclxuXHJcbiAgICAgICAgLy8gRGV0ZWN0IHdhcmVob3VzZSBjb25nZXN0aW9uXHJcbiAgICAgICAgbGV0IGlzV2FyZWhvdXNlQ29uZ2VzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFzZXRPZkRpdmlzaW9uc1dhaXRpbmdGb3JSUC5oYXMoZGl2aXNpb25OYW1lKVxyXG4gICAgICAgICAgICAmJiBvZmZpY2UuZW1wbG95ZWVKb2JzW1wiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiXSAhPT0gb2ZmaWNlLm51bUVtcGxveWVlcykge1xyXG4gICAgICAgICAgICBpc1dhcmVob3VzZUNvbmdlc3RlZCA9IGRldGVjdFdhcmVob3VzZUNvbmdlc3Rpb24oXHJcbiAgICAgICAgICAgICAgICBucyxcclxuICAgICAgICAgICAgICAgIGRpdmlzaW9uLFxyXG4gICAgICAgICAgICAgICAgaW5kdXN0cmlhbERhdGEsXHJcbiAgICAgICAgICAgICAgICBjaXR5LFxyXG4gICAgICAgICAgICAgICAgd2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzV2FyZWhvdXNlQ29uZ2VzdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdhcmVob3VzZSA9IG5zLmNvcnBvcmF0aW9uLmdldFdhcmVob3VzZShkaXZpc2lvbi5uYW1lLCBjaXR5KTtcclxuICAgICAgICBjb25zdCBpbnB1dE1hdGVyaWFsczogUGFydGlhbFJlY29yZDxDb3JwTWF0ZXJpYWxOYW1lLCB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkUXVhbnRpdHk6IG51bWJlcixcclxuICAgICAgICAgICAgY29lZmZpY2llbnQ6IG51bWJlcjtcclxuICAgICAgICB9PiA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgW21hdGVyaWFsTmFtZSwgbWF0ZXJpYWxDb2VmZmljaWVudF0gb2YgcmVxdWlyZWRNYXRlcmlhbHMpIHtcclxuICAgICAgICAgICAgaW5wdXRNYXRlcmlhbHNbbWF0ZXJpYWxOYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkUXVhbnRpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBjb2VmZmljaWVudDogbWF0ZXJpYWxDb2VmZmljaWVudFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRmluZCByZXF1aXJlZCBxdWFudGl0eSBvZiBpbnB1dCBtYXRlcmlhbHMgdG8gcHJvZHVjZSBtYXRlcmlhbC9wcm9kdWN0XHJcbiAgICAgICAgZm9yIChjb25zdCBpbnB1dE1hdGVyaWFsRGF0YSBvZiBPYmplY3QudmFsdWVzKGlucHV0TWF0ZXJpYWxzKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZFF1YW50aXR5ID0gKHNtYXJ0U3VwcGx5RGF0YS5nZXQoYnVpbGRTbWFydFN1cHBseUtleShkaXZpc2lvbk5hbWUsIGNpdHkpKSA/PyAwKVxyXG4gICAgICAgICAgICAgICAgKiBpbnB1dE1hdGVyaWFsRGF0YS5jb2VmZmljaWVudDtcclxuICAgICAgICAgICAgaW5wdXRNYXRlcmlhbERhdGEucmVxdWlyZWRRdWFudGl0eSArPSByZXF1aXJlZFF1YW50aXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTGltaXQgdGhlIGlucHV0IG1hdGVyaWFsIHVuaXRzIHRvIG1heCBudW1iZXIgb2YgdW5pdHMgdGhhdCB3ZSBjYW4gc3RvcmUgaW4gd2FyZWhvdXNlJ3MgZnJlZSBzcGFjZVxyXG4gICAgICAgIGZvciAoY29uc3QgW21hdGVyaWFsTmFtZSwgaW5wdXRNYXRlcmlhbERhdGFdIG9mIGdldFJlY29yZEVudHJpZXMoaW5wdXRNYXRlcmlhbHMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsRGF0YSA9IG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsRGF0YShtYXRlcmlhbE5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhBY2NlcHRhYmxlUXVhbnRpdHkgPSBNYXRoLmZsb29yKCh3YXJlaG91c2Uuc2l6ZSAtIHdhcmVob3VzZS5zaXplVXNlZCkgLyBtYXRlcmlhbERhdGEuc2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ZWRSZXF1aXJlZFF1YW50aXR5ID0gTWF0aC5taW4oaW5wdXRNYXRlcmlhbERhdGEucmVxdWlyZWRRdWFudGl0eSwgbWF4QWNjZXB0YWJsZVF1YW50aXR5KTtcclxuICAgICAgICAgICAgaWYgKGxpbWl0ZWRSZXF1aXJlZFF1YW50aXR5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRNYXRlcmlhbERhdGEucmVxdWlyZWRRdWFudGl0eSA9IGxpbWl0ZWRSZXF1aXJlZFF1YW50aXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGaW5kIHdoaWNoIGlucHV0IG1hdGVyaWFsIGNyZWF0ZXMgdGhlIGxlYXN0IG51bWJlciBvZiBvdXRwdXQgdW5pdHNcclxuICAgICAgICBsZXQgbGVhc3RBbW91bnRPZk91dHB1dFVuaXRzID0gTnVtYmVyLk1BWF9WQUxVRTtcclxuICAgICAgICBmb3IgKGNvbnN0IHsgcmVxdWlyZWRRdWFudGl0eSwgY29lZmZpY2llbnQgfSBvZiBPYmplY3QudmFsdWVzKGlucHV0TWF0ZXJpYWxzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBhbW91bnRPZk91dHB1dFVuaXRzID0gcmVxdWlyZWRRdWFudGl0eSAvIGNvZWZmaWNpZW50O1xyXG4gICAgICAgICAgICBpZiAoYW1vdW50T2ZPdXRwdXRVbml0cyA8IGxlYXN0QW1vdW50T2ZPdXRwdXRVbml0cykge1xyXG4gICAgICAgICAgICAgICAgbGVhc3RBbW91bnRPZk91dHB1dFVuaXRzID0gYW1vdW50T2ZPdXRwdXRVbml0cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWxpZ24gYWxsIHRoZSBpbnB1dCBtYXRlcmlhbHMgdG8gdGhlIHNtYWxsZXN0IGFtb3VudFxyXG4gICAgICAgIGZvciAoY29uc3QgaW5wdXRNYXRlcmlhbERhdGEgb2YgT2JqZWN0LnZhbHVlcyhpbnB1dE1hdGVyaWFscykpIHtcclxuICAgICAgICAgICAgaW5wdXRNYXRlcmlhbERhdGEucmVxdWlyZWRRdWFudGl0eSA9IGxlYXN0QW1vdW50T2ZPdXRwdXRVbml0cyAqIGlucHV0TWF0ZXJpYWxEYXRhLmNvZWZmaWNpZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB0b3RhbCBzaXplIG9mIGFsbCBpbnB1dCBtYXRlcmlhbHMgd2UgYXJlIHRyeWluZyB0byBidXlcclxuICAgICAgICBsZXQgcmVxdWlyZWRTcGFjZSA9IDA7XHJcbiAgICAgICAgZm9yIChjb25zdCBbbWF0ZXJpYWxOYW1lLCBpbnB1dE1hdGVyaWFsRGF0YV0gb2YgZ2V0UmVjb3JkRW50cmllcyhpbnB1dE1hdGVyaWFscykpIHtcclxuICAgICAgICAgICAgcmVxdWlyZWRTcGFjZSArPSBpbnB1dE1hdGVyaWFsRGF0YS5yZXF1aXJlZFF1YW50aXR5ICogbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWxEYXRhKG1hdGVyaWFsTmFtZSkuc2l6ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vdCBlbm91Z2ggZnJlZSBzcGFjZSwgd2UgYXBwbHkgYSBtdWx0aXBsaWVyIHRvIHJlcXVpcmVkIHF1YW50aXR5IHRvIG5vdCBvdmVyZmlsbCB3YXJlaG91c2VcclxuICAgICAgICBjb25zdCBmcmVlU3BhY2UgPSB3YXJlaG91c2Uuc2l6ZSAtIHdhcmVob3VzZS5zaXplVXNlZDtcclxuICAgICAgICBpZiAocmVxdWlyZWRTcGFjZSA+IGZyZWVTcGFjZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25zdHJhaW5lZFN0b3JhZ2VTcGFjZU11bHRpcGxpZXIgPSBmcmVlU3BhY2UgLyByZXF1aXJlZFNwYWNlO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlucHV0TWF0ZXJpYWxEYXRhIG9mIE9iamVjdC52YWx1ZXMoaW5wdXRNYXRlcmlhbHMpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dE1hdGVyaWFsRGF0YS5yZXF1aXJlZFF1YW50aXR5ID0gTWF0aC5mbG9vcihpbnB1dE1hdGVyaWFsRGF0YS5yZXF1aXJlZFF1YW50aXR5ICogY29uc3RyYWluZWRTdG9yYWdlU3BhY2VNdWx0aXBsaWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGVkdWN0IHRoZSBudW1iZXIgb2Ygc3RvcmVkIGlucHV0IG1hdGVyaWFsIHVuaXRzIGZyb20gdGhlIHJlcXVpcmVkIHF1YW50aXR5XHJcbiAgICAgICAgZm9yIChjb25zdCBbbWF0ZXJpYWxOYW1lLCBpbnB1dE1hdGVyaWFsRGF0YV0gb2YgZ2V0UmVjb3JkRW50cmllcyhpbnB1dE1hdGVyaWFscykpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbChkaXZpc2lvbk5hbWUsIGNpdHksIG1hdGVyaWFsTmFtZSk7XHJcbiAgICAgICAgICAgIGlucHV0TWF0ZXJpYWxEYXRhLnJlcXVpcmVkUXVhbnRpdHkgPSBNYXRoLm1heCgwLCBpbnB1dE1hdGVyaWFsRGF0YS5yZXF1aXJlZFF1YW50aXR5IC0gbWF0ZXJpYWwuc3RvcmVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJ1eSBpbnB1dCBtYXRlcmlhbHNcclxuICAgICAgICBmb3IgKGNvbnN0IFttYXRlcmlhbE5hbWUsIGlucHV0TWF0ZXJpYWxEYXRhXSBvZiBnZXRSZWNvcmRFbnRyaWVzKGlucHV0TWF0ZXJpYWxzKSkge1xyXG4gICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5idXlNYXRlcmlhbChkaXZpc2lvbk5hbWUsIGNpdHksIG1hdGVyaWFsTmFtZSwgaW5wdXRNYXRlcmlhbERhdGEucmVxdWlyZWRRdWFudGl0eSAvIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBuc1xyXG4gKiBAcGFyYW0gZGl2aXNpb25OYW1lXHJcbiAqIEBwYXJhbSBpbmR1c3RyeURhdGFcclxuICogQHBhcmFtIGNpdHlcclxuICogQHBhcmFtIHVzZVdhcmVob3VzZVNpemUgSWYgZmFsc2UsIGZ1bmN0aW9uIHVzZXMgdW51c2VkIHN0b3JhZ2Ugc2l6ZSBhZnRlciBQUk9EVUNUSU9OIHN0YXRlXHJcbiAqIEBwYXJhbSByYXRpb1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbmRPcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFscyhcclxuICAgIG5zOiBOUyxcclxuICAgIGRpdmlzaW9uTmFtZTogc3RyaW5nLFxyXG4gICAgaW5kdXN0cnlEYXRhOiBDb3JwSW5kdXN0cnlEYXRhLFxyXG4gICAgY2l0eTogQ2l0eU5hbWUsXHJcbiAgICB1c2VXYXJlaG91c2VTaXplOiBib29sZWFuLFxyXG4gICAgcmF0aW86IG51bWJlclxyXG4pOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICBjb25zdCB3YXJlaG91c2VTaXplID0gbnMuY29ycG9yYXRpb24uZ2V0V2FyZWhvdXNlKGRpdmlzaW9uTmFtZSwgY2l0eSkuc2l6ZTtcclxuICAgIGlmICh1c2VXYXJlaG91c2VTaXplKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldE9wdGltYWxCb29zdE1hdGVyaWFsUXVhbnRpdGllcyhpbmR1c3RyeURhdGEsIHdhcmVob3VzZVNpemUgKiByYXRpbyk7XHJcbiAgICB9XHJcbiAgICBhd2FpdCB3YWl0VW50aWxBZnRlclN0YXRlSGFwcGVucyhucywgQ29ycFN0YXRlLlBST0RVQ1RJT04pO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlU3BhY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb25OYW1lLCBjaXR5KS5zaXplXHJcbiAgICAgICAgLSBucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb25OYW1lLCBjaXR5KS5zaXplVXNlZDtcclxuICAgIHJldHVybiBnZXRPcHRpbWFsQm9vc3RNYXRlcmlhbFF1YW50aXRpZXMoaW5kdXN0cnlEYXRhLCBhdmFpbGFibGVTcGFjZSAqIHJhdGlvKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXRVbnRpbEhhdmluZ0Vub3VnaFJlc2VhcmNoUG9pbnRzKG5zOiBOUywgY29uZGl0aW9uczoge1xyXG4gICAgZGl2aXNpb25OYW1lOiBzdHJpbmc7XHJcbiAgICByZXNlYXJjaFBvaW50OiBudW1iZXI7XHJcbn1bXSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgbnMucHJpbnQoYFdhaXRpbmcgZm9yIHJlc2VhcmNoIHBvaW50czogJHtKU09OLnN0cmluZ2lmeShjb25kaXRpb25zKX1gKTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgbGV0IGZpbmlzaCA9IHRydWU7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2YgY29uZGl0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oY29uZGl0aW9uLmRpdmlzaW9uTmFtZSkucmVzZWFyY2hQb2ludHMgPj0gY29uZGl0aW9uLnJlc2VhcmNoUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldE9mRGl2aXNpb25zV2FpdGluZ0ZvclJQLmRlbGV0ZShjb25kaXRpb24uZGl2aXNpb25OYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldE9mRGl2aXNpb25zV2FpdGluZ0ZvclJQLmFkZChjb25kaXRpb24uZGl2aXNpb25OYW1lKTtcclxuICAgICAgICAgICAgZmluaXNoID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaW5pc2gpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IG5zLmNvcnBvcmF0aW9uLm5leHRVcGRhdGUoKTtcclxuICAgIH1cclxuICAgIG5zLnByaW50KGBGaW5pc2hlZCB3YWl0aW5nIGZvciByZXNlYXJjaCBwb2ludHMuIENvbmRpdGlvbnM6ICR7SlNPTi5zdHJpbmdpZnkoY29uZGl0aW9ucyl9YCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhbGwgcHJvZHVjdCdzIG5hbWVzIHdlcmUgZ2VuZXJhdGVkIGJ5IHtAbGluayBnZW5lcmF0ZU5leHRQcm9kdWN0TmFtZX1cclxuICpcclxuICogQHBhcmFtIG5zXHJcbiAqIEBwYXJhbSBkaXZpc2lvbk5hbWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0SWRBcnJheShuczogTlMsIGRpdmlzaW9uTmFtZTogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihkaXZpc2lvbk5hbWUpLnByb2R1Y3RzO1xyXG4gICAgcmV0dXJuIHByb2R1Y3RzXHJcbiAgICAgICAgLm1hcChwcm9kdWN0TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lUGFydHMgPSBwcm9kdWN0TmFtZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0TmFtZVBhcnRzLmxlbmd0aCAhPSAzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmFOO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU51bWJlcihwcm9kdWN0TmFtZVBhcnRzWzFdKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIocHJvZHVjdEluZGV4ID0+ICFOdW1iZXIuaXNOYU4ocHJvZHVjdEluZGV4KSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBbXCJUb2JhY2NvLTAwMDAwfDFlMTJcIiwgXCJUb2JhY2NvLTAwMDAxfDFlMTJcIiwgXCJUb2JhY2NvLTAwMDAyfDFlMTJcIl0gPT4gXCJUb2JhY2NvLTAwMDAzfDFlMTJcIlxyXG4gKiAxZTEyIGlzIGRlc2lnbkludmVzdCArIG1hcmtldGluZ0ludmVzdFxyXG4gKlxyXG4gKiBAcGFyYW0gbnNcclxuICogQHBhcmFtIGRpdmlzaW9uTmFtZVxyXG4gKiBAcGFyYW0gcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOZXh0UHJvZHVjdE5hbWUobnM6IE5TLCBkaXZpc2lvbk5hbWU6IHN0cmluZywgcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUocHJvZHVjdERldmVsb3BtZW50QnVkZ2V0KSB8fCBwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXQgPCAxZTMpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYnVkZ2V0OiAke3Byb2R1Y3REZXZlbG9wbWVudEJ1ZGdldH1gKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb2R1Y3RJZEFycmF5ID0gZ2V0UHJvZHVjdElkQXJyYXkobnMsIGRpdmlzaW9uTmFtZSk7XHJcbiAgICBpZiAocHJvZHVjdElkQXJyYXkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2RpdmlzaW9uTmFtZX0tMDAwMDAtJHtwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXQudG9FeHBvbmVudGlhbCg1KX1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke2RpdmlzaW9uTmFtZX0tJHsoTWF0aC5tYXgoLi4ucHJvZHVjdElkQXJyYXkpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCg1LCBcIjBcIil9LSR7cHJvZHVjdERldmVsb3BtZW50QnVkZ2V0LnRvRXhwb25lbnRpYWwoNSl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWF4TnVtYmVyT2ZQcm9kdWN0cyhuczogTlMsIGRpdmlzaW9uTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGxldCBtYXhOdW1iZXJPZlByb2R1Y3RzID0gMztcclxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5oYXNSZXNlYXJjaGVkKGRpdmlzaW9uTmFtZSwgUmVzZWFyY2hOYW1lLlVQR1JBREVfQ0FQQUNJVFlfMSkpIHtcclxuICAgICAgICBtYXhOdW1iZXJPZlByb2R1Y3RzID0gNDtcclxuICAgIH1cclxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5oYXNSZXNlYXJjaGVkKGRpdmlzaW9uTmFtZSwgUmVzZWFyY2hOYW1lLlVQR1JBREVfQ0FQQUNJVFlfMikpIHtcclxuICAgICAgICBtYXhOdW1iZXJPZlByb2R1Y3RzID0gNTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXhOdW1iZXJPZlByb2R1Y3RzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGV2ZWxvcE5ld1Byb2R1Y3QoXHJcbiAgICBuczogTlMsXHJcbiAgICBkaXZpc2lvbk5hbWU6IHN0cmluZyxcclxuICAgIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5OiBDaXR5TmFtZSxcclxuICAgIHByb2R1Y3REZXZlbG9wbWVudEJ1ZGdldDogbnVtYmVyXHJcbik6IHN0cmluZyB8IG51bGwge1xyXG4gICAgY29uc3QgcHJvZHVjdHMgPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihkaXZpc2lvbk5hbWUpLnByb2R1Y3RzO1xyXG5cclxuICAgIGxldCBoYXNEZXZlbG9waW5nUHJvZHVjdCA9IGZhbHNlO1xyXG4gICAgbGV0IGJlc3RQcm9kdWN0ID0gbnVsbDtcclxuICAgIGxldCB3b3JzdFByb2R1Y3QgPSBudWxsO1xyXG4gICAgbGV0IG1heFByb2R1Y3RSYXRpbmcgPSBOdW1iZXIuTUlOX1ZBTFVFO1xyXG4gICAgbGV0IG1pblByb2R1Y3RSYXRpbmcgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgZm9yIChjb25zdCBwcm9kdWN0TmFtZSBvZiBwcm9kdWN0cykge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBucy5jb3Jwb3JhdGlvbi5nZXRQcm9kdWN0KGRpdmlzaW9uTmFtZSwgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHksIHByb2R1Y3ROYW1lKTtcclxuICAgICAgICAvL0NoZWNrIGlmIHRoZXJlIGlzIGFueSBkZXZlbG9waW5nIHByb2R1Y3RcclxuICAgICAgICBpZiAocHJvZHVjdC5kZXZlbG9wbWVudFByb2dyZXNzIDwgMTAwKSB7XHJcbiAgICAgICAgICAgIGhhc0RldmVsb3BpbmdQcm9kdWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERldGVybWluZSB0aGUgYmVzdCBhbmQgd29yc3QgcHJvZHVjdFxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RSYXRpbmcgPSBwcm9kdWN0LnJhdGluZztcclxuICAgICAgICBpZiAocHJvZHVjdFJhdGluZyA8IG1pblByb2R1Y3RSYXRpbmcpIHtcclxuICAgICAgICAgICAgd29yc3RQcm9kdWN0ID0gcHJvZHVjdDtcclxuICAgICAgICAgICAgbWluUHJvZHVjdFJhdGluZyA9IHByb2R1Y3RSYXRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9kdWN0UmF0aW5nID4gbWF4UHJvZHVjdFJhdGluZykge1xyXG4gICAgICAgICAgICBiZXN0UHJvZHVjdCA9IHByb2R1Y3Q7XHJcbiAgICAgICAgICAgIG1heFByb2R1Y3RSYXRpbmcgPSBwcm9kdWN0UmF0aW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEbyBub3RoaW5nIGlmIHRoZXJlIGlzIGFueSBkZXZlbG9waW5nIHByb2R1Y3RcclxuICAgIGlmIChoYXNEZXZlbG9waW5nUHJvZHVjdCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCFiZXN0UHJvZHVjdCAmJiBwcm9kdWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgdGhlIGJlc3QgcHJvZHVjdFwiKTtcclxuICAgIH1cclxuICAgIGlmICghd29yc3RQcm9kdWN0ICYmIHByb2R1Y3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCB0aGUgd29yc3QgcHJvZHVjdCB0byBkaXNjb250aW51ZVwiKTtcclxuICAgIH1cclxuICAgIC8vIE5ldyBwcm9kdWN0J3MgYnVkZ2V0IHNob3VsZCBiZSBncmVhdGVyIHRoYW4gWCUgb2YgY3VycmVudCBiZXN0IHByb2R1Y3QncyBidWRnZXQuXHJcbiAgICBpZiAoYmVzdFByb2R1Y3QpIHtcclxuICAgICAgICBjb25zdCBiZXN0UHJvZHVjdEJ1ZGdldCA9IGJlc3RQcm9kdWN0LmRlc2lnbkludmVzdG1lbnQgKyBiZXN0UHJvZHVjdC5hZHZlcnRpc2luZ0ludmVzdG1lbnQ7XHJcbiAgICAgICAgaWYgKHByb2R1Y3REZXZlbG9wbWVudEJ1ZGdldCA8IGJlc3RQcm9kdWN0QnVkZ2V0ICogMC41ICYmIHByb2R1Y3RzLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhcm5pbmdNZXNzYWdlID0gYEJ1ZGdldCBmb3IgbmV3IHByb2R1Y3QgaXMgdG9vIGxvdzogJHtucy5mb3JtYXROdW1iZXIocHJvZHVjdERldmVsb3BtZW50QnVkZ2V0KX0uIGBcclxuICAgICAgICAgICAgICAgICsgYEN1cnJlbnQgYmVzdCBwcm9kdWN0J3MgYnVkZ2V0OiAke25zLmZvcm1hdE51bWJlcihiZXN0UHJvZHVjdEJ1ZGdldCl9YDtcclxuICAgICAgICAgICAgc2hvd1dhcm5pbmcoXHJcbiAgICAgICAgICAgICAgICBucyxcclxuICAgICAgICAgICAgICAgIHdhcm5pbmdNZXNzYWdlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh3b3JzdFByb2R1Y3QgJiYgcHJvZHVjdHMubGVuZ3RoID09PSBnZXRNYXhOdW1iZXJPZlByb2R1Y3RzKG5zLCBkaXZpc2lvbk5hbWUpKSB7XHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZGlzY29udGludWVQcm9kdWN0KGRpdmlzaW9uTmFtZSwgd29yc3RQcm9kdWN0Lm5hbWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvZHVjdE5hbWUgPSBnZW5lcmF0ZU5leHRQcm9kdWN0TmFtZShucywgZGl2aXNpb25OYW1lLCBwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXQpO1xyXG4gICAgbnMuY29ycG9yYXRpb24ubWFrZVByb2R1Y3QoXHJcbiAgICAgICAgZGl2aXNpb25OYW1lLFxyXG4gICAgICAgIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LFxyXG4gICAgICAgIHByb2R1Y3ROYW1lLFxyXG4gICAgICAgIHByb2R1Y3REZXZlbG9wbWVudEJ1ZGdldCAvIDIsXHJcbiAgICAgICAgcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0IC8gMixcclxuICAgICk7XHJcbiAgICByZXR1cm4gcHJvZHVjdE5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdlc3RQcm9kdWN0TmFtZShuczogTlMsIGRpdmlzaW9uTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSkucHJvZHVjdHM7XHJcbiAgICBpZiAocHJvZHVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvZHVjdHNbcHJvZHVjdHMubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVQcm9kdWN0TWFya3VwKFxyXG4gICAgZGl2aXNpb25SUDogbnVtYmVyLFxyXG4gICAgaW5kdXN0cnlTY2llbmNlRmFjdG9yOiBudW1iZXIsXHJcbiAgICBwcm9kdWN0OiBQcm9kdWN0LFxyXG4gICAgZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2I/OiB7XHJcbiAgICAgICAgb3BlcmF0aW9uc1Byb2R1Y3Rpb246IG51bWJlcjtcclxuICAgICAgICBlbmdpbmVlclByb2R1Y3Rpb246IG51bWJlcjtcclxuICAgICAgICBidXNpbmVzc1Byb2R1Y3Rpb246IG51bWJlcjtcclxuICAgICAgICBtYW5hZ2VtZW50UHJvZHVjdGlvbjogbnVtYmVyO1xyXG4gICAgICAgIHJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uOiBudW1iZXI7XHJcbiAgICB9XHJcbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICBjb25zdCBkZXNpZ25JbnZlc3RtZW50TXVsdGlwbGllciA9IDEgKyBNYXRoLnBvdyhwcm9kdWN0LmRlc2lnbkludmVzdG1lbnQsIDAuMSkgLyAxMDA7XHJcbiAgICBjb25zdCByZXNlYXJjaFBvaW50TXVsdGlwbGllciA9IDEgKyBNYXRoLnBvdyhkaXZpc2lvblJQLCBpbmR1c3RyeVNjaWVuY2VGYWN0b3IpIC8gODAwO1xyXG4gICAgY29uc3QgayA9IGRlc2lnbkludmVzdG1lbnRNdWx0aXBsaWVyICogcmVzZWFyY2hQb2ludE11bHRpcGxpZXI7XHJcbiAgICBjb25zdCBiYWxhbmNlTXVsdGlwbGllciA9IGZ1bmN0aW9uIChcclxuICAgICAgICBjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlcjogbnVtYmVyLFxyXG4gICAgICAgIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQ6IG51bWJlcixcclxuICAgICAgICBjcmVhdGlvbkpvYkZhY3RvcnNSbkQ6IG51bWJlcixcclxuICAgICAgICBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zOiBudW1iZXIsXHJcbiAgICAgICAgY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3M6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgdG90YWxDcmVhdGlvbkpvYkZhY3RvcnMgPSBjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciArIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQgKyBjcmVhdGlvbkpvYkZhY3RvcnNSbkQgKyBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zICsgY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3M7XHJcbiAgICAgICAgY29uc3QgZW5naW5lZXJSYXRpbyA9IGNyZWF0aW9uSm9iRmFjdG9yc0VuZ2luZWVyIC8gdG90YWxDcmVhdGlvbkpvYkZhY3RvcnM7XHJcbiAgICAgICAgY29uc3QgbWFuYWdlbWVudFJhdGlvID0gY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCAvIHRvdGFsQ3JlYXRpb25Kb2JGYWN0b3JzO1xyXG4gICAgICAgIGNvbnN0IHJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRSYXRpbyA9IGNyZWF0aW9uSm9iRmFjdG9yc1JuRCAvIHRvdGFsQ3JlYXRpb25Kb2JGYWN0b3JzO1xyXG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbnNSYXRpbyA9IGNyZWF0aW9uSm9iRmFjdG9yc09wZXJhdGlvbnMgLyB0b3RhbENyZWF0aW9uSm9iRmFjdG9ycztcclxuICAgICAgICBjb25zdCBidXNpbmVzc1JhdGlvID0gY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3MgLyB0b3RhbENyZWF0aW9uSm9iRmFjdG9ycztcclxuICAgICAgICByZXR1cm4gMS4yICogZW5naW5lZXJSYXRpbyArIDAuOSAqIG1hbmFnZW1lbnRSYXRpbyArIDEuMyAqIHJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRSYXRpbyArIDEuNSAqIG9wZXJhdGlvbnNSYXRpbyArIGJ1c2luZXNzUmF0aW87XHJcblxyXG4gICAgfTtcclxuICAgIGNvbnN0IGYxID0gZnVuY3Rpb24gKFtjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciwgY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCwgY3JlYXRpb25Kb2JGYWN0b3JzUm5ELCBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zLCBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzc106IG51bWJlcltdKSB7XHJcbiAgICAgICAgcmV0dXJuIGtcclxuICAgICAgICAgICAgKiBiYWxhbmNlTXVsdGlwbGllcihjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciwgY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCwgY3JlYXRpb25Kb2JGYWN0b3JzUm5ELCBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zLCBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzcylcclxuICAgICAgICAgICAgKiAoMC4xICogY3JlYXRpb25Kb2JGYWN0b3JzRW5naW5lZXIgKyAwLjA1ICogY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCArIDAuMDUgKiBjcmVhdGlvbkpvYkZhY3RvcnNSbkQgKyAwLjAyICogY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucyArIDAuMDIgKiBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzcylcclxuICAgICAgICAgICAgLSBwcm9kdWN0LnN0YXRzLnF1YWxpdHk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZjIgPSBmdW5jdGlvbiAoW2NyZWF0aW9uSm9iRmFjdG9yc0VuZ2luZWVyLCBjcmVhdGlvbkpvYkZhY3RvcnNNYW5hZ2VtZW50LCBjcmVhdGlvbkpvYkZhY3RvcnNSbkQsIGNyZWF0aW9uSm9iRmFjdG9yc09wZXJhdGlvbnMsIGNyZWF0aW9uSm9iRmFjdG9yc0J1c2luZXNzXTogbnVtYmVyW10pIHtcclxuICAgICAgICByZXR1cm4ga1xyXG4gICAgICAgICAgICAqIGJhbGFuY2VNdWx0aXBsaWVyKGNyZWF0aW9uSm9iRmFjdG9yc0VuZ2luZWVyLCBjcmVhdGlvbkpvYkZhY3RvcnNNYW5hZ2VtZW50LCBjcmVhdGlvbkpvYkZhY3RvcnNSbkQsIGNyZWF0aW9uSm9iRmFjdG9yc09wZXJhdGlvbnMsIGNyZWF0aW9uSm9iRmFjdG9yc0J1c2luZXNzKVxyXG4gICAgICAgICAgICAqICgwLjE1ICogY3JlYXRpb25Kb2JGYWN0b3JzRW5naW5lZXIgKyAwLjAyICogY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCArIDAuMDIgKiBjcmVhdGlvbkpvYkZhY3RvcnNSbkQgKyAwLjAyICogY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucyArIDAuMDIgKiBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzcylcclxuICAgICAgICAgICAgLSBwcm9kdWN0LnN0YXRzLnBlcmZvcm1hbmNlO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGYzID0gZnVuY3Rpb24gKFtjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciwgY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCwgY3JlYXRpb25Kb2JGYWN0b3JzUm5ELCBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zLCBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzc106IG51bWJlcltdKSB7XHJcbiAgICAgICAgcmV0dXJuIGtcclxuICAgICAgICAgICAgKiBiYWxhbmNlTXVsdGlwbGllcihjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciwgY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCwgY3JlYXRpb25Kb2JGYWN0b3JzUm5ELCBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zLCBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzcylcclxuICAgICAgICAgICAgKiAoMC4wNSAqIGNyZWF0aW9uSm9iRmFjdG9yc0VuZ2luZWVyICsgMC4wMiAqIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQgKyAwLjA4ICogY3JlYXRpb25Kb2JGYWN0b3JzUm5EICsgMC4wNSAqIGNyZWF0aW9uSm9iRmFjdG9yc09wZXJhdGlvbnMgKyAwLjA1ICogY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3MpXHJcbiAgICAgICAgICAgIC0gcHJvZHVjdC5zdGF0cy5kdXJhYmlsaXR5O1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGY0ID0gZnVuY3Rpb24gKFtjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciwgY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCwgY3JlYXRpb25Kb2JGYWN0b3JzUm5ELCBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zLCBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzc106IG51bWJlcltdKSB7XHJcbiAgICAgICAgcmV0dXJuIGtcclxuICAgICAgICAgICAgKiBiYWxhbmNlTXVsdGlwbGllcihjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciwgY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCwgY3JlYXRpb25Kb2JGYWN0b3JzUm5ELCBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zLCBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzcylcclxuICAgICAgICAgICAgKiAoMC4wMiAqIGNyZWF0aW9uSm9iRmFjdG9yc0VuZ2luZWVyICsgMC4wOCAqIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQgKyAwLjAyICogY3JlYXRpb25Kb2JGYWN0b3JzUm5EICsgMC4wNSAqIGNyZWF0aW9uSm9iRmFjdG9yc09wZXJhdGlvbnMgKyAwLjA4ICogY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3MpXHJcbiAgICAgICAgICAgIC0gcHJvZHVjdC5zdGF0cy5yZWxpYWJpbGl0eTtcclxuICAgIH07XHJcbiAgICBjb25zdCBmNSA9IGZ1bmN0aW9uIChbY3JlYXRpb25Kb2JGYWN0b3JzRW5naW5lZXIsIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQsIGNyZWF0aW9uSm9iRmFjdG9yc1JuRCwgY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucywgY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3NdOiBudW1iZXJbXSkge1xyXG4gICAgICAgIHJldHVybiBrXHJcbiAgICAgICAgICAgICogYmFsYW5jZU11bHRpcGxpZXIoY3JlYXRpb25Kb2JGYWN0b3JzRW5naW5lZXIsIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQsIGNyZWF0aW9uSm9iRmFjdG9yc1JuRCwgY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucywgY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3MpXHJcbiAgICAgICAgICAgICogKDAuMDggKiBjcmVhdGlvbkpvYkZhY3RvcnNNYW5hZ2VtZW50ICsgMC4wNSAqIGNyZWF0aW9uSm9iRmFjdG9yc1JuRCArIDAuMDIgKiBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zICsgMC4xICogY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3MpXHJcbiAgICAgICAgICAgIC0gcHJvZHVjdC5zdGF0cy5hZXN0aGV0aWNzO1xyXG4gICAgfTtcclxuICAgIGxldCBzb2x2ZXJSZXN1bHQ6IENlcmVzU29sdmVyUmVzdWx0ID0ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICAgICAgeDogW10sXHJcbiAgICAgICAgcmVwb3J0OiBcInN0cmluZ1wiLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNvbHZlciA9IG5ldyBDZXJlcygpO1xyXG4gICAgYXdhaXQgc29sdmVyLnByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc29sdmVyLmFkZF9mdW5jdGlvbihmMSk7XHJcbiAgICAgICAgc29sdmVyLmFkZF9mdW5jdGlvbihmMik7XHJcbiAgICAgICAgc29sdmVyLmFkZF9mdW5jdGlvbihmMyk7XHJcbiAgICAgICAgc29sdmVyLmFkZF9mdW5jdGlvbihmNCk7XHJcbiAgICAgICAgc29sdmVyLmFkZF9mdW5jdGlvbihmNSk7XHJcbiAgICAgICAgLy8gR3Vlc3MgdGhlIGluaXRpYWwgdmFsdWVzIG9mIHRoZSBzb2x1dGlvblxyXG4gICAgICAgIGxldCBndWVzcyA9IFsxLCAxLCAxLCAxLCAxXTtcclxuICAgICAgICBpZiAoZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IpIHtcclxuICAgICAgICAgICAgZ3Vlc3MgPSBbXHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZVByb2R1Y3Rpb25CeUpvYi5lbmdpbmVlclByb2R1Y3Rpb24sXHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZVByb2R1Y3Rpb25CeUpvYi5tYW5hZ2VtZW50UHJvZHVjdGlvbixcclxuICAgICAgICAgICAgICAgIGVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iLnJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2Iub3BlcmF0aW9uc1Byb2R1Y3Rpb24sXHJcbiAgICAgICAgICAgICAgICBlbXBsb3llZVByb2R1Y3Rpb25CeUpvYi5idXNpbmVzc1Byb2R1Y3Rpb25cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc29sdmVyUmVzdWx0ID0gc29sdmVyLnNvbHZlKGd1ZXNzKSE7XHJcbiAgICAgICAgc29sdmVyLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAoIXNvbHZlclJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogQ2Fubm90IGZpbmQgaGlkZGVuIHN0YXRzIG9mIHByb2R1Y3Q6ICR7SlNPTi5zdHJpbmdpZnkocHJvZHVjdCl9YCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3RhbENyZWF0aW9uSm9iRmFjdG9ycyA9IHNvbHZlclJlc3VsdC54WzBdICsgc29sdmVyUmVzdWx0LnhbMV0gKyBzb2x2ZXJSZXN1bHQueFsyXSArIHNvbHZlclJlc3VsdC54WzNdICsgc29sdmVyUmVzdWx0LnhbNF07XHJcbiAgICBjb25zdCBtYW5hZ2VtZW50UmF0aW8gPSBzb2x2ZXJSZXN1bHQueFsxXSAvIHRvdGFsQ3JlYXRpb25Kb2JGYWN0b3JzO1xyXG4gICAgY29uc3QgYnVzaW5lc3NSYXRpbyA9IHNvbHZlclJlc3VsdC54WzRdIC8gdG90YWxDcmVhdGlvbkpvYkZhY3RvcnM7XHJcblxyXG4gICAgY29uc3QgYWR2ZXJ0aXNpbmdJbnZlc3RtZW50TXVsdGlwbGllciA9IDEgKyBNYXRoLnBvdyhwcm9kdWN0LmFkdmVydGlzaW5nSW52ZXN0bWVudCwgMC4xKSAvIDEwMDtcclxuICAgIGNvbnN0IGJ1c2luZXNzTWFuYWdlbWVudFJhdGlvID0gTWF0aC5tYXgoYnVzaW5lc3NSYXRpbyArIG1hbmFnZW1lbnRSYXRpbywgMSAvIHRvdGFsQ3JlYXRpb25Kb2JGYWN0b3JzKTtcclxuICAgIHJldHVybiAxMDAgLyAoYWR2ZXJ0aXNpbmdJbnZlc3RtZW50TXVsdGlwbGllciAqIE1hdGgucG93KHByb2R1Y3Quc3RhdHMucXVhbGl0eSArIDAuMDAxLCAwLjY1KSAqIGJ1c2luZXNzTWFuYWdlbWVudFJhdGlvKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZHVjdChpdGVtOiBNYXRlcmlhbCB8IFByb2R1Y3QpOiBpdGVtIGlzIFByb2R1Y3Qge1xyXG4gICAgcmV0dXJuIFwicmF0aW5nXCIgaW4gaXRlbTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUHJvZHVjdE1hcmt1cE1hcChuczogTlMpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgcHJvZHVjdEtleSBvZiBwcm9kdWN0TWFya3VwRGF0YS5rZXlzKCkpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0S2V5SW5mbyA9IHByb2R1Y3RLZXkuc3BsaXQoXCJ8XCIpO1xyXG4gICAgICAgIGNvbnN0IGRpdmlzaW9uTmFtZSA9IHByb2R1Y3RLZXlJbmZvWzBdO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gcHJvZHVjdEtleUluZm9bMl07XHJcbiAgICAgICAgaWYgKCFucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihkaXZpc2lvbk5hbWUpLnByb2R1Y3RzLmluY2x1ZGVzKHByb2R1Y3ROYW1lKSkge1xyXG4gICAgICAgICAgICBwcm9kdWN0TWFya3VwRGF0YS5kZWxldGUocHJvZHVjdEtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdE1hcmt1cChcclxuICAgIGRpdmlzaW9uOiBEaXZpc2lvbixcclxuICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcclxuICAgIGNpdHk6IENpdHlOYW1lLFxyXG4gICAgaXRlbTogUHJvZHVjdCxcclxuICAgIG9mZmljZT86IE9mZmljZVxyXG4pOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgbGV0IHByb2R1Y3RNYXJrdXA7XHJcbiAgICBjb25zdCBwcm9kdWN0TWFya3VwS2V5ID0gYCR7ZGl2aXNpb24ubmFtZX18JHtjaXR5fXwke2l0ZW0ubmFtZX1gO1xyXG4gICAgcHJvZHVjdE1hcmt1cCA9IHByb2R1Y3RNYXJrdXBEYXRhLmdldChwcm9kdWN0TWFya3VwS2V5KTtcclxuICAgIGlmICghcHJvZHVjdE1hcmt1cCkge1xyXG4gICAgICAgIHByb2R1Y3RNYXJrdXAgPSBhd2FpdCBjYWxjdWxhdGVQcm9kdWN0TWFya3VwKFxyXG4gICAgICAgICAgICBkaXZpc2lvbi5yZXNlYXJjaFBvaW50cyxcclxuICAgICAgICAgICAgaW5kdXN0cnlEYXRhLnNjaWVuY2VGYWN0b3IhLFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICAob2ZmaWNlKSA/IHtcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbnNQcm9kdWN0aW9uOiBvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IuT3BlcmF0aW9ucyxcclxuICAgICAgICAgICAgICAgIGVuZ2luZWVyUHJvZHVjdGlvbjogb2ZmaWNlLmVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iLkVuZ2luZWVyLFxyXG4gICAgICAgICAgICAgICAgYnVzaW5lc3NQcm9kdWN0aW9uOiBvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IuQnVzaW5lc3MsXHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VtZW50UHJvZHVjdGlvbjogb2ZmaWNlLmVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iLk1hbmFnZW1lbnQsXHJcbiAgICAgICAgICAgICAgICByZXNlYXJjaEFuZERldmVsb3BtZW50UHJvZHVjdGlvbjogb2ZmaWNlLmVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iW1wiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiXSxcclxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcHJvZHVjdE1hcmt1cERhdGEuc2V0KHByb2R1Y3RNYXJrdXBLZXksIHByb2R1Y3RNYXJrdXApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb2R1Y3RNYXJrdXA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDdXN0b20gTWFya2V0LVRBLklJIHNjcmlwdFxyXG4gKlxyXG4gKiBAcGFyYW0gbnNcclxuICogQHBhcmFtIGRpdmlzaW9uXHJcbiAqIEBwYXJhbSBpbmR1c3RyeURhdGFcclxuICogQHBhcmFtIGNpdHlcclxuICogQHBhcmFtIGl0ZW1cclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcHRpbWFsU2VsbGluZ1ByaWNlKFxyXG4gICAgbnM6IE5TLFxyXG4gICAgZGl2aXNpb246IERpdmlzaW9uLFxyXG4gICAgaW5kdXN0cnlEYXRhOiBDb3JwSW5kdXN0cnlEYXRhLFxyXG4gICAgY2l0eTogQ2l0eU5hbWUsXHJcbiAgICBpdGVtOiBNYXRlcmlhbCB8IFByb2R1Y3RcclxuKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IGl0ZW1Jc1Byb2R1Y3QgPSBpc1Byb2R1Y3QoaXRlbSk7XHJcbiAgICBpZiAoaXRlbUlzUHJvZHVjdCAmJiBpdGVtLmRldmVsb3BtZW50UHJvZ3Jlc3MgPCAxMDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFByb2R1Y3QgaXMgbm90IGZpbmlzaGVkLiBQcm9kdWN0OiAke0pTT04uc3RyaW5naWZ5KGl0ZW0pfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKCFucy5jb3Jwb3JhdGlvbi5oYXNVbmxvY2soVW5sb2NrTmFtZS5NQVJLRVRfUkVTRUFSQ0hfREVNQU5EKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgdW5sb2NrIFwiTWFya2V0IFJlc2VhcmNoIC0gRGVtYW5kXCJgKTtcclxuICAgIH1cclxuICAgIGlmICghbnMuY29ycG9yYXRpb24uaGFzVW5sb2NrKFVubG9ja05hbWUuTUFSS0VUX0RBVEFfQ09NUEVUSVRJT04pKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCB1bmxvY2sgXCJNYXJrZXQgRGF0YSAtIENvbXBldGl0aW9uXCJgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5uZXh0U3RhdGUgIT09IFwiU0FMRVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiMFwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXhwZWN0ZWRTYWxlc1ZvbHVtZSA9IGl0ZW0uc3RvcmVkIC8gMTA7XHJcbiAgICAvLyBEbyBub3QgY29tcGFyZSB3aXRoIDAsIHRoZXJlIGlzIGNhc2Ugd2hlbiBpdGVtLnN0b3JlZCBpcyBhIHRpbnkgbnVtYmVyLlxyXG4gICAgaWYgKGV4cGVjdGVkU2FsZXNWb2x1bWUgPCAxZS01KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiMFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbi5uYW1lLCBjaXR5KTtcclxuICAgIGxldCBwcm9kdWN0TWFya3VwOiBudW1iZXI7XHJcbiAgICBsZXQgbWFya3VwTGltaXQ6IG51bWJlcjtcclxuICAgIGxldCBpdGVtTXVsdGlwbGllcjogbnVtYmVyO1xyXG4gICAgbGV0IG1hcmtldFByaWNlOiBudW1iZXI7XHJcbiAgICBpZiAoaXRlbUlzUHJvZHVjdCkge1xyXG4gICAgICAgIHByb2R1Y3RNYXJrdXAgPSBhd2FpdCBnZXRQcm9kdWN0TWFya3VwKFxyXG4gICAgICAgICAgICBkaXZpc2lvbixcclxuICAgICAgICAgICAgaW5kdXN0cnlEYXRhLFxyXG4gICAgICAgICAgICBjaXR5LFxyXG4gICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICBvZmZpY2VcclxuICAgICAgICApO1xyXG4gICAgICAgIG1hcmt1cExpbWl0ID0gTWF0aC5tYXgoaXRlbS5lZmZlY3RpdmVSYXRpbmcsIDAuMDAxKSAvIHByb2R1Y3RNYXJrdXA7XHJcbiAgICAgICAgaXRlbU11bHRpcGxpZXIgPSAwLjUgKiBNYXRoLnBvdyhpdGVtLmVmZmVjdGl2ZVJhdGluZywgMC42NSk7XHJcbiAgICAgICAgbWFya2V0UHJpY2UgPSBpdGVtLnByb2R1Y3Rpb25Db3N0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtYXJrdXBMaW1pdCA9IGl0ZW0ucXVhbGl0eSAvIG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsRGF0YShpdGVtLm5hbWUpLmJhc2VNYXJrdXA7XHJcbiAgICAgICAgaXRlbU11bHRpcGxpZXIgPSBpdGVtLnF1YWxpdHkgKyAwLjAwMTtcclxuICAgICAgICBtYXJrZXRQcmljZSA9IGl0ZW0ubWFya2V0UHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnVzaW5lc3NGYWN0b3IgPSBnZXRCdXNpbmVzc0ZhY3RvcihvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2JbRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTU10pO1xyXG4gICAgY29uc3QgYWR2ZXJ0aXNpbmdGYWN0b3IgPSBnZXRBZHZlcnRpc2luZ0ZhY3RvcnMoZGl2aXNpb24uYXdhcmVuZXNzLCBkaXZpc2lvbi5wb3B1bGFyaXR5LCBpbmR1c3RyeURhdGEuYWR2ZXJ0aXNpbmdGYWN0b3IhKVswXTtcclxuICAgIGNvbnN0IG1hcmtldEZhY3RvciA9IGdldE1hcmtldEZhY3RvcihpdGVtLmRlbWFuZCEsIGl0ZW0uY29tcGV0aXRpb24hKTtcclxuICAgIGNvbnN0IHNhbGVzTXVsdGlwbGllcnMgPVxyXG4gICAgICAgIGl0ZW1NdWx0aXBsaWVyICpcclxuICAgICAgICBidXNpbmVzc0ZhY3RvciAqXHJcbiAgICAgICAgYWR2ZXJ0aXNpbmdGYWN0b3IgKlxyXG4gICAgICAgIG1hcmtldEZhY3RvciAqXHJcbiAgICAgICAgZ2V0VXBncmFkZUJlbmVmaXQoVXBncmFkZU5hbWUuQUJDX1NBTEVTX0JPVFMsIG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5BQkNfU0FMRVNfQk9UUykpICpcclxuICAgICAgICBnZXRSZXNlYXJjaFNhbGVzTXVsdGlwbGllcihnZXREaXZpc2lvblJlc2VhcmNoZXMobnMsIGRpdmlzaW9uLm5hbWUpKTtcclxuICAgIGNvbnN0IG9wdGltYWxQcmljZSA9IG1hcmt1cExpbWl0IC8gTWF0aC5zcXJ0KGV4cGVjdGVkU2FsZXNWb2x1bWUgLyBzYWxlc011bHRpcGxpZXJzKSArIG1hcmtldFByaWNlO1xyXG4gICAgLy8gbnMucHJpbnQoYGl0ZW06ICR7aXRlbS5uYW1lfSwgb3B0aW1hbFByaWNlOiAke25zLmZvcm1hdE51bWJlcihvcHRpbWFsUHJpY2UpfWApO1xyXG5cclxuICAgIHJldHVybiBvcHRpbWFsUHJpY2UudG9TdHJpbmcoKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldE9wdGltYWxTZWxsaW5nUHJpY2VGb3JFdmVyeXRoaW5nKG5zOiBOUyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkubmV4dFN0YXRlICE9PSBcIlNBTEVcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghbnMuY29ycG9yYXRpb24uaGFzVW5sb2NrKFVubG9ja05hbWUuTUFSS0VUX1JFU0VBUkNIX0RFTUFORClcclxuICAgICAgICB8fCAhbnMuY29ycG9yYXRpb24uaGFzVW5sb2NrKFVubG9ja05hbWUuTUFSS0VUX0RBVEFfQ09NUEVUSVRJT04pKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgbG9vcEFsbERpdmlzaW9uc0FuZENpdGllc0FzeW5jQ2FsbGJhY2sobnMsIGFzeW5jIChkaXZpc2lvbk5hbWUsIGNpdHkpID0+IHtcclxuICAgICAgICBjb25zdCBkaXZpc2lvbiA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSk7XHJcbiAgICAgICAgY29uc3QgaW5kdXN0cnlEYXRhID0gbnMuY29ycG9yYXRpb24uZ2V0SW5kdXN0cnlEYXRhKGRpdmlzaW9uLnR5cGUpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gZGl2aXNpb24ucHJvZHVjdHM7XHJcbiAgICAgICAgY29uc3QgaGFzTWFya2V0VEEyID0gbnMuY29ycG9yYXRpb24uaGFzUmVzZWFyY2hlZChkaXZpc2lvbk5hbWUsIFJlc2VhcmNoTmFtZS5NQVJLRVRfVEFfMik7XHJcbiAgICAgICAgaWYgKGluZHVzdHJ5RGF0YS5tYWtlc1Byb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCBzZWxsIHByaWNlIGZvciBwcm9kdWN0c1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3ROYW1lIG9mIHByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbnMuY29ycG9yYXRpb24uZ2V0UHJvZHVjdChkaXZpc2lvbk5hbWUsIGNpdHksIHByb2R1Y3ROYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0LmRldmVsb3BtZW50UHJvZ3Jlc3MgPCAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChoYXNNYXJrZXRUQTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5zZXRQcm9kdWN0TWFya2V0VEEyKGRpdmlzaW9uTmFtZSwgcHJvZHVjdE5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW1hbFByaWNlID0gYXdhaXQgZ2V0T3B0aW1hbFNlbGxpbmdQcmljZShucywgZGl2aXNpb24sIGluZHVzdHJ5RGF0YSwgY2l0eSwgcHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VOdW1iZXIob3B0aW1hbFByaWNlKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5zZWxsUHJvZHVjdChkaXZpc2lvbk5hbWUsIGNpdHksIHByb2R1Y3ROYW1lLCBcIk1BWFwiLCBvcHRpbWFsUHJpY2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kdXN0cnlEYXRhLm1ha2VzTWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCBzZWxsIHByaWNlIGZvciBvdXRwdXQgbWF0ZXJpYWxzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWxOYW1lIG9mIGluZHVzdHJ5RGF0YS5wcm9kdWNlZE1hdGVyaWFscyEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc01hcmtldFRBMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNldE1hdGVyaWFsTWFya2V0VEEyKGRpdmlzaW9uTmFtZSwgY2l0eSwgbWF0ZXJpYWxOYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGltYWxQcmljZSA9IGF3YWl0IGdldE9wdGltYWxTZWxsaW5nUHJpY2UobnMsIGRpdmlzaW9uLCBpbmR1c3RyeURhdGEsIGNpdHksIG1hdGVyaWFsKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZU51bWJlcihvcHRpbWFsUHJpY2UpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbk5hbWUsIGNpdHksIG1hdGVyaWFsTmFtZSwgXCJNQVhcIiwgb3B0aW1hbFByaWNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzZWFyY2hQb2ludEdhaW5SYXRlKG5zOiBOUywgZGl2aXNpb25OYW1lOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgbGV0IHRvdGFsR2FpblJhdGUgPSAwO1xyXG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xyXG4gICAgICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbk5hbWUsIGNpdHkpO1xyXG4gICAgICAgIC8vIDQgc3RhdGVzOiBQVVJDSEFTRSwgUFJPRFVDVElPTiwgRVhQT1JUIGFuZCBTQUxFXHJcbiAgICAgICAgdG90YWxHYWluUmF0ZSArPSA0ICogMC4wMDQgKiBNYXRoLnBvdyhvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2JbRW1wbG95ZWVQb3NpdGlvbi5SRVNFQVJDSF9ERVZFTE9QTUVOVF0sIDAuNSlcclxuICAgICAgICAgICAgKiBnZXRVcGdyYWRlQmVuZWZpdChVcGdyYWRlTmFtZS5QUk9KRUNUX0lOU0lHSFQsIG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5QUk9KRUNUX0lOU0lHSFQpKVxyXG4gICAgICAgICAgICAqIGdldFJlc2VhcmNoUlBNdWx0aXBsaWVyKGdldERpdmlzaW9uUmVzZWFyY2hlcyhucywgZGl2aXNpb25OYW1lKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG90YWxHYWluUmF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1eUJvb3N0TWF0ZXJpYWxzKG5zOiBOUywgZGl2aXNpb246IERpdmlzaW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBpbiByb3VuZCAzKy4gSWYgd2UgZG9uJ3QgaGF2ZSBtb3JlIHRoYW4gMTBlOSBpbiBmdW5kcywgdGhlcmUgbXVzdCBiZSBzb21ldGhpbmcgd3JvbmdcclxuICAgIC8vIGluIHRoZSBzY3JpcHQuXHJcbiAgICBjb25zdCBmdW5kcyA9IG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHM7XHJcbiAgICBpZiAoZnVuZHMgPCAxMGU5KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGdW5kcyBpcyB0b28gc21hbGwgdG8gYnV5IGJvb3N0IG1hdGVyaWFscy4gRnVuZHM6ICR7bnMuZm9ybWF0TnVtYmVyKGZ1bmRzKX0uYCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbmR1c3RyeURhdGEgPSBucy5jb3Jwb3JhdGlvbi5nZXRJbmR1c3RyeURhdGEoZGl2aXNpb24udHlwZSk7XHJcbiAgICBsZXQgcmVzZXJ2ZWRTcGFjZVJhdGlvID0gMC4yO1xyXG4gICAgY29uc3QgcmF0aW8gPSAwLjE7XHJcbiAgICBpZiAoaW5kdXN0cnlEYXRhLm1ha2VzUHJvZHVjdHMpIHtcclxuICAgICAgICByZXNlcnZlZFNwYWNlUmF0aW8gPSAwLjE7XHJcbiAgICB9XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBhd2FpdCB3YWl0Rm9yTmV4dFRpbWVTdGF0ZUhhcHBlbnMobnMsIENvcnBTdGF0ZS5FWFBPUlQpO1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gMjApIHtcclxuICAgICAgICAgICAgY29uc3Qgd2FybmluZ01lc3NhZ2UgPSBgSXQgdGFrZXMgdG9vIG1hbnkgY3ljbGVzIHRvIGJ1eSBib29zdCBtYXRlcmlhbHMuIERpdmlzaW9uOiAke2RpdmlzaW9uLm5hbWV9LmA7XHJcbiAgICAgICAgICAgIHNob3dXYXJuaW5nKG5zLCB3YXJuaW5nTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmluaXNoID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBvcmRlcnMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhcmVob3VzZSA9IG5zLmNvcnBvcmF0aW9uLmdldFdhcmVob3VzZShkaXZpc2lvbi5uYW1lLCBjaXR5KTtcclxuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlU3BhY2UgPSB3YXJlaG91c2Uuc2l6ZSAtIHdhcmVob3VzZS5zaXplVXNlZDtcclxuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZVNwYWNlIDwgd2FyZWhvdXNlLnNpemUgKiByZXNlcnZlZFNwYWNlUmF0aW8pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBlZmZlY3RpdmVSYXRpbyA9IHJhdGlvO1xyXG4gICAgICAgICAgICBpZiAoKGF2YWlsYWJsZVNwYWNlIC8gd2FyZWhvdXNlLnNpemUgPCAwLjUgJiYgZGl2aXNpb24udHlwZSA9PT0gSW5kdXN0cnlUeXBlLkFHUklDVUxUVVJFKVxyXG4gICAgICAgICAgICAgICAgfHwgKGF2YWlsYWJsZVNwYWNlIC8gd2FyZWhvdXNlLnNpemUgPCAwLjc1XHJcbiAgICAgICAgICAgICAgICAgICAgJiYgKGRpdmlzaW9uLnR5cGUgPT09IEluZHVzdHJ5VHlwZS5DSEVNSUNBTCB8fCBkaXZpc2lvbi50eXBlID09PSBJbmR1c3RyeVR5cGUuVE9CQUNDTykpKSB7XHJcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVSYXRpbyA9IDAuMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBib29zdE1hdGVyaWFsUXVhbnRpdGllcyA9IGdldE9wdGltYWxCb29zdE1hdGVyaWFsUXVhbnRpdGllcyhpbmR1c3RyeURhdGEsIGF2YWlsYWJsZVNwYWNlICogZWZmZWN0aXZlUmF0aW8pO1xyXG4gICAgICAgICAgICBvcmRlcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjaXR5OiBjaXR5LFxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBNYXRlcmlhbE5hbWUuQUlfQ09SRVMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbChkaXZpc2lvbi5uYW1lLCBjaXR5LCBNYXRlcmlhbE5hbWUuQUlfQ09SRVMpLnN0b3JlZCArIGJvb3N0TWF0ZXJpYWxRdWFudGl0aWVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IE1hdGVyaWFsTmFtZS5IQVJEV0FSRSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsKGRpdmlzaW9uLm5hbWUsIGNpdHksIE1hdGVyaWFsTmFtZS5IQVJEV0FSRSkuc3RvcmVkICsgYm9vc3RNYXRlcmlhbFF1YW50aXRpZXNbMV1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogTWF0ZXJpYWxOYW1lLlJFQUxfRVNUQVRFLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb24ubmFtZSwgY2l0eSwgTWF0ZXJpYWxOYW1lLlJFQUxfRVNUQVRFKS5zdG9yZWQgKyBib29zdE1hdGVyaWFsUXVhbnRpdGllc1syXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBNYXRlcmlhbE5hbWUuUk9CT1RTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb24ubmFtZSwgY2l0eSwgTWF0ZXJpYWxOYW1lLlJPQk9UUykuc3RvcmVkICsgYm9vc3RNYXRlcmlhbFF1YW50aXRpZXNbM11cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZmluaXNoID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaW5pc2gpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHN0b2NrTWF0ZXJpYWxzKFxyXG4gICAgICAgICAgICBucyxcclxuICAgICAgICAgICAgZGl2aXNpb24ubmFtZSxcclxuICAgICAgICAgICAgb3JkZXJzLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICArK2NvdW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdE1hcmtldFByaWNlKFxyXG4gICAgbnM6IE5TLFxyXG4gICAgZGl2aXNpb246IERpdmlzaW9uLFxyXG4gICAgaW5kdXN0cnlEYXRhOiBDb3JwSW5kdXN0cnlEYXRhLFxyXG4gICAgY2l0eTogQ2l0eU5hbWVcclxuKTogbnVtYmVyIHtcclxuICAgIGxldCBwcm9kdWN0TWFya2V0UHJpY2UgPSAwO1xyXG4gICAgZm9yIChjb25zdCBbbWF0ZXJpYWxOYW1lLCBtYXRlcmlhbENvZWZmaWNpZW50XSBvZiBnZXRSZWNvcmRFbnRyaWVzKGluZHVzdHJ5RGF0YS5yZXF1aXJlZE1hdGVyaWFscykpIHtcclxuICAgICAgICBjb25zdCBtYXRlcmlhbE1hcmtldFByaWNlID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb24ubmFtZSwgY2l0eSwgbWF0ZXJpYWxOYW1lKS5tYXJrZXRQcmljZTtcclxuICAgICAgICBwcm9kdWN0TWFya2V0UHJpY2UgKz0gbWF0ZXJpYWxNYXJrZXRQcmljZSAqIG1hdGVyaWFsQ29lZmZpY2llbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvZHVjdE1hcmtldFByaWNlICogcHJvZHVjdE1hcmtldFByaWNlTXVsdGlwbGllcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUR1bW15RGl2aXNpb25zKG5zOiBOUywgbnVtYmVyT2ZEaXZpc2lvbnM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGl2aXNpb25zID0gbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5kaXZpc2lvbnM7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRGl2aXNpb25zOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkdW1teURpdmlzaW9uTmFtZSA9IGR1bW15RGl2aXNpb25OYW1lUHJlZml4ICsgaS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICAgICAgICBpZiAoZGl2aXNpb25zLmluY2x1ZGVzKGR1bW15RGl2aXNpb25OYW1lKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZXhwYW5kSW5kdXN0cnkoSW5kdXN0cnlUeXBlLlJFU1RBVVJBTlQsIGR1bW15RGl2aXNpb25OYW1lKTtcclxuICAgICAgICBjb25zdCBkaXZpc2lvbiA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGR1bW15RGl2aXNpb25OYW1lKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghZGl2aXNpb24uY2l0aWVzLmluY2x1ZGVzKGNpdHkpKSB7XHJcbiAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5leHBhbmRDaXR5KGR1bW15RGl2aXNpb25OYW1lLCBjaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW5zLmNvcnBvcmF0aW9uLmhhc1dhcmVob3VzZShkdW1teURpdmlzaW9uTmFtZSwgY2l0eSkpIHtcclxuICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnB1cmNoYXNlV2FyZWhvdXNlKGR1bW15RGl2aXNpb25OYW1lLCBjaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JPZmZlcihuczogTlMsIG51bWJlck9mSW5pdEN5Y2xlczogbnVtYmVyLCBtYXhBZGRpdGlvbmFsQ3ljbGVzOiBudW1iZXIsIGV4cGVjdGVkT2ZmZXI6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgYXdhaXQgd2FpdEZvck51bWJlck9mQ3ljbGVzKG5zLCBudW1iZXJPZkluaXRDeWNsZXMpO1xyXG4gICAgbGV0IG9mZmVyID0gbnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkuZnVuZHM7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heEFkZGl0aW9uYWxDeWNsZXM7IGkrKykge1xyXG4gICAgICAgIGF3YWl0IHdhaXRGb3JOdW1iZXJPZkN5Y2xlcyhucywgMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE9mZmVyOiAke25zLmZvcm1hdE51bWJlcihucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5mdW5kcyl9YCk7XHJcbiAgICAgICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLmZ1bmRzIDwgb2ZmZXIgKiAxLjAwMSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgb2ZmZXIgPSBucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5mdW5kcztcclxuICAgIH1cclxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5mdW5kcyA8IGV4cGVjdGVkT2ZmZXIpIHtcclxuICAgICAgICBucy5hbGVydChcclxuICAgICAgICAgICAgYE9mZmVyIGlzIGxvd2VyIHRoYW4gZXhwZWN0ZWQgdmFsdWUuIE9mZmVyOiAke25zLmZvcm1hdE51bWJlcihucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5mdW5kcyl9YFxyXG4gICAgICAgICAgICArIGAuIEV4cGVjdGVkIHZhbHVlOiAke25zLmZvcm1hdE51bWJlcihleHBlY3RlZE9mZmVyKX0uYFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIkFBV0EsU0FBUyxrQkFBa0IscUJBQW9DO0FBQy9ELFNBQVMsbUJBQW1CO0FBQzVCLFNBQVMsYUFBYTtBQUN0QjtBQUFB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USxJQUFJLFVBQVUsR0FBRyxhQUFhLEdBQUcsWUFBWSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsRUFBRTtBQUNsRixRQUFJLEdBQUcsWUFBWSxtQkFBbUIsRUFBRSxRQUFRLFFBQVEsT0FBTztBQUMzRDtBQUFBLElBQ0o7QUFDQSxZQUFRLEdBQUcsWUFBWSxtQkFBbUIsRUFBRTtBQUFBLEVBQ2hEO0FBQ0EsTUFBSSxHQUFHLFlBQVksbUJBQW1CLEVBQUUsUUFBUSxlQUFlO0FBQzNELE9BQUc7QUFBQSxNQUNDLDhDQUE4QyxHQUFHLGFBQWEsR0FBRyxZQUFZLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxxQkFDakYsR0FBRyxhQUFhLGFBQWEsQ0FBQztBQUFBLElBQ3pEO0FBQUEsRUFDSjtBQUNKOyIsCiAgIm5hbWVzIjogWyJEaXZpc2lvbk5hbWUiLCAiY2l0aWVzIiwgIm1hdGVyaWFscyIsICJpc1Byb2R1Y3QiLCAicHJvZHVjdE5hbWUiLCAidG90YWxDcmVhdGlvbkpvYkZhY3RvcnMiLCAibWFuYWdlbWVudFJhdGlvIiwgImJ1c2luZXNzUmF0aW8iXQp9Cg==
