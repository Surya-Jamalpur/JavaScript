'use strict';

// selecting elements
const playerOneTotalScore = document.querySelector('#p0TotalScore');
const playerOneCurrentScore = document.querySelector('#p0CurrentScore');
const playerOne = document.querySelector('#player-1');
const playerTwo = document.querySelector('#player-2');
const winnerTag1 = document.querySelector('.tag1');
const winnerTag2 = document.querySelector('.tag2');
const targetScore = document.querySelector('.tagetScore');

const playerTwoTotalScore = document.querySelector('#p1TotalScore');
const playerTwoCurrentScore = document.querySelector('#p1CurrentScore');

const diceImg = document.getElementById('diceImg');
const rollDiceBtn = document.getElementById('rollDice');
const holdBtn = document.getElementById('hold');
const newGameBtn = document.getElementById('newGame');

// starting conditions
let totalScores, currentScore, activePlayer, tagetScoreNum;

const initialization = function () {
    totalScores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    diceImg.classList.add('fadeout');
    newGameBtn.disabled = true;
    newGameBtn.disabled = true;
    rollDiceBtn.disabled = false;
    holdBtn.disabled = false;
    playerOne.classList.remove('winner');
    playerTwo.classList.remove('winner');
    playerOne.classList.add('active');
    playerTwo.classList.remove('active');
    playerOneTotalScore.textContent = '###';
    playerTwoTotalScore.textContent = '###';
    winnerTag1.textContent = 'Player 1';
    winnerTag2.textContent = 'Player 2';
    playerOneCurrentScore.textContent = 0;
    playerTwoCurrentScore.textContent = 0;
}
initialization();
const switchPlayer = function () {
    document.getElementById(`p${activePlayer}CurrentScore`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    playerOne.classList.toggle('active');
    playerTwo.classList.toggle('active');
}
const disableBtns = function () {
    diceImg.classList.add('fadeout')
    rollDiceBtn.disabled = true;
    holdBtn.disabled = true;

}

const fineshGame = function(){
    if (activePlayer === 0) {
        playerOne.classList.add('winner');
        currentScore = 0;
        winnerTag1.textContent = 'Winner';
    } else {
        playerTwo.classList.add('winner');
        currentScore = 0;
        winnerTag2.textContent = 'Winner';
    }
    disableBtns();
    newGameBtn.disabled = false;
}
rollDiceBtn.addEventListener('click', function () {

    // Generating a random dice roll
    const currentDiceNo = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceImg.classList.remove('fadeout');
    diceImg.src = `images/dice-${currentDiceNo}.JPG`;


    //check if it is 1 or not, if 1 switch player
    if (currentDiceNo != 1) {
        currentScore += currentDiceNo;
        // playerOneCurrentScore.textContent = currentScore;
        document.getElementById(`p${activePlayer}CurrentScore`).textContent = currentScore;
    } else {
        switchPlayer();
    }

})
holdBtn.addEventListener('click', function () {
    totalScores[activePlayer] += currentScore;
    tagetScoreNum = Number(tagetScore.value);
    document.getElementById(`p${activePlayer}TotalScore`).textContent = totalScores[activePlayer];
    if(tagetScoreNum != 0) {
        if (totalScores[activePlayer] >= tagetScoreNum) {
            //finesh the game
            fineshGame();
        } else {
            switchPlayer();
        } 
    } else {
        if (totalScores[activePlayer] >= 20) {
        //finesh the game
        fineshGame();
    } else {
        switchPlayer();
    }
    }
    
})
newGameBtn.addEventListener('click', initialization);