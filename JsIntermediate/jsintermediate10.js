// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today
// c) Calculate and print your age as: 'I am x years, y months and z days old'
// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
// of days in between the two given dates.

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
//today.getMinutes() gets the minutes that have passed since the last hour. If the time is 5:34, the minutes will be 34
//To get the minutes that have passed today, we want to multiply the number of hours by 60, and then add on the minutes, like this:
//const minutes = today.getHours() * 60 + today.getMinutes()
console.log(today.getMinutes() + " minutes have passed so far today");
//today.getSeconds() gets the seconds that have passed since the last minute. If the time is 5:34:26, the seconds will be 26.
//To get the seconds that have passed today, you'd want to multiply the hours by 60 twice to get seconds, multiply minutes by 60, and then add seconds like this:
//const seconds = today.getHours() * 60 * 60 + today.getMinutes() * 60 + today.getSeconds()
console.log(today.getSeconds() + " seconds have passed so far today");

function myAge(Birthday) {
  const todayDay = new Date();
  const myBirthday = new Date(Birthday);
  let years = todayDay.getFullYear() - myBirthday.getFullYear();
  let months = todayDay.getMonth() - myBirthday.getMonth();
  let days = todayDay.getDate() - myBirthday.getDate();

  if (days < 0) months -= 1;
  if (months < 0) years -= 1;

  months = Math.abs(months + 12) % 12;
  days = Math.abs(days + 30) % 30;
  return { years, months, days };
}
const { years, months, days } = myAge("1998-05-25");
console.log(`I am ${years} years, ${months} months, and ${days} days old`);

function daysInBetween(date1, date2) {
  const firstDay1 = new Date(date1);
  const endDate2 = new Date(date2);
  const differece = firstDay1.getTime() - endDate2.getTime();
  const days = differece / 1000 / 60 / 60 / 24;
  return Math.abs(days);
}
console.log(daysInBetween("2024-01-05", "2024-05-16"));
