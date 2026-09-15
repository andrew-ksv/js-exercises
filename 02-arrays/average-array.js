// Find the average
function averageArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(averageArray([2, 4, 6])); // 4
console.log(averageArray([10, 20, 30, 40])); // 25