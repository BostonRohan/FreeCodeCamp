//Is prime helper function as reference, further documentation : https://stackoverflow.com/questions/15743192/check-if-number-is-prime-number/15743238
function isPrime(n) {
  if (n < 2) return false;
  var q = Math.floor(Math.sqrt(n));
  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
//Helper function that finds the sum of the prime numbers.
function sumPrimes(num) {
  //Estbalish variables
  var answer = 0;
  //Iterate through trange of numbers
  for (var i = 0; i <= num; i++) {
    //If the number is prime, add it to the answer variable.
    if (isPrime(i)) {
      answer += i;
    }
  }
  return answer;
}
sumPrimes(977);
