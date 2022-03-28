// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 ./+*?[^]$(){}=!<>|:-';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var pwdLength =  Number(passwordLength());

  if(pwdLength < 8 || pwdLength >128 || pwdLength ==='' ){
    alert("Enter a valid password length");
    var pwdLength =  passwordLength();
  }
 
  var pwdNew = passwordCharacters(pwdLength);
  return pwdNew;
  //document.querySelector("#password").textContent = pwdNew;

}

function passwordLength(){
  return  prompt("Enter desired length of the password (8-128 characters)",8)
}

function passwordCharacters(pwdLength){
  var pwdLower = confirm("Do you wish to include lowercase characters [a-z]");

  var pwdUpper = confirm("Do you wish to include uppercase characters [A-Z]");

  var pwdNumber = confirm("Do you wish to include numbers [0-9]");

  var pwdSpecial = confirm("Do you wish to include special characters ./+*?[^]$(){}=!<>|:-");

  var pwdString = '';

  if(pwdLower == false && pwdUpper == false && pwdSpecial == false){
    alert("Choose atleast one password criteria");
    passwordCharacters();
  }else{
  
  if(pwdLower == true){
   pwdString = pwdString+pwdChar.split(' ')[1];
  }
  
  if(pwdUpper == true){
    pwdString = pwdString+pwdChar.split(' ')[0];
   }
   
   if(pwdNumber == true){
    pwdString = pwdString+pwdChar.split(' ')[2];
   }
   
   if(pwdSpecial == true){
    pwdString = pwdString+pwdChar.split(' ')[3];
   }
  
   var pwdNew  =  Array(parseInt(pwdLength)).fill(pwdString).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');

   return pwdNew;
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
