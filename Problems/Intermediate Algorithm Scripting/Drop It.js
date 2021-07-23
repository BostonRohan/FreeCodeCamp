function dropElements(arr, func) {
    var i = 0;
   while(!func(arr[i])){
       arr.shift();
   }
 return arr;
}
  
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))