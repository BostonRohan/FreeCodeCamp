function orbitalPeriod(arr) {
  //Establish variables
  var answer = [],
    gravMass = 398600.4418,
    earthRadius = 6367.4447;
  //Iterate over the array of objects
  for (var i = 0; i < arr.length; i++) {
    //Find the a value in for the orbital period equation.
    var a = Math.pow(arr[i].avgAlt + earthRadius, 3);
    //Plug all values into the equation
    var num = 2 * Math.PI * Math.sqrt(a / gravMass);
    //Delete the average alt.
    delete arr[i].avgAlt;
    //Create a new object with the new orbital period.
    answer.push(Object.assign(arr[i], { orbitalPeriod: Math.round(num) }));
  }
  return answer;
}

orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
]);
