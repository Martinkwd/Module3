//4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?

let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

console.log(result);

// the += modified the number adding 1 to preveious

let a2 = 2,
  b2 = 3;

let result2 = `${a2} + ${b2} is ${
  a2 + b2 < 10 ? "less than 10" : "greater than 10"
}`;

console.log(result2);
