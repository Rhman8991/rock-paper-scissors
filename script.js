const choice = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
};

const getHumanChoice = () => {
    let userInput = prompt("Choose Rock, Paper or Scissors!").toLowerCase();
    while (!choice.includes(userInput)) {
        userInput = prompt("Please choose either Rock, Paper, or Scissors!");
    }
    return userInput;
};

let humanScore = 0;
let computerScore = 0;