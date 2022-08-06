import { Game } from './Game.js';

export const game = new Game();
game.playGame();

const attack = (e) => {
  game.playRound(e.target.id);
};
const zones = document.querySelectorAll('.zone');
zones.forEach((element) => element.addEventListener('click', attack));
