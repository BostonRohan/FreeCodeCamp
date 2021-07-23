function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++){
        if (str.charCodeAt(i) == str.charCodeAt(i+1) - 2 && i < str.length){
            var charCode = str.charCodeAt(i) + 1;
            return String.fromCharCode(charCode);
        }
    }
    return undefined;
  }
  console.log(fearNotLetter("abce"));