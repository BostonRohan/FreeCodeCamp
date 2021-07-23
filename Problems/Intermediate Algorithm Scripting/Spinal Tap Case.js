function spinalCase(str) {
  //Establishing variables
  var newStr = "",
    splitWords = /([a-z])([A-Z])/g,
    hasUnderscores = /\_/g;
  //If the string has no spaces between words, split the words.
  if (str.match(splitWords)) {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    //Or if the string has underscores, replace them with dashes.
  } else if (str.match(hasUnderscores)) {
    str = str.replace(hasUnderscores, "-");
  }
  //Replace all current spaces with dashes, and make the word lowercase.
  newStr = str.replace(/\s/g, "-").toLowerCase();
  return newStr;
}
spinalCase("thisIsSpinalTap");
