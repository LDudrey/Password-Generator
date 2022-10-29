// Assignment Code
var generateBtn = document.querySelector("#generate");
// https://www.ibm.com/support/pages/password-policy-and-passwords-special-characters
// https://en.wikipedia.org/wiki/List_of_Special_Characters_for_Passwords
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var integerCase = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordLength = " ";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Creates prompts and alerts for password length
function generatePassword() {
    var numberCharacters = prompt("How many characters would you like your password to be?")
    numberCharacters = parseInt(numberCharacters);   
if (numberCharacters < 8 || numberCharacters > 128) {
    alert("Number must be between 8 and 128.")
}
if (isNaN (numberCharacters)) {
    alert("Must be a number.")
}

if (specialCharacters) {
    
}
var specialCharacters = confirm("Should this password include special characters?");
console.log(specialCharacters)

var lowerCharacters = confirm("Should this password include lower case alphabet?");
console.log(lowerCharacters)

var upperCharacters = confirm("Should this password include upper case alphabet?");
console.log(upperCharacters)


var randomPassword = "";
for (i = 0; i <= passwordLength; i++) {
    var index = Math.floor(passwordCharacterContainer.length * Math.random()));
 randomPassword += passwordCharacerContainer[index];
 console.log(randomPassword);
 return randomPassword;
}
cocantonate each for loop




//Inputs data into password text box
// if (numberCharacters > 8 && numberCharacters < 128) {
//     confirm("Should this include special characters?")
//     //if(true) define variable
//     if (specialCharacter === true) {
//         specialCharacter =  
//     }
//     //if(false)

//     return "Lydia"
// }


    console.log(numberCharacters);
    console.log(typeof numberCharacters)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
