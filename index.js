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

// The enemy is preparing their attack! It's up to you to command your fleet, obliterate the enemy, and save the world!

// To begin, place your carrier.

// Place your battleship.

// Place your submarine.

// You didn't start this war, but you're starting the battle. Take a shot!

// place ships to start the game. Investigate drag and drop

// add button to change ship orientation (add or remove verticalShip class)

// let users input name

// declare hits, misses, sunk ships, and winner

// get rid of middle borders on ship styling

// could make smart targeting even smarter, so it doesn't target places where non-sunk ships couldn't fit

