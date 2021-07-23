function frankenSplice(arr1, arr2, n) {
  //Slicing the array, creating a new array.
  var newArr2 = arr2.slice(0, arr2.length);
  //Iterating through array 1.
  for (var i = 0; i < arr1.length; i++) {
    //Splicing onto arr2, the element at arr1[i] at the index of n.
    newArr2.splice(n, 0, arr1[i]);
    //Incrementing the index, so the numbers are placed in order.
    n++
  }
  //Returning the new array.
  return newArr2;
}
//Why does n need to increment?
//Goes through the loop,
//Splices arr1[i], onto newArr2, at position n.
//newArr2 = [4, 1, 5]
//newArr2 = [4,2,1,5]
//newArr2 = [4,3,2,1,5]
//But if n increments...
//newArr2 = [4, 1, 5]
//newArr2 = [4, 1, 2, 5]
//newArr2 = [4, 1, 2, 3, 5]