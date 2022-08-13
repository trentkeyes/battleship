import { game } from '../index.js';
import { dragAndDrop } from './dragAndDrop.js';
import { render } from './render.js';

export const events = () => {
  const startUpDragAndDrop = () => {
    const board = document.querySelector('.gameboard1');
    board.addEventListener('drop', dragAndDrop.dropCarrier, { once: true });
    const carrier = document.querySelector('.carrier');
    const boardDropEvent = () => {
      board.addEventListener('drop', dragAndDrop.dropCarrier, { once: true });
    };
    carrier.addEventListener('mousedown', boardDropEvent);

    carrier.addEventListener('mousedown', dragAndDrop.shipPartIdentifier, {
      once: true,
    });
    carrier.addEventListener('mousedown', dragAndDrop.shipOrientation);
    carrier.addEventListener('mousedown', dragAndDrop.getOrientation);
    document.addEventListener('dragover', (e) => e.preventDefault());

    const draggableShip = document.querySelectorAll('.draggableShip');
    draggableShip.forEach((element) => {
      element.addEventListener('dragstart', (e) => {
        element.classList.add('dragging');
      });
      element.addEventListener('dragend', () => {
        element.classList.remove('dragging');
      });
    });

    const receiveAttack = (e) => {
      game.playRound(e.target.id);
    };
    const zones = document.querySelectorAll('.zone');

    zones.forEach((element) =>
      element.addEventListener('click', receiveAttack)
    );
  };
  startUpDragAndDrop();

  const rotateBtn = document.getElementById('rotateShip');
  rotateBtn.addEventListener('click', () => {
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
};

export const nextShipToPlace = (prevShip, nextShip) => {
  const board = document.querySelector('.gameboard1');
  const newShip = document.querySelector(`.${nextShip}`);
  newShip.addEventListener('mousedown', dragAndDrop.shipPartIdentifier);
  newShip.addEventListener('mousedown', dragAndDrop.shipOrientation);
  const functions = {
    carrier: dragAndDrop.dropCarrier,
    battleship: dragAndDrop.dropBattleship,
    cruiser: dragAndDrop.dropCruiser,
    submarine: dragAndDrop.dropCruiser,
    destroyer: dragAndDrop.dropDestroyer,
  };
  const boardDropEvent = () => {
    board.addEventListener('drop', functions[nextShip], { once: true });
  };
  newShip.addEventListener('mousedown', boardDropEvent);
  render.showNextShip(prevShip, nextShip);
};
