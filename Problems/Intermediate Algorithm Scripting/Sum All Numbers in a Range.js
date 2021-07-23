function sumAll(arr) {
  //Establish variable
  var newArr = [];
  //If the number in the second position, is greater than the number in the first, put it in the new array first.
  if (arr[0] < arr[1]) {
    newArr = [arr[1]];
    //Loop through and push all numbers in the range into the new array.
    while (arr[0] < arr[1]) {
      newArr.push(arr[0]++);
    }
    //Add all the numbers in the array
    return newArr.reduce(function (a, b) {
      return a + b;
    });
    //Otherwise the element in the first position is greater.
  } else {
    //Repeat the process with the first number.
    newArr = [arr[0]];
    while (arr[1] < arr[0]) {
      newArr.push(arr[1]++);
    }
    return newArr.reduce(function (a, b) {
      return a + b;
    });
  }
}
sumAll([1, 4]);
