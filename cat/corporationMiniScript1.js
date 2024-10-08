function autocomplete(data, flags) {
  return ["--divisionName", "Agriculture"];
}
var CityName = /* @__PURE__ */ ((CityName2) => {
  CityName2["Aevum"] = "Aevum";
  CityName2["Chongqing"] = "Chongqing";
  CityName2["Sector12"] = "Sector-12";
  CityName2["NewTokyo"] = "New Tokyo";
  CityName2["Ishima"] = "Ishima";
  CityName2["Volhaven"] = "Volhaven";
  return CityName2;
})(CityName || {});
const cities = [
  "Sector-12" /* Sector12 */,
  "Aevum" /* Aevum */,
  "Chongqing" /* Chongqing */,
  "New Tokyo" /* NewTokyo */,
  "Ishima" /* Ishima */,
  "Volhaven" /* Volhaven */
];
const defaultConfig = [
  ["divisionName", "Agriculture"]
];
async function main(ns) {
  const config = ns.flags(defaultConfig);
  const divisionName = config.divisionName;
  while (true) {
    let finish = true;
    for (const city of cities) {
      const office = ns.corporation.getOffice(divisionName, city);
      if (office.avgEnergy < office.maxEnergy - 0.5) {
        ns.corporation.buyTea(divisionName, city);
        finish = false;
      }
      if (office.avgMorale < office.maxMorale - 0.5) {
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
export {
  autocomplete,
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uTWluaVNjcmlwdDEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIG5vaW5zcGVjdGlvbiBEdXBsaWNhdGVkQ29kZVxyXG5pbXBvcnQge0F1dG9jb21wbGV0ZURhdGEsIE5TfSBmcm9tIFwiQG5zXCI7XHJcbmltcG9ydCB7TmV0c2NyaXB0RmxhZ3NTY2hlbWF9IGZyb20gXCIvbGlicy9OZXRzY3JpcHRFeHRlbnNpb25cIjtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9jb21wbGV0ZShkYXRhOiBBdXRvY29tcGxldGVEYXRhLCBmbGFnczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gW1wiLS1kaXZpc2lvbk5hbWVcIiwgXCJBZ3JpY3VsdHVyZVwiXTtcclxufVxyXG5cclxuZW51bSBDaXR5TmFtZSB7XHJcbiAgICBBZXZ1bSA9IFwiQWV2dW1cIixcclxuICAgIENob25ncWluZyA9IFwiQ2hvbmdxaW5nXCIsXHJcbiAgICBTZWN0b3IxMiA9IFwiU2VjdG9yLTEyXCIsXHJcbiAgICBOZXdUb2t5byA9IFwiTmV3IFRva3lvXCIsXHJcbiAgICBJc2hpbWEgPSBcIklzaGltYVwiLFxyXG4gICAgVm9saGF2ZW4gPSBcIlZvbGhhdmVuXCIsXHJcbn1cclxuXHJcbmNvbnN0IGNpdGllczogQ2l0eU5hbWVbXSA9IFtcclxuICAgIENpdHlOYW1lLlNlY3RvcjEyLFxyXG4gICAgQ2l0eU5hbWUuQWV2dW0sXHJcbiAgICBDaXR5TmFtZS5DaG9uZ3FpbmcsXHJcbiAgICBDaXR5TmFtZS5OZXdUb2t5byxcclxuICAgIENpdHlOYW1lLklzaGltYSxcclxuICAgIENpdHlOYW1lLlZvbGhhdmVuXHJcbl07XHJcblxyXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBOZXRzY3JpcHRGbGFnc1NjaGVtYSA9IFtcclxuICAgIFtcImRpdmlzaW9uTmFtZVwiLCBcIkFncmljdWx0dXJlXCJdLFxyXG5dO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4obnM6IE5TKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBjb25maWcgPSBucy5mbGFncyhkZWZhdWx0Q29uZmlnKTtcclxuICAgIGNvbnN0IGRpdmlzaW9uTmFtZSA9IGNvbmZpZy5kaXZpc2lvbk5hbWUgYXMgc3RyaW5nO1xyXG5cclxuICAgIC8vIG5vaW5zcGVjdGlvbiBEdXBsaWNhdGVkQ29kZVxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBsZXQgZmluaXNoID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbk5hbWUsIGNpdHkpO1xyXG4gICAgICAgICAgICBpZiAob2ZmaWNlLmF2Z0VuZXJneSA8IG9mZmljZS5tYXhFbmVyZ3kgLSAwLjUpIHtcclxuICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmJ1eVRlYShkaXZpc2lvbk5hbWUsIGNpdHkpO1xyXG4gICAgICAgICAgICAgICAgZmluaXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9mZmljZS5hdmdNb3JhbGUgPCBvZmZpY2UubWF4TW9yYWxlIC0gMC41KSB7XHJcbiAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi50aHJvd1BhcnR5KGRpdmlzaW9uTmFtZSwgY2l0eSwgNTAwMDAwKTtcclxuICAgICAgICAgICAgICAgIGZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaW5pc2gpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IG5zLmNvcnBvcmF0aW9uLm5leHRVcGRhdGUoKTtcclxuICAgIH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiQUFLTyxTQUFTLGFBQWEsTUFBd0IsT0FBMkI7QUFDNUUsU0FBTyxDQUFDLGtCQUFrQixhQUFhO0FBQzNDO0FBRUEsSUFBSyxXQUFMLGtCQUFLQSxjQUFMO0FBQ0ksRUFBQUEsVUFBQSxXQUFRO0FBQ1IsRUFBQUEsVUFBQSxlQUFZO0FBQ1osRUFBQUEsVUFBQSxjQUFXO0FBQ1gsRUFBQUEsVUFBQSxjQUFXO0FBQ1gsRUFBQUEsVUFBQSxZQUFTO0FBQ1QsRUFBQUEsVUFBQSxjQUFXO0FBTlYsU0FBQUE7QUFBQSxHQUFBO0FBU0wsTUFBTSxTQUFxQjtBQUFBLEVBQ3ZCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDSjtBQUVBLE1BQU0sZ0JBQXNDO0FBQUEsRUFDeEMsQ0FBQyxnQkFBZ0IsYUFBYTtBQUNsQztBQUVBLGVBQXNCLEtBQUssSUFBdUI7QUFDOUMsUUFBTSxTQUFTLEdBQUcsTUFBTSxhQUFhO0FBQ3JDLFFBQU0sZUFBZSxPQUFPO0FBRzVCLFNBQU8sTUFBTTtBQUNULFFBQUksU0FBUztBQUNiLGVBQVcsUUFBUSxRQUFRO0FBQ3ZCLFlBQU0sU0FBUyxHQUFHLFlBQVksVUFBVSxjQUFjLElBQUk7QUFDMUQsVUFBSSxPQUFPLFlBQVksT0FBTyxZQUFZLEtBQUs7QUFDM0MsV0FBRyxZQUFZLE9BQU8sY0FBYyxJQUFJO0FBQ3hDLGlCQUFTO0FBQUEsTUFDYjtBQUNBLFVBQUksT0FBTyxZQUFZLE9BQU8sWUFBWSxLQUFLO0FBQzNDLFdBQUcsWUFBWSxXQUFXLGNBQWMsTUFBTSxHQUFNO0FBQ3BELGlCQUFTO0FBQUEsTUFDYjtBQUFBLElBQ0o7QUFDQSxRQUFJLFFBQVE7QUFDUjtBQUFBLElBQ0o7QUFDQSxVQUFNLEdBQUcsWUFBWSxXQUFXO0FBQUEsRUFDcEM7QUFDSjsiLAogICJuYW1lcyI6IFsiQ2l0eU5hbWUiXQp9Cg==
