const gunPowerup = document.querySelector('.gun-counter')
const karenPowerup = document.querySelector('.karen-counter')
const zawarudoPowerup = document.querySelector('.zawarudo-counter')

export let powerups = JSON.parse(localStorage.getItem('powerups'));

if (!powerups) {
  powerups = {
    gun: 0,
    karen: 0,
    zawarudo: 0
  }
}

export function updatePowerups(score) {

  if (score.wins >= 10 && score.wins % 10 === 0 && powerups.gun === 0) {
    powerups.gun = 1;

  } else if (score.wins >= 10 && score.wins % 10 === 0 && powerups.gun + 1 === score.wins / 10) {
    powerups.gun++
  };


  if (score.wins >= 30 && score.wins % 30 === 0 && powerups.karen === 0) {
    powerups.karen = 1;

  } else if (score.wins >= 30 && score.wins % 30 === 0 && powerups.karen + 1 === score.wins / 30) {
    powerups.karen++
  };


  if (score.wins >= 50 && score.wins % 50 === 0 && powerups.zawarudo === 0) {
    powerups.zawarudo = 1;

  } else if (score.wins >= 50 && score.wins % 50 === 0 && powerups.zawarudo + 1 === score.wins / 50) {
    powerups.zawarudo++
  };


  gunPowerup.innerHTML = powerups.gun;
  karenPowerup.innerHTML = powerups.karen;
  zawarudoPowerup.innerHTML = powerups.zawarudo

  console.log(powerups)

}


export function resetPowerups() {
  powerups = {
    gun: 0,
    karen: 0,
    zawarudo: 0
  }

  gunPowerup.innerHTML = powerups.gun;
  karenPowerup.innerHTML = powerups.karen;
  zawarudoPowerup.innerHTML = powerups.zawarudo

  localStorage.setItem('powerups', JSON.stringify(powerups));
}