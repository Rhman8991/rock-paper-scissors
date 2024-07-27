const choice = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
};

const playGame = () => {
    let rounds = 0;
    let humanScore = 0;
    let computerScore = 0;
    const result = document.querySelector(".result");

    const playerChoiceBtn = document.querySelectorAll("button");
    playerChoiceBtn.forEach(button => button.addEventListener("click", (e) => {
        e.preventDefault();
        let computerSelection = getComputerChoice();
        let humanSelection = e.target.value;
        playRound(humanSelection, computerSelection);
        rounds++;

        if (rounds === 5) {
            if (humanScore > computerScore) {
                result.innerHTML += `<p>Congratulation You Win!. Final score - Player: ${humanScore}, Computer: ${computerScore}</p>`;
            } else if (humanScore < computerScore) {
                result.innerHTML += `<p>Oh No You Lose!. Final score - Player: ${humanScore}, Computer: ${computerScore}</p>`;
            } else {
                result.innerHTML += `<p>The game is a tie!. Final score - Player: ${humanScore}, Computer: ${computerScore}</p>`;
            }
            playerChoiceBtn.forEach(button => button.disabled = true)
        }
    }))

    const playRound = (humanChoice, computerChoice) => {
        let roundResult;
        if (humanChoice === computerChoice) {
            roundResult = `<p>Round: ${rounds + 1}. Is a tie! Both choose ${humanChoice}. Current score - Player: ${humanScore}, Computer: ${computerScore}</p>`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            roundResult = `<p>Round: ${rounds + 1}. You win! ${humanChoice} beat ${computerChoice}. Current score - Player: ${humanScore}, Computer: ${computerScore}</p>`;
        } else {
            computerScore++;
            roundResult = `<p>Round: ${rounds + 1}. You lose! ${humanChoice} loses to ${computerChoice}. Current score - Player: ${humanScore}, Computer: ${computerScore}</p>`;
        }
        result.innerHTML += roundResult;
    };  
};

playGame();
