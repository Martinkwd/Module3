// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

// let moreSports = teamSports;
// teamSports.push("Football");
// teamSports.unshift("Tennis");
// console.log(teamSports);

// let dog2 = dog1;
// dog1 = "Natsu";
// console.log(dog1);

// let cat2 = cat1;
// cat1.name = "Kratos";
// console.log(cat1);

// the change because using the method of Push and unshift allow me to add new elemets into the array.
// the same happend with dog and cats, in dog I only had to repleace the name and cats I had to assing a new name.

//Since teamSports is an array, you should use square brackets to clone it like this:
//let moreSports = [...teamSports]
//by using curly brackets, you are copying it as an object. We want to copy it as an array since it's an array
let moreSports = { ...teamSports };
teamSports.push("Football");
teamSports.unshift("Tennis");
console.log(teamSports);
console.log(moreSports);

//Copying dog1 with the spread syntax is not needed since dog1 is a string (primitive value)
//Primitive values get copied by value, whereas objects and arrays get copied as values
let dog2 = { ...dog1 };
console.log(dog2)
dog2 = "Natsu";
console.log(dog1);
console.log(dog2);

let cat2 = { ...cat1 };
cat2.name = "Kratos";
console.log(cat1);
console.log(cat2);
