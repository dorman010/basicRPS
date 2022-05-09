let payerScore = 0
let compputerScore = 0 

const buttons = document.querySelectorAll('.btn');
console.log(buttons);

//Computer random choice:
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
    
} 

buttons.forEach(button =>{
    button.addEventListener('click', function() {
        console.log(button.value)
    } )
});



/* disable buttons at the end of the game:
function disableButtons() {
    btns.forEach(elem => {
        elem.disabled = true;
    })
} */