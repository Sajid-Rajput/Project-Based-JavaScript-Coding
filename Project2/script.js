// Set values for height in inches and weight in pounds, then convert the values to
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
// divided by squared height (in meters). Output the results to the console.

console.log("BMI Calculator Application");

// Information
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo

// Take the value of height and weight from the user
let height = +prompt("Enter your height in inches: ");
let weight = +prompt("Enter your weight in pounds: ");

// Converting the height into cm
// Converting the weight into kilo

let inches_To_cm = height * 2.54;
let pounds_To_kilos = weight / 2.2046;

// Print the output on console
console.log(
  `This is equal to weight ${pounds_To_kilos} kilo divided by squared height ${inches_To_cm} meter.`
);

console.log(
  `The final result after the processing is ${
    pounds_To_kilos / inches_To_cm ** 2
  }`
);
