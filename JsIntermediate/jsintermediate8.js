// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// c) Update the phone number for Caroline

// d) Write a function printPhoneBook(contacts) that prints the names and phone
// numbers in the given Map
// e) Combine the contents of the two individual Maps into a single phoneBook Map
// f) Print out the full list of names in the combined phone book an empty map to begin with
const phoneBookABC = new Map();
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

console.log(phoneBookABC);

const phoneBookDEF = new Map();
phoneBookDEF.set("Daniel", "0463902343");
phoneBookDEF.set("Elizabeth ", "0433890617");
phoneBookDEF.set("Felix", "0196421182");

console.log(phoneBookDEF);
phoneBookABC.set("Caroline", "0412345678");
console.log(phoneBookABC);

function printPhoneBook(contacts) {
  //Map forEach passes 3 arguments to the callback function. The first is the value, the second is the key, and the third is the Map.
  //The map's values are the phone numbers and the keys are the names, so these parameter names are in the wrong order.
  //It should be:
  /*
    contacts.forEach((phone, name) => {
      console.log(`#${phone}: ${name}`)
    })
  */
  contacts.forEach((Name, phone) => {
    console.log(`#${phone}: ${Name}`);
  });
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);
