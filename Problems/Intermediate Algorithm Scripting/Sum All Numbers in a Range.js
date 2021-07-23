function sumAll(arr) {
    var newArr = [];
    if (arr[0] < arr[1]) {
        newArr = [arr[1]]
        while (arr[0] < arr[1]) {
            newArr.push(arr[0]++);
        }
        return newArr.reduce(function (a, b) {
            return a + b;
        })
    } else if (arr[1] < arr[0]) {
        newArr = [arr[0]];
        while (arr[1] < arr[0]) {
            newArr.push(arr[1]++);
        }
        return newArr.reduce(function (a, b) {
            return a + b;
        });
    }
}
sumAll([1, 4]);