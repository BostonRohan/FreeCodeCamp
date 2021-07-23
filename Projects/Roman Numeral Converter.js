function convertToRoman(num) {
    const singleDigitRomanNumerals = {
        0: '',
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX'
    };
    const doubleDigitRomanNumerals = {
        0: '',
        1: 'X',
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L',
        6: 'LX',
        7: 'LXX',
        8: 'LXXX',
        9: 'XC'
    };
    const tripleDigitRomanNumerals = {
        0: '',
        1: 'C',
        2: 'CC',
        3: 'CCC',
        4: 'CD',
        5: 'D',
        6: 'DC',
        7: 'DCC',
        8: 'DCCC',
        9: 'CM'
    };
    const quadDigitRomanNumerals = {
        1: 'M',
        2: 'MM',
        3: 'MMM'
    };
    num = num.toString();
    var ans = '';
    if(tripleDigitRomanNumerals[num[0] + '00']){
        ans = tripleDigitRomanNumerals[num];
    }
    else if (quadDigitRomanNumerals[num[0] + '000']){
        ans = quadDigitRomanNumerals[num];
    }
    switch (num.length) {
        case 1:
            ans = singleDigitRomanNumerals[num];
            break;
        case 2:
            ans = doubleDigitRomanNumerals[num[0]] + singleDigitRomanNumerals[num[1]]
            break;
        case 3:
            ans = tripleDigitRomanNumerals[num[0]] + doubleDigitRomanNumerals[num[1]] + singleDigitRomanNumerals[num[2]];
            break;
        case 4:
            ans = quadDigitRomanNumerals[num[0]] + tripleDigitRomanNumerals[num[1]] + doubleDigitRomanNumerals[num[2]] + singleDigitRomanNumerals[num[3]];
    }
return ans
}
console.log(convertertToRoman(1000));