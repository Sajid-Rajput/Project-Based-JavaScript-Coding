// This program number convertion into words range is 0 - 100000000000000(one hundred trillion)

"use strict";
import promptSync from "prompt-sync";
const prompt = promptSync();

// This function is for numbers that is less than 100
export function less_than_hundred(number) {
  let inputArray = Array.from(String(number), Number);
  if (number < 20 && number >= 0) {
    return `${basicNumbers[number]}`;
  } else if (inputArray[1] === 0 && number !== 10) {
    return `${tenthNumbers[inputArray[0] - 2]}`;
  } else {
    return `${tenthNumbers[inputArray[0] - 2]}-${basicNumbers[inputArray[1]]}`;
  }
}

// This function is for numbers that is less than 1000
export function hundred(number) {
  let inputArray = Array.from(String(number), Number);
  if (number % 100 === 0) {
    return `${less_than_hundred(inputArray[0])} hundred`;
  }
  return `${less_than_hundred(inputArray.shift())} hundred ${less_than_hundred(
    Number(inputArray.join(""))
  )}`;
}

// This function is for numbers that is greater than 999
export function bigNumber(number) {
  let internation_system = ["thousand", "million", "billion", "trillion"];
  const numberArray = Array.from(String(number), Number);
  let loopDecider = numberArray.length % 3;
  let iterator = 0;
  let number_organizing = [];
  let finalOutput = [];

  // This loop is slicing the numbers and push them into array
  while (numberArray.length > 0) {
    let tempArray = [];
    let subValue = [];
    if (iterator === 1 || loopDecider == 0) {
      loopDecider = 3;
    }
    for (let i = 0; i < loopDecider; i++) {
      tempArray.push(numberArray.shift());
    }
    subValue = Number(tempArray.join(""));
    number_organizing.push(subValue);
    ++iterator;
  }

  iterator = 0;
  let finalNumber = undefined;

  // This loop is converting the numbers into words
  while (number_organizing.length > 0) {
    finalNumber = number_organizing.pop();
    if (iterator == 0 || finalNumber == 0) {
      if (finalNumber < 100) {
        finalOutput.push(less_than_hundred(finalNumber));
      } else {
        finalOutput.push(hundred(finalNumber));
      }
    } else {
      if (finalNumber < 100) {
        finalOutput.push(
          `${less_than_hundred(finalNumber)} ${
            internation_system[iterator - 1]
          }`
        );
      } else {
        finalOutput.push(
          `${hundred(finalNumber)} ${internation_system[iterator - 1]}`
        );
      }
    }
    ++iterator;
  }

  // The following operations removing the extra zeros in the array
  let zeroRemoval = "zero";
  finalOutput = finalOutput.filter((item) => item !== zeroRemoval);
  finalOutput.reverse();
  finalOutput = finalOutput.join(" ");
  return finalOutput;
}

// Here, we get the user input.
const userInput = +prompt("Enter a number: ");

// Array of some basic numbers
const basicNumbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen ",
  "sixteen ",
  "seventeen",
  "eighteen",
  "nineteen",
];

// Array of some more basic numbers
const tenthNumbers = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

// Here, we set the rules that which function() is best for given number and then pass the number onto it for further processing.
if (userInput >= 0 && userInput < 100) {
  console.log(less_than_hundred(userInput));
} else if (userInput > 99 && userInput < 1000) {
  console.log(hundred(userInput));
} else if (userInput > 999 && userInput <= 100000000000000) {
  console.log(bigNumber(userInput));
} else {
  console.log("Invalid Input");
}
