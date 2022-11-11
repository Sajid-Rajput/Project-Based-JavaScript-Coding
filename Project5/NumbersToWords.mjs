"use strict";
import promptSync from "prompt-sync";
const prompt = promptSync();

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

export function hundred(number) {
  let inputArray = Array.from(String(number), Number);
  if (number % 100 === 0) {
    return `${less_than_hundred(inputArray[0])} hundred`;
  }
  return `${less_than_hundred(inputArray.shift())} hundred ${less_than_hundred(
    Number(inputArray.join(""))
  )}`;
}

export function bigNumber(number) {
  let internation_system = ["thousand", "million", "billion", "trillion"];
  const numberArray = Array.from(String(number), Number);
  let loopDecider = numberArray.length % 3;
  let iterator = 0;
  let number_organizing = [];
  let finalOutput = [];

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
  let zeroRemoval = "zero";
  finalOutput = finalOutput.filter((item) => item !== zeroRemoval);
  finalOutput.reverse();
  finalOutput = finalOutput.join(" ");
  return finalOutput;
}

const userInput = +prompt("Enter a number: ");

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

if (userInput >= 0 && userInput < 100) {
  console.log(less_than_hundred(userInput));
} else if (userInput > 99 && userInput < 1000) {
  console.log(hundred(userInput));
} else if (userInput > 999 && userInput <= 100000000000000) {
  console.log(bigNumber(userInput));
} else {
  console.log("Invalid Input");
}
