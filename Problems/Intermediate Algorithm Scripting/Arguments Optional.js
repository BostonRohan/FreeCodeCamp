function addTogether(x) {
    var answer = undefined;
    if (typeof (x) == 'number' && arguments.length <= 1) {
        answer = optionalArguments(x);
    }
    if (typeof (arguments[0]) == 'number' && typeof (arguments[1]) == 'number') {
        answer = arguments[0] + arguments[1];
    }
    return answer;
}

function optionalArguments(x) {
    return y => {
        if (typeof (y) == 'number') {
            return x + y;
        }
    }
}
addTogether("http://bit.ly/IqT6zt")