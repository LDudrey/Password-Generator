// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "|", "{", "}", "[", "]", "_", "~", "`"];
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
    var randomPassword = " ";
    var passwordLength = prompt("Choose a password length between 8 and 128 characters.")
    passwordLength = parseInt(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Must be a number between 8 and 128. Please click generate password again.");
        return;
    } else if (isNaN(passwordLength)) {
        alert("Must be a number. Please click generate password again");
        return;
    } 
    if (passwordLength === null) {
        return;
    }
    // https://stackoverflow.com/questions/69018412/how-to-reload-a-prompt-if-user-selects-the-cancel-button-in-javascript

    // Confirm boxes for variables for characters
    var lowChar = confirm("Click OK to include lower case alphabet.");
    if (lowChar === true) {
        masterCase = lowerCase.concat(masterCase);
    }

    var upChar = confirm("Click OK to include upper case alphabet.");
    if (upChar === true) {
        masterCase = upperCase.concat(masterCase);
    }

    var intChar = confirm("Click OK to include numbers.");
    if (intChar === true) {
        masterCase = integerCase.concat(masterCase);
    }

    var specChar = confirm("Click OK to include special characters.");
    if (specChar === true) {
        masterCase = specialCase.concat(masterCase);
    }

    if (!lowChar && !upChar && !intChar && !specChar) {
        alert("You must select at least 1 character type to create password. Please click generate password again.");
        return;
    }

    // For loop to pick random characters
    for (i = 0; i < passwordLength; i++) {
        var index = Math.floor(masterCase.length * Math.random());
        randomPassword += masterCase[index];
    }

    return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


