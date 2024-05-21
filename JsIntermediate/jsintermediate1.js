// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

function ucFirstLetters(str) {
  let words = str.split(" ");
  words = words.map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });
  words = words.join(" ");
  return words;
}

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("new york"));
console.log(ucFirstLetters("buenos aires"));
console.log(ucFirstLetters("new zealand"));
