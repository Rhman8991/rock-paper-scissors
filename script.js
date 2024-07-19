const choice = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
};