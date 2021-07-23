function dropElements(arr, func) {
  //Establishing varialbe
  var i = 0;
  //While loop, remove the first element until the function returns true.
  while (!func(arr[i])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2;
});
