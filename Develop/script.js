// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// as this is written right now, the box would return "nice", but if run with executePassword() then the box just reads the first randomly generated letter/number/symbol, why?
function generatePassword() {
  charType();
  // executePassword();
  return "nice"
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


//this needs both a check to make sure that the password is within the parameters, and a check to make sure that the user didn't answer no to all of these (could build an if else statement that asks "Lower Case Letters" "upper Case Letters? and "numbers and if the user said no to the first three, then it would be implied that the pw would be all special characters)
function charType() {
  charLen = window.prompt("Password length?");
  charTypeLowercase = window.confirm("Lower Case Letters?");
  charTypeUppercase = window.confirm("Upper Case Letters?");
  charTypeNumeral = window.confirm("Numbers?");
  charTypeSpecial = window.confirm("Special Characters?");
  if (charLen < 8 || charLen > 128 || charLen === NaN) {
    window.alert("Refresh page and try again with a number between 8 and 128")
  } else {
    if (charTypeLowercase === false && charTypeUppercase === false && charTypeNumeral === false && charTypeSpecial === false) {
      window.alert("One of these must be true, refresh page to try again")
    } else {
      concatChar()
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
  console.log(splitCharBank)
}


//how do I store this recursively into a variable that I can pring into something other than the console?
function executePassword() {
  for (var i = 0; i < charLen; i++) {
    var charTypeLenRandom = Math.floor(Math.random() * 4);
    var charTypeRandom = Math.floor(Math.random() * 5);
    return ((charBank[charTypeLenRandom])[charTypeRandom]);
  }
}



// try adding += store in a new variable in the above iteration: 
// if (alphabetNumericCharacters.includes(key)) {
//     for (var i = 0; i < elements.length; i++) {
//       elements[i].textContent += event.key;
//     }
//   }



// does this return true?
// function generatePassword() {
//   var testReturn = window.prompt("test")
//   return testReturn;
// }

// prompts for criteria
// - length 8 to 128
// - character types
// --lowercase, uppercase, numeric, and/or special characters
// --character type validated??/one character type must be selected
// - either displayed as a prompt or in the text box




//don't touch this code, it's here to stay
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//don't touch this code YET, what's an event listener??
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
