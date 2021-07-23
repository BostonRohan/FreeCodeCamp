function confirmEnding(str, target) {
  //The value of target has to be negative in the substring so it can check the end of the string.
  var result = (str.substr(-target.length) == target ? true : false);
  return result;
}
confirmEnding("Bastian", "n");