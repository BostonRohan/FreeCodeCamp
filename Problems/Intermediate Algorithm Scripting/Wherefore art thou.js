function whatIsInAName(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  arr = collection.filter(function(obj){
    return keys.every(function(key){
      return obj.hasOwnProperty(key) && obj[key] == source[key];
    });
  });
 return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))

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