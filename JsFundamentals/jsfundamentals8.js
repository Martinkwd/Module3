// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the console each of those object properties
// and their values. Test it using the sydney object below.
//b) Create a new object for a different city with different properties and call your function again with the new object.

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const santiago = {
  name: "Santiago",
  population: 5_614_000,
  state: "V Region",
  founded: "12 February 1541",
  timezone: "Chile/UTC-3",
};

function countyCities(object) {
  for (let key in object) {
    console.log("details:" + object[key]);
  }
}

countyCities(sydney);
countyCities(santiago);
