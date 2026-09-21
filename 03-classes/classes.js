class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user1 = new User("Alex", 25);
const user2 = new User("John", 30);

user1.sayHello();
user2.sayHello();

