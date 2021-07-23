function pairElement(str) {
  //Establish variable
  var answer = [];
  //Iterate over the array
  for (var i = 0; i < str.length; i++) {
    //For every element in the array, push the element, as well as its coresponding pair.
    switch (str[i]) {
      case "G":
        answer.push([str[i], "C"]);
        break;
      case "C":
        answer.push([str[i], "G"]);
        break;
      case "A":
        answer.push([str[i], "T"]);
        break;
      case "T":
        answer.push([str[i], "A"]);
        break;
    }
  }
  return answer;
}
pairElement("GCG");
