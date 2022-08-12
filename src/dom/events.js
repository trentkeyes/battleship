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
    carrier.addEventListener('mousedown', dragAndDrop.shipOrientation);
    carrier.addEventListener('mousedown', dragAndDrop.getOrientation);
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
    // do this for other ships
    const ships = document.querySelectorAll('.draggableShip');
    ships.forEach((ship) => {
      ship.classList.toggle('vertical');
      ship.classList.toggle('horizontal');
      const children = Array.from(ship.children);
      children.forEach((part) => {
        part.classList.toggle('vertical');
        part.classList.toggle('horizontal');
      });
    });
  });
  const shipPlacementComplete = () => {
    // hide bank and ship button
    // clear intro messages
    render.clearMessage();
  };
  return { shipPlacementComplete };
};
