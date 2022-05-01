//Computer random choice:
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

//Checks selections and returns winner
function playRound (playerSelection, computerSelection) {
    if (playerSelection =='rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}.`}
    else if (playerSelection =='rock' && computerSelection =='paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`}
    else if (playerSelection == computerSelection) {
        return `Tie! You both picked ${playerSelection}.`
    }
    else {
        return `Invalid choice`}
    }
// player input case insensitive, iterates through the game 5 times, logs round number and also selections made.
function game(){
    for (let i = 0; i<5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Rock, Paper or Scissors?')
        playerSelection = playerSelection.toLowerCase();
        console.log(`You selected: ${playerSelection}!`)
        console.log(`Computer selected: ${computerSelection}!`)
        console.log(`Round ${i+1}: ` + playRound(playerSelection, computerSelection))
    }

}

game();