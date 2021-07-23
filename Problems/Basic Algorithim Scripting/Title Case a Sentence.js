function titleCase(str) {
  //Making all letters in the string lowercase.
  str = str.toLowerCase();
  //Turning the string into an array of letters.
  var arr = str.split('');
  //Iterating through the array of letters.
  for (var i = 0; i < arr.length; i++) {
    //If it is the first letter, then capatalize it.
    if (i === 0) {
      arr[0] = arr[0].toUpperCase();
      //If it is a blank space, then capatalize the letter following it.
      //Catching cases so the loop doesn't iterate out of bounds. 
    } else if (arr[i] == " " && i < arr.length) {
      arr[i + 1] = arr[i + 1].toUpperCase();
    }
  }
  //Returning the array joined together as a string.
  return arr.join('');
}
titleCase("I'm a little tea pot");

//Psuedo Code
// str = "string iS cOOl"
//convert entire string to lower case
//convert string into an array (newArr)    ["s, "t", "r","i","n","g", " ", "i", "s", " ", "c","o","o","l", " "]
//iterate over newArr
//if x==0  capitalize
//if newArr[x] == " "
//then newArr[x+1] is capitalized