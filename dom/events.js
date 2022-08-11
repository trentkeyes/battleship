import { game } from '../index.js';
import { render } from './render.js';
import { dragAndDrop } from './dragAndDrop.js';

export const events = () => {
  const zones = document.querySelectorAll('.zone');
  const attack = (e) => {
    game.playRound(e.target.id);
  };
  zones.forEach((element) => element.addEventListener('click', attack));
  const startUpDragAndDrop = () => {
    const board = document.querySelector('.gameboard1');
    board.addEventListener('drop', dragAndDrop.dropCarrier, { once: true });
    const carrier = document.querySelector('.carrier');
    carrier.addEventListener('mousedown', dragAndDrop.shipPartIdentifier, {
      once: true,
    });
    document.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
    const draggableShip = document.querySelectorAll('.draggableShip');
    draggableShip.forEach((element) => {
      element.addEventListener('dragstart', (e) => {
        element.classList.add('dragging');
      });
      element.addEventListener('dragend', () => {
        element.classList.remove('dragging');
      });
    });
  };
  startUpDragAndDrop();
  const rotateBtn = document.getElementById('rotateShip');
  rotateBtn.addEventListener('click', () => {
    const ship = document.querySelector('.draggableShip');
    ship.classList.toggle('verticalShip');
    ship.classList.toggle('horizontalShip');
  });
  const shipPlacementComplete = () => {
    // hide bank and ship button
    // clear intro messages
    render.clearMessage();
  };
  return { shipPlacementComplete };
};
