function findLongestWordLength(str) {
    //Established a variable, an empty array.
    var wordLengths = [];
    //Established a variable and assigned it to an array of the words.
    var arr = str.split(" ");
    //Established a variable, an integer.
    var answer = 0;
    //Iterate through the array of words.
    for (var i = 0; i < arr.length; i++) {
        //Pushed the length of each word onto an empty array.
        wordLengths.push(arr[i].length);
    }
    //Assigned the answer variable to the largest number in the array.
    answer = Math.max.apply(null, wordLengths);
    //Returned the largest value in the array.
    return answer;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Psuedo code
//Turn string into an array.
//str.split()
//Iterate through the array and find lengths of words.
//Return a new array containing all lengths.
//Iterate through the array, and find the largest value.
//Math.max()
//Return the value