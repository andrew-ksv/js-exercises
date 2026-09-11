//Get words from a sentence
const text = "I learn JavaScript";
console.log(text.split(" ")); // ["I", "learn", "JavaScript"]

//Get letters
const word = "JavaScript";
word.split(""); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

//Count words
function countWords(text) {
  return text.split(" ").length;
}
console.log(countWords("I learn JavaScript every day")); // 5

//Join words into a sentence
function joinWords(words) {
  return words.join(" ");
}
const words = ["I", "learn", "JavaScript"];
console.log(joinWords(words)); // "I learn JavaScript"

//Create a URL slug
function createSlug(words) {
  return words.join("-");
}
const words1 = ["learn", "javascript", "fast"];
console.log(createSlug(words1)); // "learn-javascript-fast"

//Reverse a string
function reverseString(text) {
  return text.split("").reverse().join("");
}
const text1 = "hello";
console.log(reverseString(text1)); // "olleh"

//Sort words alphabetically
function sortWords(words) {
  return words.sort();
}
const words2 = ["banana", "apple", "orange"];
console.log(sortWords(words2)); // ["apple", "banana", "orange"]

//Sort words in a sentence
function sortSentence(text) {
  return text.split(" ").sort().join(" ");
}
const text2 = "banana apple orange";
console.log(sortSentence(text2)); // "apple banana orange"

//Sort the letters of a word
function sortLetters(word) {
  return word.split("").sort().join("");
}
const word2 = "javascript";
console.log(sortLetters(word2)); // "aacijprstv"

//Reverse the order of words
function reverseWords(text) {
  return text.split(" ").reverse().join(" ");
}
const text3 = "I love JavaScript";
console.log(reverseWords(text3)); // "JavaScript love I"

//Check if two words are anagrams
function isAnagram(word1, word2) {
  const sortedWord1 = word1.split("").sort().join("");
  const sortedWord2 = word2.split("").sort().join("");

  return sortedWord1 === sortedWord2;
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

//Is the word a palindrome
function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");

  return word === reversedWord;
}
console.log(isPalindrome("level"));      // true
console.log(isPalindrome("hello"));      // false
console.log(isPalindrome("radar"));      // true
console.log(isPalindrome("javascript")); // false