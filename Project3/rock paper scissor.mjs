import promptSync from "prompt-sync";
import randomInteger from "random-int";

// Setup the prompt
const prompt = promptSync();
console.log("<-- Ready to play RPS Game -->");

// The available choices
let choices = ["rock", "paper", "scissor"];

// Computer choose randomly
let computerChoice = randomInteger(0, 2);
computerChoice = choices[computerChoice];

// Prompt the question to get the user choice
let userChoice = +prompt("0 for rock, 1 for paper, or 2 for scissor: ");
if (userChoice > 2) {
  console.log("Invalid Input!");
  throw "Invalid Input!";
}
userChoice = choices[userChoice];

// Display the choices
console.log(`\nComputer Choice: ${computerChoice}`);
console.log(`Player Choice: ${userChoice}\n`);

// Declare the winner
let outcome = undefined;
if (computerChoice === userChoice) {
  outcome = "Draw";
} else if (computerChoice === "rock" && userChoice === "paper") {
  outcome = "Player Wins";
} else if (computerChoice === "rock" && userChoice === "scissor") {
  outcome = "Computer Wins";
} else if (computerChoice === "paper" && userChoice === "rock") {
  outcome = "Computer Wins";
} else if (computerChoice === "paper" && userChoice === "scissor") {
  outcome = "Player Wins";
} else if (computerChoice === "scissor" && userChoice === "rock") {
  outcome = "Player Wins";
} else if (computerChoice === "scissor" && userChoice === "paper") {
  outcome = "Computer Wins";
}

console.log(`Result: ${outcome}`);
