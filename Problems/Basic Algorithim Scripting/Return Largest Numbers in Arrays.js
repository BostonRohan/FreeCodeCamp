function largestOfFour(arr) {
  //Establishing new array.
  var newArr = [];
  //Iterating through subarrays.
  for (var i = 0; i < arr.length; i++) {
    //Sorting the arrays in descending order.
    arr[i].sort(function (a, b) {
      return b - a
    });
    //Pushing the first element of each sub array onto the new array.
    //After the sort, the first element of each sub array will be the largest number in that array.
    newArr.push(arr[i][0]);
  }
  //Returning the new array.
  return newArr;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);