import { CorpResearchesData } from "/data/CorpResearchesData";
import { CorpUpgradesData } from "/data/CorpUpgradesData";
import { Ceres } from "/libs/Ceres";
var CityName = /* @__PURE__ */ ((CityName2) => {
  CityName2["Aevum"] = "Aevum";
  CityName2["Chongqing"] = "Chongqing";
  CityName2["Sector12"] = "Sector-12";
  CityName2["NewTokyo"] = "New Tokyo";
  CityName2["Ishima"] = "Ishima";
  CityName2["Volhaven"] = "Volhaven";
  return CityName2;
})(CityName || {});
var CorpState = /* @__PURE__ */ ((CorpState2) => {
  CorpState2["START"] = "START";
  CorpState2["PURCHASE"] = "PURCHASE";
  CorpState2["PRODUCTION"] = "PRODUCTION";
  CorpState2["EXPORT"] = "EXPORT";
  CorpState2["SALE"] = "SALE";
  return CorpState2;
})(CorpState || {});
var MaterialName = /* @__PURE__ */ ((MaterialName2) => {
  MaterialName2["MINERALS"] = "Minerals";
  MaterialName2["ORE"] = "Ore";
  MaterialName2["WATER"] = "Water";
  MaterialName2["FOOD"] = "Food";
  MaterialName2["PLANTS"] = "Plants";
  MaterialName2["METAL"] = "Metal";
  MaterialName2["HARDWARE"] = "Hardware";
  MaterialName2["CHEMICALS"] = "Chemicals";
  MaterialName2["DRUGS"] = "Drugs";
  MaterialName2["ROBOTS"] = "Robots";
  MaterialName2["AI_CORES"] = "AI Cores";
  MaterialName2["REAL_ESTATE"] = "Real Estate";
  return MaterialName2;
})(MaterialName || {});
var UnlockName = /* @__PURE__ */ ((UnlockName2) => {
  UnlockName2["EXPORT"] = "Export";
  UnlockName2["SMART_SUPPLY"] = "Smart Supply";
  UnlockName2["MARKET_RESEARCH_DEMAND"] = "Market Research - Demand";
  UnlockName2["MARKET_DATA_COMPETITION"] = "Market Data - Competition";
  UnlockName2["VE_CHAIN"] = "VeChain";
  UnlockName2["SHADY_ACCOUNTING"] = "Shady Accounting";
  UnlockName2["GOVERNMENT_PARTNERSHIP"] = "Government Partnership";
  UnlockName2["WAREHOUSE_API"] = "Warehouse API";
  UnlockName2["OFFICE_API"] = "Office API";
  return UnlockName2;
})(UnlockName || {});
var UpgradeName = /* @__PURE__ */ ((UpgradeName2) => {
  UpgradeName2["SMART_FACTORIES"] = "Smart Factories";
  UpgradeName2["SMART_STORAGE"] = "Smart Storage";
  UpgradeName2["DREAM_SENSE"] = "DreamSense";
  UpgradeName2["WILSON_ANALYTICS"] = "Wilson Analytics";
  UpgradeName2["NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS"] = "Nuoptimal Nootropic Injector Implants";
  UpgradeName2["SPEECH_PROCESSOR_IMPLANTS"] = "Speech Processor Implants";
  UpgradeName2["NEURAL_ACCELERATORS"] = "Neural Accelerators";
  UpgradeName2["FOCUS_WIRES"] = "FocusWires";
  UpgradeName2["ABC_SALES_BOTS"] = "ABC SalesBots";
  UpgradeName2["PROJECT_INSIGHT"] = "Project Insight";
  return UpgradeName2;
})(UpgradeName || {});
var EmployeePosition = /* @__PURE__ */ ((EmployeePosition2) => {
  EmployeePosition2["OPERATIONS"] = "Operations";
  EmployeePosition2["ENGINEER"] = "Engineer";
  EmployeePosition2["BUSINESS"] = "Business";
  EmployeePosition2["MANAGEMENT"] = "Management";
  EmployeePosition2["RESEARCH_DEVELOPMENT"] = "Research & Development";
  EmployeePosition2["INTERN"] = "Intern";
  EmployeePosition2["UNASSIGNED"] = "Unassigned";
  return EmployeePosition2;
})(EmployeePosition || {});
var ResearchName = /* @__PURE__ */ ((ResearchName2) => {
  ResearchName2["HI_TECH_RND_LABORATORY"] = "Hi-Tech R&D Laboratory";
  ResearchName2["AUTO_BREW"] = "AutoBrew";
  ResearchName2["AUTO_PARTY"] = "AutoPartyManager";
  ResearchName2["AUTO_DRUG"] = "Automatic Drug Administration";
  ResearchName2["CPH4_INJECT"] = "CPH4 Injections";
  ResearchName2["DRONES"] = "Drones";
  ResearchName2["DRONES_ASSEMBLY"] = "Drones - Assembly";
  ResearchName2["DRONES_TRANSPORT"] = "Drones - Transport";
  ResearchName2["GO_JUICE"] = "Go-Juice";
  ResearchName2["HR_BUDDY_RECRUITMENT"] = "HRBuddy-Recruitment";
  ResearchName2["HR_BUDDY_TRAINING"] = "HRBuddy-Training";
  ResearchName2["MARKET_TA_1"] = "Market-TA.I";
  ResearchName2["MARKET_TA_2"] = "Market-TA.II";
  ResearchName2["OVERCLOCK"] = "Overclock";
  ResearchName2["SELF_CORRECTING_ASSEMBLERS"] = "Self-Correcting Assemblers";
  ResearchName2["STIMU"] = "Sti.mu";
  ResearchName2["UPGRADE_CAPACITY_1"] = "uPgrade: Capacity.I";
  ResearchName2["UPGRADE_CAPACITY_2"] = "uPgrade: Capacity.II";
  ResearchName2["UPGRADE_DASHBOARD"] = "uPgrade: Dashboard";
  ResearchName2["UPGRADE_FULCRUM"] = "uPgrade: Fulcrum";
  return ResearchName2;
})(ResearchName || {});
var IndustryType = /* @__PURE__ */ ((IndustryType2) => {
  IndustryType2["WATER_UTILITIES"] = "Water Utilities";
  IndustryType2["SPRING_WATER"] = "Spring Water";
  IndustryType2["AGRICULTURE"] = "Agriculture";
  IndustryType2["FISHING"] = "Fishing";
  IndustryType2["MINING"] = "Mining";
  IndustryType2["REFINERY"] = "Refinery";
  IndustryType2["RESTAURANT"] = "Restaurant";
  IndustryType2["TOBACCO"] = "Tobacco";
  IndustryType2["CHEMICAL"] = "Chemical";
  IndustryType2["PHARMACEUTICAL"] = "Pharmaceutical";
  IndustryType2["COMPUTER_HARDWARE"] = "Computer Hardware";
  IndustryType2["ROBOTICS"] = "Robotics";
  IndustryType2["SOFTWARE"] = "Software";
  IndustryType2["HEALTHCARE"] = "Healthcare";
  IndustryType2["REAL_ESTATE"] = "Real Estate";
  return IndustryType2;
})(IndustryType || {});
const warehouseUpgradeBasePrice = 1e9;
const officeUpgradeBasePrice = 4e9;
const advertUpgradeBasePrice = 1e9;
const productMarketPriceMultiplier = 5;
const numberSuffixList = ["", "k", "m", "b", "t", "q", "Q", "s", "S", "o", "n"];
const numberExpList = numberSuffixList.map((_, i) => parseFloat(`1e${i * 3}`));
const numberFormat = new Intl.NumberFormat(
  "en",
  {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
  }
);
const basicFormatter = new Intl.NumberFormat(
  "en"
);
const exponentialFormatter = new Intl.NumberFormat(
  "en",
  {
    notation: "scientific"
  }
);
function formatNumber(value) {
  const fractionalDigits = 3;
  if (Number.isNaN(value)) {
    return "NaN";
  }
  const nAbs = Math.abs(value);
  if (nAbs === Infinity) {
    return value < 0 ? "-\u221E" : "\u221E";
  }
  if (nAbs < 1e3) {
    return basicFormatter.format(value);
  }
  if (nAbs >= 1e15) {
    return exponentialFormatter.format(value).toLocaleLowerCase();
  }
  let suffixIndex = Math.floor(Math.log10(nAbs) / 3);
  value /= numberExpList[suffixIndex];
  if (Math.abs(value).toFixed(fractionalDigits).length === fractionalDigits + 5 && numberSuffixList[suffixIndex + 1]) {
    suffixIndex += 1;
    value = value < 0 ? -1 : 1;
  }
  return numberFormat.format(value) + numberSuffixList[suffixIndex];
}
function getDivisionProductionMultiplier(industryData, boostMaterials) {
  const cityMultiplier = Math.pow(2e-3 * boostMaterials[0] + 1, industryData.aiCoreFactor) * Math.pow(2e-3 * boostMaterials[1] + 1, industryData.hardwareFactor) * Math.pow(2e-3 * boostMaterials[2] + 1, industryData.realEstateFactor) * Math.pow(2e-3 * boostMaterials[3] + 1, industryData.robotFactor);
  return Math.max(Math.pow(cityMultiplier, 0.73), 1) * 6;
}
function getGenericUpgradeCost(basePrice, priceMultiplier, fromLevel, toLevel) {
  return basePrice * ((Math.pow(priceMultiplier, toLevel) - Math.pow(priceMultiplier, fromLevel)) / (priceMultiplier - 1));
}
function getGenericMaxAffordableUpgradeLevel(basePrice, priceMultiplier, fromLevel, maxCost, roundingWithFloor = true) {
  const maxAffordableUpgradeLevel = Math.log(
    maxCost * (priceMultiplier - 1) / basePrice + Math.pow(priceMultiplier, fromLevel)
  ) / Math.log(priceMultiplier);
  if (roundingWithFloor) {
    return Math.floor(
      maxAffordableUpgradeLevel
    );
  }
  return maxAffordableUpgradeLevel;
}
function getUpgradeCost(upgradeName, fromLevel, toLevel) {
  const upgradeData = CorpUpgradesData[upgradeName];
  if (!upgradeData) {
    throw new Error(`Cannot find data of upgrade: ${upgradeName}`);
  }
  return getGenericUpgradeCost(upgradeData.basePrice, upgradeData.priceMult, fromLevel, toLevel);
}
function getMaxAffordableUpgradeLevel(upgradeName, fromLevel, maxCost) {
  const upgradeData = CorpUpgradesData[upgradeName];
  if (!upgradeData) {
    throw new Error(`Cannot find data of upgrade: ${upgradeName}`);
  }
  return getGenericMaxAffordableUpgradeLevel(upgradeData.basePrice, upgradeData.priceMult, fromLevel, maxCost);
}
function getUpgradeBenefit(upgradeName, upgradeLevel) {
  let value = upgradeName === "DreamSense" /* DREAM_SENSE */ ? 0 : 1;
  const benefit = CorpUpgradesData[upgradeName].benefit;
  if (!benefit) {
    throw new Error(`Cannot find data of upgrade: ${upgradeName}`);
  }
  value += benefit * upgradeLevel;
  return value;
}
function getUpgradeWarehouseCost(fromLevel, toLevel) {
  if (fromLevel < 1) {
    throw new Error("Invalid parameter");
  }
  return warehouseUpgradeBasePrice * ((Math.pow(1.07, toLevel + 1) - Math.pow(1.07, fromLevel + 1)) / 0.07);
}
function getMaxAffordableWarehouseLevel(fromLevel, maxCost) {
  if (fromLevel < 1) {
    throw new Error("Invalid parameter");
  }
  return Math.floor(
    Math.log(maxCost * 0.07 / warehouseUpgradeBasePrice + Math.pow(1.07, fromLevel + 1)) / Math.log(1.07) - 1
  );
}
function getWarehouseSize(smartStorageLevel, warehouseLevel, divisionResearches) {
  return warehouseLevel * 100 * (1 + CorpUpgradesData["Smart Storage" /* SMART_STORAGE */].benefit * smartStorageLevel) * getResearchStorageMultiplier(divisionResearches);
}
function getOfficeUpgradeCost(fromSize, toSize) {
  return getGenericUpgradeCost(officeUpgradeBasePrice, 1.09, fromSize / 3, toSize / 3);
}
function getMaxAffordableOfficeSize(fromSize, maxCost) {
  return Math.floor(
    3 * getGenericMaxAffordableUpgradeLevel(officeUpgradeBasePrice, 1.09, fromSize / 3, maxCost, false)
  );
}
function getAdVertCost(fromLevel, toLevel) {
  return getGenericUpgradeCost(advertUpgradeBasePrice, 1.06, fromLevel, toLevel);
}
function getMaxAffordableAdVertLevel(fromLevel, maxCost) {
  return getGenericMaxAffordableUpgradeLevel(advertUpgradeBasePrice, 1.06, fromLevel, maxCost);
}
function getResearchMultiplier(divisionResearches, researchDataKey) {
  let multiplier = 1;
  for (const [researchName, researchData] of Object.entries(CorpResearchesData)) {
    if (!divisionResearches[researchName]) {
      continue;
    }
    const researchDataValue = researchData[researchDataKey];
    if (!Number.isFinite(researchDataValue)) {
      throw new Error(`Invalid researchDataKey: ${researchDataKey}`);
    }
    multiplier *= researchDataValue;
  }
  return multiplier;
}
function getResearchSalesMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "salesMult");
}
function getResearchAdvertisingMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "advertisingMult");
}
function getResearchRPMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "sciResearchMult");
}
function getResearchStorageMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "storageMult");
}
function getResearchEmployeeCreativityMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "employeeCreMult");
}
function getResearchEmployeeCharismaMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "employeeChaMult");
}
function getResearchEmployeeIntelligenceMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "employeeIntMult");
}
function getResearchEmployeeEfficiencyMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "productionMult");
}
function getEffectWithFactors(n, expFac, linearFac) {
  if (expFac <= 0 || expFac >= 1) {
    console.warn(`Exponential factor is ${expFac}. This is not an intended value for it`);
  }
  if (linearFac < 1) {
    console.warn(`Linear factor is ${linearFac}. This is not an intended value for it`);
  }
  return Math.pow(n, expFac) + n / linearFac;
}
function getBusinessFactor(businessProduction) {
  return getEffectWithFactors(1 + businessProduction, 0.26, 1e4);
}
function getAdvertisingFactors(awareness, popularity, industryAdvertisingFactor) {
  const awarenessFactor = Math.pow(awareness + 1, industryAdvertisingFactor);
  const popularityFactor = Math.pow(popularity + 1, industryAdvertisingFactor);
  const ratioFactor = awareness === 0 ? 0.01 : Math.max((popularity + 1e-3) / awareness, 0.01);
  const salesFactor = Math.pow(awarenessFactor * popularityFactor * ratioFactor, 0.85);
  return [salesFactor, awarenessFactor, popularityFactor, ratioFactor];
}
function getMarketFactor(demand, competition) {
  return Math.max(0.1, demand * (100 - competition) / 100);
}
function getDivisionRawProduction(isProduct, employeesProduction, divisionProductionMultiplier, corporationUpgradeLevels, divisionResearches) {
  const operationEmployeesProduction = employeesProduction.operationsProduction;
  const engineerEmployeesProduction = employeesProduction.engineerProduction;
  const managementEmployeesProduction = employeesProduction.managementProduction;
  const totalEmployeesProduction = operationEmployeesProduction + engineerEmployeesProduction + managementEmployeesProduction;
  if (totalEmployeesProduction <= 0) {
    return 0;
  }
  const managementFactor = 1 + managementEmployeesProduction / (1.2 * totalEmployeesProduction);
  const employeesProductionMultiplier = (Math.pow(operationEmployeesProduction, 0.4) + Math.pow(engineerEmployeesProduction, 0.3)) * managementFactor;
  const balancingMultiplier = 0.05;
  let officeMultiplier;
  if (isProduct) {
    officeMultiplier = 0.5 * balancingMultiplier * employeesProductionMultiplier;
  } else {
    officeMultiplier = balancingMultiplier * employeesProductionMultiplier;
  }
  const upgradeMultiplier = 1 + corporationUpgradeLevels["Smart Factories" /* SMART_FACTORIES */] * CorpUpgradesData["Smart Factories" /* SMART_FACTORIES */].benefit;
  let researchMultiplier = 1;
  researchMultiplier *= (divisionResearches["Drones - Assembly" /* DRONES_ASSEMBLY */] ? CorpResearchesData["Drones - Assembly" /* DRONES_ASSEMBLY */].productionMult : 1) * (divisionResearches["Self-Correcting Assemblers" /* SELF_CORRECTING_ASSEMBLERS */] ? CorpResearchesData["Self-Correcting Assemblers" /* SELF_CORRECTING_ASSEMBLERS */].productionMult : 1);
  if (isProduct) {
    researchMultiplier *= divisionResearches["uPgrade: Fulcrum" /* UPGRADE_FULCRUM */] ? CorpResearchesData["uPgrade: Fulcrum" /* UPGRADE_FULCRUM */].productProductionMult : 1;
  }
  return officeMultiplier * divisionProductionMultiplier * upgradeMultiplier * researchMultiplier;
}
function getUpgradeAndResearchMultiplierForEmployeeStats(corporationUpgradeLevels, divisionResearches) {
  return {
    upgradeCreativityMultiplier: getUpgradeBenefit(
      "Nuoptimal Nootropic Injector Implants" /* NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS */,
      corporationUpgradeLevels["Nuoptimal Nootropic Injector Implants" /* NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS */]
    ),
    upgradeCharismaMultiplier: getUpgradeBenefit(
      "Speech Processor Implants" /* SPEECH_PROCESSOR_IMPLANTS */,
      corporationUpgradeLevels["Speech Processor Implants" /* SPEECH_PROCESSOR_IMPLANTS */]
    ),
    upgradeIntelligenceMultiplier: getUpgradeBenefit(
      "Neural Accelerators" /* NEURAL_ACCELERATORS */,
      corporationUpgradeLevels["Neural Accelerators" /* NEURAL_ACCELERATORS */]
    ),
    upgradeEfficiencyMultiplier: getUpgradeBenefit(
      "FocusWires" /* FOCUS_WIRES */,
      corporationUpgradeLevels["FocusWires" /* FOCUS_WIRES */]
    ),
    researchCreativityMultiplier: getResearchEmployeeCreativityMultiplier(divisionResearches),
    researchCharismaMultiplier: getResearchEmployeeCharismaMultiplier(divisionResearches),
    researchIntelligenceMultiplier: getResearchEmployeeIntelligenceMultiplier(divisionResearches),
    researchEfficiencyMultiplier: getResearchEmployeeEfficiencyMultiplier(divisionResearches)
  };
}
function getEmployeeProductionByJobs(office, corporationUpgradeLevels, divisionResearches) {
  const upgradeAndResearchMultiplier = getUpgradeAndResearchMultiplierForEmployeeStats(
    corporationUpgradeLevels,
    divisionResearches
  );
  const effectiveIntelligence = office.avgIntelligence * upgradeAndResearchMultiplier.upgradeIntelligenceMultiplier * upgradeAndResearchMultiplier.researchIntelligenceMultiplier;
  const effectiveCharisma = office.avgCharisma * upgradeAndResearchMultiplier.upgradeCharismaMultiplier * upgradeAndResearchMultiplier.researchCharismaMultiplier;
  const effectiveCreativity = office.avgCreativity * upgradeAndResearchMultiplier.upgradeCreativityMultiplier * upgradeAndResearchMultiplier.researchCreativityMultiplier;
  const effectiveEfficiency = office.avgEfficiency * upgradeAndResearchMultiplier.upgradeEfficiencyMultiplier * upgradeAndResearchMultiplier.researchEfficiencyMultiplier;
  const productionBase = office.avgMorale * office.avgEnergy * 1e-4;
  const totalNumberOfEmployees = office.employeeJobs.operations + office.employeeJobs.engineer + office.employeeJobs.business + office.employeeJobs.management + office.employeeJobs.researchAndDevelopment + office.employeeJobs.intern + office.employeeJobs.unassigned;
  const exp = office.totalExperience / totalNumberOfEmployees;
  const operationsProduction = office.employeeJobs.operations * productionBase * (0.6 * effectiveIntelligence + 0.1 * effectiveCharisma + exp + 0.5 * effectiveCreativity + effectiveEfficiency);
  const engineerProduction = office.employeeJobs.engineer * productionBase * (effectiveIntelligence + 0.1 * effectiveCharisma + 1.5 * exp + effectiveEfficiency);
  const businessProduction = office.employeeJobs.business * productionBase * (0.4 * effectiveIntelligence + effectiveCharisma + 0.5 * exp);
  const managementProduction = office.employeeJobs.management * productionBase * (2 * effectiveCharisma + exp + 0.2 * effectiveCreativity + 0.7 * effectiveEfficiency);
  const researchAndDevelopmentProduction = office.employeeJobs.researchAndDevelopment * productionBase * (1.5 * effectiveIntelligence + 0.8 * exp + effectiveCreativity + 0.5 * effectiveEfficiency);
  return {
    operationsProduction,
    engineerProduction,
    businessProduction,
    managementProduction,
    researchAndDevelopmentProduction
  };
}
async function calculateEmployeeStats(office, corporationUpgradeLevels, divisionResearches) {
  let numberOfJobsHavingEmployees = 0;
  for (const [jobName, numberOfEmployees] of Object.entries(office.employeeJobs)) {
    if (jobName === "Intern" || jobName === "Unassigned" || numberOfEmployees === 0) {
      continue;
    }
    ++numberOfJobsHavingEmployees;
  }
  if (numberOfJobsHavingEmployees <= 3) {
    throw new Error("We need at least 4 jobs having 1 employee at the minimum");
  }
  const upgradeAndResearchMultiplier = getUpgradeAndResearchMultiplierForEmployeeStats(
    corporationUpgradeLevels,
    divisionResearches
  );
  const productionBase = office.avgMorale * office.avgEnergy * 1e-4;
  const exp = office.totalExperience / office.numEmployees;
  const f1 = function([effectiveCreativity, effectiveCharisma, effectiveIntelligence, effectiveEfficiency]) {
    return office.employeeJobs["Operations" /* OPERATIONS */] * productionBase * (0.6 * effectiveIntelligence + 0.1 * effectiveCharisma + exp + 0.5 * effectiveCreativity + effectiveEfficiency) - office.employeeProductionByJob["Operations" /* OPERATIONS */];
  };
  const f2 = function([effectiveCreativity, effectiveCharisma, effectiveIntelligence, effectiveEfficiency]) {
    return office.employeeJobs["Engineer" /* ENGINEER */] * productionBase * (effectiveIntelligence + 0.1 * effectiveCharisma + 1.5 * exp + effectiveEfficiency) - office.employeeProductionByJob["Engineer" /* ENGINEER */];
  };
  const f3 = function([effectiveCreativity, effectiveCharisma, effectiveIntelligence, effectiveEfficiency]) {
    return office.employeeJobs["Business" /* BUSINESS */] * productionBase * (0.4 * effectiveIntelligence + effectiveCharisma + 0.5 * exp) - office.employeeProductionByJob["Business" /* BUSINESS */];
  };
  const f4 = function([effectiveCreativity, effectiveCharisma, effectiveIntelligence, effectiveEfficiency]) {
    return office.employeeJobs["Management" /* MANAGEMENT */] * productionBase * (2 * effectiveCharisma + exp + 0.2 * effectiveCreativity + 0.7 * effectiveEfficiency) - office.employeeProductionByJob["Management" /* MANAGEMENT */];
  };
  const f5 = function([effectiveCreativity, effectiveCharisma, effectiveIntelligence, effectiveEfficiency]) {
    return office.employeeJobs["Research & Development" /* RESEARCH_DEVELOPMENT */] * productionBase * (1.5 * effectiveIntelligence + 0.8 * exp + effectiveCreativity + 0.5 * effectiveEfficiency) - office.employeeProductionByJob["Research & Development" /* RESEARCH_DEVELOPMENT */];
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
    const guess = [75, 75, 75, 75];
    solverResult = solver.solve(guess);
    solver.remove();
  });
  if (!solverResult.success) {
    console.error(solverResult);
    throw new Error(`ERROR: Cannot find hidden stats of employee. Office: ${JSON.stringify(office)}`);
  }
  return {
    avgCreativity: solverResult.x[0] / (upgradeAndResearchMultiplier.upgradeCreativityMultiplier * upgradeAndResearchMultiplier.researchCreativityMultiplier),
    avgCharisma: solverResult.x[1] / (upgradeAndResearchMultiplier.upgradeCharismaMultiplier * upgradeAndResearchMultiplier.researchCharismaMultiplier),
    avgIntelligence: solverResult.x[2] / (upgradeAndResearchMultiplier.upgradeIntelligenceMultiplier * upgradeAndResearchMultiplier.researchIntelligenceMultiplier),
    avgEfficiency: solverResult.x[3] / (upgradeAndResearchMultiplier.upgradeEfficiencyMultiplier * upgradeAndResearchMultiplier.researchEfficiencyMultiplier)
  };
}
export {
  CityName,
  CorpState,
  EmployeePosition,
  IndustryType,
  MaterialName,
  ResearchName,
  UnlockName,
  UpgradeName,
  calculateEmployeeStats,
  formatNumber,
  getAdVertCost,
  getAdvertisingFactors,
  getBusinessFactor,
  getDivisionProductionMultiplier,
  getDivisionRawProduction,
  getEmployeeProductionByJobs,
  getMarketFactor,
  getMaxAffordableAdVertLevel,
  getMaxAffordableOfficeSize,
  getMaxAffordableUpgradeLevel,
  getMaxAffordableWarehouseLevel,
  getOfficeUpgradeCost,
  getResearchAdvertisingMultiplier,
  getResearchEmployeeCharismaMultiplier,
  getResearchEmployeeCreativityMultiplier,
  getResearchEmployeeEfficiencyMultiplier,
  getResearchEmployeeIntelligenceMultiplier,
  getResearchMultiplier,
  getResearchRPMultiplier,
  getResearchSalesMultiplier,
  getResearchStorageMultiplier,
  getUpgradeBenefit,
  getUpgradeCost,
  getUpgradeWarehouseCost,
  getWarehouseSize,
  productMarketPriceMultiplier
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uRm9ybXVsYXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBEbyBOT1QgdXNlIE5TIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSdzIGZ1bmN0aW9uc1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvcnBJbmR1c3RyeURhdGEsIENvcnBNYXRlcmlhbE5hbWUsIENvcnBVcGdyYWRlTmFtZSB9IGZyb20gXCJAbnNcIjtcclxuaW1wb3J0IHsgQ29ycFJlc2VhcmNoZXNEYXRhIH0gZnJvbSBcIi9kYXRhL0NvcnBSZXNlYXJjaGVzRGF0YVwiO1xyXG5pbXBvcnQgeyBDb3JwVXBncmFkZXNEYXRhIH0gZnJvbSBcIi9kYXRhL0NvcnBVcGdyYWRlc0RhdGFcIjtcclxuaW1wb3J0IHsgQ2VyZXMgfSBmcm9tIFwiL2xpYnMvQ2VyZXNcIjtcclxuXHJcbi8vIERvIE5PVCByZW5hbWUuIFRoaXMgZGVmaW5pdGlvbiBpcyBjb3BpZWQgZnJvbSBOZXRzY3JpcHREZWZpbml0aW9ucy5kLnRzXHJcbmV4cG9ydCBlbnVtIENpdHlOYW1lIHtcclxuICAgIEFldnVtID0gXCJBZXZ1bVwiLFxyXG4gICAgQ2hvbmdxaW5nID0gXCJDaG9uZ3FpbmdcIixcclxuICAgIFNlY3RvcjEyID0gXCJTZWN0b3ItMTJcIixcclxuICAgIE5ld1Rva3lvID0gXCJOZXcgVG9reW9cIixcclxuICAgIElzaGltYSA9IFwiSXNoaW1hXCIsXHJcbiAgICBWb2xoYXZlbiA9IFwiVm9saGF2ZW5cIixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29ycFN0YXRlIHtcclxuICAgIFNUQVJUID0gXCJTVEFSVFwiLFxyXG4gICAgUFVSQ0hBU0UgPSBcIlBVUkNIQVNFXCIsXHJcbiAgICBQUk9EVUNUSU9OID0gXCJQUk9EVUNUSU9OXCIsXHJcbiAgICBFWFBPUlQgPSBcIkVYUE9SVFwiLFxyXG4gICAgU0FMRSA9IFwiU0FMRVwiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1hdGVyaWFsTmFtZSB7XHJcbiAgICBNSU5FUkFMUyA9IFwiTWluZXJhbHNcIixcclxuICAgIE9SRSA9IFwiT3JlXCIsXHJcbiAgICBXQVRFUiA9IFwiV2F0ZXJcIixcclxuICAgIEZPT0QgPSBcIkZvb2RcIixcclxuICAgIFBMQU5UUyA9IFwiUGxhbnRzXCIsXHJcbiAgICBNRVRBTCA9IFwiTWV0YWxcIixcclxuICAgIEhBUkRXQVJFID0gXCJIYXJkd2FyZVwiLFxyXG4gICAgQ0hFTUlDQUxTID0gXCJDaGVtaWNhbHNcIixcclxuICAgIERSVUdTID0gXCJEcnVnc1wiLFxyXG4gICAgUk9CT1RTID0gXCJSb2JvdHNcIixcclxuICAgIEFJX0NPUkVTID0gXCJBSSBDb3Jlc1wiLFxyXG4gICAgUkVBTF9FU1RBVEUgPSBcIlJlYWwgRXN0YXRlXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVW5sb2NrTmFtZSB7XHJcbiAgICBFWFBPUlQgPSBcIkV4cG9ydFwiLFxyXG4gICAgU01BUlRfU1VQUExZID0gXCJTbWFydCBTdXBwbHlcIixcclxuICAgIE1BUktFVF9SRVNFQVJDSF9ERU1BTkQgPSBcIk1hcmtldCBSZXNlYXJjaCAtIERlbWFuZFwiLFxyXG4gICAgTUFSS0VUX0RBVEFfQ09NUEVUSVRJT04gPSBcIk1hcmtldCBEYXRhIC0gQ29tcGV0aXRpb25cIixcclxuICAgIFZFX0NIQUlOID0gXCJWZUNoYWluXCIsXHJcbiAgICBTSEFEWV9BQ0NPVU5USU5HID0gXCJTaGFkeSBBY2NvdW50aW5nXCIsXHJcbiAgICBHT1ZFUk5NRU5UX1BBUlRORVJTSElQID0gXCJHb3Zlcm5tZW50IFBhcnRuZXJzaGlwXCIsXHJcbiAgICBXQVJFSE9VU0VfQVBJID0gXCJXYXJlaG91c2UgQVBJXCIsXHJcbiAgICBPRkZJQ0VfQVBJID0gXCJPZmZpY2UgQVBJXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVXBncmFkZU5hbWUge1xyXG4gICAgU01BUlRfRkFDVE9SSUVTID0gXCJTbWFydCBGYWN0b3JpZXNcIixcclxuICAgIFNNQVJUX1NUT1JBR0UgPSBcIlNtYXJ0IFN0b3JhZ2VcIixcclxuICAgIERSRUFNX1NFTlNFID0gXCJEcmVhbVNlbnNlXCIsXHJcbiAgICBXSUxTT05fQU5BTFlUSUNTID0gXCJXaWxzb24gQW5hbHl0aWNzXCIsXHJcbiAgICBOVU9QVElNQUxfTk9PVFJPUElDX0lOSkVDVE9SX0lNUExBTlRTID0gXCJOdW9wdGltYWwgTm9vdHJvcGljIEluamVjdG9yIEltcGxhbnRzXCIsXHJcbiAgICBTUEVFQ0hfUFJPQ0VTU09SX0lNUExBTlRTID0gXCJTcGVlY2ggUHJvY2Vzc29yIEltcGxhbnRzXCIsXHJcbiAgICBORVVSQUxfQUNDRUxFUkFUT1JTID0gXCJOZXVyYWwgQWNjZWxlcmF0b3JzXCIsXHJcbiAgICBGT0NVU19XSVJFUyA9IFwiRm9jdXNXaXJlc1wiLFxyXG4gICAgQUJDX1NBTEVTX0JPVFMgPSBcIkFCQyBTYWxlc0JvdHNcIixcclxuICAgIFBST0pFQ1RfSU5TSUdIVCA9IFwiUHJvamVjdCBJbnNpZ2h0XCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRW1wbG95ZWVQb3NpdGlvbiB7XHJcbiAgICBPUEVSQVRJT05TID0gXCJPcGVyYXRpb25zXCIsXHJcbiAgICBFTkdJTkVFUiA9IFwiRW5naW5lZXJcIixcclxuICAgIEJVU0lORVNTID0gXCJCdXNpbmVzc1wiLFxyXG4gICAgTUFOQUdFTUVOVCA9IFwiTWFuYWdlbWVudFwiLFxyXG4gICAgUkVTRUFSQ0hfREVWRUxPUE1FTlQgPSBcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIixcclxuICAgIElOVEVSTiA9IFwiSW50ZXJuXCIsXHJcbiAgICBVTkFTU0lHTkVEID0gXCJVbmFzc2lnbmVkXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVzZWFyY2hOYW1lIHtcclxuICAgIEhJX1RFQ0hfUk5EX0xBQk9SQVRPUlkgPSBcIkhpLVRlY2ggUiZEIExhYm9yYXRvcnlcIixcclxuICAgIEFVVE9fQlJFVyA9IFwiQXV0b0JyZXdcIixcclxuICAgIEFVVE9fUEFSVFkgPSBcIkF1dG9QYXJ0eU1hbmFnZXJcIixcclxuICAgIEFVVE9fRFJVRyA9IFwiQXV0b21hdGljIERydWcgQWRtaW5pc3RyYXRpb25cIixcclxuICAgIENQSDRfSU5KRUNUID0gXCJDUEg0IEluamVjdGlvbnNcIixcclxuICAgIERST05FUyA9IFwiRHJvbmVzXCIsXHJcbiAgICBEUk9ORVNfQVNTRU1CTFkgPSBcIkRyb25lcyAtIEFzc2VtYmx5XCIsXHJcbiAgICBEUk9ORVNfVFJBTlNQT1JUID0gXCJEcm9uZXMgLSBUcmFuc3BvcnRcIixcclxuICAgIEdPX0pVSUNFID0gXCJHby1KdWljZVwiLFxyXG4gICAgSFJfQlVERFlfUkVDUlVJVE1FTlQgPSBcIkhSQnVkZHktUmVjcnVpdG1lbnRcIixcclxuICAgIEhSX0JVRERZX1RSQUlOSU5HID0gXCJIUkJ1ZGR5LVRyYWluaW5nXCIsXHJcbiAgICBNQVJLRVRfVEFfMSA9IFwiTWFya2V0LVRBLklcIixcclxuICAgIE1BUktFVF9UQV8yID0gXCJNYXJrZXQtVEEuSUlcIixcclxuICAgIE9WRVJDTE9DSyA9IFwiT3ZlcmNsb2NrXCIsXHJcbiAgICBTRUxGX0NPUlJFQ1RJTkdfQVNTRU1CTEVSUyA9IFwiU2VsZi1Db3JyZWN0aW5nIEFzc2VtYmxlcnNcIixcclxuICAgIFNUSU1VID0gXCJTdGkubXVcIixcclxuICAgIFVQR1JBREVfQ0FQQUNJVFlfMSA9IFwidVBncmFkZTogQ2FwYWNpdHkuSVwiLFxyXG4gICAgVVBHUkFERV9DQVBBQ0lUWV8yID0gXCJ1UGdyYWRlOiBDYXBhY2l0eS5JSVwiLFxyXG4gICAgVVBHUkFERV9EQVNIQk9BUkQgPSBcInVQZ3JhZGU6IERhc2hib2FyZFwiLFxyXG4gICAgVVBHUkFERV9GVUxDUlVNID0gXCJ1UGdyYWRlOiBGdWxjcnVtXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEluZHVzdHJ5VHlwZSB7XHJcbiAgICBXQVRFUl9VVElMSVRJRVMgPSBcIldhdGVyIFV0aWxpdGllc1wiLFxyXG4gICAgU1BSSU5HX1dBVEVSID0gXCJTcHJpbmcgV2F0ZXJcIixcclxuICAgIEFHUklDVUxUVVJFID0gXCJBZ3JpY3VsdHVyZVwiLFxyXG4gICAgRklTSElORyA9IFwiRmlzaGluZ1wiLFxyXG4gICAgTUlOSU5HID0gXCJNaW5pbmdcIixcclxuICAgIFJFRklORVJZID0gXCJSZWZpbmVyeVwiLFxyXG4gICAgUkVTVEFVUkFOVCA9IFwiUmVzdGF1cmFudFwiLFxyXG4gICAgVE9CQUNDTyA9IFwiVG9iYWNjb1wiLFxyXG4gICAgQ0hFTUlDQUwgPSBcIkNoZW1pY2FsXCIsXHJcbiAgICBQSEFSTUFDRVVUSUNBTCA9IFwiUGhhcm1hY2V1dGljYWxcIixcclxuICAgIENPTVBVVEVSX0hBUkRXQVJFID0gXCJDb21wdXRlciBIYXJkd2FyZVwiLFxyXG4gICAgUk9CT1RJQ1MgPSBcIlJvYm90aWNzXCIsXHJcbiAgICBTT0ZUV0FSRSA9IFwiU29mdHdhcmVcIixcclxuICAgIEhFQUxUSENBUkUgPSBcIkhlYWx0aGNhcmVcIixcclxuICAgIFJFQUxfRVNUQVRFID0gXCJSZWFsIEVzdGF0ZVwiLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9mZmljZVNldHVwSm9icyB7XHJcbiAgICBPcGVyYXRpb25zOiBudW1iZXI7XHJcbiAgICBFbmdpbmVlcjogbnVtYmVyO1xyXG4gICAgQnVzaW5lc3M6IG51bWJlcjtcclxuICAgIE1hbmFnZW1lbnQ6IG51bWJlcjtcclxuICAgIFwiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiOiBudW1iZXI7XHJcbiAgICBJbnRlcm4/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT2ZmaWNlU2V0dXAge1xyXG4gICAgY2l0eTogQ2l0eU5hbWU7XHJcbiAgICBzaXplOiBudW1iZXI7XHJcbiAgICBqb2JzOiBPZmZpY2VTZXR1cEpvYnM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzZWFyY2hQcmlvcml0eSB7XHJcbiAgICByZXNlYXJjaDogUmVzZWFyY2hOYW1lO1xyXG4gICAgY29zdE11bHRpcGxpZXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXRlcmlhbE9yZGVyIHtcclxuICAgIGNpdHk6IENpdHlOYW1lO1xyXG4gICAgbWF0ZXJpYWxzOiB7XHJcbiAgICAgICAgbmFtZTogTWF0ZXJpYWxOYW1lO1xyXG4gICAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB9W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXhwb3J0Um91dGUge1xyXG4gICAgbWF0ZXJpYWw6IENvcnBNYXRlcmlhbE5hbWU7XHJcbiAgICBzb3VyY2VDaXR5OiBDaXR5TmFtZTtcclxuICAgIHNvdXJjZURpdmlzaW9uOiBzdHJpbmc7XHJcbiAgICBkZXN0aW5hdGlvbkRpdmlzaW9uOiBzdHJpbmc7XHJcbiAgICBkZXN0aW5hdGlvbkNpdHk6IENpdHlOYW1lO1xyXG4gICAgZGVzdGluYXRpb25BbW91bnQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzID0gUmVjb3JkPFVwZ3JhZGVOYW1lLCBudW1iZXI+O1xyXG5leHBvcnQgdHlwZSBEaXZpc2lvblJlc2VhcmNoZXMgPSBSZWNvcmQ8UmVzZWFyY2hOYW1lLCBib29sZWFuPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2VyZXNTb2x2ZXJSZXN1bHQge1xyXG4gICAgc3VjY2VzczogYm9vbGVhbjtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIHg6IG51bWJlcltdO1xyXG4gICAgcmVwb3J0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHdhcmVob3VzZVVwZ3JhZGVCYXNlUHJpY2UgPSAxZTk7XHJcbmNvbnN0IG9mZmljZVVwZ3JhZGVCYXNlUHJpY2UgPSA0ZTk7XHJcbmNvbnN0IGFkdmVydFVwZ3JhZGVCYXNlUHJpY2UgPSAxZTk7XHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0TWFya2V0UHJpY2VNdWx0aXBsaWVyID0gNTtcclxuXHJcbmNvbnN0IG51bWJlclN1ZmZpeExpc3QgPSBbXCJcIiwgXCJrXCIsIFwibVwiLCBcImJcIiwgXCJ0XCIsIFwicVwiLCBcIlFcIiwgXCJzXCIsIFwiU1wiLCBcIm9cIiwgXCJuXCJdO1xyXG4vLyBFeHBvbmVudHMgYXNzb2NpYXRlZCB3aXRoIGVhY2ggc3VmZml4XHJcbmNvbnN0IG51bWJlckV4cExpc3QgPSBudW1iZXJTdWZmaXhMaXN0Lm1hcCgoXywgaSkgPT4gcGFyc2VGbG9hdChgMWUke2kgKiAzfWApKTtcclxuXHJcbmNvbnN0IG51bWJlckZvcm1hdCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcclxuICAgIFwiZW5cIixcclxuICAgIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAzXHJcbiAgICB9XHJcbik7XHJcbmNvbnN0IGJhc2ljRm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFxyXG4gICAgXCJlblwiXHJcbik7XHJcbmNvbnN0IGV4cG9uZW50aWFsRm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFxyXG4gICAgXCJlblwiLFxyXG4gICAge1xyXG4gICAgICAgIG5vdGF0aW9uOiBcInNjaWVudGlmaWNcIlxyXG4gICAgfVxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIHNyY1xcdWlcXGZvcm1hdE51bWJlci50c1xyXG4gKlxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXIodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBmcmFjdGlvbmFsRGlnaXRzID0gMztcclxuICAgIC8vIE5hTiBkb2VzIG5vdCBnZXQgZm9ybWF0dGVkXHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBcIk5hTlwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbkFicyA9IE1hdGguYWJzKHZhbHVlKTtcclxuXHJcbiAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciBJbmZpbml0aWVzXHJcbiAgICBpZiAobkFicyA9PT0gSW5maW5pdHkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPCAwID8gXCItXHUyMjFFXCIgOiBcIlx1MjIxRVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVhcmx5IHJldHVybiBmb3Igbm9uLXN1ZmZpeFxyXG4gICAgaWYgKG5BYnMgPCAxMDAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGJhc2ljRm9ybWF0dGVyLmZvcm1hdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhwb25lbnRpYWwgZm9ybVxyXG4gICAgaWYgKG5BYnMgPj0gMWUxNSkge1xyXG4gICAgICAgIHJldHVybiBleHBvbmVudGlhbEZvcm1hdHRlci5mb3JtYXQodmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHN1ZmZpeCBpbmRleC4gMTAwMCA9IDEwXjNcclxuICAgIGxldCBzdWZmaXhJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChuQWJzKSAvIDMpO1xyXG5cclxuICAgIHZhbHVlIC89IG51bWJlckV4cExpc3Rbc3VmZml4SW5kZXhdO1xyXG4gICAgLy8gRGV0ZWN0IGlmIG51bWJlciByb3VuZHMgdG8gMTAwMC4wMDAgKGJhc2VkIG9uIG51bWJlciBvZiBkaWdpdHMgZ2l2ZW4pXHJcbiAgICBpZiAoTWF0aC5hYnModmFsdWUpLnRvRml4ZWQoZnJhY3Rpb25hbERpZ2l0cykubGVuZ3RoID09PSBmcmFjdGlvbmFsRGlnaXRzICsgNSAmJiBudW1iZXJTdWZmaXhMaXN0W3N1ZmZpeEluZGV4ICsgMV0pIHtcclxuICAgICAgICBzdWZmaXhJbmRleCArPSAxO1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUgPCAwID8gLTEgOiAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bWJlckZvcm1hdC5mb3JtYXQodmFsdWUpICsgbnVtYmVyU3VmZml4TGlzdFtzdWZmaXhJbmRleF07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBzcmNcXENvcnBvcmF0aW9uXFxEaXZpc2lvbi50czogY2FsY3VsYXRlUHJvZHVjdGlvbkZhY3RvcnMoKVxyXG4gKiBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCA2IGNpdGllcyBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiBib29zdCBtYXRlcmlhbHMnIHVuaXRzIGluIHRoZWlyIHdhcmVob3VzZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSBpbmR1c3RyeURhdGFcclxuICogQHBhcmFtIGJvb3N0TWF0ZXJpYWxzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGl2aXNpb25Qcm9kdWN0aW9uTXVsdGlwbGllcihpbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGEsIGJvb3N0TWF0ZXJpYWxzOiBudW1iZXJbXSkge1xyXG4gICAgY29uc3QgY2l0eU11bHRpcGxpZXIgPVxyXG4gICAgICAgIE1hdGgucG93KDAuMDAyICogYm9vc3RNYXRlcmlhbHNbMF0gKyAxLCBpbmR1c3RyeURhdGEuYWlDb3JlRmFjdG9yISkgKlxyXG4gICAgICAgIE1hdGgucG93KDAuMDAyICogYm9vc3RNYXRlcmlhbHNbMV0gKyAxLCBpbmR1c3RyeURhdGEuaGFyZHdhcmVGYWN0b3IhKSAqXHJcbiAgICAgICAgTWF0aC5wb3coMC4wMDIgKiBib29zdE1hdGVyaWFsc1syXSArIDEsIGluZHVzdHJ5RGF0YS5yZWFsRXN0YXRlRmFjdG9yISkgKlxyXG4gICAgICAgIE1hdGgucG93KDAuMDAyICogYm9vc3RNYXRlcmlhbHNbM10gKyAxLCBpbmR1c3RyeURhdGEucm9ib3RGYWN0b3IhKTtcclxuICAgIHJldHVybiBNYXRoLm1heChNYXRoLnBvdyhjaXR5TXVsdGlwbGllciwgMC43MyksIDEpICogNjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2VuZXJpY1VwZ3JhZGVDb3N0KGJhc2VQcmljZTogbnVtYmVyLCBwcmljZU11bHRpcGxpZXI6IG51bWJlciwgZnJvbUxldmVsOiBudW1iZXIsIHRvTGV2ZWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYmFzZVByaWNlICogKChNYXRoLnBvdyhwcmljZU11bHRpcGxpZXIsIHRvTGV2ZWwpIC0gTWF0aC5wb3cocHJpY2VNdWx0aXBsaWVyLCBmcm9tTGV2ZWwpKSAvIChwcmljZU11bHRpcGxpZXIgLSAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdlbmVyaWNNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKFxyXG4gICAgYmFzZVByaWNlOiBudW1iZXIsXHJcbiAgICBwcmljZU11bHRpcGxpZXI6IG51bWJlcixcclxuICAgIGZyb21MZXZlbDogbnVtYmVyLFxyXG4gICAgbWF4Q29zdDogbnVtYmVyLFxyXG4gICAgcm91bmRpbmdXaXRoRmxvb3IgPSB0cnVlKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IG1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwgPSBNYXRoLmxvZyhcclxuICAgICAgICBtYXhDb3N0ICogKHByaWNlTXVsdGlwbGllciAtIDEpIC8gYmFzZVByaWNlICsgTWF0aC5wb3cocHJpY2VNdWx0aXBsaWVyLCBmcm9tTGV2ZWwpXHJcbiAgICApIC8gTWF0aC5sb2cocHJpY2VNdWx0aXBsaWVyKTtcclxuICAgIGlmIChyb3VuZGluZ1dpdGhGbG9vcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICBtYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXBncmFkZUNvc3QodXBncmFkZU5hbWU6IENvcnBVcGdyYWRlTmFtZSwgZnJvbUxldmVsOiBudW1iZXIsIHRvTGV2ZWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB1cGdyYWRlRGF0YSA9IENvcnBVcGdyYWRlc0RhdGFbdXBncmFkZU5hbWVdO1xyXG4gICAgaWYgKCF1cGdyYWRlRGF0YSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgZGF0YSBvZiB1cGdyYWRlOiAke3VwZ3JhZGVOYW1lfWApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldEdlbmVyaWNVcGdyYWRlQ29zdCh1cGdyYWRlRGF0YS5iYXNlUHJpY2UsIHVwZ3JhZGVEYXRhLnByaWNlTXVsdCwgZnJvbUxldmVsLCB0b0xldmVsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwodXBncmFkZU5hbWU6IENvcnBVcGdyYWRlTmFtZSwgZnJvbUxldmVsOiBudW1iZXIsIG1heENvc3Q6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB1cGdyYWRlRGF0YSA9IENvcnBVcGdyYWRlc0RhdGFbdXBncmFkZU5hbWVdO1xyXG4gICAgaWYgKCF1cGdyYWRlRGF0YSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgZGF0YSBvZiB1cGdyYWRlOiAke3VwZ3JhZGVOYW1lfWApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldEdlbmVyaWNNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKHVwZ3JhZGVEYXRhLmJhc2VQcmljZSwgdXBncmFkZURhdGEucHJpY2VNdWx0LCBmcm9tTGV2ZWwsIG1heENvc3QpO1xyXG59XHJcblxyXG4vKipcclxuICogc3JjXFxDb3Jwb3JhdGlvblxcQ29ycG9yYXRpb24udHM6IHB1cmNoYXNlVXBncmFkZSgpXHJcbiAqXHJcbiAqIEBwYXJhbSB1cGdyYWRlTmFtZVxyXG4gKiBAcGFyYW0gdXBncmFkZUxldmVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXBncmFkZUJlbmVmaXQodXBncmFkZU5hbWU6IENvcnBVcGdyYWRlTmFtZSwgdXBncmFkZUxldmVsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gRm9yIERyZWFtU2Vuc2UsIHZhbHVlIGlzIG5vdCBhIG11bHRpcGxpZXIsIHNvIGl0IHN0YXJ0cyBhdCAwXHJcbiAgICBsZXQgdmFsdWUgPSAodXBncmFkZU5hbWUgPT09IFVwZ3JhZGVOYW1lLkRSRUFNX1NFTlNFKSA/IDAgOiAxO1xyXG4gICAgY29uc3QgYmVuZWZpdCA9IENvcnBVcGdyYWRlc0RhdGFbdXBncmFkZU5hbWVdLmJlbmVmaXQ7XHJcbiAgICBpZiAoIWJlbmVmaXQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGRhdGEgb2YgdXBncmFkZTogJHt1cGdyYWRlTmFtZX1gKTtcclxuICAgIH1cclxuICAgIHZhbHVlICs9IGJlbmVmaXQgKiB1cGdyYWRlTGV2ZWw7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcGdyYWRlV2FyZWhvdXNlQ29zdChmcm9tTGV2ZWw6IG51bWJlciwgdG9MZXZlbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChmcm9tTGV2ZWwgPCAxKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2FyZWhvdXNlVXBncmFkZUJhc2VQcmljZSAqICgoTWF0aC5wb3coMS4wNywgdG9MZXZlbCArIDEpIC0gTWF0aC5wb3coMS4wNywgZnJvbUxldmVsICsgMSkpIC8gMC4wNyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhBZmZvcmRhYmxlV2FyZWhvdXNlTGV2ZWwoZnJvbUxldmVsOiBudW1iZXIsIG1heENvc3Q6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoZnJvbUxldmVsIDwgMSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1ldGVyXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoXHJcbiAgICAgICAgKE1hdGgubG9nKG1heENvc3QgKiAwLjA3IC8gd2FyZWhvdXNlVXBncmFkZUJhc2VQcmljZSArIE1hdGgucG93KDEuMDcsIGZyb21MZXZlbCArIDEpKSAvIE1hdGgubG9nKDEuMDcpKSAtIDFcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBzcmNcXENvcnBvcmF0aW9uXFxXYXJlaG91c2UudHM6IHVwZGF0ZVNpemUoKVxyXG4gKlxyXG4gKiBAcGFyYW0gc21hcnRTdG9yYWdlTGV2ZWxcclxuICogQHBhcmFtIHdhcmVob3VzZUxldmVsXHJcbiAqIEBwYXJhbSBkaXZpc2lvblJlc2VhcmNoZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXYXJlaG91c2VTaXplKHNtYXJ0U3RvcmFnZUxldmVsOiBudW1iZXIsIHdhcmVob3VzZUxldmVsOiBudW1iZXIsIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB3YXJlaG91c2VMZXZlbCAqIDEwMCAqXHJcbiAgICAgICAgKDEgKyBDb3JwVXBncmFkZXNEYXRhW1VwZ3JhZGVOYW1lLlNNQVJUX1NUT1JBR0VdLmJlbmVmaXQgKiBzbWFydFN0b3JhZ2VMZXZlbCkgKlxyXG4gICAgICAgIGdldFJlc2VhcmNoU3RvcmFnZU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZmljZVVwZ3JhZGVDb3N0KGZyb21TaXplOiBudW1iZXIsIHRvU2l6ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBnZXRHZW5lcmljVXBncmFkZUNvc3Qob2ZmaWNlVXBncmFkZUJhc2VQcmljZSwgMS4wOSwgZnJvbVNpemUgLyAzLCB0b1NpemUgLyAzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heEFmZm9yZGFibGVPZmZpY2VTaXplKGZyb21TaXplOiBudW1iZXIsIG1heENvc3Q6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihcclxuICAgICAgICAzICogZ2V0R2VuZXJpY01heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwob2ZmaWNlVXBncmFkZUJhc2VQcmljZSwgMS4wOSwgZnJvbVNpemUgLyAzLCBtYXhDb3N0LCBmYWxzZSlcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBZFZlcnRDb3N0KGZyb21MZXZlbDogbnVtYmVyLCB0b0xldmVsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldEdlbmVyaWNVcGdyYWRlQ29zdChhZHZlcnRVcGdyYWRlQmFzZVByaWNlLCAxLjA2LCBmcm9tTGV2ZWwsIHRvTGV2ZWwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4QWZmb3JkYWJsZUFkVmVydExldmVsKGZyb21MZXZlbDogbnVtYmVyLCBtYXhDb3N0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldEdlbmVyaWNNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKGFkdmVydFVwZ3JhZGVCYXNlUHJpY2UsIDEuMDYsIGZyb21MZXZlbCwgbWF4Q29zdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNlYXJjaE11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzOiBEaXZpc2lvblJlc2VhcmNoZXMsIHJlc2VhcmNoRGF0YUtleToga2V5b2YgdHlwZW9mIENvcnBSZXNlYXJjaGVzRGF0YVtzdHJpbmddKTogbnVtYmVyIHtcclxuICAgIGxldCBtdWx0aXBsaWVyID0gMTtcclxuICAgIGZvciAoY29uc3QgW3Jlc2VhcmNoTmFtZSwgcmVzZWFyY2hEYXRhXSBvZiBPYmplY3QuZW50cmllcyhDb3JwUmVzZWFyY2hlc0RhdGEpKSB7XHJcbiAgICAgICAgaWYgKCFkaXZpc2lvblJlc2VhcmNoZXNbPFJlc2VhcmNoTmFtZT5yZXNlYXJjaE5hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXNlYXJjaERhdGFWYWx1ZSA9IHJlc2VhcmNoRGF0YVtyZXNlYXJjaERhdGFLZXldO1xyXG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHJlc2VhcmNoRGF0YVZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcmVzZWFyY2hEYXRhS2V5OiAke3Jlc2VhcmNoRGF0YUtleX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbXVsdGlwbGllciAqPSByZXNlYXJjaERhdGFWYWx1ZSBhcyBudW1iZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbXVsdGlwbGllcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc2VhcmNoU2FsZXNNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBnZXRSZXNlYXJjaE11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzLCBcInNhbGVzTXVsdFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc2VhcmNoQWR2ZXJ0aXNpbmdNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBnZXRSZXNlYXJjaE11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzLCBcImFkdmVydGlzaW5nTXVsdFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc2VhcmNoUlBNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBnZXRSZXNlYXJjaE11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzLCBcInNjaVJlc2VhcmNoTXVsdFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc2VhcmNoU3RvcmFnZU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzOiBEaXZpc2lvblJlc2VhcmNoZXMpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldFJlc2VhcmNoTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXMsIFwic3RvcmFnZU11bHRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNlYXJjaEVtcGxveWVlQ3JlYXRpdml0eU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzOiBEaXZpc2lvblJlc2VhcmNoZXMpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldFJlc2VhcmNoTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXMsIFwiZW1wbG95ZWVDcmVNdWx0XCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzZWFyY2hFbXBsb3llZUNoYXJpc21hTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZ2V0UmVzZWFyY2hNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlcywgXCJlbXBsb3llZUNoYU11bHRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNlYXJjaEVtcGxveWVlSW50ZWxsaWdlbmNlTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZ2V0UmVzZWFyY2hNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlcywgXCJlbXBsb3llZUludE11bHRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNlYXJjaEVtcGxveWVlRWZmaWNpZW5jeU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzOiBEaXZpc2lvblJlc2VhcmNoZXMpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldFJlc2VhcmNoTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXMsIFwicHJvZHVjdGlvbk11bHRcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBzcmNcXHV0aWxzXFxjYWxjdWxhdGVFZmZlY3RXaXRoRmFjdG9ycy50c1xyXG4gKlxyXG4gKiBUaGlzIGlzIGEgY29tcG9uZW50IHRoYXQgaW1wbGVtZW50cyBhIG1hdGhlbWF0aWNhbCBmb3JtdWxhIHVzZWQgY29tbW9ubHkgdGhyb3VnaG91dCB0aGVcclxuICogZ2FtZS4gVGhpcyBmb3JtdWxhIGlzICh0eXBpY2FsbHkpIHVzZWQgdG8gY2FsY3VsYXRlIHRoZSBlZmZlY3QgdGhhdCB2YXJpb3VzIHN0YXRpc3RpY3NcclxuICogaGF2ZSBvbiBhIGdhbWUgbWVjaGFuaWMuIEl0IGxvb2tzIHNvbWV0aGluZyBsaWtlOlxyXG4gKlxyXG4gKiAgKHN0YXQgXiBleHBvbmVudGlhbCBmYWN0b3IpICsgKHN0YXQgLyBsaW5lYXIgZmFjdG9yKVxyXG4gKlxyXG4gKiB3aGVyZSB0aGUgZXhwb25lbnRpYWwgZmFjdG9yIGlzIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBhbmQgdGhlIGxpbmVhciBmYWN0b3JcclxuICogaXMgdHlwaWNhbGx5IGEgcmVsYXRpdmVseSBsYXJnZXIgbnVtYmVyLlxyXG4gKlxyXG4gKiBUaGlzIGZvcm11bGEgZW5zdXJlcyB0aGF0IHRoZSBlZmZlY3RzIG9mIHRoZSBzdGF0aXN0aWMgdGhhdCBpcyBiZWluZyBwcm9jZXNzZWRcclxuICogaGFzIGRpbWluaXNoaW5nIHJldHVybnMsIGJ1dCBuZXZlciBsb3NlcyBpdHMgZWZmZWN0aXZlbmVzcyBhcyB5b3UgY29udGludWVcclxuICogdG8gcmFpc2UgaXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRFZmZlY3RXaXRoRmFjdG9ycyhuOiBudW1iZXIsIGV4cEZhYzogbnVtYmVyLCBsaW5lYXJGYWM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAoZXhwRmFjIDw9IDAgfHwgZXhwRmFjID49IDEpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYEV4cG9uZW50aWFsIGZhY3RvciBpcyAke2V4cEZhY30uIFRoaXMgaXMgbm90IGFuIGludGVuZGVkIHZhbHVlIGZvciBpdGApO1xyXG4gICAgfVxyXG4gICAgaWYgKGxpbmVhckZhYyA8IDEpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYExpbmVhciBmYWN0b3IgaXMgJHtsaW5lYXJGYWN9LiBUaGlzIGlzIG5vdCBhbiBpbnRlbmRlZCB2YWx1ZSBmb3IgaXRgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLnBvdyhuLCBleHBGYWMpICsgbiAvIGxpbmVhckZhYztcclxufVxyXG5cclxuLyoqXHJcbiAqIHNyY1xcQ29ycG9yYXRpb25cXERpdmlzaW9uLnRzXHJcbiAqXHJcbiAqIFJldHVybiBhIGZhY3RvciBiYXNlZCBvbiB0aGUgb2ZmaWNlJ3MgQnVzaW5lc3MgZW1wbG95ZWVzIHRoYXQgYWZmZWN0cyBzYWxlc1xyXG4gKlxyXG4gKiBAcGFyYW0gYnVzaW5lc3NQcm9kdWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVzaW5lc3NGYWN0b3IoYnVzaW5lc3NQcm9kdWN0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldEVmZmVjdFdpdGhGYWN0b3JzKDEgKyBidXNpbmVzc1Byb2R1Y3Rpb24sIDAuMjYsIDEwZTMpO1xyXG59XHJcblxyXG4vKipcclxuICogc3JjXFxDb3Jwb3JhdGlvblxcRGl2aXNpb24udHNcclxuICpcclxuICogUmV0dXJuIGEgc2V0IG9mIGZhY3RvcnMgYmFzZWQgb24gdGhlIGRpdmlzaW9uJ3MgYXdhcmVuZXNzLCBwb3B1bGFyaXR5LCBhbmQgSW5kdXN0cnkncyBhZHZlcnRpc2luZ0ZhY3Rvci4gVGhlIGZpcnN0XHJcbiAqIGZhY3RvciBhZmZlY3RzIHNhbGVzLiBUaGUgcmVzdWx0IGlzOlxyXG4gKiBbU2FsZXMgZmFjdG9yLCBhd2FyZW5lc3MgZmFjdG9yLCBwb3B1bGFyaXR5IGZhY3RvciwgcG9wdWxhcml0eS9hd2FyZW5lc3MgcmF0aW8gZmFjdG9yXVxyXG4gKlxyXG4gKiBAcGFyYW0gYXdhcmVuZXNzXHJcbiAqIEBwYXJhbSBwb3B1bGFyaXR5XHJcbiAqIEBwYXJhbSBpbmR1c3RyeUFkdmVydGlzaW5nRmFjdG9yXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWR2ZXJ0aXNpbmdGYWN0b3JzKGF3YXJlbmVzczogbnVtYmVyLCBwb3B1bGFyaXR5OiBudW1iZXIsIGluZHVzdHJ5QWR2ZXJ0aXNpbmdGYWN0b3I6IG51bWJlcik6IFtcclxuICAgIHRvdGFsRmFjdG9yOiBudW1iZXIsXHJcbiAgICBhd2FyZW5lc3NGYWN0b3I6IG51bWJlcixcclxuICAgIHBvcHVsYXJpdHlGYWN0b3I6IG51bWJlcixcclxuICAgIHJhdGlvRmFjdG9yOiBudW1iZXIsXHJcbl0ge1xyXG4gICAgY29uc3QgYXdhcmVuZXNzRmFjdG9yID0gTWF0aC5wb3coYXdhcmVuZXNzICsgMSwgaW5kdXN0cnlBZHZlcnRpc2luZ0ZhY3Rvcik7XHJcbiAgICBjb25zdCBwb3B1bGFyaXR5RmFjdG9yID0gTWF0aC5wb3cocG9wdWxhcml0eSArIDEsIGluZHVzdHJ5QWR2ZXJ0aXNpbmdGYWN0b3IpO1xyXG4gICAgY29uc3QgcmF0aW9GYWN0b3IgPSBhd2FyZW5lc3MgPT09IDAgPyAwLjAxIDogTWF0aC5tYXgoKHBvcHVsYXJpdHkgKyAwLjAwMSkgLyBhd2FyZW5lc3MsIDAuMDEpO1xyXG4gICAgY29uc3Qgc2FsZXNGYWN0b3IgPSBNYXRoLnBvdyhhd2FyZW5lc3NGYWN0b3IgKiBwb3B1bGFyaXR5RmFjdG9yICogcmF0aW9GYWN0b3IsIDAuODUpO1xyXG4gICAgcmV0dXJuIFtzYWxlc0ZhY3RvciwgYXdhcmVuZXNzRmFjdG9yLCBwb3B1bGFyaXR5RmFjdG9yLCByYXRpb0ZhY3Rvcl07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBzcmNcXENvcnBvcmF0aW9uXFxEaXZpc2lvbi50c1xyXG4gKlxyXG4gKiBSZXR1cm4gYSBmYWN0b3IgYmFzZWQgb24gZGVtYW5kIGFuZCBjb21wZXRpdGlvbiB0aGF0IGFmZmVjdHMgc2FsZXNcclxuICpcclxuICogQHBhcmFtIGRlbWFuZFxyXG4gKiBAcGFyYW0gY29tcGV0aXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXJrZXRGYWN0b3IoZGVtYW5kOiBudW1iZXIsIGNvbXBldGl0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KDAuMSwgKGRlbWFuZCAqICgxMDAgLSBjb21wZXRpdGlvbikpIC8gMTAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpdmlzaW9uUmF3UHJvZHVjdGlvbihcclxuICAgIGlzUHJvZHVjdDogYm9vbGVhbixcclxuICAgIGVtcGxveWVlc1Byb2R1Y3Rpb246IHtcclxuICAgICAgICBvcGVyYXRpb25zUHJvZHVjdGlvbjogbnVtYmVyO1xyXG4gICAgICAgIGVuZ2luZWVyUHJvZHVjdGlvbjogbnVtYmVyO1xyXG4gICAgICAgIG1hbmFnZW1lbnRQcm9kdWN0aW9uOiBudW1iZXI7XHJcbiAgICB9LFxyXG4gICAgZGl2aXNpb25Qcm9kdWN0aW9uTXVsdGlwbGllcjogbnVtYmVyLFxyXG4gICAgY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzOiBDb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHMsXHJcbiAgICBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlc1xyXG4pOiBudW1iZXIge1xyXG4gICAgY29uc3Qgb3BlcmF0aW9uRW1wbG95ZWVzUHJvZHVjdGlvbiA9IGVtcGxveWVlc1Byb2R1Y3Rpb24ub3BlcmF0aW9uc1Byb2R1Y3Rpb247XHJcbiAgICBjb25zdCBlbmdpbmVlckVtcGxveWVlc1Byb2R1Y3Rpb24gPSBlbXBsb3llZXNQcm9kdWN0aW9uLmVuZ2luZWVyUHJvZHVjdGlvbjtcclxuICAgIGNvbnN0IG1hbmFnZW1lbnRFbXBsb3llZXNQcm9kdWN0aW9uID0gZW1wbG95ZWVzUHJvZHVjdGlvbi5tYW5hZ2VtZW50UHJvZHVjdGlvbjtcclxuICAgIGNvbnN0IHRvdGFsRW1wbG95ZWVzUHJvZHVjdGlvbiA9IG9wZXJhdGlvbkVtcGxveWVlc1Byb2R1Y3Rpb24gKyBlbmdpbmVlckVtcGxveWVlc1Byb2R1Y3Rpb24gKyBtYW5hZ2VtZW50RW1wbG95ZWVzUHJvZHVjdGlvbjtcclxuICAgIGlmICh0b3RhbEVtcGxveWVlc1Byb2R1Y3Rpb24gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWFuYWdlbWVudEZhY3RvciA9IDEgKyBtYW5hZ2VtZW50RW1wbG95ZWVzUHJvZHVjdGlvbiAvICgxLjIgKiB0b3RhbEVtcGxveWVlc1Byb2R1Y3Rpb24pO1xyXG4gICAgY29uc3QgZW1wbG95ZWVzUHJvZHVjdGlvbk11bHRpcGxpZXIgPSAoTWF0aC5wb3cob3BlcmF0aW9uRW1wbG95ZWVzUHJvZHVjdGlvbiwgMC40KSArIE1hdGgucG93KGVuZ2luZWVyRW1wbG95ZWVzUHJvZHVjdGlvbiwgMC4zKSkgKiBtYW5hZ2VtZW50RmFjdG9yO1xyXG4gICAgY29uc3QgYmFsYW5jaW5nTXVsdGlwbGllciA9IDAuMDU7XHJcbiAgICBsZXQgb2ZmaWNlTXVsdGlwbGllcjtcclxuICAgIGlmIChpc1Byb2R1Y3QpIHtcclxuICAgICAgICBvZmZpY2VNdWx0aXBsaWVyID0gMC41ICogYmFsYW5jaW5nTXVsdGlwbGllciAqIGVtcGxveWVlc1Byb2R1Y3Rpb25NdWx0aXBsaWVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvZmZpY2VNdWx0aXBsaWVyID0gYmFsYW5jaW5nTXVsdGlwbGllciAqIGVtcGxveWVlc1Byb2R1Y3Rpb25NdWx0aXBsaWVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE11bHRpcGxpZXIgZnJvbSBTbWFydCBGYWN0b3JpZXNcclxuICAgIGNvbnN0IHVwZ3JhZGVNdWx0aXBsaWVyID0gMSArIGNvcnBvcmF0aW9uVXBncmFkZUxldmVsc1tVcGdyYWRlTmFtZS5TTUFSVF9GQUNUT1JJRVNdICogQ29ycFVwZ3JhZGVzRGF0YVtVcGdyYWRlTmFtZS5TTUFSVF9GQUNUT1JJRVNdLmJlbmVmaXQ7XHJcbiAgICAvLyBNdWx0aXBsaWVyIGZyb20gcmVzZWFyY2hlc1xyXG4gICAgbGV0IHJlc2VhcmNoTXVsdGlwbGllciA9IDE7XHJcbiAgICByZXNlYXJjaE11bHRpcGxpZXIgKj1cclxuICAgICAgICAoZGl2aXNpb25SZXNlYXJjaGVzW1Jlc2VhcmNoTmFtZS5EUk9ORVNfQVNTRU1CTFldID8gQ29ycFJlc2VhcmNoZXNEYXRhW1Jlc2VhcmNoTmFtZS5EUk9ORVNfQVNTRU1CTFldLnByb2R1Y3Rpb25NdWx0IDogMSlcclxuICAgICAgICAqIChkaXZpc2lvblJlc2VhcmNoZXNbUmVzZWFyY2hOYW1lLlNFTEZfQ09SUkVDVElOR19BU1NFTUJMRVJTXSA/IENvcnBSZXNlYXJjaGVzRGF0YVtSZXNlYXJjaE5hbWUuU0VMRl9DT1JSRUNUSU5HX0FTU0VNQkxFUlNdLnByb2R1Y3Rpb25NdWx0IDogMSk7XHJcbiAgICBpZiAoaXNQcm9kdWN0KSB7XHJcbiAgICAgICAgcmVzZWFyY2hNdWx0aXBsaWVyICo9IChkaXZpc2lvblJlc2VhcmNoZXNbUmVzZWFyY2hOYW1lLlVQR1JBREVfRlVMQ1JVTV0gPyBDb3JwUmVzZWFyY2hlc0RhdGFbUmVzZWFyY2hOYW1lLlVQR1JBREVfRlVMQ1JVTV0ucHJvZHVjdFByb2R1Y3Rpb25NdWx0IDogMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9mZmljZU11bHRpcGxpZXIgKiBkaXZpc2lvblByb2R1Y3Rpb25NdWx0aXBsaWVyICogdXBncmFkZU11bHRpcGxpZXIgKiByZXNlYXJjaE11bHRpcGxpZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXJGb3JFbXBsb3llZVN0YXRzKFxyXG4gICAgY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzOiBDb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHMsXHJcbiAgICBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlc1xyXG4pOiB7XHJcbiAgICByZXNlYXJjaENoYXJpc21hTXVsdGlwbGllcjogbnVtYmVyO1xyXG4gICAgdXBncmFkZUludGVsbGlnZW5jZU11bHRpcGxpZXI6IG51bWJlcjtcclxuICAgIHVwZ3JhZGVDaGFyaXNtYU11bHRpcGxpZXI6IG51bWJlcjtcclxuICAgIHJlc2VhcmNoQ3JlYXRpdml0eU11bHRpcGxpZXI6IG51bWJlcjtcclxuICAgIHJlc2VhcmNoRWZmaWNpZW5jeU11bHRpcGxpZXI6IG51bWJlcjtcclxuICAgIHVwZ3JhZGVDcmVhdGl2aXR5TXVsdGlwbGllcjogbnVtYmVyO1xyXG4gICAgcmVzZWFyY2hJbnRlbGxpZ2VuY2VNdWx0aXBsaWVyOiBudW1iZXI7XHJcbiAgICB1cGdyYWRlRWZmaWNpZW5jeU11bHRpcGxpZXI6IG51bWJlcjtcclxufSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZ3JhZGVDcmVhdGl2aXR5TXVsdGlwbGllcjogZ2V0VXBncmFkZUJlbmVmaXQoXHJcbiAgICAgICAgICAgIFVwZ3JhZGVOYW1lLk5VT1BUSU1BTF9OT09UUk9QSUNfSU5KRUNUT1JfSU1QTEFOVFMsXHJcbiAgICAgICAgICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVsc1tVcGdyYWRlTmFtZS5OVU9QVElNQUxfTk9PVFJPUElDX0lOSkVDVE9SX0lNUExBTlRTXVxyXG4gICAgICAgICksXHJcbiAgICAgICAgdXBncmFkZUNoYXJpc21hTXVsdGlwbGllcjogZ2V0VXBncmFkZUJlbmVmaXQoXHJcbiAgICAgICAgICAgIFVwZ3JhZGVOYW1lLlNQRUVDSF9QUk9DRVNTT1JfSU1QTEFOVFMsXHJcbiAgICAgICAgICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVsc1tVcGdyYWRlTmFtZS5TUEVFQ0hfUFJPQ0VTU09SX0lNUExBTlRTXVxyXG4gICAgICAgICksXHJcbiAgICAgICAgdXBncmFkZUludGVsbGlnZW5jZU11bHRpcGxpZXI6IGdldFVwZ3JhZGVCZW5lZml0KFxyXG4gICAgICAgICAgICBVcGdyYWRlTmFtZS5ORVVSQUxfQUNDRUxFUkFUT1JTLFxyXG4gICAgICAgICAgICBjb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHNbVXBncmFkZU5hbWUuTkVVUkFMX0FDQ0VMRVJBVE9SU11cclxuICAgICAgICApLFxyXG4gICAgICAgIHVwZ3JhZGVFZmZpY2llbmN5TXVsdGlwbGllcjogZ2V0VXBncmFkZUJlbmVmaXQoXHJcbiAgICAgICAgICAgIFVwZ3JhZGVOYW1lLkZPQ1VTX1dJUkVTLFxyXG4gICAgICAgICAgICBjb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHNbVXBncmFkZU5hbWUuRk9DVVNfV0lSRVNdXHJcbiAgICAgICAgKSxcclxuICAgICAgICByZXNlYXJjaENyZWF0aXZpdHlNdWx0aXBsaWVyOiBnZXRSZXNlYXJjaEVtcGxveWVlQ3JlYXRpdml0eU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzKSxcclxuICAgICAgICByZXNlYXJjaENoYXJpc21hTXVsdGlwbGllcjogZ2V0UmVzZWFyY2hFbXBsb3llZUNoYXJpc21hTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXMpLFxyXG4gICAgICAgIHJlc2VhcmNoSW50ZWxsaWdlbmNlTXVsdGlwbGllcjogZ2V0UmVzZWFyY2hFbXBsb3llZUludGVsbGlnZW5jZU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzKSxcclxuICAgICAgICByZXNlYXJjaEVmZmljaWVuY3lNdWx0aXBsaWVyOiBnZXRSZXNlYXJjaEVtcGxveWVlRWZmaWNpZW5jeU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzKSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbXBsb3llZVByb2R1Y3Rpb25CeUpvYnMoXHJcbiAgICBvZmZpY2U6IHtcclxuICAgICAgICBhdmdJbnRlbGxpZ2VuY2U6IG51bWJlcjtcclxuICAgICAgICBhdmdDaGFyaXNtYTogbnVtYmVyO1xyXG4gICAgICAgIGF2Z0NyZWF0aXZpdHk6IG51bWJlcjtcclxuICAgICAgICBhdmdFZmZpY2llbmN5OiBudW1iZXI7XHJcbiAgICAgICAgYXZnTW9yYWxlOiBudW1iZXI7XHJcbiAgICAgICAgYXZnRW5lcmd5OiBudW1iZXI7XHJcbiAgICAgICAgdG90YWxFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICAgICAgZW1wbG95ZWVKb2JzOiB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbnM6IG51bWJlcjtcclxuICAgICAgICAgICAgZW5naW5lZXI6IG51bWJlcjtcclxuICAgICAgICAgICAgYnVzaW5lc3M6IG51bWJlcjtcclxuICAgICAgICAgICAgbWFuYWdlbWVudDogbnVtYmVyO1xyXG4gICAgICAgICAgICByZXNlYXJjaEFuZERldmVsb3BtZW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgIGludGVybjogbnVtYmVyO1xyXG4gICAgICAgICAgICB1bmFzc2lnbmVkOiBudW1iZXI7XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHM6IENvcnBvcmF0aW9uVXBncmFkZUxldmVscyxcclxuICAgIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzXHJcbik6IHtcclxuICAgIG1hbmFnZW1lbnRQcm9kdWN0aW9uOiBudW1iZXI7XHJcbiAgICBvcGVyYXRpb25zUHJvZHVjdGlvbjogbnVtYmVyO1xyXG4gICAgcmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb246IG51bWJlcjtcclxuICAgIGVuZ2luZWVyUHJvZHVjdGlvbjogbnVtYmVyO1xyXG4gICAgYnVzaW5lc3NQcm9kdWN0aW9uOiBudW1iZXI7XHJcbn0ge1xyXG4gICAgY29uc3QgdXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllciA9IGdldFVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXJGb3JFbXBsb3llZVN0YXRzKFxyXG4gICAgICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVscyxcclxuICAgICAgICBkaXZpc2lvblJlc2VhcmNoZXNcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZWZmZWN0aXZlSW50ZWxsaWdlbmNlID0gb2ZmaWNlLmF2Z0ludGVsbGlnZW5jZVxyXG4gICAgICAgICogdXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllci51cGdyYWRlSW50ZWxsaWdlbmNlTXVsdGlwbGllciAqIHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIucmVzZWFyY2hJbnRlbGxpZ2VuY2VNdWx0aXBsaWVyO1xyXG4gICAgY29uc3QgZWZmZWN0aXZlQ2hhcmlzbWEgPSBvZmZpY2UuYXZnQ2hhcmlzbWFcclxuICAgICAgICAqIHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIudXBncmFkZUNoYXJpc21hTXVsdGlwbGllciAqIHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIucmVzZWFyY2hDaGFyaXNtYU11bHRpcGxpZXI7XHJcbiAgICBjb25zdCBlZmZlY3RpdmVDcmVhdGl2aXR5ID0gb2ZmaWNlLmF2Z0NyZWF0aXZpdHlcclxuICAgICAgICAqIHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIudXBncmFkZUNyZWF0aXZpdHlNdWx0aXBsaWVyICogdXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllci5yZXNlYXJjaENyZWF0aXZpdHlNdWx0aXBsaWVyO1xyXG4gICAgY29uc3QgZWZmZWN0aXZlRWZmaWNpZW5jeSA9IG9mZmljZS5hdmdFZmZpY2llbmN5XHJcbiAgICAgICAgKiB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnVwZ3JhZGVFZmZpY2llbmN5TXVsdGlwbGllciAqIHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIucmVzZWFyY2hFZmZpY2llbmN5TXVsdGlwbGllcjtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0aW9uQmFzZSA9IG9mZmljZS5hdmdNb3JhbGUgKiBvZmZpY2UuYXZnRW5lcmd5ICogMWUtNDtcclxuXHJcbiAgICBjb25zdCB0b3RhbE51bWJlck9mRW1wbG95ZWVzID0gb2ZmaWNlLmVtcGxveWVlSm9icy5vcGVyYXRpb25zXHJcbiAgICAgICAgKyBvZmZpY2UuZW1wbG95ZWVKb2JzLmVuZ2luZWVyXHJcbiAgICAgICAgKyBvZmZpY2UuZW1wbG95ZWVKb2JzLmJ1c2luZXNzXHJcbiAgICAgICAgKyBvZmZpY2UuZW1wbG95ZWVKb2JzLm1hbmFnZW1lbnRcclxuICAgICAgICArIG9mZmljZS5lbXBsb3llZUpvYnMucmVzZWFyY2hBbmREZXZlbG9wbWVudFxyXG4gICAgICAgICsgb2ZmaWNlLmVtcGxveWVlSm9icy5pbnRlcm5cclxuICAgICAgICArIG9mZmljZS5lbXBsb3llZUpvYnMudW5hc3NpZ25lZDtcclxuICAgIGNvbnN0IGV4cCA9IG9mZmljZS50b3RhbEV4cGVyaWVuY2UgLyB0b3RhbE51bWJlck9mRW1wbG95ZWVzO1xyXG5cclxuICAgIGNvbnN0IG9wZXJhdGlvbnNQcm9kdWN0aW9uID0gb2ZmaWNlLmVtcGxveWVlSm9icy5vcGVyYXRpb25zICogcHJvZHVjdGlvbkJhc2VcclxuICAgICAgICAqICgwLjYgKiBlZmZlY3RpdmVJbnRlbGxpZ2VuY2UgKyAwLjEgKiBlZmZlY3RpdmVDaGFyaXNtYSArIGV4cCArIDAuNSAqIGVmZmVjdGl2ZUNyZWF0aXZpdHkgKyBlZmZlY3RpdmVFZmZpY2llbmN5KTtcclxuICAgIGNvbnN0IGVuZ2luZWVyUHJvZHVjdGlvbiA9IG9mZmljZS5lbXBsb3llZUpvYnMuZW5naW5lZXIgKiBwcm9kdWN0aW9uQmFzZVxyXG4gICAgICAgICogKGVmZmVjdGl2ZUludGVsbGlnZW5jZSArIDAuMSAqIGVmZmVjdGl2ZUNoYXJpc21hICsgMS41ICogZXhwICsgZWZmZWN0aXZlRWZmaWNpZW5jeSk7XHJcbiAgICBjb25zdCBidXNpbmVzc1Byb2R1Y3Rpb24gPSBvZmZpY2UuZW1wbG95ZWVKb2JzLmJ1c2luZXNzICogcHJvZHVjdGlvbkJhc2VcclxuICAgICAgICAqICgwLjQgKiBlZmZlY3RpdmVJbnRlbGxpZ2VuY2UgKyBlZmZlY3RpdmVDaGFyaXNtYSArIDAuNSAqIGV4cCk7XHJcbiAgICBjb25zdCBtYW5hZ2VtZW50UHJvZHVjdGlvbiA9IG9mZmljZS5lbXBsb3llZUpvYnMubWFuYWdlbWVudCAqIHByb2R1Y3Rpb25CYXNlXHJcbiAgICAgICAgKiAoMiAqIGVmZmVjdGl2ZUNoYXJpc21hICsgZXhwICsgMC4yICogZWZmZWN0aXZlQ3JlYXRpdml0eSArIDAuNyAqIGVmZmVjdGl2ZUVmZmljaWVuY3kpO1xyXG4gICAgY29uc3QgcmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb24gPSBvZmZpY2UuZW1wbG95ZWVKb2JzLnJlc2VhcmNoQW5kRGV2ZWxvcG1lbnQgKiBwcm9kdWN0aW9uQmFzZVxyXG4gICAgICAgICogKDEuNSAqIGVmZmVjdGl2ZUludGVsbGlnZW5jZSArIDAuOCAqIGV4cCArIGVmZmVjdGl2ZUNyZWF0aXZpdHkgKyAwLjUgKiBlZmZlY3RpdmVFZmZpY2llbmN5KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wZXJhdGlvbnNQcm9kdWN0aW9uOiBvcGVyYXRpb25zUHJvZHVjdGlvbixcclxuICAgICAgICBlbmdpbmVlclByb2R1Y3Rpb246IGVuZ2luZWVyUHJvZHVjdGlvbixcclxuICAgICAgICBidXNpbmVzc1Byb2R1Y3Rpb246IGJ1c2luZXNzUHJvZHVjdGlvbixcclxuICAgICAgICBtYW5hZ2VtZW50UHJvZHVjdGlvbjogbWFuYWdlbWVudFByb2R1Y3Rpb24sXHJcbiAgICAgICAgcmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb246IHJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZUVtcGxveWVlU3RhdHMoXHJcbiAgICBvZmZpY2U6IHtcclxuICAgICAgICBhdmdNb3JhbGU6IG51bWJlcjtcclxuICAgICAgICBhdmdFbmVyZ3k6IG51bWJlcjtcclxuICAgICAgICB0b3RhbEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICAgICAgICBudW1FbXBsb3llZXM6IG51bWJlcjtcclxuICAgICAgICBlbXBsb3llZUpvYnM6IFJlY29yZDxFbXBsb3llZVBvc2l0aW9uLCBudW1iZXI+O1xyXG4gICAgICAgIGVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iOiBSZWNvcmQ8RW1wbG95ZWVQb3NpdGlvbiwgbnVtYmVyPjtcclxuICAgIH0sXHJcbiAgICBjb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHM6IENvcnBvcmF0aW9uVXBncmFkZUxldmVscyxcclxuICAgIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzXHJcbik6IFByb21pc2U8e1xyXG4gICAgYXZnQ3JlYXRpdml0eTogbnVtYmVyO1xyXG4gICAgYXZnQ2hhcmlzbWE6IG51bWJlcjtcclxuICAgIGF2Z0ludGVsbGlnZW5jZTogbnVtYmVyO1xyXG4gICAgYXZnRWZmaWNpZW5jeTogbnVtYmVyO1xyXG59PiB7XHJcbiAgICAvLyBJbiA1IGpvYnMgW09QRVJBVElPTlMsIEVOR0lORUVSLCBCVVNJTkVTUywgTUFOQUdFTUVOVCwgUkVTRUFSQ0hfREVWRUxPUE1FTlRdLCB3ZSBuZWVkIGF0IGxlYXN0IDQgam9icyBoYXZpbmcgMVxyXG4gICAgLy8gZW1wbG95ZWUgYXQgdGhlIG1pbmltdW1cclxuICAgIGxldCBudW1iZXJPZkpvYnNIYXZpbmdFbXBsb3llZXMgPSAwO1xyXG4gICAgZm9yIChjb25zdCBbam9iTmFtZSwgbnVtYmVyT2ZFbXBsb3llZXNdIG9mIE9iamVjdC5lbnRyaWVzKG9mZmljZS5lbXBsb3llZUpvYnMpKSB7XHJcbiAgICAgICAgaWYgKGpvYk5hbWUgPT09IFwiSW50ZXJuXCIgfHwgam9iTmFtZSA9PT0gXCJVbmFzc2lnbmVkXCIgfHwgbnVtYmVyT2ZFbXBsb3llZXMgPT09IDApIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICsrbnVtYmVyT2ZKb2JzSGF2aW5nRW1wbG95ZWVzO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bWJlck9mSm9ic0hhdmluZ0VtcGxveWVlcyA8PSAzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2UgbmVlZCBhdCBsZWFzdCA0IGpvYnMgaGF2aW5nIDEgZW1wbG95ZWUgYXQgdGhlIG1pbmltdW1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllciA9IGdldFVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXJGb3JFbXBsb3llZVN0YXRzKFxyXG4gICAgICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVscyxcclxuICAgICAgICBkaXZpc2lvblJlc2VhcmNoZXNcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdGlvbkJhc2UgPSBvZmZpY2UuYXZnTW9yYWxlICogb2ZmaWNlLmF2Z0VuZXJneSAqIDFlLTQ7XHJcbiAgICBjb25zdCBleHAgPSBvZmZpY2UudG90YWxFeHBlcmllbmNlIC8gb2ZmaWNlLm51bUVtcGxveWVlcztcclxuICAgIGNvbnN0IGYxID0gZnVuY3Rpb24gKFtlZmZlY3RpdmVDcmVhdGl2aXR5LCBlZmZlY3RpdmVDaGFyaXNtYSwgZWZmZWN0aXZlSW50ZWxsaWdlbmNlLCBlZmZlY3RpdmVFZmZpY2llbmN5XTogbnVtYmVyW10pIHtcclxuICAgICAgICByZXR1cm4gb2ZmaWNlLmVtcGxveWVlSm9ic1tFbXBsb3llZVBvc2l0aW9uLk9QRVJBVElPTlNdICogcHJvZHVjdGlvbkJhc2VcclxuICAgICAgICAgICAgKiAoMC42ICogZWZmZWN0aXZlSW50ZWxsaWdlbmNlICsgMC4xICogZWZmZWN0aXZlQ2hhcmlzbWEgKyBleHAgKyAwLjUgKiBlZmZlY3RpdmVDcmVhdGl2aXR5ICsgZWZmZWN0aXZlRWZmaWNpZW5jeSlcclxuICAgICAgICAgICAgLSBvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2JbRW1wbG95ZWVQb3NpdGlvbi5PUEVSQVRJT05TXTtcclxuICAgIH07XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCBmMiA9IGZ1bmN0aW9uIChbZWZmZWN0aXZlQ3JlYXRpdml0eSwgZWZmZWN0aXZlQ2hhcmlzbWEsIGVmZmVjdGl2ZUludGVsbGlnZW5jZSwgZWZmZWN0aXZlRWZmaWNpZW5jeV06IG51bWJlcltdKSB7XHJcbiAgICAgICAgcmV0dXJuIG9mZmljZS5lbXBsb3llZUpvYnNbRW1wbG95ZWVQb3NpdGlvbi5FTkdJTkVFUl0gKiBwcm9kdWN0aW9uQmFzZVxyXG4gICAgICAgICAgICAqIChlZmZlY3RpdmVJbnRlbGxpZ2VuY2UgKyAwLjEgKiBlZmZlY3RpdmVDaGFyaXNtYSArIDEuNSAqIGV4cCArIGVmZmVjdGl2ZUVmZmljaWVuY3kpXHJcbiAgICAgICAgICAgIC0gb2ZmaWNlLmVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iW0VtcGxveWVlUG9zaXRpb24uRU5HSU5FRVJdO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgIGNvbnN0IGYzID0gZnVuY3Rpb24gKFtlZmZlY3RpdmVDcmVhdGl2aXR5LCBlZmZlY3RpdmVDaGFyaXNtYSwgZWZmZWN0aXZlSW50ZWxsaWdlbmNlLCBlZmZlY3RpdmVFZmZpY2llbmN5XTogbnVtYmVyW10pIHtcclxuICAgICAgICByZXR1cm4gb2ZmaWNlLmVtcGxveWVlSm9ic1tFbXBsb3llZVBvc2l0aW9uLkJVU0lORVNTXSAqIHByb2R1Y3Rpb25CYXNlXHJcbiAgICAgICAgICAgICogKDAuNCAqIGVmZmVjdGl2ZUludGVsbGlnZW5jZSArIGVmZmVjdGl2ZUNoYXJpc21hICsgMC41ICogZXhwKVxyXG4gICAgICAgICAgICAtIG9mZmljZS5lbXBsb3llZVByb2R1Y3Rpb25CeUpvYltFbXBsb3llZVBvc2l0aW9uLkJVU0lORVNTXTtcclxuICAgIH07XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICBjb25zdCBmNCA9IGZ1bmN0aW9uIChbZWZmZWN0aXZlQ3JlYXRpdml0eSwgZWZmZWN0aXZlQ2hhcmlzbWEsIGVmZmVjdGl2ZUludGVsbGlnZW5jZSwgZWZmZWN0aXZlRWZmaWNpZW5jeV06IG51bWJlcltdKSB7XHJcbiAgICAgICAgcmV0dXJuIG9mZmljZS5lbXBsb3llZUpvYnNbRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5UXSAqIHByb2R1Y3Rpb25CYXNlXHJcbiAgICAgICAgICAgICogKDIgKiBlZmZlY3RpdmVDaGFyaXNtYSArIGV4cCArIDAuMiAqIGVmZmVjdGl2ZUNyZWF0aXZpdHkgKyAwLjcgKiBlZmZlY3RpdmVFZmZpY2llbmN5KVxyXG4gICAgICAgICAgICAtIG9mZmljZS5lbXBsb3llZVByb2R1Y3Rpb25CeUpvYltFbXBsb3llZVBvc2l0aW9uLk1BTkFHRU1FTlRdO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgIGNvbnN0IGY1ID0gZnVuY3Rpb24gKFtlZmZlY3RpdmVDcmVhdGl2aXR5LCBlZmZlY3RpdmVDaGFyaXNtYSwgZWZmZWN0aXZlSW50ZWxsaWdlbmNlLCBlZmZlY3RpdmVFZmZpY2llbmN5XTogbnVtYmVyW10pIHtcclxuICAgICAgICByZXR1cm4gb2ZmaWNlLmVtcGxveWVlSm9ic1tFbXBsb3llZVBvc2l0aW9uLlJFU0VBUkNIX0RFVkVMT1BNRU5UXSAqIHByb2R1Y3Rpb25CYXNlXHJcbiAgICAgICAgICAgICogKDEuNSAqIGVmZmVjdGl2ZUludGVsbGlnZW5jZSArIDAuOCAqIGV4cCArIGVmZmVjdGl2ZUNyZWF0aXZpdHkgKyAwLjUgKiBlZmZlY3RpdmVFZmZpY2llbmN5KVxyXG4gICAgICAgICAgICAtIG9mZmljZS5lbXBsb3llZVByb2R1Y3Rpb25CeUpvYltFbXBsb3llZVBvc2l0aW9uLlJFU0VBUkNIX0RFVkVMT1BNRU5UXTtcclxuICAgIH07XHJcbiAgICBsZXQgc29sdmVyUmVzdWx0OiBDZXJlc1NvbHZlclJlc3VsdCA9IHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgIHg6IFtdLFxyXG4gICAgICAgIHJlcG9ydDogXCJzdHJpbmdcIixcclxuICAgIH07XHJcbiAgICBjb25zdCBzb2x2ZXIgPSBuZXcgQ2VyZXMoKTtcclxuICAgIGF3YWl0IHNvbHZlci5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNvbHZlci5hZGRfZnVuY3Rpb24oZjEpO1xyXG4gICAgICAgIHNvbHZlci5hZGRfZnVuY3Rpb24oZjIpO1xyXG4gICAgICAgIHNvbHZlci5hZGRfZnVuY3Rpb24oZjMpO1xyXG4gICAgICAgIHNvbHZlci5hZGRfZnVuY3Rpb24oZjQpO1xyXG4gICAgICAgIHNvbHZlci5hZGRfZnVuY3Rpb24oZjUpO1xyXG4gICAgICAgIGNvbnN0IGd1ZXNzID0gWzc1LCA3NSwgNzUsIDc1XTtcclxuICAgICAgICBzb2x2ZXJSZXN1bHQgPSBzb2x2ZXIuc29sdmUoZ3Vlc3MpITtcclxuICAgICAgICBzb2x2ZXIucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICAgIGlmICghc29sdmVyUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHNvbHZlclJlc3VsdCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogQ2Fubm90IGZpbmQgaGlkZGVuIHN0YXRzIG9mIGVtcGxveWVlLiBPZmZpY2U6ICR7SlNPTi5zdHJpbmdpZnkob2ZmaWNlKX1gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXZnQ3JlYXRpdml0eTogc29sdmVyUmVzdWx0LnhbMF1cclxuICAgICAgICAgICAgLyAodXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllci51cGdyYWRlQ3JlYXRpdml0eU11bHRpcGxpZXIgKiB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnJlc2VhcmNoQ3JlYXRpdml0eU11bHRpcGxpZXIpLFxyXG4gICAgICAgIGF2Z0NoYXJpc21hOiBzb2x2ZXJSZXN1bHQueFsxXVxyXG4gICAgICAgICAgICAvICh1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnVwZ3JhZGVDaGFyaXNtYU11bHRpcGxpZXIgKiB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnJlc2VhcmNoQ2hhcmlzbWFNdWx0aXBsaWVyKSxcclxuICAgICAgICBhdmdJbnRlbGxpZ2VuY2U6IHNvbHZlclJlc3VsdC54WzJdXHJcbiAgICAgICAgICAgIC8gKHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIudXBncmFkZUludGVsbGlnZW5jZU11bHRpcGxpZXIgKiB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnJlc2VhcmNoSW50ZWxsaWdlbmNlTXVsdGlwbGllciksXHJcbiAgICAgICAgYXZnRWZmaWNpZW5jeTogc29sdmVyUmVzdWx0LnhbM11cclxuICAgICAgICAgICAgLyAodXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllci51cGdyYWRlRWZmaWNpZW5jeU11bHRpcGxpZXIgKiB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnJlc2VhcmNoRWZmaWNpZW5jeU11bHRpcGxpZXIpLFxyXG4gICAgfTtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiQUFLQSxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGFBQWE7QUFHZixJQUFLLFdBQUwsa0JBQUtBLGNBQUw7QUFDSCxFQUFBQSxVQUFBLFdBQVE7QUFDUixFQUFBQSxVQUFBLGVBQVk7QUFDWixFQUFBQSxVQUFBLGNBQVc7QUFDWCxFQUFBQSxVQUFBLGNBQVc7QUFDWCxFQUFBQSxVQUFBLFlBQVM7QUFDVCxFQUFBQSxVQUFBLGNBQVc7QUFOSCxTQUFBQTtBQUFBLEdBQUE7QUFTTCxJQUFLLFlBQUwsa0JBQUtD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QSxJQUNsQyxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFDVCxHQUFHLENBQUM7QUFBQSxJQUNKLFFBQVE7QUFBQSxFQUNaO0FBQ0EsUUFBTSxTQUFTLElBQUksTUFBTTtBQUN6QixRQUFNLE9BQU8sUUFBUSxLQUFLLFdBQVk7QUFDbEMsV0FBTyxhQUFhLEVBQUU7QUFDdEIsV0FBTyxhQUFhLEVBQUU7QUFDdEIsV0FBTyxhQUFhLEVBQUU7QUFDdEIsV0FBTyxhQUFhLEVBQUU7QUFDdEIsV0FBTyxhQUFhLEVBQUU7QUFDdEIsVUFBTSxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtBQUM3QixtQkFBZSxPQUFPLE1BQU0sS0FBSztBQUNqQyxXQUFPLE9BQU87QUFBQSxFQUNsQixDQUFDO0FBQ0QsTUFBSSxDQUFDLGFBQWEsU0FBUztBQUN2QixZQUFRLE1BQU0sWUFBWTtBQUMxQixVQUFNLElBQUksTUFBTSx3REFBd0QsS0FBSyxVQUFVLE1BQU0sQ0FBQyxFQUFFO0FBQUEsRUFDcEc7QUFDQSxTQUFPO0FBQUEsSUFDSCxlQUFlLGFBQWEsRUFBRSxDQUFDLEtBQ3hCLDZCQUE2Qiw4QkFBOEIsNkJBQTZCO0FBQUEsSUFDL0YsYUFBYSxhQUFhLEVBQUUsQ0FBQyxLQUN0Qiw2QkFBNkIsNEJBQTRCLDZCQUE2QjtBQUFBLElBQzdGLGlCQUFpQixhQUFhLEVBQUUsQ0FBQyxLQUMxQiw2QkFBNkIsZ0NBQWdDLDZCQUE2QjtBQUFBLElBQ2pHLGVBQWUsYUFBYSxFQUFFLENBQUMsS0FDeEIsNkJBQTZCLDhCQUE4Qiw2QkFBNkI7QUFBQSxFQUNuRztBQUNKOyIsCiAgIm5hbWVzIjogWyJDaXR5TmFtZSIsICJDb3JwU3RhdGUiLCAiTWF0ZXJpYWxOYW1lIiwgIlVubG9ja05hbWUiLCAiVXBncmFkZU5hbWUiLCAiRW1wbG95ZWVQb3NpdGlvbiIsICJSZXNlYXJjaE5hbWUiLCAiSW5kdXN0cnlUeXBlIl0KfQo=
