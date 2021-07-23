function bouncer(arr) {
  //Filters through the array and returns truthy values.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

//Further documentation
//https://stackoverflow.com/questions/30016773/javascript-filter-true-booleans