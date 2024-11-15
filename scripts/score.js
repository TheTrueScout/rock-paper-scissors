export const score = {
  wins: 0,
  losses: 0,
  ties: 0
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