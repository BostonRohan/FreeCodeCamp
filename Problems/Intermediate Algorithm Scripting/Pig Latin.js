function translatePigLatin(str) {
  //Establishing variables
  var newStr = str,
    endOfWord = "way";
  const consonantsRegex = /^([b-df-hj-np-tv-z])+/;
  //If the string has consonants.
  if (consonantsRegex.test(str)) {
    //Then match those consonants.
    var matched = str.match(consonantsRegex).map((x) => x);
    //Then replace those consonants at their current position.
    newStr = str.replace(consonantsRegex, "");
    endOfWord = matched[0] + "ay";
  }
  //Add the consonants back to the end of the word
  return newStr + endOfWord;
}
translatePigLatin("paragraphs");
