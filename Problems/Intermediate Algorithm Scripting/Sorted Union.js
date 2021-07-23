function uniteUnique(arr) {
  //Remove duplicates from the original array.
  var newArr = [...arr];
  //Iterate through the other arrays
  for (var i = 1; i < arguments.length; i++) {
    //Spread the other arrays and push them onto a new array.
    newArr.push(...arguments[i]);
  }
  //Remove duplicates from the new array in their place.
  return [...new Set(newArr)];
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
