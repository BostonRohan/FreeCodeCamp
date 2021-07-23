function pairElement(str) {
    var answer = [];
    for (var i = 0; i < str.length; i++){
        switch(str[i]){
            case 'G':
            answer.push([str[i], 'C'])
            break;
            case 'C':
                answer.push([str[i], 'G']);
                break;
            case 'A':
                answer.push([str[i], 'T']);
                break;
            case 'T':
                answer.push([str[i], 'A']);
                break;
        }
    }
    return answer;
  }
  console.log(pairElement("GCG"));