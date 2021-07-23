 //Numerical Sorting Algorithm 
 //Without using a helper function.
 function sort(arr) {
     var timesThruLoop = 0;
     var swapCount = 1;
     while (swapCount > 0) {
         swapCount = 0;
         for (var i = 0; i < arr.length; i++) {
             if (arr[i] > arr[i + 1]) {
                 const temp = arr[i + 1];
                 arr[i + 1] = arr[i];
                 arr[i] = temp;
                 swapCount++;
             }
         }
         timesThruLoop++;
     }
     return arr;
 }
 sort([2, 1, 4, 6, 4, 1, 9])

 //Psuedo Code
 //Take an Array of Numbers and return an array of numbers sorted from lowest to highest...
 // declare flag  swapCount = 1
 //while swapCount > 0 
 // set didSwap to 0

 //start for i in arr loop
 //we gotta make sure we don't go out of bounds... 
 //if i > i+1 
 //then swap i with i+1
 //swapCount ++ 