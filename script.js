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

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log(`Is a tie! Both choose ${humanChoice}. Current score - Player: ${humanScore}, Computer: ${computerScore}`)
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beat ${computerChoice}. Current score - Player: ${humanScore}, Computer: ${computerScore}`);
    } else {
        computerScore++;
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}. Current score - Player: ${humanScore}, Computer: ${computerScore}`);
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const playGame = () => {
    const rounds = 5;
};