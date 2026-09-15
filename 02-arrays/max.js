// Find the largest number in an array
function getMaxFromArray(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

console.log(getMaxFromArray([3, 7, 2, 9, 4])); // 9
console.log(getMaxFromArray([-5, -2, -10])); // -2

function getMaxFromArray2(array) {
  return Math.max(...array);
}

console.log(getMaxFromArray2([3, 7, 2, 9, 4])); // 9
console.log(getMaxFromArray2([-5, -2, -10])); // -2