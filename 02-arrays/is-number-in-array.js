function isNumberInArray(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return true;
    }
  }

  return false;
}

console.log(isNumberInArray([1, 2, 3, 4], 3)); // true
console.log(isNumberInArray([1, 2, 3, 4], 7)); // false