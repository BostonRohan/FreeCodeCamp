function destroyer(arr) {
//Iterating over the array.
for (var i = 0; i < arr.length; i++){
    //Iterating over the arguments, skipping over the array input.
    for (var j = 1; j < arguments.length; j++){
        //If the number in the array equals one of the following arguments.
        if(arr[i] == arguments[j]){
            //Delete the index of that argument from the array.
            arr.splice(arr.indexOf(arguments[j]), 1);
            //Since the array is being modified on every splice, i needs to decrement to catch the values that are changing index positions in the array.
            i--;
        }
    }
}
return arr;
}
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))

