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

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let resultOfRound;
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'scissors') {
                resultOfRound = 'You won!';
            }
            else if (computerSelection == 'paper') {
                resultOfRound = 'You lost';
            }
            else resultOfRound = "It's a tie!";
            break;

        case 'paper':
            if (computerSelection == 'rock') {
                resultOfRound = 'You won!';
            }
            else if (computerSelection == 'scissors') {
                resultOfRound = 'You lost';
            }
            else resultOfRound = "It's a tie!";
            break;

        case 'scissors':
            if (computerSelection == 'paper') {
                resultOfRound = 'You won!';
            }
            else if (computerSelection == 'rock') {
                resultOfRound = 'You lost';
            }
            else resultOfRound = "It's a tie!";
            break;
        }
    return resultOfRound;
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
