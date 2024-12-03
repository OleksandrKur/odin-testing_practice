function reverseString(string) {
  try {
    if (typeof string !== "string") {
      throw new Error("Please provide a string");
    }
    return string.split("").reverse().join("");
  } catch (error) {
    console.error(error);
    return "";
  }
}

module.exports = reverseString;
