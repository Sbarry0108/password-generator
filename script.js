// Assignment code here
function generatePassword(obj) {

  var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = ['~','!','@','#','$','%','^','&','*','_','-','+','=','<','>','?','/',',','|','\','];
  var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var charArray = [];
  
  if(obj.lowercase) {
    charArray = charArray.concat(lowerCaseCharacters);
  }
  if(obj.uppercase) {
    charArray = charArray.concat(upperCaseCharacters);
  }

  if(obj.numeric) {
    charArray = charArray.concat(numericCharacters);
  }
  if(obj.specialCharacter) {
    charArray = charArray.concat(specialCharacters);
  }

  
  var soul = "";
  for(var i=0; i <obj.passwordLength; i++) {
      var index = Math.floor(Math.random()*charArray.length);
      soul+= charArray[index];
  }
  console.log(soul);
  alert(soul);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  var passwordLength = document.getElementById("passwordLength").value;
  var lowercase = document.getElementById("lowercase").checked;
  var uppercase = document.getElementById("uppercase").checked;
  var numeric = document.getElementById("numeric").checked;
  var specialCharacter = document.getElementById("specialCharacter").checked;
  if(passwordLength == "" || passwordLength < 8 || passwordLength > 128) {
      alert("Password should be atleast 8 and max 128");
      document.getElementById("passwordLength").value = "";
      return;
  } 


  var obj = {
    passwordLength: passwordLength,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    specialCharacter: specialCharacter
  }

  if(!obj.lowercase && !obj.uppercase && !obj.specialCharacter && !obj.numeric) {
    alert("please slect at least 1 character type to include");
    return ;
  }
  console.log(obj)
  generatePassword(obj);
  

 // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function showWindow() {
  document.getElementById("password").style.display = 'none';
  document.getElementById("showselection").style.display = 'block';
}
var passwordId = document.getElementById("password");
passwordId.addEventListener("click", showWindow);

generateBtn.addEventListener("click", writePassword);
