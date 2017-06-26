function tellTime (hour, minute, period) {

var  when = "";
var  dayOrNight = "";

if (minute==="0") {
    when = "o'clock";
    hour="";
} else if (minute<15) {
    when = "just past";
} else if (minute===15) {
    when = "quarter after";
} else if (minute===30) {
    when = "half past";
} else if (minute===45) {
    when = "quarter 'til";
    hour += 1;
} else if (minute>45) {
    when = "damn near";
    hour += 1;
}

if (period==="AM") {
    dayOrNight = "in the morning.";
} else if (period==="PM" && hour<5) {
    dayOrNight = "in the afternoon."
} else if (period==="PM" && hour>=5 && hour<8) {
    dayOrNight = "in the evening."
} else if (period==="PM" && hour>=8) {
    dayOrNight = "at night."
}

console.log("It's", when, hour, dayOrNight);

}

// test time
tellTime (3,45,"PM");





