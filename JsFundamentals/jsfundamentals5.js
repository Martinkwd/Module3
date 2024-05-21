// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting("Martin"));

// Function Expression
const sayHello = function () {
  console.log("Hi Natalia!");
};

sayHello();

//Arrow Function syntax

const sayHelloArrow = () => {
  console.log("Hi");
  console.log(arguments);
};

sayHelloArrow();
