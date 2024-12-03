function capitalize(string) {
  if (!(typeof string === "string")) {
    console.error("Wrong parameter. Must be string");
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;
