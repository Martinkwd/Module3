// 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails. Why?

// The setTimeout is not executing the car.description because it is executing the global object

// a) Fix the setTimeout call by wrapping the call to car.description() inside a
// function
// b) Change the year for the car by creating a clone of the original and overriding it
// c) Does the delayed description() call use the original values or the new values from
// b)? Why?
// it using the original value because it taking the value od the car description from the oringinal value.

// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function
// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

setTimeout(() => {
  car.description();
}, 200);

const newCar = { ...car, make: "Lamborghini", model: "Urus", year: 2024 };
console.log(newCar);

const boundCar = car.description.bind(newCar);
setTimeout(boundCar, 200);

// DONE
