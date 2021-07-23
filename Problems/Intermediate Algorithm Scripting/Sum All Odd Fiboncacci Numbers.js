function sumFibs(num) {
var fib = [0, 1];
for (var i = fib.length; i <= num; i++){
  fib[i] = fib[i-2] + fib[i-1];
}
return fib.filter(x => x % 2 ==! 0 && x <= num).reduce(function(a,b){return a + b});
}
  console.log(sumFibs(1000));

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