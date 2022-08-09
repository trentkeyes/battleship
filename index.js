import { Game } from './Game.js';
import { events } from './dom/events.js';
import { DragAndDrop } from './dom/dragAndDrop.js';

export const game = new Game();
game.setUpGame();
events();

let shipPart;

export const getShipPart = () => shipPart;
export const setShipPart = (part) => (shipPart = part);

export const dragAndDrop = new DragAndDrop();

const board = document.querySelector('.gameboard1');
const carrier = document.querySelector('.carrier');

carrier.addEventListener('mousedown', dragAndDrop.shipPartIdentifier, {
  once: true,
});

board.addEventListener('drop', dragAndDrop.dropCarrier, { once: true });

const battleship = document.querySelector('.battleship');
battleship.classList.add('hidden');

const cruiser = document.querySelector('.cruiser');
cruiser.classList.add('hidden');

const submarine = document.querySelector('.submarine');
submarine.classList.add('hidden');

const destroyer = document.querySelector('.destroyer');
destroyer.classList.add('hidden');

const draggableShip = document.querySelectorAll('.draggableShip');
draggableShip.forEach((element) => {
  element.addEventListener('dragstart', (e) => {
    element.classList.add('dragging');
  });
  element.addEventListener('dragend', () => {
    element.classList.remove('dragging');
  });
});

// doesn't seem to be needed
// board.addEventListener('drop', (e) => {
//   e.preventDefault();
// });

document.addEventListener('dragover', (event) => {
  event.preventDefault();
});

const shipBank = document.querySelector('.shipBank');
shipBank.classList.toggle('hidden');
