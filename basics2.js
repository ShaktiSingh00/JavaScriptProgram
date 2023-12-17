// Get the current date
var currentDate = new Date();

// Extract date components
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
var day = currentDate.getDate();

// Format the date as a string (optional)
var formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

// Display the current date
console.log('Current Date: ' + formattedDate);
