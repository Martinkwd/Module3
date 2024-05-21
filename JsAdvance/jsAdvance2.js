// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? the other 4 3 2 1 Why? the reason is that the numeber for does not have a delay, same for 3 but the delay is really small that why is printed after 4
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

let time1 = setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
let time2 = setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
let time3 = setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
let time4 = delayMsg("#4: Not delayed at all");
let time5 = setTimeout(delayMsg, 20000, "#5: Delayed by 20000ms");

clearTimeout(time5);

// DONE
