import { game } from '../index.js';

export const events = () => {
  const zones = document.querySelectorAll('.zone');
  const attack = (e) => {
    game.playRound(e.target.id);
  };
  zones.forEach((element) => element.addEventListener('click', attack));
  const rotateBtn = document.getElementById('rotateShip');

  rotateBtn.addEventListener('click', () => {
    const ship = document.querySelector('.draggableShip');
    ship.classList.toggle('verticalShip');
    ship.classList.toggle('horizontalShip');
  });
};
