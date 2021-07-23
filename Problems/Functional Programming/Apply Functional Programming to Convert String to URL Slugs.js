function urlSlug(title) {
    title = title.toLowerCase();
    return title.trim().split(/\s+/).join('-');
}
urlSlug(" Winter Is  Coming");


//Requirements:
// The input is a string with spaces and title-cased words

// The output is a string with the spaces between words replaced by a hyphen (-)

// The output should be all lower-cased letters

// The output should not have any spaces

//The code should not use the replace method.