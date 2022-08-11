import { game } from '../index.js';
import { getShipPart, setShipPart } from '../index.js';
import { events } from './events.js';
import { render } from './render.js';

export const dragAndDrop = (() => {
  const shipPartIdentifier = (e) => {
    setShipPart(Array.from(e.target.parentNode.children).indexOf(e.target));
  };
  const dropCarrier = (e) => {
    e.preventDefault();
    const size = 5;
    const shipPart = getShipPart();
    if (
      e.target.classList.contains('zone') &&
      e.target.parentNode.classList.contains('gameboard1')
    ) {
      const zoneBelow1 = document.getElementById(`${Number(e.target.id) + 10}`);
      const zoneBelow2 = document.getElementById(`${Number(e.target.id) + 20}`);
      const zoneBelow3 = document.getElementById(`${Number(e.target.id) + 30}`);
      const zoneBelow4 = document.getElementById(`${Number(e.target.id) + 40}`);
      const zoneAbove1 = document.getElementById(`${Number(e.target.id) - 10}`);
      const zoneAbove2 = document.getElementById(`${Number(e.target.id) - 20}`);
      const zoneAbove3 = document.getElementById(`${Number(e.target.id) - 30}`);
      const zoneAbove4 = document.getElementById(`${Number(e.target.id) - 40}`);
      if (shipPart === 0) {
        if (
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !zoneBelow2.classList.contains('ship') &&
          !zoneBelow3.classList.contains('ship') &&
          !zoneBelow4.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(size, [
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
            zoneBelow3.id,
            zoneBelow4.id,
          ]);
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
          game.gameboard1.placeShip(size, [
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
            zoneBelow3.id,
          ]);
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
          game.gameboard1.placeShip(size, [
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
          ]);
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
          game.gameboard1.placeShip(size, [
            zoneAbove3.id,
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
          ]);
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
          game.gameboard1.placeShip(size, [
            zoneAbove4.id,
            zoneAbove3.id,
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
          ]);
        }
      }
    }
  };

  const dropBattleship = (e) => {
    e.preventDefault();
    const size = 4;
    const shipPart = getShipPart();
    if (
      e.target.classList.contains('zone') &&
      e.target.parentNode.classList.contains('gameboard1')
    ) {
      const zoneBelow1 = document.getElementById(`${Number(e.target.id) + 10}`);
      const zoneBelow2 = document.getElementById(`${Number(e.target.id) + 20}`);
      const zoneBelow3 = document.getElementById(`${Number(e.target.id) + 30}`);
      const zoneAbove1 = document.getElementById(`${Number(e.target.id) - 10}`);
      const zoneAbove2 = document.getElementById(`${Number(e.target.id) - 20}`);
      const zoneAbove3 = document.getElementById(`${Number(e.target.id) - 30}`);
      if (shipPart === 0) {
        if (
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !zoneBelow2.classList.contains('ship') &&
          !zoneBelow3.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(size, [
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
            zoneBelow3.id,
          ]);
        }
      }
      if (shipPart === 1) {
        if (
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !zoneBelow2.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(size, [
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
          ]);
        }
      }
      if (shipPart === 2) {
        if (
          !zoneAbove2.classList.contains('ship') &&
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(size, [
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
          ]);
        }
      }
      if (shipPart === 3) {
        if (
          !zoneAbove3.classList.contains('ship') &&
          !zoneAbove2.classList.contains('ship') &&
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(size, [
            zoneAbove3.id,
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
          ]);
        }
      }
    }
  };

  const dropCruiser = (e) => {
    e.preventDefault();
    const size = 3;
    const shipPart = getShipPart();
    if (
      e.target.classList.contains('zone') &&
      e.target.parentNode.classList.contains('gameboard1')
    ) {
      const zoneBelow1 = document.getElementById(`${Number(e.target.id) + 10}`);
      const zoneBelow2 = document.getElementById(`${Number(e.target.id) + 20}`);
      const zoneAbove1 = document.getElementById(`${Number(e.target.id) - 10}`);
      const zoneAbove2 = document.getElementById(`${Number(e.target.id) - 20}`);
      if (shipPart === 0) {
        if (
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship') &&
          !zoneBelow2.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(size, [
            e.target.id,
            zoneBelow1.id,
            zoneBelow2.id,
          ]);
        }
      }
      if (shipPart === 1) {
        if (
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(size, [
            zoneAbove1.id,
            e.target.id,
            zoneBelow1.id,
          ]);
        }
      }
      if (shipPart === 2) {
        if (
          !zoneAbove2.classList.contains('ship') &&
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(size, [
            zoneAbove2.id,
            zoneAbove1.id,
            e.target.id,
          ]);
        }
      }
    }
  };

  const dropDestroyer = (e) => {
    e.preventDefault();
    const size = 2;
    const shipPart = getShipPart();
    if (
      e.target.classList.contains('zone') &&
      e.target.parentNode.classList.contains('gameboard1')
    ) {
      const zoneBelow1 = document.getElementById(`${Number(e.target.id) + 10}`);
      const zoneAbove1 = document.getElementById(`${Number(e.target.id) - 10}`);
      if (shipPart === 0) {
        if (
          !e.target.classList.contains('ship') &&
          !zoneBelow1.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(size, [e.target.id, zoneBelow1.id]);
        }
      }
      if (shipPart === 1) {
        if (
          !zoneAbove1.classList.contains('ship') &&
          !e.target.classList.contains('ship')
        ) {
          game.gameboard1.placeShip(size, [zoneAbove1.id, e.target.id]);
        }
      }
    }
    game.setUpComplete();
  };
  return {
    shipPartIdentifier,
    dropCarrier,
    dropBattleship,
    dropCruiser,
    dropDestroyer,
  };
})();
