function rot13(str) {
  //Establish variables
  var arr = str.split(""),
    punc = "";
  //Iterate over the array
  for (var i = 0; i < arr.length; i++) {
    //If it the element is necessary punctuation save it.
    if (
      str.charCodeAt(i) == 32 ||
      str.charCodeAt(i) == 46 ||
      str.charCodeAt(i) == 33 ||
      str.charCodeAt(i) == 63
    ) {
      arr[i] = arr[i];
    }
    //If the element is greater than 77 then subtract it by half of the alphabet, to uncipher.
    else if (str.charCodeAt(i) > 77) {
      arr[i] = str.charCodeAt(i) - 13;
    }
    //Otherwise add it by 13.
    else {
      arr[i] = str.charCodeAt(i) + 13;
    }
  }
  //If the original array had punctuation, save the punctuation.
  if (
    arr[arr.length - 1] == "!" ||
    arr[arr.length - 1] == "." ||
    arr[arr.length - 1] == "?"
  ) {
    punc = arr[arr.length - 1];
  }
  //Return the new array, joined together, replacing unformmated spaces, trimming unnecessary spaces, and adding the punctuation if necessary.
  return (
    arr
      .map((x) => String.fromCharCode(x))
      .join("")
      .replace(/\x00/g, " ")
      .trim() + punc
  );
}

rot13("SERR PBQR PNZC!");
