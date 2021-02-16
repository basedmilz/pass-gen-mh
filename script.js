// Assignment Code
var generateBtn = document.querySelector("#generate");




//Length and Number Slider
var passLength = document.getElementById ("passwordlength");
var passnum = document.getElementById ("passwordlengthnum");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterlength, includeUppercase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt

generateBtn.addEventListener("click", function() {
  var lengthPrompt = window.prompt("Length of password");
})
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
