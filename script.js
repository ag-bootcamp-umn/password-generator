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

  // prompt user for length

  var passLength = prompt(
    "How long would you like your password to be? Please enter a number from 8 to 128."
  );

  if (passLength < 8 || passLength > 128) {
    alert("Incorrect Length");
    return generatePassword();
  } else {

    // prompt user for password character types and add those chosen to charSet string
    for (var i = 0; i < characters.length; i++) {
      var currentType = characters[i];
      var confirmation = confirm(
        "Would you like to use " + currentType.type + " characters?"
      );
      if (confirmation) {
        charSet += currentType.set;
      }
    }

    console.log(charSet);

    // Select characters randomly from charSet string

    for (var i = 0; i < passLength; i++) {
      var selection = Math.floor(Math.random() * charSet.length + 1);
      password += charSet.charAt(selection);
    }

    console.log(password);
  }
}
