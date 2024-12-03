const calculator = require("../scripts/calculator.js");

describe(`Calculator tests:`, () => {
  //test of different strings
  test("Addition", () => {
    expect(calculator.add(5, 5)).toBe(10);
    expect(calculator.add(40, 65)).toBe(105);
    expect(calculator.add(15, 5.45)).toBeCloseTo(20.45);
    expect(calculator.add(10, -5)).toBe(5);
    expect(calculator.add(0, 7)).toBe(7);
    expect(calculator.add("5", "3")).toBe(8);
    expect(calculator.add("5", 3)).toBe(8);
    expect(calculator.add(null, 3)).toBe(3);
    expect(calculator.add({ a: "object" }, 3)).toBe(0);
  });
  test("Subtraction", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
    expect(calculator.subtract(15, 5.45)).toBeCloseTo(9.55);
    expect(calculator.subtract(10.5, 3.5)).toBeCloseTo(7);
    expect(calculator.subtract(10, -5)).toBe(15);
    expect(calculator.subtract(0, 7)).toBe(-7);
  });
  test("Multiplication", () => {
    expect(calculator.multiply(5, 5)).toBe(25);
    expect(calculator.multiply(10, 2.5)).toBe(25);
    expect(calculator.multiply(3.14, 2)).toBeCloseTo(6.28);
    expect(calculator.multiply(10, -5)).toBe(-50);
    expect(calculator.multiply(0, 7)).toBe(0);
    expect(calculator.multiply("5", "3")).toBe(15);
  });
  test("Division", () => {
    expect(calculator.divide(10, 5)).toBe(2);
    expect(calculator.divide(15, 2.5)).toBe(6);
    expect(calculator.divide(10.5, 3.5)).toBe(3);
    expect(calculator.divide(10, -2)).toBe(-5);
    expect(calculator.divide(10, 0)).toBe(Infinity);
    expect(calculator.divide(0, 7)).toBe(0);
    expect(calculator.divide(10, 3)).toBeCloseTo(3.33);
    expect(calculator.divide(15, "3")).toBe(5);
  });
});
