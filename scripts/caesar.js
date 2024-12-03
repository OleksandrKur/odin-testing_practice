// Unicode character codes for alphabet range
const UNICODE_UPPERCASE_START = "A".charCodeAt(0);
const UNICODE_UPPERCASE_END = UNICODE_UPPERCASE_START + 25;
const UNICODE_LOWERCASE_START = "a".charCodeAt(0);
const UNICODE_LOWERCASE_END = UNICODE_LOWERCASE_START + 25;

function caesarCipher(string, shiftFactor) {
  if (!(typeof string === "string")) {
    return "";
  }
  if (!(typeof shiftFactor === "number")) {
    return string;
  }
  let cipherString = string
    .split("")
    .map((letter) => {
      return shiftLetter(letter, shiftFactor);
    })
    .join("");
  return cipherString;
}

function shiftLetter(character, shiftFactor) {
  // Determine if the character is a letter and its case
  let letterCase = getLetterCase(character);
  if (!letterCase) {
    return character;
  }
  // Ensure shift factor stays within alphabet range
  shiftFactor = shiftFactor % 26;

  let charCode = character.toLowerCase().charCodeAt(0);
  let cipherLetter;

  // Handle wrapping around the alphabet when shifting
  if (charCode + shiftFactor > UNICODE_LOWERCASE_END) {
    let difference = charCode + shiftFactor - UNICODE_LOWERCASE_END;
    cipherLetter = String.fromCharCode(
      UNICODE_LOWERCASE_START + difference - 1
    );
  } else if (charCode + shiftFactor < UNICODE_LOWERCASE_START) {
    let difference = charCode + shiftFactor - UNICODE_LOWERCASE_START;
    cipherLetter = String.fromCharCode(UNICODE_LOWERCASE_END + difference + 1);
  } else {
    cipherLetter = String.fromCharCode(charCode + shiftFactor);
  }
  return letterCase === "lower" ? cipherLetter : cipherLetter.toUpperCase();
}

function getLetterCase(letter) {
  let charCode = letter.charCodeAt(0);
  if (
    charCode >= UNICODE_UPPERCASE_START &&
    charCode <= UNICODE_UPPERCASE_END
  ) {
    return "upper";
  } else if (
    charCode >= UNICODE_LOWERCASE_START &&
    charCode <= UNICODE_LOWERCASE_END
  ) {
    return "lower";
  } else {
    return false;
  }
}
console.log(caesarCipher(null));
module.exports = caesarCipher;
