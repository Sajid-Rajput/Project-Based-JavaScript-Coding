// Create a variable that contains a value in miles, convert it to kilometers, and log the value in kilometers in the following format:
// The distance of 130 kms is equal to 209.2142 miles
// For reference, 1 mile equals 1.60934 kilometers.

console.log("Miles-to-kilometers Application");

// Take the user input in miles
let miles = +prompt("Enter the distance in miles: ");

// Convert the distance Miles-to-kilometers
let milesTokilometer = miles * 1.60934;

// Output on to the console
console.log(
  `The distance of ${milesTokilometer} kms is equal to ${miles} miles.`
);
