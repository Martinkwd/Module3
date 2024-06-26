// 7. In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].
// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.
// a) Define a custom toString method for the Person object that will format and print
// their details
// b) Test your method by creating 2 different people using the below constructor function
// and printing them
// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort

// d) Add a custom toString for Student objects that formats and prints their details. Test
// with 2 students.

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  Person.prototype.toString = function () {
    return `${this.name} is ${this.age} years old and is ${this.gender}.`;
  };
}

const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); //prints person1: [object Object]

const person2 = new Person("Martin Romero", 25, "male");
console.log("person2: " + person2); //prints person1: [object Object]

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
  Student.prototype.toString = function () {
    return `${this.name} is ${this.age} years old and is ${this.gender} and the ${this.cohort} cohort`;
  };
}

const Student1 = new Student("Martin", 25, "male", 2020);
console.log("Student1: " + Student1);

const Student2 = new Student("Diana ", 25, "Female", 2020);
console.log("Student2: " + Student2);

// DONE
