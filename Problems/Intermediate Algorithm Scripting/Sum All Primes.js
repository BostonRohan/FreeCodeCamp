function isPrime(n){
  if (n < 2) return false;
var q = Math.floor(Math.sqrt(n));
for (var i = 2; i <=q; i++){
  if ( n % i == 0){
    return false;
  }
}
  return true;
}
function sumPrimes(num) {
    var answer = 0;
    for(var i = 0; i <= num; i++){
      if(isPrime(i)){
        answer += i;
      }
    }
    return answer;
    }
  console.log(sumPrimes(977));

  //Psuedo Code
  //Establish variable divisor = 0
  //While (divisor < num)
  //
