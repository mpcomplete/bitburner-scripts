import { formatMoney } from 'src/helpers.js'

/** @type NS **/
let ns;

const cities = ['Aevum', 'Chongqing', 'Sector-12', 'New Tokyo', 'Ishima', 'Volhaven'];
const sum = a => a.reduce((acc, x) => acc + x);

let options;
let totalCost = 0;
const argsSchema = [
  ['s', null], // sell amount (can be MAX)
  ['n', false], // no buying, just cost print
  ['p', 0], // phase
  ['fu', null], // force upgrades to this
  ['mm', 1], // materials multiplier
];

// Step 1: Agri phase=0
// - upgrades to 2
// - employees 2/2/2/1
// - coffee+parties
// - warehouse buys at 600
// Step 2: Agri (100b) phase=1
// - employees 2/2/4/1
// - warehouse to 1200
// Step 3: Tobacco (500b) phase=0
// - upgrades = 10
// - employees amt=10
// - warehouse buys at wh=1
// Step 4: Tobacco (7t) phase=1
// - employes amt=25, researchers=60
// Step 5: Tobacco (12t) phase=2
// - employes amt=40, researchers=90

export async function main(_ns) {
  ns = _ns;

  options = ns.flags(argsSchema);
  options.noBuys = options.n;
  options.sellAmt = options.s;
  options.phase = options.p;

  const corp = ns.corporation.getCorporation();
  const division = pickDivision(corp);
  const divName = division.name;
  totalCost = 0;

  let aDiv = corp.divisions.find(dn => ns.corporation.getDivision(dn).type == 'Agriculture');
  if (options.s) {
    ns.tprint(`Selling all Agri materials: ${options.s} per cycle`);
    for (var cityName of cities) {
      ns.corporation.sellMaterial(aDiv, cityName, 'Plants', options.sellAmt, 'MP');
      ns.corporation.sellMaterial(aDiv, cityName, 'Food', options.sellAmt, 'MP');
    }
  }

  if (division.type == 'Agriculture') {
    const ups = options.fu || (options.phase == 0 ? 1 : 3);
    const upgradeGoals = {
      'Smart Factories': ups,
      'Smart Storage': 0,
      'DreamSense': 0,
      'Wilson Analytics': 0,
      'Nuoptimal Nootropic Injector Implants': ups,
      'Speech Processor Implants': ups,
      'Neural Accelerators': ups,
      'FocusWires': ups,
      'ABC SalesBots': 0,
      'Project Insight': 0,
    }
    const employeeGoals = {
      'other': options.phase == 0 ? [1, 1, 1, 0, 0, 0] : [2, 1, 3, 1, 0, 1],
    };
    const materialGoals = { // ???
      'Hardware': 450 * options.mm,
      'Robots': 35 * options.mm,
      'AI Cores': 300 * options.mm,
      'Real Estate': 12000 * options.mm,
    }

    await buyUpgrades(divName, upgradeGoals);
    await hireEmployees(divName, employeeGoals, options.phase == 0);  // wait for morale before spending all our cash in first phase
    await setupWarehouse(divName, materialGoals, options.phase == 0 ? 400 : 800);
  } else if (division.type == 'Tobacco') {
    const aevum = [15, 20, 40][options.phase];
    const researchers = [10, 40, 90][options.phase];
    const ups = options.fu || [10, 25, 75][options.phase];
    const upgradeGoals = {
      'Smart Factories': 10,
      'Smart Storage': 10,
      'DreamSense': 0,
      'Wilson Analytics': 0,
      'Nuoptimal Nootropic Injector Implants': ups,
      'Speech Processor Implants': ups,
      'Neural Accelerators': ups,
      'FocusWires': ups,
      'ABC SalesBots': 0,
      'Project Insight': 0,
    };
    const employeeGoals = {
      'Aevum': [aevum, aevum, aevum, aevum, aevum, Math.floor(aevum/10)],
      'other': [1, 1, 1, 1, researchers, Math.floor(researchers/10)],
    };
    const materialGoals = { //costs $40b
      'Hardware': 2000 * options.mm,
      'Robots': 600 * options.mm,
      'AI Cores': 1200 * options.mm,
      'Real Estate': 40000 * options.mm,
    }
    await buyUpgrades(divName, upgradeGoals);
    await hireEmployees(divName, employeeGoals, false);
    await setupWarehouse(divName, materialGoals, options.phase == 0 ? 2500 : 5000);
  }
  ns.tprint(`Corp costs: ${formatMoney(totalCost)}`);
}

function addCost(str, cost) {
  totalCost += cost;
  ns.tprint(`${str}; costs ${formatMoney(cost)}; total cost ${formatMoney(totalCost)}`);
}

