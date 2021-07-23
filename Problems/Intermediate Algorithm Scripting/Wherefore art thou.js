function whatIsInAName(collection, source) {
  //Establish variables
  var arr = [],
    keys = Object.keys(source);
  //Filter the array, if the object does not have the key and corresponding value pair return then filter it out.
  arr = collection.filter(function (obj) {
    return keys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] == source[key];
    });
  });
  return arr;
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);

//Psuedo Code
// function whatIsInAName(collection, source){
//   var arr = [];
//   var obj = collection.map(x => x);
//   for (key in source){
//     if(obj.hasOwnProperty(key) && obj[key] == source[key]){
//       arr.push(collection[i]);
//     }
//   }
//   return arr;
// }
