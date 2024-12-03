const analyzeArray = require("../scripts/analyzeArray");

describe("Analyze array tests:", () => {
  test("Returns correct values for array of numbers", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test("Handles array with decimal numbers", () => {
    expect(analyzeArray([1.5, 2.7, 3.2, 4.1, 5.9])).toEqual({
      average: 3,
      min: 1.5,
      max: 5.9,
      length: 5,
    });
  });

  test("Handles array with string numbers", () => {
    expect(analyzeArray(["1", "2", "3", "4", "5"])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test("Handles array with mixed number types", () => {
    expect(analyzeArray([1, "2", 3.5, "4.2", 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  test("Handles array with negative numbers", () => {
    expect(analyzeArray([-1, -2, -3, -4, -5])).toEqual({
      average: -3,
      min: -5,
      max: -1,
      length: 5,
    });
  });

  test("Handles array with mixed positive and negative numbers", () => {
    expect(analyzeArray([-5, 0, 5, 10, -10])).toEqual({
      average: 0,
      min: -10,
      max: 10,
      length: 5,
    });
  });

  test("Returns null for empty array", () => {
    expect(analyzeArray([])).toBeNull();
  });

  test("Returns null for non-array input", () => {
    expect(analyzeArray("not an array")).toBeNull();
  });

  test("Returns null for array with non-numeric values", () => {
    expect(analyzeArray([1, 2, "three", 4, 5])).toBeNull();
  });


  test("Handles single element array", () => {
    expect(analyzeArray([42])).toEqual({
      average: 42,
      min: 42,
      max: 42,
      length: 1,
    });
  });
});
