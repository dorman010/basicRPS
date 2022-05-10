let playerScore = 0
let computerScore = 0 

const buttons = document.querySelectorAll('.btn');

//Computer random choice:
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
    
};



function playRound(playerSelection){
    let result = "";
    let computerChoice = computerPlay();

    if ((playerSelection == 'Rock' && computerChoice == 'Scissors') || (playerSelection == 'Paper' && computerChoice == 'Rock') || (playerSelection == 'Scissors' && computerChoice == 'Paper')) {
        playerScore +=1;
        result = (`You win! ${playerSelection} beats ${computerChoice}.`)
        if (playerScore == 5) {
            result = (`You win! Reload the page to restart.`);
            disableButtons();
        }
    }
    else if ((playerSelection == computerChoice)) {
        result = (`Tie! You both chose ${computerChoice}.`)
    }
    else {
        result = (`You lose! ${computerChoice} beats ${playerSelection}.`)
        computerScore +=1;
        if (computerScore == 5){
            result = (`You lose! Reload the page to restart.`);
            disableButtons();
        }
    }
    document.querySelector('.result').innerHTML = result;
    document.querySelector(`.compChoice`).innerHTML = computerChoice;
    document.querySelector('.score').innerHTML = `Computer: ${computerScore} <br><br> Player: ${playerScore}`;
    return;
}


buttons.forEach(button =>{
    button.addEventListener('click', function() {
        playRound(button.value);
    });
});


// disable buttons at the end of the game:
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
} 