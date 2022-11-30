function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * computerChoice.length);
    let computerSelection = computerChoice[random];
    return computerSelection;
}

function getPlayerChoice() {
    let playerChoice = prompt("Hello");
    let playerSelection = playerChoice.toLowerCase();
    return playerSelection;
}

console.log(getPlayerChoice());