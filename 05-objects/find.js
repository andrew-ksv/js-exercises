// Find an Object in an Array
// Create an array of users. Find a user by their id and print the result.

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];

const user = users.find(function (user) {
  return user.id === 2;
});

console.log(user); //{ id: 2, name: "Alice" }