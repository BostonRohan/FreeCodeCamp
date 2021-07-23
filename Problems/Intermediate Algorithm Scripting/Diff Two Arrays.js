function diffArray(arr1, arr2) {
    var ans = [];
    arr1 = arr1.sort();
    arr2 = arr2.sort();
  for (var i = 0; i < arr1.length; i++){
      if(arr2.includes(arr1[i]) == false){
          ans.push(arr1[i]);
      }
    }
      for(var j = 0; j < arr2.length; j++){
          if(arr1.includes(arr2[j]) == false){
              ans.push(arr2[j]);
          }
      }
  return ans;
   }
  console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))