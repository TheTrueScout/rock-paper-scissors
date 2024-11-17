import { score, updateScore, resetScore } from "./score.js";
// import { playAudio } from "./audio.js";
import { powerups, updatePowerups} from "./powerups.js";

const moves = ['rock', 'paper', 'scissors'];
const movesText = document.querySelector('.moves-text');
const resultText = document.querySelector('.result');
export const scoresText = document.querySelector('.scores');


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

  if (playerMove === 'gun' && powerups.gun > 0) {
    powerups.gun--
    score.wins += 3;
    result = 'Call an ambulance! But not for me👹'

  } else if (playerMove === 'karen' && powerups.karen > 0) {
    powerups.karen--
    score.wins += 7;
    result = 'I want to speak to your manager👹'

  } else if (playerMove === 'zawarudo' && powerups.zawarudo > 0) {
    powerups.zawarudo--
    score.wins += 14;
    result = 'ZA WARRRRUUDDOOOOOO!!!!! RGRTHTDVSWHAZRJBI'
  } 
    

  movesText.innerHTML =  `You played: <span class="orange">${playerMove}</span>. 
    Computer played: <span class="orange">${computerMove}</span>.`;

  resultText.innerHTML = result;

  updateScore(result);

  scoresText.innerHTML = `Wins: ${score.wins}<br> Losses: ${score.losses}<br> Ties: ${score.ties}`

  updatePowerups(score);

  localStorage.setItem('score', JSON.stringify(score))

};


document.addEventListener('keydown', (event) => {

  if (event.key === 'r') {
    playGame('rock')
  }
});

document.addEventListener('keydown', (event) => {

  if (event.key === 'p') {
    playGame('paper')
  }
});

document.addEventListener('keydown', (event) => {

  if (event.key === 's') {
    playGame('scissors')
  }
})


window.playGame = playGame; // because i am calling playGame() from the html(with onclick=""), i need this code.
window.resetScore = resetScore;