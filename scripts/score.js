import { updateScoreText } from "./script.js"
import { powerups } from "./powerups.js"

export let score = JSON.parse(localStorage.getItem('score'))

if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}
  
export function updateScore(result) {
  if (result === 'You win!') {
    score.wins++
  } else if (result === "It's a tie.") {
    score.ties++
  } else if (result === 'You lose...') {
    score.losses++
  }
}


export function resetScore() {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    }

    updateScoreText();
    localStorage.setItem('score', JSON.stringify(score));
  }
