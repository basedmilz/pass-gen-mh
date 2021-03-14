// Assignment Code
var generateBtn = document.querySelector("#generate");

// Varibles for Window confirms
var addNum ="";
var addLow ="";
var addUp= "";
var addSym ="";
var final = [];


// Variables
nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
sym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"]
// Write password to the #password input
console.log ("Gen")

function generatePassword() {
  // Prompts Question length
  var question = window.prompt("How long would you like your password? Min:8 Max:128");
  console.log(question)
  if (question < 8 || question >128) {
    window.alert("Wrong amount of characters")
    return;
  } 
  console.log("Wemadeit")
  addNum = window.confirm("Would you like to include numbers?")
  if (addNum === true ) { window.alert('Confirmed Numbers!') }
  addUp = window.confirm("Would you like to include uppercase?")
  if (addUp === true ) { window.alert('Confirmed Uppercase!') }
  addLow = window.confirm("Would you like to include lowercase?")
  if (addLow === true ) { window.alert('Confirmed Lowercase!') }
  addSym = window.confirm("Would you like to include symbols?")
  if (addSym === true ) { window.alert('Confirmed Symbols!') }
  if (addNum === true) {final = final.concat(nums)}
console.log("addNum",final)


if (addUp === true) {final = final.concat(upLetters)}
console.log("addUp",final)
if (addLow=== true) {final = final.concat(lowLetters)}
if (addSym === true) {final = final.concat(sym)}
console.log(final)
var finalPassword = ""
for (var i = 1; i <= question ; i++) {
  var index = (Math.floor(Math.random() * final.length) + 1);
  finalPassword += final[index];
  console.log(finalPassword)
} 
return finalPassword
}


// Write password to the #password input

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword)
