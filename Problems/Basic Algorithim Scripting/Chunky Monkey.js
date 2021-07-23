function chunkArrayInGroups(arr, size) {
  //Establishing an empty array.
  var answer = [];
  //Iterating through the array.
  //Finding the values of the array.
  for (var x = 0; x < arr.length; x = x + size) {
    //Establishing temp variable in local scope.
    //When the loop breaks, the variable is reset.
    var tempArr = [];
    //Iterating through the array, the y value will increase with every new value.
    for (var y = x;
      (y < size + x) && (y < arr.length); y++) {
      //Pushing the value at arr[y] into the temporary array.
      tempArr.push(arr[y]);
    }
    //Pushing the temporary array onto the answer array, creating a multidimensional array.
    //The statement is inside the x loop so it will create a new array, every time y === size.
    answer.push(tempArr);
  }
  return answer;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
//Psuedo Code
//make a newArr 
//Establish variable newArr
//iterate over arr
//for (x... x < arr.length...)
//for (y... y < size...) loops through the length size [0,1,2,3], [4,5,6,7]
//Declare the iterations as new arrays, so they can be called.
//or do several small loops of length "size".


//inside your loop  you are going to decalre a new array called tempArr
//while in loop push items into tempArr
//before leaving loop push tempArr into newArr