/** @param {Corporation} corp **/
function pickDivision(corp) {
  let divName = 'A';
  if (corp.divisions.length == 0) {
    ns.corporation.expandIndustry('Agriculture', 'A');
  } else if (corp.divisions.length == 1) {
    divName = corp.divisions[0];
  } else {
    let divs = corp.divisions.map(dn => ns.corporation.getDivision(dn));
    divName = divs.find(d => d.type == 'Tobacco').name;
  }

  // One-time setup.
  let division = ns.corporation.getDivision(divName);
  if (!ns.corporation.hasUnlock('Smart Supply'))
    ns.corporation.purchaseUnlock('Smart Supply');
  if (ns.corporation.getHireAdVertCount(divName) < 1)
    ns.corporation.hireAdVert(divName);
  for (var cityName of cities) {
    if (!division.cities.includes(cityName))
      ns.corporation.expandCity(divName, cityName);
    if (!ns.corporation.hasWarehouse(divName, cityName))
      ns.corporation.purchaseWarehouse(divName, cityName);
  }
  return division;
}

async function buyUpgrades(divName, upgradeGoals) {
  let cost = 0;
  for (var up in upgradeGoals) {
    const goal = upgradeGoals[up] || 0;
    cost += ns.corporation.getUpgradeLevelCost(up) * Math.max(0, goal - ns.corporation.getUpgradeLevel(up));
    if (!options.noBuys) {
      while (ns.corporation.getUpgradeLevel(up) < goal)
        ns.corporation.levelUpgrade(up);
    }
  }
  addCost(`Upgrading stuff (estimated)`, cost);
}

async function hireEmployees(divName, employeeGoals, waitForMorale) {
  // Upgrade office size first.
  for (var cityName of cities) {
    let office = ns.corporation.getOffice(divName, cityName);
    let goals = employeeGoals[cityName] || employeeGoals['other'];
    let goalSize = sum(goals);
    let employeesNeeded = goalSize - office.size;
    if (employeesNeeded > 0) {
      addCost(`Hiring employees in ${divName};${cityName} to ${goalSize}`,
        ns.corporation.getOfficeSizeUpgradeCost(divName, cityName, employeesNeeded));
      if (!options.noBuys)
        ns.corporation.upgradeOfficeSize(divName, cityName, employeesNeeded);
    }
  }
  // Hire and assign employees.
  for (var cityName of cities) {
    while (ns.corporation.hireEmployee(divName, cityName))
      ;
    while (await assignJob(divName, cityName, employeeGoals))
      ;
  }
  for (var cityName of cities) {
    while (waitForMorale && await waitForEmployeeMorale(divName, cityName))
      ;
  }
}

async function assignJob(divName, cityName, employeeGoals) {
  const jobNames = ['Operations', 'Engineer', 'Business', 'Management', 'Research & Development', 'Intern'];
  let goals = employeeGoals[cityName] || employeeGoals['other'];
  for (var i = 0; i < 6; i++)
    ns.corporation.setAutoJobAssignment(divName, cityName, jobNames[i], 0);
  for (var i = 0; i < 6; i++)
    ns.corporation.setAutoJobAssignment(divName, cityName, jobNames[i], goals[i]);
  return false;
}

async function waitForEmployeeMorale(divName, cityName) {
  let office = ns.corporation.getOffice(divName, cityName);
  if (office.avgMorale < 95) {
    ns.tprint(`Waiting for employee morale in to hit 95%. Current average in ${cityName}: ${office.avgMorale}.`);
    await ns.sleep(10000);
    return true;
  }
  return false;
}

async function setupWarehouse(divName, materialGoals, warehouseSize) {
  for (var cityName of cities) {
    let warehouse = ns.corporation.getWarehouse(divName, cityName);
    let perLevel = warehouse.size / warehouse.level;
    let timesToBuy = Math.max(0, warehouseSize - warehouse.size) / perLevel;
    addCost(`Ensuring ${warehouseSize} storage in ${cityName} (${timesToBuy} upgrades)`,
      ns.corporation.getUpgradeWarehouseCost(divName, cityName) * timesToBuy);
    if (!options.noBuys) {
      while (true) {
        let warehouse = ns.corporation.getWarehouse(divName, cityName);
        if (warehouse.size >= warehouseSize)
          break;
        ns.corporation.upgradeWarehouse(divName, cityName);
        await ns.sleep(10);
      }
    }
  }
  for (var cityName of cities) {
    for (var matName of Object.keys(materialGoals)) {
      let mat = ns.corporation.getMaterial(divName, cityName, matName);
      let need = Math.max(0, materialGoals[matName] - mat.stored);
      if (need > 0)
        ns.tprint(`Buying ${need} ${matName} in ${cityName}; have ${mat.stored}, want ${materialGoals[matName]}`);
      if (!options.noBuys)
        ns.corporation.bulkPurchase(divName, cityName, matName, need);
    }
  }
}