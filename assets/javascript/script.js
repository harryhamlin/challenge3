//variables all defined globally here, the first variable being an query selector for the button, the next 5 variables being the user inputs, the charBank variable being the concatenated character bank set to null, the splitCharBank being the characterbank split into an array, and the password variable being the concatenated password set to null
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


//this function prompts the user for all relevant inputs and assigning them to a variable. the if statements allow the process to be killed if parameters aren't met thus making the turn around time for the user faster
function charType() {
  charLen = window.prompt("Password length? (must be between 8 and 128 inclusive)");
  if (charLen < 8 || charLen > 128) {
    return;
  } else if (Number.isFinite(+charLen) === false || Number.isInteger(+charLen) === false) {
    return;
  } else {
    charTypeLowercase = window.confirm("Lower Case Letters?");
    charTypeUppercase = window.confirm("Upper Case Letters?");
    charTypeNumeral = window.confirm("Numbers?");
    charTypeSpecial = window.confirm("Special Characters?");
    if (charTypeLowercase === false && charTypeUppercase === false && charTypeNumeral === false && charTypeSpecial === false) {
      return;
    }
  }
}

//this function adds character banks to the aggergate charBank based on user inputs and then turns that bank into an array using the .split(``) method
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

//this function loops a randomizer to generate the password 1 character at a time, concatenating it to the password variable. the randomizer selects a random number in between 0 (inclusive) and the length of the splitCharBank array (exclusive of the highest number) and generates a random number which then the nth element from the array is concatenated onto the password variable. this loops as for as many times as the length of the password as selected by the user
function executePassword() {
  for (var i = 0; i < charLen; i++) {
    password += splitCharBank[Math.floor(Math.random() * splitCharBank.length)];
  }
}

//this function runs the above functions secondary to the user clicking the generate button (prompts, creating the character banks, and executing the password as described above) and then runs a check to ensure parameters are met using this if statement. if the password is too short or to long, a message is printed in the text area requesting a specific length and showing the user's input. if the password input is NaN or not an integer, a Number.isFinite method and Number.isInteger checks to see if the input is NaN or a non-integer and if so prints a message in the text area requesting an integer be input along with the user's input (the + converts the charLen variable to an number to be checked). the final else if statement checks to see if at least one of the character inputs was returned true, and if all were returned false, then a message is printed in the main text area requesting that at least one input be returned true. if all requirements are met, then the password is returned
function generatePassword() {
  charType();
  concatChar();
  executePassword();
  if (charLen < 8 || charLen > 128) {
    return "Input 'Password Length' must be an integer between 8 and 128, you input " + charLen;
  } else if (Number.isFinite(+charLen) === false || Number.isInteger(+charLen) === false) {
    return "Input 'Password Length' must be an integer. You input " + charLen;
  } else if (charTypeLowercase === false && charTypeUppercase === false && charTypeNumeral === false && charTypeSpecial === false) { 
    return "No character type selected, at least one character type must be confirmed";
  } else {
    return password
  }
}

//this is the function running the main gengerate password, and using a queryselector to return the password (or other error messages noted above). the password being set to "" at the start of the function clears the textarea before each run of the function
function writePassword() {
  password = "";
  var passwordResult = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordResult;
}

//this is the event listener that runs the above writePassword function when the button is clicked
generateBtn.addEventListener("click", writePassword);
