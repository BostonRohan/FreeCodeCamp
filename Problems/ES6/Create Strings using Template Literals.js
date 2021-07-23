const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  const failureItems = [];
  for (var i = 0; i < result.failure.length; i++) {
    failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)
  }

  return failureItems;
}
const failuresList = makeList(result.failure);

//Psuedo Code
//Iterate through the failure array in the result object.
//Push each value onto the new array in order.
//Interplote the li class onto the string at failure position[i]