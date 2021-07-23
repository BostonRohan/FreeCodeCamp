function factorialize(num) {
  //Establishing variable, setting it equal to one so we can use it to multiply.
  var total = 1;
  //Establishing a library of numbers up to 20.
  var library = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  //Iterating through the library of numbers.
  for (var i = 1; i <= num; i++) {
    //Assigning our variable the value of total multiplied by the iteration of i.
    //This sequence will continue until i >= 5 and return the product of all iterations.
    total = total * i;
  }
  //Returning the new value of total.
  return total;
}
factorialize(5);