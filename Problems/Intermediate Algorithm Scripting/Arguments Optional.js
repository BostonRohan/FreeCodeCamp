//Main function
function addTogether(x) {
  //Establishing variable
  var answer = undefined;
  //Checking if are not multiple arguments, if not, send it to the optional arguments function.
  if (typeof x == "number" && arguments.length <= 1) {
    answer = optionalArguments(x);
  }
  //If the first argument is a number, and the second argument is a number, add them together.
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    answer = arguments[0] + arguments[1];
  }
  return answer;
}
//Helper Function that uses currying to check for valid parameters.
function optionalArguments(x) {
  //If the second parameter is a number, add them together.
  return (y) => {
    if (typeof y == "number") {
      return x + y;
    }
  };
}
addTogether("http://bit.ly/IqT6zt");
