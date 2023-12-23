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

// THE VARIABLES ///////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  var characters = [
    {
      type: "lower-case",
      set: "abcdefghijklmnopqrstuvwxyz",
    },
    {
      type: "upper-case",
      set: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    },
    {
      type: "numerical",
      set: "0123456789",
    },
    {
      type: "special",
      set: "`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/",
    },
  ];

  // Character set to be used to create password
  var charSet = "";
  var password = "";
  var passLength = 0;

  // THE FUNCTIONS ///////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

    // prompt user for length
    function getUserPassLength() {
      passLength = prompt(
        "How many characters would you like your password to be? Please enter a number from 8 to 128."
      ) || 0;
    }

  // prompt user for password character types and add those chosen to charSet string
  function getUserCharTypes() {
    for (var i = 0; i < characters.length; i++) {
      var currentType = characters[i];
      var confirmation = confirm(
        "Would you like to use " + currentType.type + " characters?"
      );
      if (confirmation) {
        charSet += currentType.set;
      }
    }
    if (charSet === "") {
      alert("Please choose at least one character type");
      getUserCharTypes();
    }
  }

  // Select characters randomly from charSet string
  function createPassword() {
    for (var i = 0; i < passLength; i++) {
      var selection = Math.floor(Math.random() * charSet.length + 1);
      password += charSet.charAt(selection);
    }
  }

  // THE LOGIC ///////////////////////////////////////////////
  ////////////////////////////////////////////////////////////

  // if ( passLength >= 8 && passLength <= 128) {
  //   getUserCharTypes();
  //   createPassword();
  // } else if (passLength > 0) {
  //       alert("Incorrect Length");
  //   return generatePassword();
  // } else {
  //   console.log('passLength: ' + passLength);
  //   console.log('password: ' + password);
  // }

  getUserPassLength();

    if (!passLength) {
    alert('Please enter a length for your password.')
      return generatePassword();
  } else if (passLength < 8 || passLength > 128) {
    alert("Incorrect Length");
    return generatePassword();
  } else {
    getUserCharTypes();
    createPassword();
    // return password;
  }

  if (password) {
    return password;
  } else {
    return '';
  }

}
