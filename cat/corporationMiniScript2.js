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
async function stockMaterials(ns, divisionName, cities2, materials) {
  while (true) {
    let finish = true;
    for (const city of cities2) {
      for (const material of materials) {
        const storedAmount = ns.corporation.getMaterial(divisionName, city, material.name).stored;
        if (storedAmount === material.amount) {
          ns.corporation.buyMaterial(divisionName, city, material.name, 0);
          ns.corporation.sellMaterial(divisionName, city, material.name, "0", "MP");
          continue;
        }
        if (storedAmount < material.amount) {
          ns.corporation.buyMaterial(divisionName, city, material.name, (material.amount - storedAmount) / 10);
          ns.corporation.sellMaterial(divisionName, city, material.name, "0", "MP");
          finish = false;
        }
      }
    }
    if (finish) {
      break;
    }
    await ns.corporation.nextUpdate();
  }
}
async function main(ns) {
  const config = ns.flags(defaultConfig);
  const divisionName = config.divisionName;
  const option = {
    aiCores: 2114,
    hardware: 2404,
    realEstate: 124960,
    robots: 23
  };
  for (const city of cities) {
    ns.corporation.sellMaterial(divisionName, city, "Plants", "MAX", "MP");
    ns.corporation.sellMaterial(divisionName, city, "Food", "MAX", "MP");
  }
  await stockMaterials(ns, divisionName, cities, [
    { name: "AI Cores", amount: option.aiCores },
    { name: "Hardware", amount: option.hardware },
    { name: "Real Estate", amount: option.realEstate },
    { name: "Robots", amount: option.robots }
  ]);
}
export {
  autocomplete,
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uTWluaVNjcmlwdDIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIG5vaW5zcGVjdGlvbiBEdXBsaWNhdGVkQ29kZVxyXG5pbXBvcnQge0F1dG9jb21wbGV0ZURhdGEsIE5TfSBmcm9tIFwiQG5zXCI7XHJcbmltcG9ydCB7TmV0c2NyaXB0RmxhZ3NTY2hlbWF9IGZyb20gXCIvbGlicy9OZXRzY3JpcHRFeHRlbnNpb25cIjtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGZ1bmN0aW9uIGF1dG9jb21wbGV0ZShkYXRhOiBBdXRvY29tcGxldGVEYXRhLCBmbGFnczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gW1wiLS1kaXZpc2lvbk5hbWVcIiwgXCJBZ3JpY3VsdHVyZVwiXTtcclxufVxyXG5cclxuZW51bSBDaXR5TmFtZSB7XHJcbiAgICBBZXZ1bSA9IFwiQWV2dW1cIixcclxuICAgIENob25ncWluZyA9IFwiQ2hvbmdxaW5nXCIsXHJcbiAgICBTZWN0b3IxMiA9IFwiU2VjdG9yLTEyXCIsXHJcbiAgICBOZXdUb2t5byA9IFwiTmV3IFRva3lvXCIsXHJcbiAgICBJc2hpbWEgPSBcIklzaGltYVwiLFxyXG4gICAgVm9saGF2ZW4gPSBcIlZvbGhhdmVuXCIsXHJcbn1cclxuXHJcbmNvbnN0IGNpdGllczogQ2l0eU5hbWVbXSA9IFtcclxuICAgIENpdHlOYW1lLlNlY3RvcjEyLFxyXG4gICAgQ2l0eU5hbWUuQWV2dW0sXHJcbiAgICBDaXR5TmFtZS5DaG9uZ3FpbmcsXHJcbiAgICBDaXR5TmFtZS5OZXdUb2t5byxcclxuICAgIENpdHlOYW1lLklzaGltYSxcclxuICAgIENpdHlOYW1lLlZvbGhhdmVuXHJcbl07XHJcblxyXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBOZXRzY3JpcHRGbGFnc1NjaGVtYSA9IFtcclxuICAgIFtcImRpdmlzaW9uTmFtZVwiLCBcIkFncmljdWx0dXJlXCJdLFxyXG5dO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc3RvY2tNYXRlcmlhbHMoXHJcbiAgICBuczogTlMsXHJcbiAgICBkaXZpc2lvbk5hbWU6IHN0cmluZyxcclxuICAgIGNpdGllczogQ2l0eU5hbWVbXSxcclxuICAgIG1hdGVyaWFsczoge1xyXG4gICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIH1bXVxyXG4pIHtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgbGV0IGZpbmlzaCA9IHRydWU7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIG1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmVkQW1vdW50ID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbC5uYW1lKS5zdG9yZWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmVkQW1vdW50ID09PSBtYXRlcmlhbC5hbW91bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5idXlNYXRlcmlhbChkaXZpc2lvbk5hbWUsIGNpdHksIG1hdGVyaWFsLm5hbWUsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbk5hbWUsIGNpdHksIG1hdGVyaWFsLm5hbWUsIFwiMFwiLCBcIk1QXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gQnV5XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmVkQW1vdW50IDwgbWF0ZXJpYWwuYW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uYnV5TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbC5uYW1lLCAobWF0ZXJpYWwuYW1vdW50IC0gc3RvcmVkQW1vdW50KSAvIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5zZWxsTWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbC5uYW1lLCBcIjBcIiwgXCJNUFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmluaXNoKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBucy5jb3Jwb3JhdGlvbi5uZXh0VXBkYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG5zOiBOUyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgY29uZmlnID0gbnMuZmxhZ3MoZGVmYXVsdENvbmZpZyk7XHJcbiAgICBjb25zdCBkaXZpc2lvbk5hbWUgPSBjb25maWcuZGl2aXNpb25OYW1lIGFzIHN0cmluZztcclxuXHJcbiAgICBjb25zdCBvcHRpb24gPSB7XHJcbiAgICAgICAgYWlDb3JlczogMjExNCxcclxuICAgICAgICBoYXJkd2FyZTogMjQwNCxcclxuICAgICAgICByZWFsRXN0YXRlOiAxMjQ5NjAsXHJcbiAgICAgICAgcm9ib3RzOiAyMyxcclxuICAgIH07XHJcblxyXG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xyXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbk5hbWUsIGNpdHksIFwiUGxhbnRzXCIsIFwiTUFYXCIsIFwiTVBcIik7XHJcbiAgICAgICAgbnMuY29ycG9yYXRpb24uc2VsbE1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgY2l0eSwgXCJGb29kXCIsIFwiTUFYXCIsIFwiTVBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgc3RvY2tNYXRlcmlhbHMobnMsIGRpdmlzaW9uTmFtZSwgY2l0aWVzLCBbXHJcbiAgICAgICAge25hbWU6IFwiQUkgQ29yZXNcIiwgYW1vdW50OiBvcHRpb24uYWlDb3Jlc30sXHJcbiAgICAgICAge25hbWU6IFwiSGFyZHdhcmVcIiwgYW1vdW50OiBvcHRpb24uaGFyZHdhcmV9LFxyXG4gICAgICAgIHtuYW1lOiBcIlJlYWwgRXN0YXRlXCIsIGFtb3VudDogb3B0aW9uLnJlYWxFc3RhdGV9LFxyXG4gICAgICAgIHtuYW1lOiBcIlJvYm90c1wiLCBhbW91bnQ6IG9wdGlvbi5yb2JvdHN9XHJcbiAgICBdKTtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiQUFLTyxTQUFTLGFBQWEsTUFBd0IsT0FBMkI7QUFDNUUsU0FBTyxDQUFDLGtCQUFrQixhQUFhO0FBQzNDO0FBRUEsSUFBSyxXQUFMLGtCQUFLQSxjQUFMO0FBQ0ksRUFBQUEsVUFBQSxXQUFRO0FBQ1IsRUFBQUEsVUFBQSxlQUFZO0FBQ1osRUFBQUEsVUFBQSxjQUFXO0FBQ1gsRUFBQUEsVUFBQSxjQUFXO0FBQ1gsRUFBQUEsVUFBQSxZQUFTO0FBQ1QsRUFBQUEsVUFBQSxjQUFXO0FBTlYsU0FBQUE7QUFBQSxHQUFBO0FBU0wsTUFBTSxTQUFxQjtBQUFBLEVBQ3ZCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDSjtBQUVBLE1BQU0sZ0JBQXNDO0FBQUEsRUFDeEMsQ0FBQyxnQkFBZ0IsYUFBYTtBQUNsQztBQUVBLGVBQWUsZUFDWCxJQUNBLGNBQ0FDLFNBQ0EsV0FJRjtBQUNFLFNBQU8sTUFBTTtBQUNULFFBQUksU0FBUztBQUNiLGVBQVcsUUFBUUEsU0FBUTtBQUN2QixpQkFBVyxZQUFZLFdBQVc7QUFDOUIsY0FBTSxlQUFlLEdBQUcsWUFBWSxZQUFZLGNBQWMsTUFBTSxTQUFTLElBQUksRUFBRTtBQUNuRixZQUFJLGlCQUFpQixTQUFTLFFBQVE7QUFDbEMsYUFBRyxZQUFZLFlBQVksY0FBYyxNQUFNLFNBQVMsTUFBTSxDQUFDO0FBQy9ELGFBQUcsWUFBWSxhQUFhLGNBQWMsTUFBTSxTQUFTLE1BQU0sS0FBSyxJQUFJO0FBQ3hFO0FBQUEsUUFDSjtBQUVBLFlBQUksZUFBZSxTQUFTLFFBQVE7QUFDaEMsYUFBRyxZQUFZLFlBQVksY0FBYyxNQUFNLFNBQVMsT0FBTyxTQUFTLFNBQVMsZ0JBQWdCLEVBQUU7QUFDbkcsYUFBRyxZQUFZLGFBQWEsY0FBYyxNQUFNLFNBQVMsTUFBTSxLQUFLLElBQUk7QUFDeEUsbUJBQVM7QUFBQSxRQUNiO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFDQSxRQUFJLFFBQVE7QUFDUjtBQUFBLElBQ0o7QUFDQSxVQUFNLEdBQUcsWUFBWSxXQUFXO0FBQUEsRUFDcEM7QUFDSjtBQUVBLGVBQXNCLEtBQUssSUFBdUI7QUFDOUMsUUFBTSxTQUFTLEdBQUcsTUFBTSxhQUFhO0FBQ3JDLFFBQU0sZUFBZSxPQUFPO0FBRTVCLFFBQU0sU0FBUztBQUFBLElBQ1gsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBLEVBQ1o7QUFFQSxhQUFXLFFBQVEsUUFBUTtBQUN2QixPQUFHLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxPQUFPLElBQUk7QUFDckUsT0FBRyxZQUFZLGFBQWEsY0FBYyxNQUFNLFFBQVEsT0FBTyxJQUFJO0FBQUEsRUFDdkU7QUFFQSxRQUFNLGVBQWUsSUFBSSxjQUFjLFFBQVE7QUFBQSxJQUMzQyxFQUFDLE1BQU0sWUFBWSxRQUFRLE9BQU8sUUFBTztBQUFBLElBQ3pDLEVBQUMsTUFBTSxZQUFZLFFBQVEsT0FBTyxTQUFRO0FBQUEsSUFDMUMsRUFBQyxNQUFNLGVBQWUsUUFBUSxPQUFPLFdBQVU7QUFBQSxJQUMvQyxFQUFDLE1BQU0sVUFBVSxRQUFRLE9BQU8sT0FBTTtBQUFBLEVBQzFDLENBQUM7QUFDTDsiLAogICJuYW1lcyI6IFsiQ2l0eU5hbWUiLCAiY2l0aWVzIl0KfQo=
