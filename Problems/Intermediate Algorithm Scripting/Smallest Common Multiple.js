function smallestCommons(arr) {
  var range = [];
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var num = max;
  for (var i = min; i <= max; i++) {
    range.push(i);
  }
  var flag = false;
  while(!flag){    
    flag = range.every(x => num % x == 0);
    num++;
}
return num-1;
}
console.log(smallestCommons([23, 18]));

//Psuedo Code
//Make a range of numbers starting from the smallest number, to the largest number.
//While loop, that loops until we get a number, that is divisible by every number in the set.
//Filter that number over the range, if the number passes the filter, then it is the smallest common multiple, if not, then keep looping.


//because  arr has two values only use ternary operator... 
//var min = 0
//var max = 0


// arr[0] < arr[1] ?   min = arr[0]  && max = arr[1] : min = arr[1]  && max = arr[2]

//var range = []
//loop to fill range
  //i= min  : i <= max: i ++
      //range.push(i)
      
      
      
//The Largest Number the answer will be is the total of the multiplication of the set.
// [1 , 5]
// first expand set 
//[ 1,2,3,4,5]
//next find highest possible answer... 
// = 1 * 2 * 3 * 4 * 5    is also divisible by 1,2,3,4,5
// 120 is the highest possible answer (which also may be lowest... )
// answer = 120



//   for loop  i = answer -max  ;   i = i - max

        //find a snazy way to loop through range to determine if they are factors. 
        //if i % 1 === 0 && i % 2 ==0  && i % 3 == 0  && i % 4==0 && i % 5 ==0 
        //then answer = i
//   end for loop 


//return answer         





// true false addition problems

//  true + true = true
//  true + false = false
// false + false = false


//  true + true + true +true + false = false
