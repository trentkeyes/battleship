import { game } from '../index.js';

export const events = () => {
  const zones = document.querySelectorAll('.zone');
  const attack = (e) => {
    game.playRound(e.target.id);
  };
  zones.forEach((element) => element.addEventListener('click', attack));


};

// export player attack
