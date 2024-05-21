// 10. The following constructor function creates a new Person object with the given name and age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values.
// Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

let person1 = new Person("Martin", 26);
console.log(person1);

let person2 = new Person("Diana", 25);
console.log(person2);

class personClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  canDrive() {
    return this.age >= 18;
  }
}

let person11 = new personClass("Martin", 26);
console.log(person11);

let person21 = new personClass("Diana", 25);
console.log(person21);

let person31 = new personClass("Willy", 17);
console.log(person31);

console.log(person11.canDrive());
console.log(person21.canDrive());
console.log(person31.canDrive());
