// Your code here

class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    returns`${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    returns`${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  speak() {
    if (sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${name} says squawk!`;
    }
  }
}
