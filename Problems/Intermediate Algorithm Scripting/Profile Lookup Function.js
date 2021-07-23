// Setup
var contacts = [
    //contacts[0]
    {
        "firstName": "Akira", //contacts[0].firstName
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    //contacts[1]
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    //contacts[2]
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    //contacts[3]
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    //Setting flag, isName is going to be false if it is not in a for loop.
    var isName = false;
    //Establishing variables
    var noProp = "No such property";
    var noContact = "No such contact";
    //Establishing the variable as a number, so we can set it equal to [i] in the for loop.
    var contactPos = 0;
    //Iterating through contact names
    for (var i = 0; i < contacts.length; i++) {
        //Checking to see if the name parameter is matched within the firstName property of contacts.
        if (name == contacts[i]["firstName"]) {
            isName = true;
            //Setting the variable to [i] since we have found a match on the name. This will help find the properties of a specified name in the future...
            contactPos = i;
        }
    }
    //Returning "No such contact" if we do not have a match on the name parameter.
    if (isName === false) {
        return noContact;
    }
    //Establishing a variable(an array) that is equal to the properties of contacts, allowing us to iterate through the property names.
    var contactProp = Object.keys(contacts[0]);
    //Returning "No such property" if the prop parameter is not included in the property names.
    if (!contactProp.includes(prop)) {
        return noProp;
    }

    //contacts is an array of objects
    // locating the obect at array position [i]  or [contactPos]
    //accessing the property [prop]

    //Entering the contact object, searching for the properties of the specified name, and returning the values of that property. The answer will be returned
    // in an array or a string.
    return contacts[contactPos][prop];
}
lookUpProfile("Sherlock", "firstName");