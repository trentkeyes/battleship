import { game } from '../index.js';

let shipPart;
const getShipPart = () => shipPart;
const setShipPart = (part) => (shipPart = part);
let orientation;
const getOrientation = () => orientation;
const setOrientation = (newOrientation) => (orientation = newOrientation);

export const dragAndDrop = (() => {
  const shipPartIdentifier = (e) => {
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
  const valid = (zones) => {
    console.log('drop fired');
    const zoneIDs = [];
    for (const zone of zones) {
      zoneIDs.push(Number(zone.id));
    }
    return (
      // ship can't intersect with another ship
      zones.every((element) => !element.classList.contains('ship')) &&
      zoneIDs.every((element) => element < 100) &&
      // ship can't be placed from eg zone 9 on the right edge to zone 10 on the left
      !zoneIDs.includes(9 && 10) &&
      !zoneIDs.includes(19 && 20) &&
      !zoneIDs.includes(29 && 30) &&
      !zoneIDs.includes(39 && 40) &&
      !zoneIDs.includes(49 && 50) &&
      !zoneIDs.includes(59 && 60) &&
      !zoneIDs.includes(69 && 70) &&
      !zoneIDs.includes(79 && 80) &&
      !zoneIDs.includes(89 && 90)
    );
  };
  const dropCarrier = (e) => {
    e.preventDefault();
    const size = 5;
    const shipPart = getShipPart();
    const orientation = getOrientation();
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
          const zones = [
            e.target,
            zoneBelow1,
            zoneBelow2,
            zoneBelow3,
            zoneBelow4,
          ];
          if (valid(zones)) {
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
          const zones = [
            zoneAbove1,
            e.target,
            zoneBelow1,
            zoneBelow2,
            zoneBelow3,
          ];
          if (valid(zones)) {
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
          const zones = [
            zoneAbove2,
            zoneAbove1,
            e.target,
            zoneBelow1,
            zoneBelow2,
          ];
          if (valid(zones)) {
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
          const zones = [
            zoneAbove3,
            zoneAbove2,
            zoneAbove1,
            e.target,
            zoneBelow1,
          ];
          if (valid(zones)) {
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
          const zones = [
            zoneAbove4,
            zoneAbove3,
            zoneAbove2,
            zoneAbove1,
            e.target,
          ];
          if (valid(zones)) {
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
          const zones = [
            e.target,
            zoneAfter1,
            zoneAfter2,
            zoneAfter3,
            zoneAfter4,
          ];
          if (valid(zones)) {
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
          const zones = [
            zoneBefore1,
            e.target,
            zoneAfter1,
            zoneAfter2,
            zoneAfter3,
          ];
          if (valid(zones)) {
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
          const zones = [
            zoneBefore2,
            zoneBefore1,
            e.target,
            zoneAfter1,
            zoneAfter2,
          ];
          if (valid(zones)) {
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
          const zones = [
            zoneBefore3,
            zoneBefore2,
            zoneBefore1,
            e.target,
            zoneAfter1,
          ];
          if (valid(zones)) {
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
          const zones = [
            zoneBefore4,
            zoneBefore3,
            zoneBefore2,
            zoneBefore1,
            e.target,
          ];
          if (valid(zones)) {
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
    const orientation = getOrientation();
    if (
      e.target.classList.contains('zone') &&
      e.target.parentNode.classList.contains('gameboard1')
    ) {
      // vertical
      const zoneBelow1 = document.getElementById(`${Number(e.target.id) + 10}`);
      const zoneBelow2 = document.getElementById(`${Number(e.target.id) + 20}`);
      const zoneBelow3 = document.getElementById(`${Number(e.target.id) + 30}`);
      const zoneAbove1 = document.getElementById(`${Number(e.target.id) - 10}`);
      const zoneAbove2 = document.getElementById(`${Number(e.target.id) - 20}`);
      const zoneAbove3 = document.getElementById(`${Number(e.target.id) - 30}`);
      // horizontal
      const zoneBefore1 = document.getElementById(`${Number(e.target.id) - 1}`);
      const zoneBefore2 = document.getElementById(`${Number(e.target.id) - 2}`);
      const zoneBefore3 = document.getElementById(`${Number(e.target.id) - 3}`);
      const zoneAfter1 = document.getElementById(`${Number(e.target.id) + 1}`);
      const zoneAfter2 = document.getElementById(`${Number(e.target.id) + 2}`);
      const zoneAfter3 = document.getElementById(`${Number(e.target.id) + 3}`);
      if (orientation === 'vertical') {
        if (shipPart === 0) {
          const zones = [e.target, zoneBelow1, zoneBelow2, zoneBelow3];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              e.target.id,
              zoneBelow1.id,
              zoneBelow2.id,
              zoneBelow3.id,
            ]);
          }
        }
        if (shipPart === 1) {
          const zones = [zoneAbove1, e.target, zoneBelow1, zoneBelow2];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              zoneAbove1.id,
              e.target.id,
              zoneBelow1.id,
              zoneBelow2.id,
            ]);
          }
        }
        if (shipPart === 2) {
          const zones = [zoneAbove2, zoneAbove1, e.target, zoneBelow1];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              zoneAbove2.id,
              zoneAbove1.id,
              e.target.id,
              zoneBelow1.id,
            ]);
          }
        }
        if (shipPart === 3) {
          const zones = [zoneAbove3, zoneAbove2, zoneAbove1, e.target];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
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
          const zones = [e.target, zoneAfter1, zoneAfter2, zoneAfter3];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              e.target.id,
              zoneAfter1.id,
              zoneAfter2.id,
              zoneAfter3.id,
            ]);
          }
        }
        if (shipPart === 1) {
          const zones = [zoneBefore1, e.target, zoneAfter1, zoneAfter2];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              zoneBefore1.id,
              e.target.id,
              zoneAfter1.id,
              zoneAfter2.id,
            ]);
          }
        }
        if (shipPart === 2) {
          const zones = [zoneBefore2, zoneBefore1, e.target, zoneAfter1];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              zoneBefore2.id,
              zoneBefore1.id,
              e.target.id,
              zoneAfter1.id,
            ]);
          }
        }
        if (shipPart === 3) {
          const zones = [zoneBefore3, zoneBefore2, zoneBefore1, e.target];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
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

  const dropCruiser = (e) => {
    e.preventDefault();
    const size = 3;
    const shipPart = getShipPart();
    const orientation = getOrientation();
    if (
      e.target.classList.contains('zone') &&
      e.target.parentNode.classList.contains('gameboard1')
    ) {
      // vertical
      const zoneBelow1 = document.getElementById(`${Number(e.target.id) + 10}`);
      const zoneBelow2 = document.getElementById(`${Number(e.target.id) + 20}`);
      const zoneAbove1 = document.getElementById(`${Number(e.target.id) - 10}`);
      const zoneAbove2 = document.getElementById(`${Number(e.target.id) - 20}`);
      // horizontal
      const zoneBefore1 = document.getElementById(`${Number(e.target.id) - 1}`);
      const zoneBefore2 = document.getElementById(`${Number(e.target.id) - 2}`);
      const zoneAfter1 = document.getElementById(`${Number(e.target.id) + 1}`);
      const zoneAfter2 = document.getElementById(`${Number(e.target.id) + 2}`);
      if (orientation === 'vertical') {
        if (shipPart === 0) {
          const zones = [e.target, zoneBelow1, zoneBelow2];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              e.target.id,
              zoneBelow1.id,
              zoneBelow2.id,
            ]);
          }
        }
        if (shipPart === 1) {
          const zones = [zoneAbove1, e.target, zoneBelow1];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              zoneAbove1.id,
              e.target.id,
              zoneBelow1.id,
            ]);
          }
        }
        if (shipPart === 2) {
          const zones = [zoneAbove2, zoneAbove1, e.target];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              zoneAbove2.id,
              zoneAbove1.id,
              e.target.id,
            ]);
          }
        }
      }
      if (orientation === 'horizontal') {
        if (shipPart === 0) {
          const zones = [e.target, zoneAfter1, zoneAfter2];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              e.target.id,
              zoneAfter1.id,
              zoneAfter2.id,
            ]);
          }
        }
        if (shipPart === 1) {
          const zones = [zoneBefore1, e.target, zoneAfter1];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              zoneBefore1.id,
              e.target.id,
              zoneAfter1.id,
            ]);
          }
        }
        if (shipPart === 2) {
          const zones = [zoneBefore2, zoneBefore1, e.target];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [
              zoneBefore2.id,
              zoneBefore1.id,
              e.target.id,
            ]);
          }
        }
      }
    }
  };

  const dropDestroyer = (e) => {
    e.preventDefault();
    const size = 2;
    const shipPart = getShipPart();
    const orientation = getOrientation();
    if (
      e.target.classList.contains('zone') &&
      e.target.parentNode.classList.contains('gameboard1')
    ) {
      // vertical
      const zoneBelow1 = document.getElementById(`${Number(e.target.id) + 10}`);
      const zoneAbove1 = document.getElementById(`${Number(e.target.id) - 10}`);
      // horizontal
      const zoneBefore1 = document.getElementById(`${Number(e.target.id) - 1}`);
      const zoneAfter1 = document.getElementById(`${Number(e.target.id) + 1}`);
      if (orientation === 'vertical') {
        if (shipPart === 0) {
          const zones = [e.target, zoneBelow1];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [e.target.id, zoneBelow1.id]);
          }
        }
        if (shipPart === 1) {
          const zones = [zoneAbove1, e.target];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [zoneAbove1.id, e.target.id]);
          }
        }
      }
      if (orientation === 'horizontal') {
        if (shipPart === 0) {
          const zones = [e.target, zoneAfter1];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [e.target.id, zoneAfter1.id]);
          }
        }
        if (shipPart === 1) {
          const zones = [zoneBefore1, e.target];
          if (valid(zones)) {
            game.gameboard1.placeShip(size, [zoneBefore1.id, e.target.id]);
          }
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
