import { NetscriptExtension } from "/libs/NetscriptExtension";
import { DAEMON_SCRIPT_NAME } from "/libs/constants";
import { parseNumber } from "/libs/utils";
import { UpgradeName } from "/corporationFormulas";
import { clearPurchaseOrders, DivisionName, hasDivision } from "/corporationUtils";
import * as testingTools from "/corporationTestingTools";
import { exposeGameInternalObjects } from "/exploits";
let ns;
let nsx;
let doc;
const enableTestingTools = true;
let runCorpMaintain = false;
let runDelScripts = false;
let reload = false;
let runCorpRound = false;
let runCorpTest = false;
function rerun(ns2) {
  ns2.spawn(ns2.getScriptName(), { spawnDelay: 100 });
}
function removeTestingTool() {
  let testingToolsDiv = doc.querySelector("#testing-tools");
  if (testingToolsDiv) {
    testingToolsDiv.remove();
  }
}
function createTestingTool() {
  if (enableTestingTools) {
    removeTestingTool();
    const root = doc.querySelector("#root");
    const testingToolsTemplate = doc.createElement("template");
    testingToolsTemplate.innerHTML = `
<div id="testing-tools">
    <div>
        <button id="btn-corp-maintain">CorpMaintain</button>
        <button id="btn-unlimited-bonus-time">UnlimitedBonusTime</button>
        <button id="btn-remove-bonus-time">RemoveBonusTime</button>
        <button id="btn-corp-round">CorpRound</button>
        <button id="btn-corp-test">CorpTest</button>
        <button id="btn-import-save">ImportSave</button>
        <button id="btn-delete-all-scripts">DelScripts</button>
        <button id="btn-reload">Reload</button>
        <button id="btn-exit">Exit</button>
    </div>
    <div>
        <label for="testing-tools-input">Input:</label>
        <input id="testing-tools-input" type="text"/>
        <input id="testing-tools-file-input" type="file"/>
        <button id="btn-funds">Funds</button>
        <button id="btn-smart-factories">SmartFactories</button>
        <button id="btn-smart-storage">SmartStorage</button>
        <select id="select-save-data">
            <option value="current">Current</option>
        </select>
        <button id="btn-import-save-data">Import</button>
        <button id="btn-export-save-data">Export</button>
        <button id="btn-delete-save-data">Delete</button>
    </div>
    <div>
        <label for="testing-tools-divisions">Division:</label>
        <select name="divisions" id="testing-tools-divisions">
            <option value="Agriculture">Agriculture</option>
            <option value="Chemical">Chemical</option>
            <option value="Tobacco">Tobacco</option>
        </select>
        <button id="btn-rp">RP</button>
        <button id="btn-office">Office</button>
        <button id="btn-warehouse">Warehouse</button>
        <button id="btn-boost-materials">BoostMats</button>
        <button id="btn-clear-boost-materials">ClearBoostMats</button>
        <button id="btn-clear-input-materials">ClearInputMats</button>
        <button id="btn-clear-output-materials">ClearOutputMats</button>
        <button id="btn-clear-storage">ClearStorage</button>
    </div>
    <div>
    </div>
    <style>
        #testing-tools {
            transform: translate(850px, 5px);z-index: 9999;display: flex;flex-flow: wrap;position: fixed;min-width: 150px;
            max-width: 840px;min-height: 33px;border: 1px solid rgb(68, 68, 68);color: white;
        }
        #testing-tools > div {
            width: 100%;display: flex;
        }
        #btn-corp-test {
            margin-right: auto;
        }
        #btn-import-save {
            margin-left: auto;
        }
        #btn-funds {
            margin-left: 10px;
        }
        #btn-rp {
            margin-left: 10px;
        }
        #testing-tools-file-input {
            display: none;
        }
        #select-save-data {
            min-width: 195px;
        }
    </style>
</div>
        `.trim();
    root.appendChild(testingToolsTemplate.content.firstChild);
    const testingToolsDiv = doc.querySelector("#testing-tools");
    const savaDataSelectElement = doc.getElementById("select-save-data");
    const reloadSaveDataSelectElement = async () => {
      const keys = await testingTools.getAllSaveDataKeys();
      keys.sort((a, b) => {
        if (a === "save") {
          return 1;
        }
        return b.toString().localeCompare(a.toString());
      });
      savaDataSelectElement.innerHTML = "";
      for (const key of keys) {
        const option = document.createElement("option");
        option.text = key;
        option.value = key;
        savaDataSelectElement.add(option);
      }
    };
    reloadSaveDataSelectElement().then();
    doc.getElementById("btn-corp-maintain").addEventListener("click", function() {
      runCorpMaintain = true;
    });
    doc.getElementById("btn-unlimited-bonus-time").addEventListener("click", function() {
      testingTools.setUnlimitedBonusTime();
    });
    doc.getElementById("btn-remove-bonus-time").addEventListener("click", function() {
      testingTools.removeBonusTime();
    });
    doc.getElementById("btn-corp-round").addEventListener("click", function() {
      runCorpRound = true;
    });
    doc.getElementById("btn-corp-test").addEventListener("click", function() {
      runCorpTest = true;
    });
    doc.getElementById("btn-import-save").addEventListener("click", function() {
      const fileInput = doc.getElementById("testing-tools-file-input");
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e2) {
          const target = e2.target;
          if (target === null) {
            throw new Error("Error importing file");
          }
          const result = target.result;
          const indexedDbRequest = window.indexedDB.open("bitburnerSave", 1);
          indexedDbRequest.onsuccess = function() {
            const db = this.result;
            if (!db) {
              throw new Error("Cannot access database");
            }
            const objectStore = db.transaction(["savestring"], "readwrite").objectStore("savestring");
            const request = objectStore.put(
              result instanceof ArrayBuffer ? new Uint8Array(result) : result,
              "save"
            );
            request.onsuccess = () => {
              globalThis.setTimeout(() => globalThis.location.reload(), 1e3);
            };
          };
        };
        if (file.name.endsWith(".gz")) {
          reader.readAsArrayBuffer(file);
        } else {
          reader.readAsText(file);
        }
      };
      fileInput.click();
    });
    doc.getElementById("btn-delete-all-scripts").addEventListener("click", function() {
      runDelScripts = true;
    });
    doc.getElementById("btn-reload").addEventListener("click", function() {
      reload = true;
      testingToolsDiv.remove();
    });
    doc.getElementById("btn-exit").addEventListener("click", function() {
      testingToolsDiv.remove();
    });
    const getInputValue = function() {
      return doc.querySelector("#testing-tools-input").value;
    };
    const useInputValueAsNumber = function(callback) {
      const value = parseNumber(getInputValue());
      if (Number.isNaN(value)) {
        alert("Invalid input");
        return;
      }
      callback(value);
    };
    const useInputValueAsString = function(callback) {
      const value = getInputValue();
      if (!value) {
        alert("Invalid input");
        return;
      }
      callback(value);
    };
    const getDivisionName = function() {
      return doc.querySelector("#testing-tools-divisions").value;
    };
    doc.getElementById("btn-funds").addEventListener("click", function() {
      useInputValueAsNumber((inputValue) => {
        testingTools.setFunds(inputValue);
      });
    });
    doc.getElementById("btn-smart-factories").addEventListener("click", function() {
      useInputValueAsNumber((inputValue) => {
        testingTools.setUpgradeLevel(UpgradeName.SMART_FACTORIES, inputValue);
      });
    });
    doc.getElementById("btn-smart-storage").addEventListener("click", function() {
      useInputValueAsNumber((inputValue) => {
        testingTools.setUpgradeLevel(UpgradeName.SMART_STORAGE, inputValue);
      });
    });
    doc.getElementById("btn-import-save-data").addEventListener("click", function() {
      testingTools.getSaveData(savaDataSelectElement.value).then((saveData) => {
        if (!saveData) {
          return;
        }
        testingTools.updateSaveData("save", saveData).then(() => {
          ns.killall("home");
          const currentAllServers = globalThis.AllServers.saveAllServers();
          globalThis.SaveObject.loadGame(saveData);
          setTimeout(() => {
            globalThis.AllServers.loadAllServers(currentAllServers);
            ns.exec("daemon.js", "home", 1, "--maintainCorporation");
          }, 1e3);
        });
      });
    });
    doc.getElementById("btn-export-save-data").addEventListener("click", async function() {
      testingTools.insertSaveData(await globalThis.SaveObject.saveObject.getSaveData(true, true)).then(() => {
        reloadSaveDataSelectElement().then();
      });
    });
    doc.getElementById("btn-delete-save-data").addEventListener("click", function() {
      const key = savaDataSelectElement.value;
      if (!key) {
        return;
      }
      if (key === "save") {
        alert(`You cannot delete the built-in "save"`);
        return;
      }
      testingTools.deleteSaveData(savaDataSelectElement.value).then(() => {
        reloadSaveDataSelectElement().then();
      });
    });
    doc.getElementById("btn-rp").addEventListener("click", function() {
      useInputValueAsNumber((inputValue) => {
        testingTools.setResearchPoints(getDivisionName(), inputValue);
      });
    });
    doc.getElementById("btn-office").addEventListener("click", function() {
      useInputValueAsString((inputValue) => {
        const employeeJobs = inputValue.trim().split(",").map((value) => parseNumber(value)).filter((value) => !Number.isNaN(value));
        if (employeeJobs.length !== 5) {
          alert("Invalid input");
          return;
        }
        testingTools.setOfficeSetup(getDivisionName(), employeeJobs);
      });
    });
    doc.getElementById("btn-warehouse").addEventListener("click", function() {
      useInputValueAsNumber((inputValue) => {
        testingTools.setWarehouseLevel(getDivisionName(), inputValue);
      });
    });
    doc.getElementById("btn-boost-materials").addEventListener("click", function() {
      useInputValueAsString((inputValue) => {
        const boostMaterials = inputValue.trim().split(",").map((value) => parseNumber(value)).filter((value) => !Number.isNaN(value));
        if (boostMaterials.length !== 4) {
          alert("Invalid input");
          return;
        }
        testingTools.setBoostMaterials(getDivisionName(), boostMaterials);
      });
    });
    doc.getElementById("btn-clear-boost-materials").addEventListener("click", function() {
      testingTools.setBoostMaterials(getDivisionName(), [0, 0, 0, 0]);
    });
    doc.getElementById("btn-clear-input-materials").addEventListener("click", function() {
      testingTools.clearMaterials(getDivisionName(), { input: true, output: false });
    });
    doc.getElementById("btn-clear-output-materials").addEventListener("click", function() {
      testingTools.clearMaterials(getDivisionName(), { input: false, output: true });
    });
    doc.getElementById("btn-clear-storage").addEventListener("click", function() {
      clearPurchaseOrders(ns);
      testingTools.setBoostMaterials(getDivisionName(), [0, 0, 0, 0]);
      testingTools.clearMaterials(getDivisionName(), { input: true, output: true });
    });
  }
}
async function main(nsContext) {
  exposeGameInternalObjects();
  ns = nsContext;
  nsx = new NetscriptExtension(ns);
  nsx.killProcessesSpawnFromSameScript();
  ns.disableLog("ALL");
  ns.clearLog();
  doc = eval("document");
  const hook0 = doc.getElementById("overview-extra-hook-0");
  const hook1 = doc.getElementById("overview-extra-hook-1");
  nsx.addAtExitCallback(() => {
    hook0.innerText = "";
    hook1.innerText = "";
    removeTestingTool();
  });
  const headers = [];
  const values = [];
  headers.push("<div>ServerLoad</div>");
  values.push("<div id='hud-server-load'>0%</div>");
  if (ns.stock.hasWSEAccount()) {
    headers.push("<div>StockWorth</div>");
    values.push("<div id='hud-stock-worth'>0</div>");
  }
  if (ns.corporation.hasCorporation()) {
    headers.push("<div>InvestmentOffer</div>");
    values.push("<div id='hud-investment-offer'>0</div>");
    headers.push("<div>CorpMaintain</div>");
    values.push("<div id='hud-corp-maintain'>false</div>");
  }
  hook0.innerHTML = headers.join("");
  hook1.innerHTML = values.join("");
  if (globalThis.Player) {
    createTestingTool();
  }
  while (true) {
    try {
      let totalMaxRAMOfAllRunners = 0;
      let totalUsedRAMOfAllRunners = 0;
      nsx.scanBFS("home").filter((host) => {
        return ns.getServerMaxRam(host.hostname) > 0 && ns.hasRootAccess(host.hostname);
      }).forEach((runner) => {
        totalMaxRAMOfAllRunners += ns.getServerMaxRam(runner.hostname);
        totalUsedRAMOfAllRunners += ns.getServerUsedRam(runner.hostname);
      });
      doc.getElementById("hud-server-load").innerText = `${(totalUsedRAMOfAllRunners / totalMaxRAMOfAllRunners * 100).toFixed(2)}%`;
      if (ns.stock.hasWSEAccount()) {
        const hudStockWorthValue = doc.getElementById("hud-stock-worth");
        if (hudStockWorthValue === null) {
          rerun(ns);
          return;
        }
        const stockStats = nsx.calculateStockStats();
        hudStockWorthValue.innerText = ns.formatNumber(stockStats.currentWorth);
      }
      if (ns.corporation.hasCorporation()) {
        const hudInvestmentOfferValue = doc.getElementById("hud-investment-offer");
        if (hudInvestmentOfferValue === null) {
          rerun(ns);
          return;
        }
        hudInvestmentOfferValue.innerText = ns.formatNumber(ns.corporation.getInvestmentOffer().funds);
        let isDaemonRunning = false;
        ns.ps().forEach((process) => {
          if (process.filename !== DAEMON_SCRIPT_NAME) {
            return;
          }
          if (process.args.includes("--maintainCorporation")) {
            isDaemonRunning = true;
          }
        });
        doc.getElementById("hud-corp-maintain").innerText = `${isDaemonRunning}`;
        if (runCorpMaintain) {
          if (ns.exec("daemon.js", "home", 1, "--maintainCorporation") === 0) {
            ns.toast("Failed to run daemon.js --maintainCorporation");
          }
          runCorpMaintain = false;
        }
        if (runDelScripts) {
          ns.killall("home", true);
          if (ns.exec("tools.js", "home", 1, "--deleteAllScripts") === 0) {
            ns.toast("Failed to run tools.js --deleteAllScripts");
          }
          runDelScripts = false;
        }
        if (reload) {
          rerun(ns);
          reload = false;
        }
        if (runCorpRound) {
          if (!hasDivision(ns, DivisionName.CHEMICAL)) {
            if (ns.exec("corporation.js", "home", 1, "--round2", "--benchmark") === 0) {
              ns.toast("Failed to run corporation.js --round2 --benchmark");
            }
          } else if (!hasDivision(ns, DivisionName.TOBACCO)) {
            if (ns.exec("corporation.js", "home", 1, "--round3", "--benchmark") === 0) {
              ns.toast("Failed to run corporation.js --round3 --benchmark");
            }
          } else {
            if (ns.exec("corporation.js", "home", 1, "--improveAllDivisions", "--benchmark") === 0) {
              ns.toast("Failed to run corporation.js --improveAllDivisions --benchmark");
            }
          }
          runCorpRound = false;
        }
        if (runCorpTest) {
          if (ns.exec("corporation.js", "home", 1, "--test", "--benchmark") === 0) {
            ns.toast("Failed to run corporation.js --test --benchmark");
          }
          runCorpTest = false;
        }
      } else {
        if (runCorpRound) {
          if (ns.exec("corporation.js", "home", 1, "--round1", "--benchmark") === 0) {
            ns.toast("Failed to run corporation.js --round1 --benchmark");
          }
          await ns.sleep(1e3);
          ns.exec("daemon.js", "home", 1, "--maintainCorporation");
          testingTools.setUnlimitedBonusTime();
          runCorpRound = false;
        }
      }
    } catch (ex) {
      ns.print(`HUD error: ${JSON.stringify(ex)}`);
    }
    await ns.asleep(1e3);
  }
}
export {
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2N1c3RvbUhVRC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgTlMgfSBmcm9tIFwiQG5zXCI7XHJcbmltcG9ydCB7IE5ldHNjcmlwdEV4dGVuc2lvbiB9IGZyb20gXCIvbGlicy9OZXRzY3JpcHRFeHRlbnNpb25cIjtcclxuaW1wb3J0IHsgREFFTU9OX1NDUklQVF9OQU1FIH0gZnJvbSBcIi9saWJzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBwYXJzZU51bWJlciB9IGZyb20gXCIvbGlicy91dGlsc1wiO1xyXG5pbXBvcnQgeyBVcGdyYWRlTmFtZSB9IGZyb20gXCIvY29ycG9yYXRpb25Gb3JtdWxhc1wiO1xyXG5pbXBvcnQgeyBjbGVhclB1cmNoYXNlT3JkZXJzLCBEaXZpc2lvbk5hbWUsIGhhc0RpdmlzaW9uIH0gZnJvbSBcIi9jb3Jwb3JhdGlvblV0aWxzXCI7XHJcbmltcG9ydCAqIGFzIHRlc3RpbmdUb29scyBmcm9tIFwiL2NvcnBvcmF0aW9uVGVzdGluZ1Rvb2xzXCI7XHJcbmltcG9ydCB7IGV4cG9zZUdhbWVJbnRlcm5hbE9iamVjdHMgfSBmcm9tIFwiL2V4cGxvaXRzXCI7XHJcblxyXG5sZXQgbnM6IE5TO1xyXG5sZXQgbnN4OiBOZXRzY3JpcHRFeHRlbnNpb247XHJcbmxldCBkb2M6IERvY3VtZW50O1xyXG5cclxuY29uc3QgZW5hYmxlVGVzdGluZ1Rvb2xzID0gdHJ1ZTtcclxubGV0IHJ1bkNvcnBNYWludGFpbiA9IGZhbHNlO1xyXG5sZXQgcnVuRGVsU2NyaXB0cyA9IGZhbHNlO1xyXG5sZXQgcmVsb2FkID0gZmFsc2U7XHJcbmxldCBydW5Db3JwUm91bmQgPSBmYWxzZTtcclxubGV0IHJ1bkNvcnBUZXN0ID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiByZXJ1bihuczogTlMpIHtcclxuICAgIG5zLnNwYXduKG5zLmdldFNjcmlwdE5hbWUoKSwgeyBzcGF3bkRlbGF5OiAxMDAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRlc3RpbmdUb29sKCkge1xyXG4gICAgbGV0IHRlc3RpbmdUb29sc0RpdiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Rlc3RpbmctdG9vbHNcIik7XHJcbiAgICAvLyBSZW1vdmUgb2xkIHRvb2xzXHJcbiAgICBpZiAodGVzdGluZ1Rvb2xzRGl2KSB7XHJcbiAgICAgICAgdGVzdGluZ1Rvb2xzRGl2LnJlbW92ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXN0aW5nVG9vbCgpIHtcclxuICAgIC8vIFRlc3RpbmcgdG9vbHNcclxuICAgIGlmIChlbmFibGVUZXN0aW5nVG9vbHMpIHtcclxuICAgICAgICByZW1vdmVUZXN0aW5nVG9vbCgpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdG9vbHNcclxuICAgICAgICBjb25zdCByb290OiBFbGVtZW50ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKSE7XHJcbiAgICAgICAgY29uc3QgdGVzdGluZ1Rvb2xzVGVtcGxhdGUgPSBkb2MuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG4gICAgICAgIHRlc3RpbmdUb29sc1RlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPGRpdiBpZD1cInRlc3RpbmctdG9vbHNcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1jb3JwLW1haW50YWluXCI+Q29ycE1haW50YWluPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi11bmxpbWl0ZWQtYm9udXMtdGltZVwiPlVubGltaXRlZEJvbnVzVGltZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tcmVtb3ZlLWJvbnVzLXRpbWVcIj5SZW1vdmVCb251c1RpbWU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWNvcnAtcm91bmRcIj5Db3JwUm91bmQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWNvcnAtdGVzdFwiPkNvcnBUZXN0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1pbXBvcnQtc2F2ZVwiPkltcG9ydFNhdmU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWRlbGV0ZS1hbGwtc2NyaXB0c1wiPkRlbFNjcmlwdHM8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXJlbG9hZFwiPlJlbG9hZDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tZXhpdFwiPkV4aXQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwidGVzdGluZy10b29scy1pbnB1dFwiPklucHV0OjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwidGVzdGluZy10b29scy1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cInRlc3RpbmctdG9vbHMtZmlsZS1pbnB1dFwiIHR5cGU9XCJmaWxlXCIvPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tZnVuZHNcIj5GdW5kczwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tc21hcnQtZmFjdG9yaWVzXCI+U21hcnRGYWN0b3JpZXM8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXNtYXJ0LXN0b3JhZ2VcIj5TbWFydFN0b3JhZ2U8L2J1dHRvbj5cclxuICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LXNhdmUtZGF0YVwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3VycmVudFwiPkN1cnJlbnQ8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWltcG9ydC1zYXZlLWRhdGFcIj5JbXBvcnQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWV4cG9ydC1zYXZlLWRhdGFcIj5FeHBvcnQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWRlbGV0ZS1zYXZlLWRhdGFcIj5EZWxldGU8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwidGVzdGluZy10b29scy1kaXZpc2lvbnNcIj5EaXZpc2lvbjo8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cImRpdmlzaW9uc1wiIGlkPVwidGVzdGluZy10b29scy1kaXZpc2lvbnNcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFncmljdWx0dXJlXCI+QWdyaWN1bHR1cmU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNoZW1pY2FsXCI+Q2hlbWljYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRvYmFjY29cIj5Ub2JhY2NvPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1ycFwiPlJQPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1vZmZpY2VcIj5PZmZpY2U8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXdhcmVob3VzZVwiPldhcmVob3VzZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tYm9vc3QtbWF0ZXJpYWxzXCI+Qm9vc3RNYXRzPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1jbGVhci1ib29zdC1tYXRlcmlhbHNcIj5DbGVhckJvb3N0TWF0czwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tY2xlYXItaW5wdXQtbWF0ZXJpYWxzXCI+Q2xlYXJJbnB1dE1hdHM8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWNsZWFyLW91dHB1dC1tYXRlcmlhbHNcIj5DbGVhck91dHB1dE1hdHM8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWNsZWFyLXN0b3JhZ2VcIj5DbGVhclN0b3JhZ2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlPlxyXG4gICAgICAgICN0ZXN0aW5nLXRvb2xzIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODUwcHgsIDVweCk7ei1pbmRleDogOTk5OTtkaXNwbGF5OiBmbGV4O2ZsZXgtZmxvdzogd3JhcDtwb3NpdGlvbjogZml4ZWQ7bWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4NDBweDttaW4taGVpZ2h0OiAzM3B4O2JvcmRlcjogMXB4IHNvbGlkIHJnYig2OCwgNjgsIDY4KTtjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICN0ZXN0aW5nLXRvb2xzID4gZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7ZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2J0bi1jb3JwLXRlc3Qge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNidG4taW1wb3J0LXNhdmUge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgI2J0bi1mdW5kcyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYnRuLXJwIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICN0ZXN0aW5nLXRvb2xzLWZpbGUtaW5wdXQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2VsZWN0LXNhdmUtZGF0YSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTk1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgPC9zdHlsZT5cclxuPC9kaXY+XHJcbiAgICAgICAgYC50cmltKCk7XHJcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh0ZXN0aW5nVG9vbHNUZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQhKTtcclxuICAgICAgICBjb25zdCB0ZXN0aW5nVG9vbHNEaXYgPSBkb2MucXVlcnlTZWxlY3RvcihcIiN0ZXN0aW5nLXRvb2xzXCIpITtcclxuICAgICAgICBjb25zdCBzYXZhRGF0YVNlbGVjdEVsZW1lbnQgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3Qtc2F2ZS1kYXRhXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5cclxuICAgICAgICBjb25zdCByZWxvYWRTYXZlRGF0YVNlbGVjdEVsZW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBhd2FpdCB0ZXN0aW5nVG9vbHMuZ2V0QWxsU2F2ZURhdGFLZXlzKCk7XHJcbiAgICAgICAgICAgIGtleXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGEgPT09IFwic2F2ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYi50b1N0cmluZygpLmxvY2FsZUNvbXBhcmUoYS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNhdmFEYXRhU2VsZWN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBrZXkgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0ga2V5IGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIHNhdmFEYXRhU2VsZWN0RWxlbWVudC5hZGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbG9hZFNhdmVEYXRhU2VsZWN0RWxlbWVudCgpLnRoZW4oKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY29ycC1tYWludGFpblwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcnVuQ29ycE1haW50YWluID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tdW5saW1pdGVkLWJvbnVzLXRpbWVcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRlc3RpbmdUb29scy5zZXRVbmxpbWl0ZWRCb251c1RpbWUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcmVtb3ZlLWJvbnVzLXRpbWVcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRlc3RpbmdUb29scy5yZW1vdmVCb251c1RpbWUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY29ycC1yb3VuZFwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcnVuQ29ycFJvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY29ycC10ZXN0XCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBydW5Db3JwVGVzdCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWltcG9ydC1zYXZlXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlSW5wdXQgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0aW5nLXRvb2xzLWZpbGUtaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgZmlsZUlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZS50YXJnZXQpLmZpbGVzIVswXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKHRoaXM6IEZpbGVSZWFkZXIsIGU6IFByb2dyZXNzRXZlbnQ8RmlsZVJlYWRlcj4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGltcG9ydGluZyBmaWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ZWREYlJlcXVlc3Q6IElEQk9wZW5EQlJlcXVlc3QgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4oXCJiaXRidXJuZXJTYXZlXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZWREYlJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKHRoaXM6IElEQlJlcXVlc3Q8SURCRGF0YWJhc2U+KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRiID0gdGhpcy5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhY2Nlc3MgZGF0YWJhc2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihbXCJzYXZlc3RyaW5nXCJdLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcInNhdmVzdHJpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBvYmplY3RTdG9yZS5wdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzdWx0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpID8gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KSA6IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5zZXRUaW1lb3V0KCgpID0+IGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCksIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUubmFtZS5lbmRzV2l0aChcIi5nelwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGZpbGVJbnB1dC5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1kZWxldGUtYWxsLXNjcmlwdHNcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJ1bkRlbFNjcmlwdHMgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1yZWxvYWRcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlbG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRlc3RpbmdUb29sc0RpdiEucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWV4aXRcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRlc3RpbmdUb29sc0RpdiEucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldElucHV0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiN0ZXN0aW5nLXRvb2xzLWlucHV0XCIpIS52YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVzZUlucHV0VmFsdWVBc051bWJlciA9IGZ1bmN0aW9uIChjYWxsYmFjazogKChpbnB1dFZhbHVlOiBudW1iZXIpID0+IHZvaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1iZXIoZ2V0SW5wdXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW52YWxpZCBpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB1c2VJbnB1dFZhbHVlQXNTdHJpbmcgPSBmdW5jdGlvbiAoY2FsbGJhY2s6ICgoaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiB2b2lkKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldElucHV0VmFsdWUoKTtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIGlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHZhbHVlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGdldERpdmlzaW9uTmFtZSA9IGZ1bmN0aW9uICgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jLnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3Rlc3RpbmctdG9vbHMtZGl2aXNpb25zXCIpIS52YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1mdW5kc1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdXNlSW5wdXRWYWx1ZUFzTnVtYmVyKChpbnB1dFZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRlc3RpbmdUb29scy5zZXRGdW5kcyhpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLXNtYXJ0LWZhY3Rvcmllc1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdXNlSW5wdXRWYWx1ZUFzTnVtYmVyKChpbnB1dFZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRlc3RpbmdUb29scy5zZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuU01BUlRfRkFDVE9SSUVTLCBpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLXNtYXJ0LXN0b3JhZ2VcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVzZUlucHV0VmFsdWVBc051bWJlcigoaW5wdXRWYWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0aW5nVG9vbHMuc2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLlNNQVJUX1NUT1JBR0UsIGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4taW1wb3J0LXNhdmUtZGF0YVwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLmdldFNhdmVEYXRhKHNhdmFEYXRhU2VsZWN0RWxlbWVudC52YWx1ZSkudGhlbihzYXZlRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNhdmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLnVwZGF0ZVNhdmVEYXRhKFwic2F2ZVwiLCBzYXZlRGF0YSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnMua2lsbGFsbChcImhvbWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFsbFNlcnZlcnMgPSBnbG9iYWxUaGlzLkFsbFNlcnZlcnMuc2F2ZUFsbFNlcnZlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLlNhdmVPYmplY3QubG9hZEdhbWUoc2F2ZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLkFsbFNlcnZlcnMubG9hZEFsbFNlcnZlcnMoY3VycmVudEFsbFNlcnZlcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBucy5leGVjKFwiZGFlbW9uLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0tbWFpbnRhaW5Db3Jwb3JhdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tZXhwb3J0LXNhdmUtZGF0YVwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLmluc2VydFNhdmVEYXRhKGF3YWl0IGdsb2JhbFRoaXMuU2F2ZU9iamVjdC5zYXZlT2JqZWN0LmdldFNhdmVEYXRhKHRydWUsIHRydWUpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlbG9hZFNhdmVEYXRhU2VsZWN0RWxlbWVudCgpLnRoZW4oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWRlbGV0ZS1zYXZlLWRhdGFcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHNhdmFEYXRhU2VsZWN0RWxlbWVudC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKCFrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInNhdmVcIikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYFlvdSBjYW5ub3QgZGVsZXRlIHRoZSBidWlsdC1pbiBcInNhdmVcImApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRlc3RpbmdUb29scy5kZWxldGVTYXZlRGF0YShzYXZhRGF0YVNlbGVjdEVsZW1lbnQudmFsdWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVsb2FkU2F2ZURhdGFTZWxlY3RFbGVtZW50KCkudGhlbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcnBcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVzZUlucHV0VmFsdWVBc051bWJlcigoaW5wdXRWYWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0aW5nVG9vbHMuc2V0UmVzZWFyY2hQb2ludHMoZ2V0RGl2aXNpb25OYW1lKCksIGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tb2ZmaWNlXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1c2VJbnB1dFZhbHVlQXNTdHJpbmcoKGlucHV0VmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1wbG95ZWVKb2JzOiBudW1iZXJbXSA9IGlucHV0VmFsdWUudHJpbSgpLnNwbGl0KFwiLFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodmFsdWUgPT4gcGFyc2VOdW1iZXIodmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodmFsdWUgPT4gIU51bWJlci5pc05hTih2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVtcGxveWVlSm9icy5sZW5ndGggIT09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkludmFsaWQgaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLnNldE9mZmljZVNldHVwKGdldERpdmlzaW9uTmFtZSgpLCBlbXBsb3llZUpvYnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4td2FyZWhvdXNlXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1c2VJbnB1dFZhbHVlQXNOdW1iZXIoKGlucHV0VmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLnNldFdhcmVob3VzZUxldmVsKGdldERpdmlzaW9uTmFtZSgpLCBpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWJvb3N0LW1hdGVyaWFsc1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdXNlSW5wdXRWYWx1ZUFzU3RyaW5nKChpbnB1dFZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvb3N0TWF0ZXJpYWxzOiBudW1iZXJbXSA9IGlucHV0VmFsdWUudHJpbSgpLnNwbGl0KFwiLFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodmFsdWUgPT4gcGFyc2VOdW1iZXIodmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodmFsdWUgPT4gIU51bWJlci5pc05hTih2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvb3N0TWF0ZXJpYWxzLmxlbmd0aCAhPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW52YWxpZCBpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXN0aW5nVG9vbHMuc2V0Qm9vc3RNYXRlcmlhbHMoZ2V0RGl2aXNpb25OYW1lKCksIGJvb3N0TWF0ZXJpYWxzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWNsZWFyLWJvb3N0LW1hdGVyaWFsc1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLnNldEJvb3N0TWF0ZXJpYWxzKGdldERpdmlzaW9uTmFtZSgpLCBbMCwgMCwgMCwgMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1jbGVhci1pbnB1dC1tYXRlcmlhbHNcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRlc3RpbmdUb29scy5jbGVhck1hdGVyaWFscyhnZXREaXZpc2lvbk5hbWUoKSwgeyBpbnB1dDogdHJ1ZSwgb3V0cHV0OiBmYWxzZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2xlYXItb3V0cHV0LW1hdGVyaWFsc1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLmNsZWFyTWF0ZXJpYWxzKGdldERpdmlzaW9uTmFtZSgpLCB7IGlucHV0OiBmYWxzZSwgb3V0cHV0OiB0cnVlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1jbGVhci1zdG9yYWdlXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhclB1cmNoYXNlT3JkZXJzKG5zKTtcclxuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLnNldEJvb3N0TWF0ZXJpYWxzKGdldERpdmlzaW9uTmFtZSgpLCBbMCwgMCwgMCwgMF0pO1xyXG4gICAgICAgICAgICB0ZXN0aW5nVG9vbHMuY2xlYXJNYXRlcmlhbHMoZ2V0RGl2aXNpb25OYW1lKCksIHsgaW5wdXQ6IHRydWUsIG91dHB1dDogdHJ1ZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4obnNDb250ZXh0OiBOUyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgZXhwb3NlR2FtZUludGVybmFsT2JqZWN0cygpO1xyXG4gICAgbnMgPSBuc0NvbnRleHQ7XHJcbiAgICBuc3ggPSBuZXcgTmV0c2NyaXB0RXh0ZW5zaW9uKG5zKTtcclxuICAgIG5zeC5raWxsUHJvY2Vzc2VzU3Bhd25Gcm9tU2FtZVNjcmlwdCgpO1xyXG5cclxuICAgIG5zLmRpc2FibGVMb2coXCJBTExcIik7XHJcbiAgICBucy5jbGVhckxvZygpO1xyXG4gICAgLy8gbnMudGFpbCgpO1xyXG5cclxuICAgIGRvYyA9IGV2YWwoXCJkb2N1bWVudFwiKTtcclxuICAgIGNvbnN0IGhvb2swID0gZG9jLmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXctZXh0cmEtaG9vay0wXCIpITtcclxuICAgIGNvbnN0IGhvb2sxID0gZG9jLmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXctZXh0cmEtaG9vay0xXCIpITtcclxuICAgIG5zeC5hZGRBdEV4aXRDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaG9vazAuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICBob29rMS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIHJlbW92ZVRlc3RpbmdUb29sKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJzID0gW107XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuXHJcbiAgICBoZWFkZXJzLnB1c2goXCI8ZGl2PlNlcnZlckxvYWQ8L2Rpdj5cIik7XHJcbiAgICB2YWx1ZXMucHVzaChcIjxkaXYgaWQ9J2h1ZC1zZXJ2ZXItbG9hZCc+MCU8L2Rpdj5cIik7XHJcbiAgICBpZiAobnMuc3RvY2suaGFzV1NFQWNjb3VudCgpKSB7XHJcbiAgICAgICAgaGVhZGVycy5wdXNoKFwiPGRpdj5TdG9ja1dvcnRoPC9kaXY+XCIpO1xyXG4gICAgICAgIHZhbHVlcy5wdXNoKFwiPGRpdiBpZD0naHVkLXN0b2NrLXdvcnRoJz4wPC9kaXY+XCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5zLmNvcnBvcmF0aW9uLmhhc0NvcnBvcmF0aW9uKCkpIHtcclxuICAgICAgICBoZWFkZXJzLnB1c2goXCI8ZGl2PkludmVzdG1lbnRPZmZlcjwvZGl2PlwiKTtcclxuICAgICAgICB2YWx1ZXMucHVzaChcIjxkaXYgaWQ9J2h1ZC1pbnZlc3RtZW50LW9mZmVyJz4wPC9kaXY+XCIpO1xyXG4gICAgICAgIGhlYWRlcnMucHVzaChcIjxkaXY+Q29ycE1haW50YWluPC9kaXY+XCIpO1xyXG4gICAgICAgIHZhbHVlcy5wdXNoKFwiPGRpdiBpZD0naHVkLWNvcnAtbWFpbnRhaW4nPmZhbHNlPC9kaXY+XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhvb2swLmlubmVySFRNTCA9IGhlYWRlcnMuam9pbihcIlwiKTtcclxuICAgIGhvb2sxLmlubmVySFRNTCA9IHZhbHVlcy5qb2luKFwiXCIpO1xyXG5cclxuICAgIGlmIChnbG9iYWxUaGlzLlBsYXllcikge1xyXG4gICAgICAgIGNyZWF0ZVRlc3RpbmdUb29sKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBTY2FuIGFsbCBydW5uZXJzIGFuZCBjYWxjdWxhdGUgc2VydmVyIGxvYWRcclxuICAgICAgICAgICAgbGV0IHRvdGFsTWF4UkFNT2ZBbGxSdW5uZXJzID0gMDtcclxuICAgICAgICAgICAgbGV0IHRvdGFsVXNlZFJBTU9mQWxsUnVubmVycyA9IDA7XHJcbiAgICAgICAgICAgIG5zeC5zY2FuQkZTKFwiaG9tZVwiKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihob3N0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnMuZ2V0U2VydmVyTWF4UmFtKGhvc3QuaG9zdG5hbWUpID4gMCAmJiBucy5oYXNSb290QWNjZXNzKGhvc3QuaG9zdG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHJ1bm5lciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxNYXhSQU1PZkFsbFJ1bm5lcnMgKz0gbnMuZ2V0U2VydmVyTWF4UmFtKHJ1bm5lci5ob3N0bmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxVc2VkUkFNT2ZBbGxSdW5uZXJzICs9IG5zLmdldFNlcnZlclVzZWRSYW0ocnVubmVyLmhvc3RuYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJodWQtc2VydmVyLWxvYWRcIikhLmlubmVyVGV4dCA9XHJcbiAgICAgICAgICAgICAgICBgJHsodG90YWxVc2VkUkFNT2ZBbGxSdW5uZXJzIC8gdG90YWxNYXhSQU1PZkFsbFJ1bm5lcnMgKiAxMDApLnRvRml4ZWQoMil9JWA7XHJcblxyXG4gICAgICAgICAgICBpZiAobnMuc3RvY2suaGFzV1NFQWNjb3VudCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBodWRTdG9ja1dvcnRoVmFsdWUgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJodWQtc3RvY2std29ydGhcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaHVkU3RvY2tXb3J0aFZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVydW4obnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b2NrU3RhdHMgPSBuc3guY2FsY3VsYXRlU3RvY2tTdGF0cygpO1xyXG4gICAgICAgICAgICAgICAgaHVkU3RvY2tXb3J0aFZhbHVlLmlubmVyVGV4dCA9IG5zLmZvcm1hdE51bWJlcihzdG9ja1N0YXRzLmN1cnJlbnRXb3J0aCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5oYXNDb3Jwb3JhdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBodWRJbnZlc3RtZW50T2ZmZXJWYWx1ZSA9IGRvYy5nZXRFbGVtZW50QnlJZChcImh1ZC1pbnZlc3RtZW50LW9mZmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGh1ZEludmVzdG1lbnRPZmZlclZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVydW4obnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGh1ZEludmVzdG1lbnRPZmZlclZhbHVlLmlubmVyVGV4dCA9IG5zLmZvcm1hdE51bWJlcihucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5mdW5kcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGlzRGFlbW9uUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbnMucHMoKS5mb3JFYWNoKHByb2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmZpbGVuYW1lICE9PSBEQUVNT05fU0NSSVBUX05BTUUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5hcmdzLmluY2x1ZGVzKFwiLS1tYWludGFpbkNvcnBvcmF0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGFlbW9uUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJodWQtY29ycC1tYWludGFpblwiKSEuaW5uZXJUZXh0ID0gYCR7aXNEYWVtb25SdW5uaW5nfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGVzdGluZyB0b29sc1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bkNvcnBNYWludGFpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChucy5leGVjKFwiZGFlbW9uLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0tbWFpbnRhaW5Db3Jwb3JhdGlvblwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBucy50b2FzdChcIkZhaWxlZCB0byBydW4gZGFlbW9uLmpzIC0tbWFpbnRhaW5Db3Jwb3JhdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcnVuQ29ycE1haW50YWluID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocnVuRGVsU2NyaXB0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5zLmtpbGxhbGwoXCJob21lXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChucy5leGVjKFwidG9vbHMuanNcIiwgXCJob21lXCIsIDEsIFwiLS1kZWxldGVBbGxTY3JpcHRzXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zLnRvYXN0KFwiRmFpbGVkIHRvIHJ1biB0b29scy5qcyAtLWRlbGV0ZUFsbFNjcmlwdHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bkRlbFNjcmlwdHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZWxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXJ1bihucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVsb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocnVuQ29ycFJvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKG5zLmV4ZWMoXCJjb3Jwb3JhdGlvbi5qc1wiLCBcImhvbWVcIiwgMSwgXCItLXJvdW5kMVwiLCBcIi0tYmVuY2htYXJrXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5zLnRvYXN0KFwiRmFpbGVkIHRvIHJ1biBjb3Jwb3JhdGlvbi5qcyAtLXJvdW5kMSAtLWJlbmNobWFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKG5zLmV4ZWMoXCJjb3Jwb3JhdGlvbi5qc1wiLCBcImhvbWVcIiwgMSwgXCItLXJvdW5kMlwiLCBcIi0tYmVuY2htYXJrXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5zLnRvYXN0KFwiRmFpbGVkIHRvIHJ1biBjb3Jwb3JhdGlvbi5qcyAtLXJvdW5kMiAtLWJlbmNobWFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKG5zLmV4ZWMoXCJjb3Jwb3JhdGlvbi5qc1wiLCBcImhvbWVcIiwgMSwgXCItLXJvdW5kM1wiLCBcIi0tYmVuY2htYXJrXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5zLnRvYXN0KFwiRmFpbGVkIHRvIHJ1biBjb3Jwb3JhdGlvbi5qcyAtLXJvdW5kMyAtLWJlbmNobWFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNEaXZpc2lvbihucywgRGl2aXNpb25OYW1lLkNIRU1JQ0FMKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnMuZXhlYyhcImNvcnBvcmF0aW9uLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0tcm91bmQyXCIsIFwiLS1iZW5jaG1hcmtcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5zLnRvYXN0KFwiRmFpbGVkIHRvIHJ1biBjb3Jwb3JhdGlvbi5qcyAtLXJvdW5kMiAtLWJlbmNobWFya1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWhhc0RpdmlzaW9uKG5zLCBEaXZpc2lvbk5hbWUuVE9CQUNDTykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5zLmV4ZWMoXCJjb3Jwb3JhdGlvbi5qc1wiLCBcImhvbWVcIiwgMSwgXCItLXJvdW5kM1wiLCBcIi0tYmVuY2htYXJrXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucy50b2FzdChcIkZhaWxlZCB0byBydW4gY29ycG9yYXRpb24uanMgLS1yb3VuZDMgLS1iZW5jaG1hcmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnMuZXhlYyhcImNvcnBvcmF0aW9uLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0taW1wcm92ZUFsbERpdmlzaW9uc1wiLCBcIi0tYmVuY2htYXJrXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucy50b2FzdChcIkZhaWxlZCB0byBydW4gY29ycG9yYXRpb24uanMgLS1pbXByb3ZlQWxsRGl2aXNpb25zIC0tYmVuY2htYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bkNvcnBSb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bkNvcnBUZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5zLmV4ZWMoXCJjb3Jwb3JhdGlvbi5qc1wiLCBcImhvbWVcIiwgMSwgXCItLXRlc3RcIiwgXCItLWJlbmNobWFya1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBucy50b2FzdChcIkZhaWxlZCB0byBydW4gY29ycG9yYXRpb24uanMgLS10ZXN0IC0tYmVuY2htYXJrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBydW5Db3JwVGVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bkNvcnBSb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChucy5leGVjKFwiY29ycG9yYXRpb24uanNcIiwgXCJob21lXCIsIDEsIFwiLS1yb3VuZDFcIiwgXCItLWJlbmNobWFya1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBucy50b2FzdChcIkZhaWxlZCB0byBydW4gY29ycG9yYXRpb24uanMgLS1yb3VuZDEgLS1iZW5jaG1hcmtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG5zLnNsZWVwKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5zLmV4ZWMoXCJkYWVtb24uanNcIiwgXCJob21lXCIsIDEsIFwiLS1tYWludGFpbkNvcnBvcmF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlc3RpbmdUb29scy5zZXRVbmxpbWl0ZWRCb251c1RpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBydW5Db3JwUm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGV4OiB1bmtub3duKSB7XHJcbiAgICAgICAgICAgIG5zLnByaW50KGBIVUQgZXJyb3I6ICR7SlNPTi5zdHJpbmdpZnkoZXgpfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBucy5hc2xlZXAoMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQ0EsU0FBUywwQkFBMEI7QUFDbkMsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyxtQkFBbUI7QUFDNUIsU0FBUyxtQkFBbUI7QUFDNUIsU0FBUyxxQkFBcUIsY0FBYyxtQkFBbUI7QUFDL0QsWUFBWSxrQkFBa0I7QUFDOUIsU0FBUyxpQ0FBaUM7QUFFMUMsSUFBSTtBQUNKLElBQUk7QUFDSixJQUFJO0FBRUosTUFBTSxxQkFBcUI7QUFDM0IsSUFBSSxrQkFB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
