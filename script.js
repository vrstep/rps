function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * computerChoice.length);
    let computerSelection = computerChoice[random];
    return computerSelection;
}

console.log(getComputerChoice());