function analyzeArray(array) {
  if (!Array.isArray(array)) {
    console.error("Array must be provided as a parameter");
    return null;
  }
  if (!array.every((item) => !isNaN(Number(item)))) {
    console.error(
      "Array with numbers or numerical strings must must be provided"
    );
    return null;
  }
  if (array.length === 0) {
    console.error("Array must not be empty");
    return null;
  }
  let length = array.length;
  let average = Math.round(
    array.reduce(
      (accumulator, currentValue) => (accumulator += Number(currentValue)),
      0
    ) / length
  );
  let max = Math.max(...array);
  let min = Math.min(...array);
  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
