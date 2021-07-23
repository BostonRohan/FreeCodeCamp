function myReplace(str, before, after) {
var upperCaseRegex = /^[A-Z]/;
var lowerCaseRegex = /^[a-z]/;
if(upperCaseRegex.test(before)){
    after = after.replace(after[0], after[0].toUpperCase());
}
else if(lowerCaseRegex.test(before)){
    after = after.replace(after[0], after[0].toLowerCase());
}
    var newStr = str.replace(before, after);
    return newStr;
  }
  console.log(myReplace("I think we should look up there", "up", "Down"));