function truncateString(str, num) {
    //Turning the string into an array.
    var arr = str.split('');
    //Creating if statement, if the number is less than the length of the array, then you must truncate the string.
    if (num < arr.length) {
        //Establishing variables.
        var answer = '',
            truncate = [];
        //Truncating the array.
        truncate = arr.splice(0, num);
        //Pushing the '...' to the end of the array.
        truncate.push('...');
        //Turning the array back into a string.
        answer = truncate.join('');
        //Returning the string.
        return answer;
    }
    //Returning the string unmodififed if the num parameter is greater than the length of the array.
    return str;
}
truncateString("Absolutely Longer", 2);

//Psuedo Code
//Establish variable, turn string into an array
//If statement
//If num < array length
//Use splice to return the value of the cut array
//Push ... to the end of the array.
//Return arr.join.push(...)
//Else return the string