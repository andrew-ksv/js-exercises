// Exercise 1
function getMax(num1, num2) {
  let max;

  if (num1 > num2) {
    max = num1;
  } else {
    max = num2;
  }

  return max;
}
console.log(getMax(-3, 7));

// Exercise 2
function getMax2(num1, num2, num3, num4) {
  return Math.max(num1, num2, num3, num4);
}
console.log(getMax2(4, 10, 7, 15));