function truthCheck(collection, pre) {
  //Establish variable
  var answer = true;
  //Iterate over the object.
  for (var i = 0; i < collection.length; i++) {
    //If the element doesn't exsist, the answer is false.
    if (!collection[i][pre]) {
      answer = false;
    }
  }
  return answer;
}
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
);
