function palindrome(str) {
  //Make all letters lowercase.
  str = str.toLowerCase();
  //Regex that matches all non-alphanumeric characters and spaces.
  const regex = /[^a-zA-Z\d]/g;
  //Remove the non-alphanumeric characters and spaces.
  var newStr = str.replace(regex, "");
  //Reverse the string
  const reverse = newStr.split("").reverse().join("");
  //Compare
  if (newStr === reverse) {
    return true;
  }
  return false;
}
palindrome("_eye");

//Psuedo Code
//Establish reverse variable
//Start by turning all letters in the string to lowercase
//Split string into an array, filter numerical values out.
//Use regex to delete non-alphanumeric characters and spaces
//Compare the str to the reverse variable, return true or false
