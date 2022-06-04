class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
  sayAge() {
    console.log(`Hello, my age is ${this.age}`);
  }
  haveBirthday() {
    console.log("It's my birthday!");
    this.age += 1;
  }
  saySmallTalk() {
    console.log("How about this weather?");
  }
 }

class Restaurant {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  stateName() {
    console.log(`This restaurant's name is ${this.name}`);
  }
  stateAddress() {
    console.log(`This restaurant's address is ${this.address}`);
  }
}

let sam = new Person("Sam", 31);
sam.sayHello();
sam.sayAge();
sam.haveBirthday();

let tina = new Person("Tina", 33);
tina.sayHello();
tina.sayAge();
tina.saySmallTalk();

let jacquesInTheBox = new Restaurant("Jacques In The Box", "555 Cool Cats Lane, New York, NY 11222");
jacquesInTheBox.stateName();
jacquesInTheBox.stateAddress();
