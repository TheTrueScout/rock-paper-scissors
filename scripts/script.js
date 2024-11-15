import { score, updateScore } from "./score.js";

const moves = ['rock', 'paper', 'scissors'];
const movesText = document.querySelector('.moves-text');
const resultText = document.querySelector('.result');
const scoresText = document.querySelector('.scores');

function playGame(playerMove) {
  let result = '';

  const computerMove = moves[Math.floor(Math.random() * 3)]

  if (playerMove === computerMove) {
    result = "It's a tie."


  } else if (playerMove === 'rock' && computerMove === 'scissors' 
          || playerMove === 'scissors' && computerMove === 'paper' 
          || playerMove === 'paper' && computerMove === 'rock') {
            
      result = 'You win!'


  } else if (playerMove === 'rock' && computerMove === 'paper' 
          || playerMove === 'paper' && computerMove === 'scissors' 
          || playerMove === 'scissors' && computerMove === 'rock' ) {

    result = 'You lose...'

  };

  movesText.innerHTML =  `You played: <span class="orange">${playerMove}</span>. 
    Computer played: <span class="orange">${computerMove}</span>.`;

  resultText.innerHTML = result;

  updateScore(result);

  scoresText.innerHTML = `Wins: ${score.wins}<br> Losses: ${score.losses}<br> Ties: ${score.ties}`

};

window.playGame = playGame; // because i am calling playGame() from the html(with onclick=""), i need this code.