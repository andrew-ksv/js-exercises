const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled); // [ 2, 4, 6, 8, 10 ]
console.log(numbers); // [ 1, 2, 3, 4, 5 ]