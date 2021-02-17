// Assignment Code

// Variables
var allch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = !"!@#$%^&*()_+";
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var passwordgen = "";
var passLength = 8

var length = document.querySelector("#passlength");
var uppercasin = document.querySelector("#upper");
var lowercasin = document.querySelector("#lower");
var numberin= document.querySelector("#num")
var symbolin = document.querySelector("#sym")

// Password Generator
function writePassword() {
  passwordgen = "";
  

  for (var i = 0; i < passLength; i++) {
    var password = Math.floor(Math.random() * allch.length);
    
  }

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword );

