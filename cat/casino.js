import { WHRNG } from "src/cat/libs/RNG";
import { parseNumber } from "src/cat/libs/utils";
let doc;
let root;
let gameRootElement;
function assistRoulette(ns2) {
  let casinoToolsDiv = doc.querySelector("#casino-tools");
  if (casinoToolsDiv !== null) {
    casinoToolsDiv.remove();
  }
  const title = gameRootElement.querySelector("h4");
  if (title === null || title.textContent !== "Iker Molina Casino") {
    ns2.print("We are not in casino");
    return;
  }
  if (gameRootElement.querySelectorAll("h4").length !== 3) {
    ns2.print("This is not roulette");
    return;
  }
  const casinoToolsTemplate = doc.createElement("template");
  casinoToolsTemplate.innerHTML = `
<div id="casino-tools">
    <button id="btn-guess-seed">Guess seed</button>
    <button id="btn-guess-spins">Guess spins with seed</button>
    <button id="btn-highlight-next-guess">Highlight next guess</button>
    <button id="btn-exit">Exit</button>
    <div>
        <label for="roulette-seed">Seed:</label>
        <input id="roulette-seed" type="text"/>
    </div>
    <div>
        <label for="roulette-spins-for-guessing">Spins for guessing:</label>
        <input id="roulette-spins-for-guessing" type="text"/>
    </div>
    <div>
        <label for="roulette-guessed-spins">Guessed spins:</label>
        <textarea id="roulette-guessed-spins" aria-multiline="true" rows="5"></textarea>
    </div>
    <div>
        <label for="roulette-spin-history">Spin history:</label>
        <textarea id="roulette-spin-history" aria-multiline="true" rows="5"></textarea>
    </div>
    <style>
        #casino-tools {
            transform: translate(1150px, 5px);z-index: 9999;display: flex;flex-flow: wrap;position: fixed;min-width: 150px;
            max-width: 550px;min-height: 33px;border: 1px solid rgb(68, 68, 68);color: white;
        }
        #casino-tools > div {
            width: 100%;display: flex;
        }
        #casino-tools > div > label {
            min-width: 130px;
        }
        #casino-tools > div > input {
            flex: 1;
        }
        #casino-tools > div > textarea {
            flex: 1;
        }
        #btn-guess-seed {
            margin-right: 5px;
        }
        #btn-guess-spins {
            margin-right: 5px;
        }
        #btn-highlight-next-guess {
            margin-right: auto;
        }
        #btn-exit {
            margin-left: auto;
        }
    </style>
</div>
        `.trim();
  root.appendChild(casinoToolsTemplate.content.firstChild);
  casinoToolsDiv = doc.querySelector("#casino-tools");
  const rouletteSeedElement = casinoToolsDiv.querySelector("#roulette-seed");
  const rouletteSpinsForGuessingElement = casinoToolsDiv.querySelector("#roulette-spins-for-guessing");
  const rouletteGuessedSpinsElement = casinoToolsDiv.querySelector("#roulette-guessed-spins");
  const rouletteSpinHistoryElement = casinoToolsDiv.querySelector("#roulette-spin-history");
  casinoToolsDiv.querySelector("#btn-guess-seed").addEventListener("click", () => {
    const maxSeed = 3e7;
    const timestamp = (/* @__PURE__ */ new Date()).getTime();
    const zeroDate = timestamp - timestamp % maxSeed;
    if (rouletteSpinsForGuessingElement.value.trim() === "") {
      alert("Please set spins for guessing");
      return;
    }
    const spinsForGuessing = rouletteSpinsForGuessingElement.value.trim().split(" ").map((value) => {
      return parseNumber(value);
    });
    if (spinsForGuessing.length === 0 || spinsForGuessing.some((value) => {
      return Number.isNaN(parseNumber(value));
    })) {
      alert("Invalid spins for guessing");
      return;
    }
    let possibleSeed = 0;
    rouletteSeedElement.value = "";
    while (possibleSeed < maxSeed) {
      const rng = new WHRNG(zeroDate + possibleSeed);
      let match = true;
      for (const spin of spinsForGuessing) {
        if (spin !== Math.floor(rng.random() * 37)) {
          match = false;
        }
      }
      if (match) {
        rouletteSeedElement.value = (possibleSeed + zeroDate).toString();
        break;
      }
      possibleSeed = possibleSeed + 1;
    }
  });
  casinoToolsDiv.querySelector("#btn-guess-spins").addEventListener("click", () => {
    const rng = new WHRNG(parseNumber(rouletteSeedElement.value));
    rouletteGuessedSpinsElement.value = "";
    for (let i = 0; i < 100; i++) {
      rouletteGuessedSpinsElement.value += `${Math.floor(rng.random() * 37)} `;
    }
    highlightNextGuessedSpin();
  });
  casinoToolsDiv.querySelector("#btn-highlight-next-guess").addEventListener("click", () => {
    highlightNextGuessedSpin();
  });
  casinoToolsDiv.querySelector("#btn-exit").addEventListener("click", () => {
    casinoToolsDiv.remove();
  });
  const spinResultNumberElement = gameRootElement.querySelector("h4:nth-of-type(2)");
  function getSpinResultNumber() {
    if (spinResultNumberElement.textContent === "0") {
      return 0;
    }
    return parseNumber(spinResultNumberElement.textContent.slice(0, -1));
  }
  const spinResultRewardElement = gameRootElement.querySelector("h4:nth-of-type(3)");
  function getSpinResult() {
    return spinResultRewardElement.textContent.split(" ")[0];
  }
  const betButtons = gameRootElement.querySelectorAll("button");
  betButtons.forEach((betButton) => {
    betButton.addEventListener("click", () => {
      setTimeout(() => {
        const spinResult = getSpinResult();
        if (spinResult === "lost" && rouletteGuessedSpinsElement.value.trim() !== "") {
          rouletteSpinHistoryElement.value = `${rouletteSpinHistoryElement.value} ${betButton.textContent}`.trim();
        }
        rouletteSpinHistoryElement.value = `${rouletteSpinHistoryElement.value} ${getSpinResultNumber()}`.trim();
        highlightNextGuessedSpin();
      }, 2e3);
    });
  });
  function highlightBetButton(number) {
    for (const betButton of betButtons) {
      if (parseNumber(betButton.textContent) !== number) {
        betButton.style.backgroundColor = "#333";
        continue;
      }
      betButton.style.backgroundColor = "green";
    }
  }
  function resetBetButtons() {
    for (const betButton of betButtons) {
      betButton.style.backgroundColor = "#333";
    }
  }
  function highlightNextGuessedSpin() {
    const guessedSpins = rouletteGuessedSpinsElement.value.trim();
    const spinHistory = rouletteSpinHistoryElement.value.trim();
    if (guessedSpins === "" || spinHistory === "") {
      resetBetButtons();
      return;
    }
    const remainingGuessedSpins = guessedSpins.replace(spinHistory, "").trim().split(" ");
    if (remainingGuessedSpins.length === 0) {
      resetBetButtons();
      return;
    }
    highlightBetButton(parseNumber(remainingGuessedSpins[0]));
  }
  resetBetButtons();
}
async function main(ns) {
  ns.disableLog("ALL");
  ns.tail();
  ns.clearLog();
  doc = eval("document");
  root = doc.querySelector("#root");
  gameRootElement = doc.querySelector("#root > div:nth-of-type(2) > div:nth-of-type(2)");
  assistRoulette(ns);
}
export {
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2Nhc2luby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtOU30gZnJvbSBcIkBuc1wiO1xyXG5pbXBvcnQge1dIUk5HfSBmcm9tIFwiL2xpYnMvUk5HXCI7XHJcbmltcG9ydCB7cGFyc2VOdW1iZXJ9IGZyb20gXCIvbGlicy91dGlsc1wiO1xyXG5cclxubGV0IGRvYzogRG9jdW1lbnQ7XHJcbmxldCByb290OiBFbGVtZW50O1xyXG5sZXQgZ2FtZVJvb3RFbGVtZW50OiBFbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gYXNzaXN0Um91bGV0dGUobnM6IE5TKSB7XHJcbiAgICBsZXQgY2FzaW5vVG9vbHNEaXYgPSBkb2MucXVlcnlTZWxlY3RvcihcIiNjYXNpbm8tdG9vbHNcIik7XHJcbiAgICAvLyBSZW1vdmUgb2xkIHRvb2xzXHJcbiAgICBpZiAoY2FzaW5vVG9vbHNEaXYgIT09IG51bGwpIHtcclxuICAgICAgICBjYXNpbm9Ub29sc0Rpdi5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGdhbWVSb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDRcIik7XHJcbiAgICBpZiAodGl0bGUgPT09IG51bGwgfHwgdGl0bGUudGV4dENvbnRlbnQgIT09IFwiSWtlciBNb2xpbmEgQ2FzaW5vXCIpIHtcclxuICAgICAgICBucy5wcmludChcIldlIGFyZSBub3QgaW4gY2FzaW5vXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChnYW1lUm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImg0XCIpLmxlbmd0aCAhPT0gMykge1xyXG4gICAgICAgIG5zLnByaW50KFwiVGhpcyBpcyBub3Qgcm91bGV0dGVcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSB0b29sc1xyXG4gICAgY29uc3QgY2FzaW5vVG9vbHNUZW1wbGF0ZSA9IGRvYy5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XHJcbiAgICBjYXNpbm9Ub29sc1RlbXBsYXRlLmlubmVySFRNTCA9IGBcclxuPGRpdiBpZD1cImNhc2luby10b29sc1wiPlxyXG4gICAgPGJ1dHRvbiBpZD1cImJ0bi1ndWVzcy1zZWVkXCI+R3Vlc3Mgc2VlZDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBpZD1cImJ0bi1ndWVzcy1zcGluc1wiPkd1ZXNzIHNwaW5zIHdpdGggc2VlZDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBpZD1cImJ0bi1oaWdobGlnaHQtbmV4dC1ndWVzc1wiPkhpZ2hsaWdodCBuZXh0IGd1ZXNzPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGlkPVwiYnRuLWV4aXRcIj5FeGl0PC9idXR0b24+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJyb3VsZXR0ZS1zZWVkXCI+U2VlZDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cInJvdWxldHRlLXNlZWRcIiB0eXBlPVwidGV4dFwiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicm91bGV0dGUtc3BpbnMtZm9yLWd1ZXNzaW5nXCI+U3BpbnMgZm9yIGd1ZXNzaW5nOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwicm91bGV0dGUtc3BpbnMtZm9yLWd1ZXNzaW5nXCIgdHlwZT1cInRleHRcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInJvdWxldHRlLWd1ZXNzZWQtc3BpbnNcIj5HdWVzc2VkIHNwaW5zOjwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhIGlkPVwicm91bGV0dGUtZ3Vlc3NlZC1zcGluc1wiIGFyaWEtbXVsdGlsaW5lPVwidHJ1ZVwiIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicm91bGV0dGUtc3Bpbi1oaXN0b3J5XCI+U3BpbiBoaXN0b3J5OjwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhIGlkPVwicm91bGV0dGUtc3Bpbi1oaXN0b3J5XCIgYXJpYS1tdWx0aWxpbmU9XCJ0cnVlXCIgcm93cz1cIjVcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGU+XHJcbiAgICAgICAgI2Nhc2luby10b29scyB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExNTBweCwgNXB4KTt6LWluZGV4OiA5OTk5O2Rpc3BsYXk6IGZsZXg7ZmxleC1mbG93OiB3cmFwO3Bvc2l0aW9uOiBmaXhlZDttaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O21pbi1oZWlnaHQ6IDMzcHg7Ym9yZGVyOiAxcHggc29saWQgcmdiKDY4LCA2OCwgNjgpO2NvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgI2Nhc2luby10b29scyA+IGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjYXNpbm8tdG9vbHMgPiBkaXYgPiBsYWJlbCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjYXNpbm8tdG9vbHMgPiBkaXYgPiBpbnB1dCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjYXNpbm8tdG9vbHMgPiBkaXYgPiB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNidG4tZ3Vlc3Mtc2VlZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYnRuLWd1ZXNzLXNwaW5zIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNidG4taGlnaGxpZ2h0LW5leHQtZ3Vlc3Mge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNidG4tZXhpdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIDwvc3R5bGU+XHJcbjwvZGl2PlxyXG4gICAgICAgIGAudHJpbSgpO1xyXG4gICAgcm9vdC5hcHBlbmRDaGlsZChjYXNpbm9Ub29sc1RlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZCEpO1xyXG4gICAgY2FzaW5vVG9vbHNEaXYgPSBkb2MucXVlcnlTZWxlY3RvcihcIiNjYXNpbm8tdG9vbHNcIikhO1xyXG4gICAgY29uc3Qgcm91bGV0dGVTZWVkRWxlbWVudCA9IGNhc2lub1Rvb2xzRGl2LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjcm91bGV0dGUtc2VlZFwiKSE7XHJcbiAgICBjb25zdCByb3VsZXR0ZVNwaW5zRm9yR3Vlc3NpbmdFbGVtZW50ID0gY2FzaW5vVG9vbHNEaXYucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNyb3VsZXR0ZS1zcGlucy1mb3ItZ3Vlc3NpbmdcIikhO1xyXG4gICAgY29uc3Qgcm91bGV0dGVHdWVzc2VkU3BpbnNFbGVtZW50ID0gY2FzaW5vVG9vbHNEaXYucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNyb3VsZXR0ZS1ndWVzc2VkLXNwaW5zXCIpITtcclxuICAgIGNvbnN0IHJvdWxldHRlU3Bpbkhpc3RvcnlFbGVtZW50ID0gY2FzaW5vVG9vbHNEaXYucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNyb3VsZXR0ZS1zcGluLWhpc3RvcnlcIikhO1xyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgY2FzaW5vVG9vbHNEaXYucXVlcnlTZWxlY3RvcihcIiNidG4tZ3Vlc3Mtc2VlZFwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBtYXhTZWVkID0gMzBlNjtcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBjb25zdCB6ZXJvRGF0ZSA9IHRpbWVzdGFtcCAtICh0aW1lc3RhbXAgJSBtYXhTZWVkKTtcclxuXHJcbiAgICAgICAgaWYgKHJvdWxldHRlU3BpbnNGb3JHdWVzc2luZ0VsZW1lbnQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHNldCBzcGlucyBmb3IgZ3Vlc3NpbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3BpbnNGb3JHdWVzc2luZyA9IHJvdWxldHRlU3BpbnNGb3JHdWVzc2luZ0VsZW1lbnQudmFsdWUudHJpbSgpLnNwbGl0KFwiIFwiKS5tYXAodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzcGluc0Zvckd1ZXNzaW5nLmxlbmd0aCA9PT0gMCB8fCBzcGluc0Zvckd1ZXNzaW5nLnNvbWUodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHBhcnNlTnVtYmVyKHZhbHVlKSk7XHJcbiAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIHNwaW5zIGZvciBndWVzc2luZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBvc3NpYmxlU2VlZCA9IDA7XHJcbiAgICAgICAgcm91bGV0dGVTZWVkRWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgd2hpbGUgKHBvc3NpYmxlU2VlZCA8IG1heFNlZWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm5nID0gbmV3IFdIUk5HKHplcm9EYXRlICsgcG9zc2libGVTZWVkKTtcclxuICAgICAgICAgICAgbGV0IG1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzcGluIG9mIHNwaW5zRm9yR3Vlc3NpbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcGluICE9PSBNYXRoLmZsb29yKHJuZy5yYW5kb20oKSAqIDM3KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICByb3VsZXR0ZVNlZWRFbGVtZW50LnZhbHVlID0gKHBvc3NpYmxlU2VlZCArIHplcm9EYXRlKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zc2libGVTZWVkID0gcG9zc2libGVTZWVkICsgMTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNhc2lub1Rvb2xzRGl2LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWd1ZXNzLXNwaW5zXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJuZyA9IG5ldyBXSFJORyhwYXJzZU51bWJlcihyb3VsZXR0ZVNlZWRFbGVtZW50LnZhbHVlKSk7XHJcbiAgICAgICAgcm91bGV0dGVHdWVzc2VkU3BpbnNFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJvdWxldHRlR3Vlc3NlZFNwaW5zRWxlbWVudC52YWx1ZSArPSBgJHtNYXRoLmZsb29yKHJuZy5yYW5kb20oKSAqIDM3KX0gYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlnaGxpZ2h0TmV4dEd1ZXNzZWRTcGluKCk7XHJcbiAgICB9KTtcclxuICAgIGNhc2lub1Rvb2xzRGl2LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWhpZ2hsaWdodC1uZXh0LWd1ZXNzXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGhpZ2hsaWdodE5leHRHdWVzc2VkU3BpbigpO1xyXG4gICAgfSk7XHJcbiAgICBjYXNpbm9Ub29sc0Rpdi5xdWVyeVNlbGVjdG9yKFwiI2J0bi1leGl0XCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNhc2lub1Rvb2xzRGl2IS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNwaW5SZXN1bHROdW1iZXJFbGVtZW50ID0gZ2FtZVJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoNDpudGgtb2YtdHlwZSgyKVwiKSE7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3BpblJlc3VsdE51bWJlcigpIHtcclxuICAgICAgICBpZiAoc3BpblJlc3VsdE51bWJlckVsZW1lbnQudGV4dENvbnRlbnQgPT09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyc2VOdW1iZXIoc3BpblJlc3VsdE51bWJlckVsZW1lbnQudGV4dENvbnRlbnQhLnNsaWNlKDAsIC0xKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3BpblJlc3VsdFJld2FyZEVsZW1lbnQgPSBnYW1lUm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImg0Om50aC1vZi10eXBlKDMpXCIpITtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTcGluUmVzdWx0KCkge1xyXG4gICAgICAgIHJldHVybiBzcGluUmVzdWx0UmV3YXJkRWxlbWVudC50ZXh0Q29udGVudCEuc3BsaXQoXCIgXCIpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJldEJ1dHRvbnMgPSBnYW1lUm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuICAgIGJldEJ1dHRvbnMuZm9yRWFjaChiZXRCdXR0b24gPT4ge1xyXG4gICAgICAgIGJldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5SZXN1bHQgPSBnZXRTcGluUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BpblJlc3VsdCA9PT0gXCJsb3N0XCIgJiYgcm91bGV0dGVHdWVzc2VkU3BpbnNFbGVtZW50LnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdWxldHRlU3Bpbkhpc3RvcnlFbGVtZW50LnZhbHVlID0gYCR7cm91bGV0dGVTcGluSGlzdG9yeUVsZW1lbnQudmFsdWV9ICR7YmV0QnV0dG9uLnRleHRDb250ZW50fWAudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcm91bGV0dGVTcGluSGlzdG9yeUVsZW1lbnQudmFsdWUgPSBgJHtyb3VsZXR0ZVNwaW5IaXN0b3J5RWxlbWVudC52YWx1ZX0gJHtnZXRTcGluUmVzdWx0TnVtYmVyKCl9YC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHROZXh0R3Vlc3NlZFNwaW4oKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoaWdobGlnaHRCZXRCdXR0b24obnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGJldEJ1dHRvbiBvZiBiZXRCdXR0b25zKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZU51bWJlcihiZXRCdXR0b24udGV4dENvbnRlbnQpICE9PSBudW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIGJldEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzMzNcIjtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJldEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0QmV0QnV0dG9ucygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGJldEJ1dHRvbiBvZiBiZXRCdXR0b25zKSB7XHJcbiAgICAgICAgICAgIGJldEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzMzNcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlnaGxpZ2h0TmV4dEd1ZXNzZWRTcGluKCkge1xyXG4gICAgICAgIGNvbnN0IGd1ZXNzZWRTcGlucyA9IHJvdWxldHRlR3Vlc3NlZFNwaW5zRWxlbWVudC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgY29uc3Qgc3Bpbkhpc3RvcnkgPSByb3VsZXR0ZVNwaW5IaXN0b3J5RWxlbWVudC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKGd1ZXNzZWRTcGlucyA9PT0gXCJcIiB8fCBzcGluSGlzdG9yeSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXNldEJldEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZW1haW5pbmdHdWVzc2VkU3BpbnMgPSBndWVzc2VkU3BpbnMucmVwbGFjZShzcGluSGlzdG9yeSwgXCJcIikudHJpbSgpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBpZiAocmVtYWluaW5nR3Vlc3NlZFNwaW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXNldEJldEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoaWdobGlnaHRCZXRCdXR0b24ocGFyc2VOdW1iZXIocmVtYWluaW5nR3Vlc3NlZFNwaW5zWzBdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXRcclxuICAgIHJlc2V0QmV0QnV0dG9ucygpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbihuczogTlMpIHtcclxuICAgIG5zLmRpc2FibGVMb2coXCJBTExcIik7XHJcbiAgICBucy50YWlsKCk7XHJcbiAgICBucy5jbGVhckxvZygpO1xyXG5cclxuICAgIGRvYyA9IGV2YWwoXCJkb2N1bWVudFwiKTtcclxuICAgIHJvb3QgPSBkb2MucXVlcnlTZWxlY3RvcihcIiNyb290XCIpITtcclxuICAgIGdhbWVSb290RWxlbWVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Jvb3QgPiBkaXY6bnRoLW9mLXR5cGUoMikgPiBkaXY6bnRoLW9mLXR5cGUoMilcIikhO1xyXG5cclxuICAgIGFzc2lzdFJvdWxldHRlKG5zKTtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiQUFDQSxTQUFRLGFBQVk7QUFDcEIsU0FBUSxtQkFBa0I7QUFFMUIsSUFBSTtBQUNKLElBQUk7QUFDSixJQUFJO0FBRUosU0FBUyxlQUFlQSxLQUFRO0FBQzVCLE1BQUksaUJBQWlCLElBQUksY0FBYyxlQUFlO0FBRXRELE1BQUksbUJBQW1CLE1BQU07QUFDekIsbUJBQWUsT0FBTztBQUFBLEVBQzFCO0FBRUEsUUFBTSxRQUFRLGdCQUFnQixjQUFjLElBQUk7QUFDaEQsTUFBSSxVQUFVLFFBQVEsTUFBTSxnQkFBZ0Isc0JBQXNCO0FBQzlELElBQUFBLElBQUcsTUFBTSxzQkFBc0I7QUFDL0I7QUFBQSxFQUNKO0FBQ0EsTUFBSSxnQkFBZ0IsaUJBQWlCLElBQUksRUFBRSxXQUFXLEdBQUc7QUFDckQsSUFBQUEsSUFBRyxNQUFNLHNCQUFzQjtBQUMvQjtBQUFBLEVBQ0o7QUFHQSxRQUFNLHNCQUFzQixJQUFJLGNBQWMs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
