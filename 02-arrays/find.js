// Find the First Element
const numbers = [3, 7, 10, 15, 20];

const number = numbers.find(function (number) {
  return number > 10;
});

console.log(number); // 15