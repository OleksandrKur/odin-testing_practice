const capitalize = require("../scripts/capitalize.js");

describe(`Capitalize tests:`, () => {
  //test of different strings
  test("Array of strings", () => {
    const strings = [
      "test",
      "string Capitalized",
      "1 string with number",
      "sTRINGWITHALLCAPSEXCEPTTHEFIRSTONE",
    ];
    const capitalStrings = [
      "Test",
      "String Capitalized",
      "1 string with number",
      "STRINGWITHALLCAPSEXCEPTTHEFIRSTONE",
    ];
    for (let i = 0; i < strings.length; i++) {
      expect(capitalize(strings[i])).toBe(capitalStrings[i]);
    }
  });
  test("Other than strings", () => {
    const values = [41421.14, true, null, [1, 2, 3, 4], undefined];
    const results = ["", "", "", "", ""];
    for (let i = 0; i < values.length; i++) {
      expect(capitalize(values[i])).toBe(results[i]);
    }
  });
});
