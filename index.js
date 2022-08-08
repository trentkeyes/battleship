import { Game } from './Game.js';
import { events } from './dom/events.js';

export const game = new Game();
game.setUpGame();
events();

// place ships one at a time, next one pops up after one is placed

// run all this code each time a new ship is clicked?

const draggables = document.querySelectorAll('.draggableShip');

// or gameboard?
const board = document.querySelector('.gameboard1');
const zones = document.querySelectorAll('.zone');

board.addEventListener('drop', (e) => {
  e.preventDefault();
});

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', (e) => {
    draggable.classList.add('dragging');
  });
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

document.addEventListener('dragover', (event) => {
  event.preventDefault();
});

const ship = document.querySelector('.draggableShip');

let shipLength;
let shipPart;
let shipOrientation;
// find which part of the ship being dragged
ship.addEventListener('mousedown', (e) => {
  shipLength = e.target.parentNode.children.length;
  shipPart = Array.from(e.target.parentNode.children).indexOf(e.target);
});

document.addEventListener('drop', (e) => {
  e.preventDefault();
  if (
    e.target.classList.contains('zone') &&
    e.target.parentNode.classList.contains('gameboard1')
  ) {
    //if ship is vertical...
    const zoneBelow1 = document.getElementById(`${Number(e.target.id) + 10}`);
    const zoneBelow2 = document.getElementById(`${Number(e.target.id) + 20}`);
    const zoneBelow3 = document.getElementById(`${Number(e.target.id) + 30}`);
    const zoneBelow4 = document.getElementById(`${Number(e.target.id) + 40}`);
    const zonesBelow = [zoneBelow1, zoneBelow2, zoneBelow3, zoneBelow4];
    const zoneAbove1 = document.getElementById(`${Number(e.target.id) - 10}`);
    const zoneAbove2 = document.getElementById(`${Number(e.target.id) - 20}`);
    const zoneAbove3 = document.getElementById(`${Number(e.target.id) - 30}`);
    const zoneAbove4 = document.getElementById(`${Number(e.target.id) - 40}`);
    const zoneAbove5 = document.getElementById(`${Number(e.target.id) - 50}`);
    const zonesAbove = [zoneAbove1, zoneAbove2, zoneAbove3, zoneAbove4];
    if (shipLength === 5) {
      if (shipPart === 0) {
        if (
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !zoneBelow2.classList.contains('ship') &&
          !zoneBelow3.classList.contains('ship') &&
          !zoneBelow4.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
            zoneBelow3.id,
            zoneBelow4.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
      if (shipPart === 1) {
        if (
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !zoneBelow2.classList.contains('ship') &&
          !zoneBelow3.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
            zoneBelow3.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
      if (shipPart === 2) {
        if (
          !zoneAbove2.classList.contains('ship') &&
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !zoneBelow2.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
      if (shipPart === 3) {
        if (
          !zoneAbove1.classList.contains('ship') &&
          !zoneAbove2.classList.contains('ship') &&
          !zoneAbove3.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !e.target.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            zoneAbove3.id,
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
      if (shipPart === 4) {
        if (
          !zoneAbove1.classList.contains('ship') &&
          !zoneAbove2.classList.contains('ship') &&
          !zoneAbove3.classList.contains('ship') &&
          !zoneAbove4.classList.contains('ship') &&
          !e.target.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            zoneAbove4.id,
            zoneAbove3.id,
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
    }
    if (shipLength === 4) {
      if (shipPart === 0) {
        if (
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !zoneBelow2.classList.contains('ship') &&
          !zoneBelow3.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
            zoneBelow3.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
      if (shipPart === 1) {
        if (
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !zoneBelow2.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
      if (shipPart === 2) {
        if (
          !zoneAbove2.classList.contains('ship') &&
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
      if (shipPart === 3) {
        if (
          !zoneAbove3.classList.contains('ship') &&
          !zoneAbove2.classList.contains('ship') &&
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            zoneAbove3.id,
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
    }
    if (shipLength === 3) {
      if (shipPart === 0) {
        if (
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !zoneBelow2.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
      if (shipPart === 1) {
        if (
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
      if (shipPart === 2) {
        if (
          !zoneAbove2.classList.contains('ship') &&
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
          ]);
          ship.parentNode.removeChild(ship);
        }
      }
    }
    if (shipLength === 2) {
      if (shipPart === 0) {
        if (
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [e.target.id, zoneBelow1.id]);
          ship.parentNode.removeChild(ship);
        }
      }
      if (shipPart === 1) {
        if (
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(shipLength, [zoneAbove1.id, e.target.id]);
          ship.parentNode.removeChild(ship);
        }
      }
    }
  }
});

// function

// place ships to start the game. Investigate drag and drop

// add button to change ship orientation (add or remove verticalShip class)

// let users input name

// declare hits, misses, sunk ships, and winner

// get rid of middle borders on ship styling

// could make smart targeting even smarter, so it doesn't target places where non-sunk ships couldn't fit
