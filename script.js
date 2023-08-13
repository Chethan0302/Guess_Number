'use strict';
let secretNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highScore = 0
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    //*When no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'
    //*When player wins
    } else if (guess === secretNumber) {
        displayMessage('🙌 Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#38E54D'
        document.querySelector('.number').style.width = '30rem'
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    //when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😂 You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#FC2947'
        }
    }
})
document.querySelector('.again').addEventListener('click', () => {
    // window.location.reload();
    score = 20;
    secretNumber = Math.trunc(Math.random() * 21);
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = null;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
})