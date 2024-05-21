// 9. Given the below salaries object, perform the following tasks.
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
// b) Write a function topEarner(salaries) that calculates and returns the name of the person
// earning the highest salary

let salaries = {
  Timothy: 35_000,
  David: 25_000,
  Mary: 55_000,
  Christina: 75_000,
  James: 43_000,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) sum += salary;
  return sum;
}
console.log(sumSalaries(salaries));

function topEarner(salaries) {
  let topSalary = 0;
  let highestSalary = "";

  for (let person of Object.entries(salaries)) {
    if (person[1] > topSalary) {
      highestSalary = person[0];
      topSalary = person[1];
    }
  }
  return highestSalary;
}
console.log(topEarner(salaries));
