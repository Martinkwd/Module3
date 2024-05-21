// 1. What are the results of these expressions? (answer first, then use console.log() to check)

let result = "" + 1 + 0;
// answer: 10 because the "" acts like a word, so "" + 1 will become "1" not this act as a word so "1" + 0, will not make a mathematical opration it will put one next to each other so, 10.

console.log(result);

let result1 = "" - 1 + 0;
// answer: when we use the negative in there we obtain -1, the reasons is that we take the numeber that is inside this "" that will become -1 again but in numeber not in words, -1 + 0 is -1

console.log(result1);

let result2 = true + false;

// answer: true is considerate as a number 1 when used in arithmetic operations and flase is considered a number 0 when used in arithmetic operations, so this will result in 1 + 0= 1

console.log(result2);

let result3 = !true;

// answer: the result is true, when you put this symbol ! before true, this will make it to become false. we can say this simbol means not
console.log(result3);

let result4 = 6 / "3";

// answer: 23?????, my answer was wrong.Java convert the string of "3" into numeber so in 3, this make the operation of two numbers 6/3= 2
console.log(result4);

let result5 = "2" * "3";

// answer: 6, the resoans is the same as the previus one, where the sting is coverted into number

console.log(result5);

let result6 = 4 + 5 + "px";

// answer: 9px. I did not know the anwser. Java calculates from left to right so it an opration of number plus a string with words inside, its not empty, so result is 9px
console.log(result6);

let result7 = "$" + 4 + 5;

// answer: $9 wrong answer, "$" will convert the number 4 into a string so it will look like "$4", now because is a string this will like its writting so the result will be $45
console.log(result7);

let result8 = "4" - 2;

// answer: 2

console.log(result8);

let result9 = "4px" - 2;

// answer: 4px2 wrong anwser. "4px" cannot converted into a number due to the non-numeric characters (px). Therefore, the operation will result in NaN.

console.log(result9);

let result10 = " -9 " + 5;

// answer: -4 wrong answer. Java will trat the number 5 as a string so the result will be -9 5
console.log(result10);

let result11 = " -9 " - 5;

// answer: -14
console.log(result11);

let result12 = null + 1;

// answer: null wrong answer. null as 0 in numerical context. Therefore, 0 + 1= 1

console.log(result12);

let result13 = undefined + 1;

// answer: 1 anwser wrong. Java will convert the undefined as NaN in numerical context. Therefore, will be NaN + 1 that will results in NaN

console.log(result13);

let result14 = undefined == null;

// answer: NaN wrong anwser. the == is comparing the values, they both are absence of value, so it's true

console.log(result14);

let result15 = undefined === null;

// answer: false, this is === is use to check equallity, undefine and null are different tyoes

console.log(result15);

let result16 = " \t \n" - 2;

// answer: I have no idea. Java will convert /t and /n into number so 0 and 0, this will be -2 as a result

console.log(result16);
