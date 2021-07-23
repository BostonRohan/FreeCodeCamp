function getIndexToIns(arr, num) {
    //Establishing variable.
    var answer = 0;
    //Sorting the array.
    arr.sort((a, b) => a - b);
    //Entering for loop,
    for (var i = 0; i < arr.length; i++) {
        //If the num parameter is greater than the number in the array,
        if (num > arr[i]) {
            //Assign answer variable to index position.
            answer = i + 1;
        }
    }
    //Return answer
    return answer;
}

getIndexToIns([10, 20, 30, 40, 50], 30);

//Psuedo Code
//Establish answer variable.
//Sort the array in ascending order.
//Iterate through the array,
//If number is greater than arr[i],
//Set the answer variable equal to i + 1.
//Return the answer.