const reverseString = require("../scripts/reverseString.js");

describe("Reverse String tests:", () => {
  test("Reverses a simple string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("Reverses a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test("Reverses a string with special characters", () => {
    expect(reverseString("hello, world!")).toBe("!dlrow ,olleh");
  });

  test("Handles empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("Handles single character string", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("Reverses a string with numbers", () => {
    expect(reverseString("h3ll0")).toBe("0ll3h");
  });

  test("Preserves uppercase and lowercase", () => {
    expect(reverseString("HeLLo")).toBe("oLLeH");
  });
});
