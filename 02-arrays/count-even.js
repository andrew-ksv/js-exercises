function countEvenNumbers(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countEvenNumbers([1, 2, 4, 7, 8])); // 3
console.log(countEvenNumbers([1, 3, 5, 7])); // 0