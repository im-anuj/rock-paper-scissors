// const score = {
//     wins: 0,
//     losses: 0,
//     draws: 0
// };
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    draws: 0
};

updateScoreElement();

function playGame(playerMove) {

    pickcomputerMove();
    console.log(computerMove);
    let result;

    if (playerMove === 'scissors') {

        if (computerMove === 'rock') {
            result = 'You lose.'
        } else if (computerMove === 'paper') {
            result = 'You win.'
        } else if (computerMove === 'scissors') {
            result = 'Draw.'
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.'
        } else if (computerMove === 'paper') {
            result = 'Draw.'
        } else if (computerMove === 'scissors') {
            result = 'You lose.'
        }
    }
    else if (playerMove === 'rock') {

        if (computerMove === 'rock') {
            result = 'Draw.'
        } else if (computerMove === 'paper') {
            result = 'You lose.'
        } else if (computerMove === 'scissors') {
            result = 'You win.'
        }
    }

    if (result === 'You win.') {
        score.wins++;
        document.querySelector('.js-result').classList.add('green-color');
        document.querySelector('.js-result').classList.remove('red-color');
        document.querySelector('.js-result').classList.remove('gray-color');
    } else if (result === 'You lose.') {
        document.querySelector('.js-result').classList.add('red-color');
        document.querySelector('.js-result').classList.remove('green-color');
        document.querySelector('.js-result').classList.remove('gray-color');
        score.losses++;
    } else if (result === 'Draw.') {
        document.querySelector('.js-result').classList.add('gray-color');
        document.querySelector('.js-result').classList.remove('green-color');
        document.querySelector('.js-result').classList.remove('red-color');
        score.draws++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}


function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Draw: ${score.draws}`
}

let computerMove;
function pickcomputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors'
    }
}