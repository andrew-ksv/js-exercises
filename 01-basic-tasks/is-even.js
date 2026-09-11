// Write a function isEven that returns true
// if the number is even and false otherwise.

//node ./01-basic-tasks/isEven.js

// Exercise 1
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(7));

// Exercise 2
// function isEven(number) {
//   return number % 2 === 0;
// }