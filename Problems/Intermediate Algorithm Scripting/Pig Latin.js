function translatePigLatin(str) {
    var newStr = str;
    var endOfWord = 'way';
    const consonantsRegex = (/^([b-df-hj-np-tv-z])+/);
    if(consonantsRegex.test(str)){
    var matched = str.match(consonantsRegex).map(x => x);
     newStr = str.replace(consonantsRegex, '');
    endOfWord = matched[0] + 'ay';
  }
  return newStr + endOfWord;
}
  console.log(translatePigLatin("paragraphs"))
  