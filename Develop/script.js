// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// as this is written right now, the box would return "nice", but if run with executePassword() then the box just reads the first randomly generated letter/number/symbol, why?
function generatePassword() {
  charType();
  concatChar();
  executePassword();
  return password;
}

var charLen
var charTypeLowercase
var charTypeUppercase
var charTypeNumeral
var charTypeSpecial
var charBank = ""
var bankLowercase = "abcdefghijklmnopqrstuvwxyz"
var bankUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var bankSpecial = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\""
var bankNumber = "1234567890"
var splitCharBank
var password = ""

//debugging: if parameters aren't met, it still generates a password! Also need to fix the NaN check. Also need to fix looping if isn't true
function charType() {
  charLen = window.prompt("Password length?");
  charTypeLowercase = window.confirm("Lower Case Letters?");
  charTypeUppercase = window.confirm("Upper Case Letters?");
  charTypeNumeral = window.confirm("Numbers?");
  charTypeSpecial = window.confirm("Special Characters?");
  if (charLen < 8 || charLen > 128 || charLen === NaN) {
    window.alert("Refresh page and try again with a number between 8 and 128");
  } else {
    if (charTypeLowercase === false && charTypeUppercase === false && charTypeNumeral === false && charTypeSpecial === false) {
      window.alert("One of these must be true, refresh page to try again");
    }
  }
}

function concatChar() {
  if (charTypeUppercase) {
    charBank += bankUppercase
  }
  if (charTypeLowercase) {
    charBank += bankLowercase
  }
  if (charTypeSpecial) {
    charBank += bankSpecial
  }
  if (charTypeNumeral) {
    charBank += bankNumber
  }
  splitCharBank = charBank.split(``)
}

function executePassword() {
  for (var i = 0; i < charLen; i++) {
    password += splitCharBank[Math.floor(Math.random() * splitCharBank.length)];
  }
}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
