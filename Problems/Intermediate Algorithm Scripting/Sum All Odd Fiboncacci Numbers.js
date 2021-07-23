function sumFibs(num) {
  //Establish variable.
  var fib = [0, 1];
  //Iterate over the array.
  for (var i = fib.length; i <= num; i++) {
    //Assign the current position to the previous two numbers plus the prvious number, creating the fibonacci.
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  //Filter odds out of the array and return the sum.
  return fib
    .filter((x) => x % 2 == !0 && x <= num)
    .reduce(function (a, b) {
      return a + b;
    });
}
sumFibs(1000);

//Rule
//xn = xn-1 + xn+2

//1. i = 1, j = 1, x = 1
//2. i = 2, j = 2 x = 1
// i = x + j
//1. 1 + 0 == 1
//2. 1 + 1 == 2
//3. 1 + 2 ==3
//4. 2 + 3 == 5
//5. 5 + 3 == 8
//6.
