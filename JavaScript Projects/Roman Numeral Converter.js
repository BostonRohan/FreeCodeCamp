function convertToRoman(num) {
  //Creating objects to map roman numerals.
  const singleDigitRomanNumerals = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  };
  const doubleDigitRomanNumerals = {
    0: "",
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC",
  };
  const tripleDigitRomanNumerals = {
    0: "",
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM",
  };
  const quadDigitRomanNumerals = {
    1: "M",
    2: "MM",
    3: "MMM",
  };
  //Make then number a string.
  num = num.toString();
  //Establish variable
  var ans = "";
  //Catching edge cases, if it is a triple digit number map the first number, then add two zeros, and if it is a four digit number add three zeros.
  if (tripleDigitRomanNumerals[num[0] + "00"]) {
    ans = tripleDigitRomanNumerals[num];
  } else if (quadDigitRomanNumerals[num[0] + "000"]) {
    ans = quadDigitRomanNumerals[num];
  }
  //Depending on the size of the number, mapping the the necessary values pertaining to each digit, them adding them together to form the full roman numeral.
  switch (num.length) {
    case 1:
      ans = singleDigitRomanNumerals[num];
      break;
    case 2:
      ans = doubleDigitRomanNumerals[num[0]] + singleDigitRomanNumerals[num[1]];
      break;
    case 3:
      ans =
        tripleDigitRomanNumerals[num[0]] +
        doubleDigitRomanNumerals[num[1]] +
        singleDigitRomanNumerals[num[2]];
      break;
    case 4:
      ans =
        quadDigitRomanNumerals[num[0]] +
        tripleDigitRomanNumerals[num[1]] +
        doubleDigitRomanNumerals[num[2]] +
        singleDigitRomanNumerals[num[3]];
  }
  return ans;
}
convertertToRoman(1000);
