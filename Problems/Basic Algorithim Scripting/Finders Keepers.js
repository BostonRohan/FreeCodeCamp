function findElement(arr, func) {
    //Establishing variable.
    var num = 0;
    //Iterating through array
    for (var i = 0; i < arr.length; i++) {
        //Checking if the array contains even numbers.
        if (arr[i] % 2 === 0) {
            //Assignig the even number to variable.
            num = arr[i];
            //Returning the even number.
            return num;
        }
    }
    //If the array has no even numbers, returning undefined.
    return undefined;
}

findElement([1, 3, 5, 9], num => num % 2 === 0);

//Psuedo Code
//For loop
//If statement
//If arr[i] % 2 === 0 return that number.
//If the array has no even numbers return undefined.