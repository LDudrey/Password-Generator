// Assignment Code
// Document object is the owner of all other objects in your webpage
// you can access any element in an HTML page by accessing the document object
// (Web API) document.querySelector returns the first Element that matches the specified selector (#generate)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  //generate button
});

// THEN I am presented with a series of prompts for password criteria
function promptForCriteria() {

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var passwordLength = prompt("please provide a password lenth, least 8 characters and no more than 128");
if (passwordLength > 128 || passwordLength < 8) {
  // generate some sort of error
}

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters




//.prompt user for password criteria
// biggest mistake is thinking just needing to make random password
// the purpose of the challenge is that can you handle user input
// what if someone puts in length of password as 1

//if userInput <= 8, return error
// also tell user to enter number by using typeof 






// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page