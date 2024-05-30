// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.

// function printFibonacci() {
//   var array = [1, 1, 2, 3, 5, 8, 13, 21, 34];
//   let counter = 0;
//   let intervalTimer = setInterval(() => {
//     console.log(array[counter]);
//     counter++;
//   }, 1000);
// }
// printFibonacci();

function printFibonacciTimeouts() {
  var array = [1, 1, 2, 3, 5, 8, 13, 21, 34];
  let counter = 0;
  let timerId = setTimeout(function fib() {
    console.log(array[counter]);
    counter++;
    setTimeout(fib, 1000);
  }, 1000);
}
printFibonacciTimeouts();
// DONE

//The function with the limit argument is missing from this file. Extending the uncommented function, it would look something like this:
/*
function printFibonacciTimeouts(limit) {
  var array = [1, 1, 2, 3, 5, 8, 13, 21, 34];
  let counter = 0;
  let timerId = setTimeout(function fib() {
    console.log(array[counter]);
    counter++;
    if (counter < limit) {
      setTimeout(fib, 1000);
    }
  }, 1000);
}
printFibonacciTimeouts();
*/
//This function received a limit argument and has an if statement that checks if the counter is less than the limit.
//If we have not passed the limit, then a new timer to call the function gets created