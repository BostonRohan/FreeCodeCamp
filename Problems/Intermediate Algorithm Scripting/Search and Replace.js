function myReplace(str, before, after) {
  const upperCaseRegex = /^[A-Z]/,
    lowerCaseRegex = /^[a-z]/;
  //If the first letter in the before word is lowercase, make the first letter in after uppercase.
  if (upperCaseRegex.test(before)) {
    after = after.replace(after[0], after[0].toUpperCase());
  }
  //If the first letter in before is lowercase, make the first letter in after lowercase.
  //This keeps the capitilization.
  else if (lowerCaseRegex.test(before)) {
    after = after.replace(after[0], after[0].toLowerCase());
  }
  //Replace the words, and return the new string.
  var newStr = str.replace(before, after);
  return newStr;
}
myReplace("I think we should look up there", "up", "Down");
