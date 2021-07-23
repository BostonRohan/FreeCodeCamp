//FreeCodeCamp Answer
class Thermostat {
  constructor(farenheit) {
    this.farenheit = farenheit;
  }
  get temperature() {
    return (5 / 9) * (this.farenheight - 32);
  }
  set temperature(celsius) {
    this.farenheight = (celsius * 9) / 5 + 32;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
//FreeCodeCamp Example
class Book {
  constructor(inComingAuthorData) {
    this_author = inComingAuthorData;
  }

  // getter
  get writer() {
    return this._author;
  }

  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
novel.writer = 'newAuthor';

//Testing
//Class object of password.
class Password {
  constructor(password123) {
    this.password123 = password123;
  }
  get passwordRequired() {
    return this.password123;
  }
  set passwordRequired(newPassword) {
    this.password123 = newPassword;
  }
}
const random = new Password('Strong');
console.log(random.password123);
random.passwordRequired = "MJidahdah1495";
console.log(random.passwordRequired);