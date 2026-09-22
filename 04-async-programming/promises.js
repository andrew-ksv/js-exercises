function getUser() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({ name: "John", age: 25 });
    }, 2000);
  });
}

getUser().then(function (user) {
  console.log(user);
});