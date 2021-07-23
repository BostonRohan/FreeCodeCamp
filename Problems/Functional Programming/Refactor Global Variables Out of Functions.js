// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  //Shallow Copy
  var newArray = [...arr];
  newArray.push(bookName);
  return newArray;

}

function remove(arr, bookName) {
  //Shallow copy.
  var newArray = [...arr];
  var book_index = newArray.indexOf(bookName);
  if (book_index >= 0) {

    newArray.splice(book_index, 1);
    return newArray;

  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
return bookList;