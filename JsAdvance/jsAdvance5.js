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

//When the exercise mentioned "creating a clone of the original and overriding it", it was meaning to set the original variable to the clone, like this:
//car = {...car, make: "Lamborghini", model: "Urus", year: 2024}
const newCar = { ...car, make: "Lamborghini", model: "Urus", year: 2024 };
console.log(newCar);

const boundCar = car.description.bind(newCar);
//If the boundCar function used car instead of newCar, and the car got modified like this:
//car = {...car, make: "Toyota", model: "Supra"}
//the boundCar would use the old version of car, while the setTimeout one would use the new version
//This is because the setTimeout version calls a function that would call car.description.
//car gets read at the time the function is called, and when the function is called, car has been updated
//When binding the function, it gets the current reference to the object. When you change the variable later on, the bound function still has the
//reference to the old object while the variable now has the reference to the new object.
setTimeout(boundCar, 200);

// DONE
