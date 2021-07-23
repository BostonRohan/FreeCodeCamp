function uniteUnique(arr) {
  var newArr = [...arr];
  for (var i = 1; i < arguments.length; i++) {
    newArr.push(...arguments[i]);
  }
  return [...new Set(newArr)];
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])