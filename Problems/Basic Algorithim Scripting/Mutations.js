function mutation(arr) {
  //Making all leters in the array, lowercase.
  arr = arr.map(v => v.toLowerCase());
  //Establishing variables
  var answer = false;
  var match = 0;
  //Iterating through the array containing two strings.
  for (var i = 0; i < arr[0].length; i++) {
    //Iterating over the letters in the array containing two strings.
    for (var j = 0; j <= arr[1].length; j++) {
      //If the two letters are the same, then we have a match.
      if (arr[1][j] === arr[0][i]) {
        match++;
      }
      //If the letter duplicates,
      if (arr[0].indexOf(arr[0][i]) != arr[0].lastIndexOf(arr[0][i])) {
        //Skip over the duplicated letters.
        i = arr[0].lastIndexOf(arr[0][i]);
      }
    }
  }
  //If the number of matches, is equal to the length of the second string,
  if (match === arr[1].length) {
    //Then it is in the first string, set variable answer to true.
    answer = true;
  }
  //Returning a truthy or falsy value.
  return answer;
}
mutation(["floor", "for"])

//Psuedo Code
//Make all values lowercase arr = arr.map(v => v.toLowerCase())
//Establish variable answer
//Establish var match = 0.
//Iterate through arr
//Iterate over the letters in the array.
//If arr[0][i] === arr[1][i]
//Then we have a match.
//Increment match variable.
//If arr[1].length === match
//answer = true
//return answer


//New Solution Psuedo Code
//const newArr1 = arr[0].split("")
//const newArr2=arr[1].split("")
//for loop
//newArr1.include(newArr2[1])
//if not include then return false
//set flag to true and the moment newArr2[i]is not in newArr1 then set flag to false     




















//Psuedo Code with .includes().
// solve hardway with loop
//var answer = false;
//Declare str, str2
//Declare lowercase strings lowerCaseStr, lowerCaseStr2
// for (x... x < arr.length..)
//str = "hello"
//str2 = "hey" 
//lowerCaseStr = str1.tolowerCase.split ===  //arr1 = [ "h", "e", "l", "l", "o"]
//lowerCaseStr2 = str2.tolowerCase.split ===  //arr2 = [ "h", "e", "y"]
//If (lowercaseStr.includes/.contains(lowercaseStr2)){
//answer = true;

//.contains / .includes documentation.
//Compare the two arrays
//Iterate over arr1
//Iterate over arr2
//Compare each value of arr2 to arr1


//comparison --one ways
//first is to say does arr1 contain arr2[n]    