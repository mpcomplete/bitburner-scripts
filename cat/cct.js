import { NetscriptExtension } from "/libs/NetscriptExtension";
function isPrimeNumberNotOptimized(input) {
  if (input === 2) {
    return true;
  }
  if (input <= 1 || input % 2 === 0) {
    return false;
  }
  const squareRootOfInput = Math.sqrt(input);
  for (let i = 3; i <= squareRootOfInput; i += 2) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}
function isPrimeNumber(input) {
  if (input === 2 || input === 3) {
    return true;
  }
  if (input <= 1 || input % 2 === 0 || input % 3 === 0) {
    return false;
  }
  const squareRootOfInput = Math.sqrt(input);
  for (let potentialPrimeInFormOf6kMinus1 = 5; potentialPrimeInFormOf6kMinus1 <= squareRootOfInput; potentialPrimeInFormOf6kMinus1 += 6) {
    if (input % potentialPrimeInFormOf6kMinus1 === 0 || input % (potentialPrimeInFormOf6kMinus1 + 2) === 0) {
      return false;
    }
  }
  return true;
}
function findLargestPrimeFactor(input) {
  let largestPrime = -1;
  while (input % 2 === 0) {
    largestPrime = 2;
    input /= 2;
  }
  while (input % 3 === 0) {
    largestPrime = 3;
    input /= 3;
  }
  const squareRootOfInput = Math.sqrt(input);
  for (let potentialPrimeInFormOf6kMinus1 = 5; potentialPrimeInFormOf6kMinus1 <= squareRootOfInput; potentialPrimeInFormOf6kMinus1 += 6) {
    while (input % potentialPrimeInFormOf6kMinus1 === 0) {
      largestPrime = potentialPrimeInFormOf6kMinus1;
      input /= potentialPrimeInFormOf6kMinus1;
    }
    while (input % (potentialPrimeInFormOf6kMinus1 + 2) === 0) {
      largestPrime = potentialPrimeInFormOf6kMinus1 + 2;
      input /= potentialPrimeInFormOf6kMinus1 + 2;
    }
  }
  if (input > 4) {
    largestPrime = input;
  }
  return largestPrime;
}
var ContractType = /* @__PURE__ */ ((ContractType2) => {
  ContractType2[ContractType2["Find Largest Prime Factor"] = 0] = "Find Largest Prime Factor";
  ContractType2[ContractType2["Subarray with Maximum Sum"] = 1] = "Subarray with Maximum Sum";
  ContractType2[ContractType2["Total Ways to Sum"] = 2] = "Total Ways to Sum";
  ContractType2[ContractType2["Total Ways to Sum II"] = 3] = "Total Ways to Sum II";
  ContractType2[ContractType2["Spiralize Matrix"] = 4] = "Spiralize Matrix";
  ContractType2[ContractType2["Array Jumping Game"] = 5] = "Array Jumping Game";
  ContractType2[ContractType2["Array Jumping Game II"] = 6] = "Array Jumping Game II";
  ContractType2[ContractType2["Merge Overlapping Intervals"] = 7] = "Merge Overlapping Intervals";
  ContractType2[ContractType2["Generate IP Addresses"] = 8] = "Generate IP Addresses";
  ContractType2[ContractType2["Algorithmic Stock Trader I"] = 9] = "Algorithmic Stock Trader I";
  ContractType2[ContractType2["Algorithmic Stock Trader II"] = 10] = "Algorithmic Stock Trader II";
  ContractType2[ContractType2["Algorithmic Stock Trader III"] = 11] = "Algorithmic Stock Trader III";
  ContractType2[ContractType2["Algorithmic Stock Trader IV"] = 12] = "Algorithmic Stock Trader IV";
  ContractType2[ContractType2["Minimum Path Sum in a Triangle"] = 13] = "Minimum Path Sum in a Triangle";
  ContractType2[ContractType2["Unique Paths in a Grid I"] = 14] = "Unique Paths in a Grid I";
  ContractType2[ContractType2["Unique Paths in a Grid II"] = 15] = "Unique Paths in a Grid II";
  ContractType2[ContractType2["Shortest Path in a Grid"] = 16] = "Shortest Path in a Grid";
  ContractType2[ContractType2["Sanitize Parentheses in Expression"] = 17] = "Sanitize Parentheses in Expression";
  ContractType2[ContractType2["Find All Valid Math Expressions"] = 18] = "Find All Valid Math Expressions";
  ContractType2[ContractType2["HammingCodes: Integer to Encoded Binary"] = 19] = "HammingCodes: Integer to Encoded Binary";
  ContractType2[ContractType2["HammingCodes: Encoded Binary to Integer"] = 20] = "HammingCodes: Encoded Binary to Integer";
  ContractType2[ContractType2["Proper 2-Coloring of a Graph"] = 21] = "Proper 2-Coloring of a Graph";
  ContractType2[ContractType2["Compression I: RLE Compression"] = 22] = "Compression I: RLE Compression";
  ContractType2[ContractType2["Compression II: LZ Decompression"] = 23] = "Compression II: LZ Decompression";
  ContractType2[ContractType2["Compression III: LZ Compression"] = 24] = "Compression III: LZ Compression";
  ContractType2[ContractType2["Encryption I: Caesar Cipher"] = 25] = "Encryption I: Caesar Cipher";
  ContractType2[ContractType2["Encryption II: Vigen\xE8re Cipher"] = 26] = "Encryption II: Vigen\xE8re Cipher";
  return ContractType2;
})(ContractType || {});
function contractTypeToString(contractType) {
  return ContractType[contractType];
}
let nsx;
function main(ns) {
  nsx = new NetscriptExtension(ns);
  ns.disableLog("ALL");
  ns.clearLog();
  ns.tail();
  nsx.scanBFS("home", (host) => {
    const filenames = ns.ls(host.hostname, ".cct");
    filenames.forEach((filename) => {
      const contractType = ns.codingcontract.getContractType(filename, host.hostname);
      switch (contractType) {
        case contractTypeToString(0 /* Find Largest Prime Factor */): {
          const input = ns.codingcontract.getData(filename, host.hostname);
          ns.print(`Input: ${input}`);
          const output = findLargestPrimeFactor(input);
          ns.print(`Output: ${output}`);
          const result = ns.codingcontract.attempt(output, filename, host.hostname);
          ns.print(result !== "" ? `Success. Reward: ${result}` : "Fail");
          break;
        }
      }
    });
  });
}
export {
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NjdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtOU30gZnJvbSBcIkBuc1wiO1xyXG5pbXBvcnQge05ldHNjcmlwdEV4dGVuc2lvbn0gZnJvbSBcIi9saWJzL05ldHNjcmlwdEV4dGVuc2lvblwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIE5vdCBvcHRpbWl6ZWRcclxuICpcclxuICogQHBhcmFtIGlucHV0XHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbmZ1bmN0aW9uIGlzUHJpbWVOdW1iZXJOb3RPcHRpbWl6ZWQoaW5wdXQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGlucHV0ID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXQgPD0gMSB8fCBpbnB1dCAlIDIgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzcXVhcmVSb290T2ZJbnB1dCA9IE1hdGguc3FydChpbnB1dCk7XHJcbiAgICBmb3IgKGxldCBpID0gMzsgaSA8PSBzcXVhcmVSb290T2ZJbnB1dDsgaSArPSAyKSB7XHJcbiAgICAgICAgaWYgKGlucHV0ICUgaSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuZnVuY3Rpb24gaXNQcmltZU51bWJlcihpbnB1dDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoaW5wdXQgPT09IDIgfHwgaW5wdXQgPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChpbnB1dCA8PSAxIHx8IGlucHV0ICUgMiA9PT0gMCB8fCBpbnB1dCAlIDMgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzcXVhcmVSb290T2ZJbnB1dCA9IE1hdGguc3FydChpbnB1dCk7XHJcbiAgICAvLyBBbGwgcHJpbWVzIGdyZWF0ZXIgdGhhbiAzIGFyZSBvZiB0aGUgZm9ybSA2a1x1MDBCMTFcclxuICAgIC8vIFRoaXMgbG9vcCByZXByZXNlbnQgYWxsIG51bWJlcnMgZ3JlYXRlciB0aGFuIG9yIGVxdWFscyB0byA1IGFuZCBpbiB0aGUgZm9ybSBvZiA2ay0xXHJcbiAgICBmb3IgKGxldCBwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgPSA1OyBwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgPD0gc3F1YXJlUm9vdE9mSW5wdXQ7IHBvdGVudGlhbFByaW1lSW5Gb3JtT2Y2a01pbnVzMSArPSA2KSB7XHJcbiAgICAgICAgaWYgKCgoaW5wdXQgJSBwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEpID09PSAwKSB8fCAoKGlucHV0ICUgKHBvdGVudGlhbFByaW1lSW5Gb3JtT2Y2a01pbnVzMSArIDIpKSA9PT0gMCkpIHtcclxuICAgICAgICAgICAgLy8gSW5wdXQgaXMgYSBjb21wb3NpdGUgbnVtYmVyIHdoaWNoIGlzIGEgcHJvZHVjdCBvZiBwcmltZXMgZ3JlYXRlciB0aGFuIDMuIEl0cyBwcmltZSBmYWN0b3IocykgaXMvYXJlXHJcbiAgICAgICAgICAgIC8vIChwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEpIG9yIChwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgKyAyKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRMYXJnZXN0UHJpbWVGYWN0b3IoaW5wdXQ6IG51bWJlcikge1xyXG4gICAgbGV0IGxhcmdlc3RQcmltZSA9IC0xO1xyXG4gICAgd2hpbGUgKGlucHV0ICUgMiA9PT0gMCkge1xyXG4gICAgICAgIGxhcmdlc3RQcmltZSA9IDI7XHJcbiAgICAgICAgaW5wdXQgLz0gMjtcclxuICAgIH1cclxuICAgIHdoaWxlIChpbnB1dCAlIDMgPT09IDApIHtcclxuICAgICAgICBsYXJnZXN0UHJpbWUgPSAzO1xyXG4gICAgICAgIGlucHV0IC89IDM7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzcXVhcmVSb290T2ZJbnB1dCA9IE1hdGguc3FydChpbnB1dCk7XHJcbiAgICBmb3IgKGxldCBwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgPSA1OyBwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgPD0gc3F1YXJlUm9vdE9mSW5wdXQ7IHBvdGVudGlhbFByaW1lSW5Gb3JtT2Y2a01pbnVzMSArPSA2KSB7XHJcbiAgICAgICAgd2hpbGUgKGlucHV0ICUgcG90ZW50aWFsUHJpbWVJbkZvcm1PZjZrTWludXMxID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxhcmdlc3RQcmltZSA9IHBvdGVudGlhbFByaW1lSW5Gb3JtT2Y2a01pbnVzMTtcclxuICAgICAgICAgICAgaW5wdXQgLz0gcG90ZW50aWFsUHJpbWVJbkZvcm1PZjZrTWludXMxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoaW5wdXQgJSAocG90ZW50aWFsUHJpbWVJbkZvcm1PZjZrTWludXMxICsgMikgPT09IDApIHtcclxuICAgICAgICAgICAgbGFyZ2VzdFByaW1lID0gcG90ZW50aWFsUHJpbWVJbkZvcm1PZjZrTWludXMxICsgMjtcclxuICAgICAgICAgICAgaW5wdXQgLz0gKHBvdGVudGlhbFByaW1lSW5Gb3JtT2Y2a01pbnVzMSArIDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpbnB1dCA+IDQpIHtcclxuICAgICAgICBsYXJnZXN0UHJpbWUgPSBpbnB1dDtcclxuICAgIH1cclxuICAgIHJldHVybiBsYXJnZXN0UHJpbWU7XHJcbn1cclxuXHJcbmVudW0gQ29udHJhY3RUeXBlIHtcclxuICAgIC8vIG5vaW5zcGVjdGlvbiBKU05vbkFTQ0lJTmFtZXNcclxuICAgIFwiRmluZCBMYXJnZXN0IFByaW1lIEZhY3RvclwiLFxyXG4gICAgXCJTdWJhcnJheSB3aXRoIE1heGltdW0gU3VtXCIsXHJcbiAgICBcIlRvdGFsIFdheXMgdG8gU3VtXCIsXHJcbiAgICBcIlRvdGFsIFdheXMgdG8gU3VtIElJXCIsXHJcbiAgICBcIlNwaXJhbGl6ZSBNYXRyaXhcIixcclxuICAgIFwiQXJyYXkgSnVtcGluZyBHYW1lXCIsXHJcbiAgICBcIkFycmF5IEp1bXBpbmcgR2FtZSBJSVwiLFxyXG4gICAgXCJNZXJnZSBPdmVybGFwcGluZyBJbnRlcnZhbHNcIixcclxuICAgIFwiR2VuZXJhdGUgSVAgQWRkcmVzc2VzXCIsXHJcbiAgICBcIkFsZ29yaXRobWljIFN0b2NrIFRyYWRlciBJXCIsXHJcbiAgICBcIkFsZ29yaXRobWljIFN0b2NrIFRyYWRlciBJSVwiLFxyXG4gICAgXCJBbGdvcml0aG1pYyBTdG9jayBUcmFkZXIgSUlJXCIsXHJcbiAgICBcIkFsZ29yaXRobWljIFN0b2NrIFRyYWRlciBJVlwiLFxyXG4gICAgXCJNaW5pbXVtIFBhdGggU3VtIGluIGEgVHJpYW5nbGVcIixcclxuICAgIFwiVW5pcXVlIFBhdGhzIGluIGEgR3JpZCBJXCIsXHJcbiAgICBcIlVuaXF1ZSBQYXRocyBpbiBhIEdyaWQgSUlcIixcclxuICAgIFwiU2hvcnRlc3QgUGF0aCBpbiBhIEdyaWRcIixcclxuICAgIFwiU2FuaXRpemUgUGFyZW50aGVzZXMgaW4gRXhwcmVzc2lvblwiLFxyXG4gICAgXCJGaW5kIEFsbCBWYWxpZCBNYXRoIEV4cHJlc3Npb25zXCIsXHJcbiAgICBcIkhhbW1pbmdDb2RlczogSW50ZWdlciB0byBFbmNvZGVkIEJpbmFyeVwiLFxyXG4gICAgXCJIYW1taW5nQ29kZXM6IEVuY29kZWQgQmluYXJ5IHRvIEludGVnZXJcIixcclxuICAgIFwiUHJvcGVyIDItQ29sb3Jpbmcgb2YgYSBHcmFwaFwiLFxyXG4gICAgXCJDb21wcmVzc2lvbiBJOiBSTEUgQ29tcHJlc3Npb25cIixcclxuICAgIFwiQ29tcHJlc3Npb24gSUk6IExaIERlY29tcHJlc3Npb25cIixcclxuICAgIFwiQ29tcHJlc3Npb24gSUlJOiBMWiBDb21wcmVzc2lvblwiLFxyXG4gICAgXCJFbmNyeXB0aW9uIEk6IENhZXNhciBDaXBoZXJcIixcclxuICAgIFwiRW5jcnlwdGlvbiBJSTogVmlnZW5cdTAwRThyZSBDaXBoZXJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250cmFjdFR5cGVUb1N0cmluZyhjb250cmFjdFR5cGU6IENvbnRyYWN0VHlwZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gQ29udHJhY3RUeXBlW2NvbnRyYWN0VHlwZV07XHJcbn1cclxuXHJcbmxldCBuc3g6IE5ldHNjcmlwdEV4dGVuc2lvbjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWluKG5zOiBOUyk6IHZvaWQge1xyXG4gICAgbnN4ID0gbmV3IE5ldHNjcmlwdEV4dGVuc2lvbihucyk7XHJcblxyXG4gICAgbnMuZGlzYWJsZUxvZyhcIkFMTFwiKTtcclxuICAgIG5zLmNsZWFyTG9nKCk7XHJcbiAgICBucy50YWlsKCk7XHJcblxyXG4gICAgbnN4LnNjYW5CRlMoXCJob21lXCIsIGhvc3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGVuYW1lcyA9IG5zLmxzKGhvc3QuaG9zdG5hbWUsIFwiLmNjdFwiKTtcclxuICAgICAgICBmaWxlbmFtZXMuZm9yRWFjaChmaWxlbmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0VHlwZSA9IG5zLmNvZGluZ2NvbnRyYWN0LmdldENvbnRyYWN0VHlwZShmaWxlbmFtZSwgaG9zdC5ob3N0bmFtZSk7XHJcbiAgICAgICAgICAgIC8vIG5zLnByaW50KGAke2hvc3QuaG9zdG5hbWV9IC0gJHtmaWxlbmFtZX0gLSAke2NvbnRyYWN0VHlwZX1gKTtcclxuICAgICAgICAgICAgLy8gbnMucHJpbnQobnMuY29kaW5nY29udHJhY3QuZ2V0RGVzY3JpcHRpb24oZmlsZW5hbWUsIGhvc3QuaG9zdG5hbWUpKTtcclxuICAgICAgICAgICAgc3dpdGNoIChjb250cmFjdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY29udHJhY3RUeXBlVG9TdHJpbmcoQ29udHJhY3RUeXBlW1wiRmluZCBMYXJnZXN0IFByaW1lIEZhY3RvclwiXSk6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IG5zLmNvZGluZ2NvbnRyYWN0LmdldERhdGEoZmlsZW5hbWUsIGhvc3QuaG9zdG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5zLnByaW50KGBJbnB1dDogJHtpbnB1dH1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBmaW5kTGFyZ2VzdFByaW1lRmFjdG9yKGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBucy5wcmludChgT3V0cHV0OiAke291dHB1dH1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBucy5jb2Rpbmdjb250cmFjdC5hdHRlbXB0KG91dHB1dCwgZmlsZW5hbWUsIGhvc3QuaG9zdG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5zLnByaW50KHJlc3VsdCAhPT0gXCJcIiA/IGBTdWNjZXNzLiBSZXdhcmQ6ICR7cmVzdWx0fWAgOiBcIkZhaWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICJBQUNBLFNBQVEsMEJBQXlCO0FBUWpDLFNBQVMsMEJBQTBCLE9BQXdCO0FBQ3ZELE1BQUksVUFB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
