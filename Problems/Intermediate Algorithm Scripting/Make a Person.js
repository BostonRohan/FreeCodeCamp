var Person = function(firstAndLast) {
    //Establish a variable that is a copy of the parameter.
    var fullName = firstAndLast;
  
    this.getFirstName = function() {
        //Get the first name of the fullName variable.
        //Which changes based on the setter function.
      return fullName.split(" ")[0];
    };
  //Get the last name of the fullName variable.
  //Which can change based on the setter function.
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  //Get the full name.
  //Which could potentially have a different first, and last name.
    this.getFullName = function() {
      return fullName;
    };
  //Assign fullName to the potentially new first name, and the last name.
  //This allows for the new name to be accessible in the getter function.
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  //Assign fullName to the firstName and the potentially new last name.
  //This allows for the lastName to be accessible in the getter function.
  //The space in the concatenation allows for split to easily be used in the getter functions.
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  //Assign the fullName variable to the name parameter. Which can allows new names to be passed through.
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  var bob = new Person("Bob Ross");



//  break a string on " " (perhaps into an array of two items...)
// assign class variable firstName  = everything before space
// lastName = everything after space

//  write getters and setters... Set fullname will break string on " "
//  get full name will return firstName + " " + lastName


// this.push = function(newItem){
//   arr[last + 1] = newItem
// }

//.getFullName()