// 8. The following DigitalClock class uses an interval to print the time every second once
// started, until stopped.

// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// parameter precision – the number of ms between 'ticks'. This precision parameter
// should default to 1 second if not supplied.

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision) {
    super(prefix);
    this.precision = precision || 1000;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}
const mypresionClock = new PrecisionClock("my precision clock:", 1000);
mypresionClock.start();

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// default to 07:00 if not supplied.

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime) {
    super(prefix);
    this.wakeupTime = wakeupTime || "07:00";
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.checkTime(), 1000);
  }
  checkTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const wakeupHours = this.wakeupTime.substring(0, 2);
    const wakeupMinutes = this.wakeupTime.substring(3);
    if (hours == wakeupHours && minutes == wakeupMinutes) {
      console.log("WAKE UP!!!!!!!");
      this.stop();
    } else {
      this.display();
    }
  }
}

const myalarmClock = new AlarmClock("Alarm:", "18:58");
myalarmClock.start();

//DONE
