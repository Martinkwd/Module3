// 3. Which of the following console.log messages will print? Why?

if (0) console.log("#1 zero is true"); // Not print
if ("0") console.log("#2 zero is true"); // Print
if (null) console.log("null is true"); // Not print
if (-1) console.log("negative is true"); // Print
if (1) console.log("positive is true"); // Print

// (0) will not print because it is a zero value, meanwhile ("0") it is true because it is not an empty sting.
// Null will not print because it does represent an empty, nothing or value unknown.
