// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numChars = '0123456789';
  var specialChars = '`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/';

  // Character set to be used to create password
  var charSet = '';

  var password = '';

  // Function to add a random character for each confirmed character type to the password, and to add that character set to the password criteria
  function addChar(set) {
    var place = Math.floor(Math.random()
    * set.length + 1);
    password += set.charAt(place);
    charSet += set;
  }

  // prompt user for length

  var passLength = prompt('How long would you like your password to be? Please enter a number from 8 to 128.');

  if (passLength < 8 || passLength > 128) {
    alert('Incorrect Length');
    return generatePassword();
  } else {

    // prompt user for password character types
    var lowers = confirm('Would you like your password to include lower-case characters?');
    if (lowers) { 
       addChar(lowerChars);
    }

    var uppers = confirm('Would you like your password to include upper-case characters?');
    if (uppers) {
      addChar(upperChars);
    }

    var nums = confirm('Would you like your password to include numerical characters?');
    if (nums) {
      addChar(numChars);
    }

    var specials = confirm('Would you like your password to include special characters?');
    if (specials) {
      addChar(specialChars);
    }

    // Select characters randomly

    for (var i = 0; i < passLength; i++) {
      var selection = Math.floor(Math.random()
      * charSet.length + 1);
      password += charSet.charAt(selection);
    }

    console.log(password);
  }




}