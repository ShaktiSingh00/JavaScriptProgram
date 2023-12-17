var today = new Date();

var day = today.getDay();

var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is " + daylist[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var timing = (hour >= 12) ? "PM" : "AM";
hour = (hour >= 12) ? hour - 12 : hour;

var formattedTime = hour +  ' : ' + (minute < 10 ? '0' : '') + minute + ' : ' + (second < 10 ? '0' : '') + second + ' ' + timing;

// Display the formatted output
console.log('Current time is: ' + formattedTime);
