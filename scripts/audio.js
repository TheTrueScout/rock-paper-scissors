// too slow compared to the game play, so I'll keep this out for now.

export function playAudio(playerMove, computerMove) {
  
  const playerAudio = new Audio(`../audio/${playerMove}.m4a`);
  const vsAudio = new Audio('../audio/vs.m4a');
  const computerAudio = new Audio(`../audio/${computerMove}.m4a`);
  
  playerAudio.play();
  playerAudio.onended = () => {
      vsAudio.play();
      vsAudio.onended = () => {
          computerAudio.play();
      };
  };
}

