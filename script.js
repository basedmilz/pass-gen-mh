// Assignment Code
var generateBtn = document.querySelector("#generate");
var ADDnum;
var ADDlow;
var ADDup;
var ADDsym;
var Final;

// Variables
nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
sym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"]
// Write password to the #password input
function writePassword() {
  // Prompts Question length
  var question = window.prompt("How long would you like your password? Min:8 Max:128");

  if (question < 8 || question > 128) {
    window.alert("Must be within specified range (8-128 characters)")
  }
  else if (question === false) {
    return;

  }
  else {
    ADDnum = window.confirm('Would you like to include numbers?')
    if (ADDnum === true) {
      window.alert("Confirmed numbers!")
    }
    ADDup = window.confirm('Would you like to include uppercase?')
    if (ADDup === true) {
      window.alert("Confirmed uppercase!")
    }
    ADDlow = window.confirm('Would you like to include lowercase?')
    if (ADDlow === true) {
      window.alert("Confirmed lowercase!")
    }
    ADDsym = window.confirm('Would you like to include symbols?')
    if (ADDsym === true) {
      window.alert("Confirmed symbols!")
    }
  }
  if (ADDlow === true) {
    Final = lowLetters;
  }
  if (ADDsym === true) {
    Final = sym;
  }
  if (ADDup === true) {
    Final = upLetters;
    if (ADDnum === true) {
      Final = nums;
    }
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
