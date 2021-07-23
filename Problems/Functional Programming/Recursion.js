//Intro to recursion
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}


function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1]
  }

}

//sum(arr, n - 1) + arr[n-1]
//sum(arr, 2 - 1) + arr[2-1]
//sum(arr, 1) + arr[1]
//Recurse
//arr, 1 + arr[1]     arr[1] == 2
//2 + 1 == 3

//Use Recursion to create a countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

//Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else if (startNum == endNum) {
    return [startNum];
  } else {
    const rangeArr = rangeOfNumbers(startNum + 1, endNum - 1);
    rangeArr.push(endNum, startNum);
    return rangeArr.sort();
  }
}
rangeOfNumbers(4, 4);