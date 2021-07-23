function orbitalPeriod(arr) {
    var answer = [];
    var gravMass = 398600.4418;
    var earthRadius = 6367.4447;
    for(var i = 0; i < arr.length; i++){
        var a = Math.pow((arr[i].avgAlt + earthRadius),3);
        var num = (2 * Math.PI) * (Math.sqrt(a/gravMass));
        delete arr[i].avgAlt;
        answer.push(Object.assign(arr[i], {orbitalPeriod: Math.round(num)}));
    }
    return answer;
  }
  
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))




  //  (=> helper function nested into your main function)


  // for each 
  // call a helper functio