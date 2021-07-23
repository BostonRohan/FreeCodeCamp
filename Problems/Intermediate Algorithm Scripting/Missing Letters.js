function fearNotLetter(str) {
  //Iterate over the string
  for (var i = 0; i < str.length; i++) {
    //If the current letter is missing the consecutive letter, then get that consecutive letter.
    if (str.charCodeAt(i) == str.charCodeAt(i + 1) - 2) {
      let charCode = str.charCodeAt(i) + 1;
      return String.fromCharCode(charCode);
    }
  }
  //Otherwise return undefined.
  return undefined;
}
fearNotLetter("abce");
