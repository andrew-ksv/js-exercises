// Reverse an Array
function reverseArray(array) {
  let reversed = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }

  return reversed;
}

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]