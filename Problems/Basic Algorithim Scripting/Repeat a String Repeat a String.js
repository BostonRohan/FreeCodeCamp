function repeatStringNumTimes(str, num) {
  //Establishing variable, an empty array.
  var arr = [];
  //If the number is positive
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      //Pushing the string onto the end of the array.
      arr.push(str);
    }
    //Returning the array joined into a string
    return arr.join('');
  }
  //If number is not positive returning an empty string.
  return "";
}
repeatStringNumTimes("abc", 3);

//Psuedo code
//declare newArrr
//for loop num times
//push str into newArr
//exit loop
//Convert newArr into a string