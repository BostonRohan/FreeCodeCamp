function steamrollArray(arr) {
  //Loop through the array
  for (var i = 0; i < arr.length; i++) {
    //If the element is an array.
    if (Array.isArray(arr[i])) {
      //Then flatten the array.
      arr = [].concat.apply([], arr);
    }
  }
  //Filter out deeply nested arrays.
  return (arr = [].concat.apply([], arr));
}
steamrollArray([1, {}, [3, [[4]]]]);

//Recursive Solution
function steamrollArray(arr) {
  //Create empty array
  var ans = [];
  //Loop through array
  for (var i = 0; i < arr.length; i++) {
    //If the element in the array is a nested array
    if (Array.isArray(arr[i])) {
      //Call the function
      ans.push(...steamrollArray(arr[i]));
    } else {
      //If the element inside is not an array push the element onto a new array.
      ans.push(arr[i]);
    }
  }
  return ans;
}
steamrollArray([1, {}, [3, [[4]]]]);
