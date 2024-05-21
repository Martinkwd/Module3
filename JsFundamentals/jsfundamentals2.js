// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?

// let addition = three + four; // 7
let multiplication = three * four; //12
let division = three / four; //0.75
let subtraction = three - four; //-1

let lessThan1 = three < four; //True
let lessThan2 = thirty < four; //False

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

// the ones that are giving the right answers are: Multiplication, Division, Subtraction, and lessThan1.
// the reason why addition and lessThan2 are not correct is that addtion has 2 strings numbers and JavaScripts does not convert addtions strings into numbers.

// To fix addition I have to change the strings into numbers
let three1 = 3;
let four1 = 4;
let addition1 = three1 + four1;

console.log(addition1);
// To fix lessThan2 I have to use the Comparison type so this will check both numbers and see if it false or true. in this case it has to be false
console.log(thirty == four);

//console.log(addition1) this is working but the abvo not as expected because, the one in abvoe are strings and I need numbers to do the calculations. the string will put the numbers togeter and not giving the mathemcatical result

//Alternative
let addition = Number(three) + Number(four);

//ALTERNATIVE is changing the stings into numbers

let three2 = 3;
let four2 = 4;
let thirty2 = 30;

let addition2 = three2 + four2; // 7
let multiplication2 = three2 * four2; //12
let division2 = three2 / four2; //0.75
let subtraction2 = three2 - four2; //-1

let lessThan12 = three2 < four2; //True
let lessThan22 = thirty2 < four2; //False

console.log(addition2);
console.log(multiplication2);
console.log(division2);
console.log(subtraction2);
console.log(lessThan12);
console.log(lessThan22);
