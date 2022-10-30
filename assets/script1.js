// Assignment Code
var generateBtn = document.querySelector("#generate");
// https://www.ibm.com/support/pages/password-policy-and-passwords-special-characters
// https://en.wikipedia.org/wiki/List_of_Special_Characters_for_Passwords
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var integerCase = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var masterCase = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Creates prompts and alerts for password length
function generatePassword() {
    var passwordLength = prompt("Choose a password length between 8 and 128 characters.")
    passwordLength = parseInt(passwordLength);   
if (passwordLength < 8 || passwordLength > 128) {    
    alert("Must be a number between 8 and 128.");
    generatePassword();
} else if (isNaN (passwordLength)) {
    alert("Must be a number.");
    generatePassword();
}  // Loops twice after incorrect input 
//https://stackoverflow.com/questions/22306764/javascript-if-statement-within-alert
//https://stackoverflow.com/questions/69018412/how-to-reload-a-prompt-if-user-selects-the-cancel-button-in-javascript

var lowChar = confirm("Should this password include lower case alphabet?");
if (lowChar === true) {
    masterCase = lowerCase.concat(masterCase);

console.log(lowChar)
}
var upChar = confirm("Should this password include upper case alphabet?");
if (upChar === true) {
    masterCase = upperCase.concat(masterCase);
}
console.log(upChar)

var intChar = confirm("Should this password include numbers?");
if (intChar === true) {
    masterCase = integerCase.concat(masterCase);
}
console.log(intChar)

var specChar = confirm("Should this password include special characters?");
if (specChar === true) {
    masterCase = specialCase.concat(masterCase);
}
console.log(specChar);

// if (lowChar = false && upChar = false && intChar = false && specChar = false)
console.log(masterCase);

for (i = 0; i <= passwordLength; i++) {
    var index = Math.floor(masterCase.length * Math.random()));
 randomPassword += masterCase[index];
//  return randomPassword;
}





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
    return masterCase;

    console.log(typeof numberCharacters)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
