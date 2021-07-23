function diffArray(arr1, arr2) {
  //Establish variables
  var ans = [];
  //Sort the arrays.
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  //Iterate over the first array
  for (var i = 0; i < arr1.length; i++) {
    //If the element is not in array 2, push it into the new array.
    if (arr2.includes(arr1[i]) == false) {
      ans.push(arr1[i]);
    }
  }
  //Iterate over array 2.
  for (var j = 0; j < arr2.length; j++) {
    //If the element is not in array 1, push it into the new array.
    if (arr1.includes(arr2[j]) == false) {
      ans.push(arr2[j]);
    }
  }
  return ans;
}
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
