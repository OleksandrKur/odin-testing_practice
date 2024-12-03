const caesarCipher = require("../scripts/caesar");

describe(`Caesar cipher tests:`, () => {
  test("Forward shift", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("Backward shift", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
  });
  test("Preserve case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("Preserve non-alphabatical characters", () => {
    expect(caesarCipher("Hello, World! 42 !@#$", 3)).toBe(
      "Khoor, Zruog! 42 !@#$"
    );
  });
  test("Wraps around multiple times with positive shift", () => {
    expect(caesarCipher("abc", 101)).toBe("xyz");
  });
  test("Wraps around multiple times with negative shift", () => {
    expect(caesarCipher("abc", -101)).toBe("def");
  });
});
