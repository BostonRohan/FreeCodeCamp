function telephoneCheck(str) {
  //Matches the string starting with a one, or a space.
  //Matches three consecutive numbers, then reset subpattern.
  //Matches a space and hyphen following the three consecutive numbers.
  //Matches four consecutive numbers at the end of a string.
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

telephoneCheck("1 555-555-5555");

//Telephone number has to be 10 no greater than 10 digits long including hyphens and country code. check
//There should be no non-digit characters. check
//If there are parenthesis inside the string, it must be the first three digits. check
//If there is a number preceding a space or parenthesi at the start of a string it must be a one.
