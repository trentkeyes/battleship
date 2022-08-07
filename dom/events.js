import { game } from '../index.js';

export const events = () => {
  const attack = (e) => {
    game.playRound(e.target.id);
  };
  const zones = document.querySelectorAll('.zone');
  zones.forEach((element) => element.addEventListener('click', attack));
};
