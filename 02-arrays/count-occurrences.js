// Count Number Occurrences
function countOccurrences(array, number) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // 3
console.log(countOccurrences([5, 5, 1, 5], 5)); // 3