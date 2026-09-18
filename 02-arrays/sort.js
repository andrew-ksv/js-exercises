// Sort the Array
const numbers = [5, 2, 8, 1, 3];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers); //[1, 2, 3, 5, 8]