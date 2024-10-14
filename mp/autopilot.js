/** @param {NS} ns */
export async function main(ns) {
  var corp = ns.corporation.getCorporation();
  if (!corp)
    return null;

  var numDivs = corp.divisions.length;
  if (numDivs >= 3) {
    ns.run("/src/cat/corporation.js", 1, "--improveAllDivisions");
  }
  await ns.sleep(1000);
  ns.run("/src/cat/daemon.js");
}