// Get One Value
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function (total, number) {
  return total + number; // Add the current number to the total
}, 0); // 0 is the initial value of total

console.log(sum); // 15

// total - accumulated value
// number - current array element
// 0 - initial value of total