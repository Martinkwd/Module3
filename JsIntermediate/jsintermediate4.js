// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'cls.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

//loops

// function camelCase(cssProp) {
//   let camelCase1 = cssProp.split("-");
//   let camelCase2 = camelCase1[0];
//   for (let i = 1; i < camelCase1.length; i++) {
//     camelCase2 += camelCase1[i][0].toUpperCase() + camelCase1[i].slice(1);
//   }
//   return camelCase2;
// }

// console.log(camelCase("margin-left")); // marginLeft
// console.log(camelCase("background-image")); // backgroundImage
// console.log(camelCase("display")); // display

// with conditional operator

// function camelCase(cssProp) {
//   let camelCase1 = cssProp.split("-");
//   let camelCase2 = camelCase1[0];
//   camelCase1.slice(1).forEach((camelCase1) => {
//     camelCase2 += camelCase1
//       ? camelCase1[0].toUpperCase() + camelCase1.slice(1)
//       : "";
//   });
//   return camelCase2;
// }

// console.log(camelCase("margin-left")); // marginLeft
// console.log(camelCase("background-image")); // backgroundImage
// console.log(camelCase("display")); // display

//without conditional operator

function camelCase(cssProp) {
  let camelCase1 = cssProp.split("-");
  let camelCase2 = camelCase1[0];
  camelCase1.slice(1).forEach((camelCase1) => {
    if (camelCase1) {
      let capitalised = camelCase1[0].toUpperCase() + camelCase1.slice(1);
      camelCase2 += capitalised;
    }
  });
  return camelCase2;
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display
