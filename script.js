let payerScore = 0
let compputerScore = 0
const buttons = document.querySelector('input')


//Computer random choice:
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
computerPlay()

// disable buttons at the end of the game:
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}