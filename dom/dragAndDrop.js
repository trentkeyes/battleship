import { game } from '../index.js';
import {} from '../index.js';

let shipPart;
const getShipPart = () => shipPart;
const setShipPart = (part) => (shipPart = part);
let orientation;
const getOrientation = () => orientation;
const setOrientation = (newOrientation) => (orientation = newOrientation);

export const dragAndDrop = (() => {
  const shipPartIdentifier = (e) => {
    console.log(e.target);
    setShipPart(Array.from(e.target.parentNode.children).indexOf(e.target));
  };
  const shipOrientation = (e) => {
    let orientation;
    if (e.target.classList.contains('vertical')) {
      orientation = 'vertical';
    } else if (e.target.classList.contains('horizontal')) {
      orientation = 'horizontal';
    }
    setOrientation(orientation);
  };
  const dropCarrier = (e) => {
    e.preventDefault();
    const size = 5;
    const shipPart = getShipPart();
    const orientation = getOrientation();
    console.log(orientation);
    if (
      e.target.classList.contains('zone') &&
      e.target.parentNode.classList.contains('gameboard1')
    ) {
      // vertical
      const zoneBelow1 = document.getElementById(`${Number(e.target.id) + 10}`);
      const zoneBelow2 = document.getElementById(`${Number(e.target.id) + 20}`);
      const zoneBelow3 = document.getElementById(`${Number(e.target.id) + 30}`);
      const zoneBelow4 = document.getElementById(`${Number(e.target.id) + 40}`);
      const zoneAbove1 = document.getElementById(`${Number(e.target.id) - 10}`);
      const zoneAbove2 = document.getElementById(`${Number(e.target.id) - 20}`);
      const zoneAbove3 = document.getElementById(`${Number(e.target.id) - 30}`);
      const zoneAbove4 = document.getElementById(`${Number(e.target.id) - 40}`);
      // horizontal
      const zoneBefore1 = document.getElementById(`${Number(e.target.id) - 1}`);
      const zoneBefore2 = document.getElementById(`${Number(e.target.id) - 2}`);
      const zoneBefore3 = document.getElementById(`${Number(e.target.id) - 3}`);
      const zoneBefore4 = document.getElementById(`${Number(e.target.id) - 4}`);
      const zoneAfter1 = document.getElementById(`${Number(e.target.id) + 1}`);
      const zoneAfter2 = document.getElementById(`${Number(e.target.id) + 2}`);
      const zoneAfter3 = document.getElementById(`${Number(e.target.id) + 3}`);
      const zoneAfter4 = document.getElementById(`${Number(e.target.id) + 4}`);
      if (orientation === 'vertical') {
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
      if (orientation === 'horizontal') {
        if (shipPart === 0) {
          if (
            !e.target.classList.contains('ship') &&
            !zoneAfter1.classList.contains('ship') &&
            !zoneAfter2.classList.contains('ship') &&
            !zoneAfter3.classList.contains('ship') &&
            !zoneAfter4.classList.contains('ship')
          ) {
            game.gameboard1.placeShip(size, [
              e.target.id,
              zoneAfter1.id,
              zoneAfter2.id,
              zoneAfter3.id,
              zoneAfter4.id,
            ]);
          }
        }
        if (shipPart === 1) {
          if (
            !zoneBefore1.classList.contains('ship') &&
            !e.target.classList.contains('ship') &&
            !zoneAfter1.classList.contains('ship') &&
            !zoneAfter2.classList.contains('ship') &&
            !zoneAfter3.classList.contains('ship')
          ) {
            game.gameboard1.placeShip(size, [
              zoneBefore1.id,
              e.target.id,
              zoneAfter1.id,
              zoneAfter2.id,
              zoneAfter3.id,
            ]);
          }
        }
        if (shipPart === 2) {
          if (
            !zoneBefore2.classList.contains('ship') &&
            !zoneBefore1.classList.contains('ship') &&
            !e.target.classList.contains('ship') &&
            !zoneAfter1.classList.contains('ship') &&
            !zoneAfter2.classList.contains('ship')
          ) {
            game.gameboard1.placeShip(size, [
              zoneBefore2.id,
              zoneBefore1.id,
              e.target.id,
              zoneAfter1.id,
              zoneAfter2.id,
            ]);
          }
        }
        if (shipPart === 3) {
          if (
            !zoneBefore1.classList.contains('ship') &&
            !zoneBefore2.classList.contains('ship') &&
            !zoneBefore3.classList.contains('ship') &&
            !e.target.classList.contains('ship') &&
            !zoneAfter1.classList.contains('ship')
          ) {
            game.gameboard1.placeShip(size, [
              zoneBefore3.id,
              zoneBefore2.id,
              zoneBefore1.id,
              e.target.id,
              zoneAfter1.id,
            ]);
          }
        }
        if (shipPart === 4) {
          if (
            !zoneBefore1.classList.contains('ship') &&
            !zoneBefore2.classList.contains('ship') &&
            !zoneBefore3.classList.contains('ship') &&
            !zoneBefore4.classList.contains('ship') &&
            !e.target.classList.contains('ship')
          ) {
            game.gameboard1.placeShip(size, [
              zoneBefore4.id,
              zoneBefore3.id,
              zoneBefore2.id,
              zoneBefore1.id,
              e.target.id,
            ]);
          }
        }
      }
    }
  };

  const dropBattleship = (e) => {
    e.preventDefault();
    const size = 4;
    const shipPart = getShipPart();
    // const orientation = getOrientation();
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
    // const orientation = getOrientation();
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
    // const orientation = getOrientation();
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
    shipOrientation,
    dropCarrier,
    dropBattleship,
    dropCruiser,
    dropDestroyer,
  };
})();
