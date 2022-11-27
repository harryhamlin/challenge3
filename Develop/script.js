
var generateBtn = document.querySelector("#generate");
var charLen;
var charTypeLowercase;
var charTypeUppercase;
var charTypeNumeral;
var charTypeSpecial;
var charBank = "";
var bankLowercase = "abcdefghijklmnopqrstuvwxyz";
var bankUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var bankSpecial = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\";
var bankNumber = "1234567890";
var splitCharBank;
var password = "";

function charType() {
  charLen = window.prompt("Password length?");
  charTypeLowercase = window.confirm("Lower Case Letters?");
  charTypeUppercase = window.confirm("Upper Case Letters?");
  charTypeNumeral = window.confirm("Numbers?");
  charTypeSpecial = window.confirm("Special Characters?");
  console.log(Number.isFinite(charLen))
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

function generatePassword() {
  charType();
  concatChar();
  executePassword();
  if (charLen < 8 || charLen > 128 || charLen === NaN) {
    return "Input 'Password Length' must be between 8 and 128";
  } else if (Number.isFinite(charLen) === false) {
    return "Input 'Password Length' must be a number"
  } else if (charTypeLowercase === false && charTypeUppercase === false && charTypeNumeral === false && charTypeSpecial === false) {
    return "No character type selected, at least one character type must be confirmed";
  } else {
    return password
  }
}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
