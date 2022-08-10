import { dragAndDrop } from '../index.js';

export const render = (() => {
  // render opening script

  const renderShip = (zones) => {
    for (let i = 0; i < zones.length; i++) {
      const zone = document.getElementById(zones[i]);
      // optionally add rounded ends to ship on placement
      // if (i === 0) {
      //   zone.classList.add('shipFront');
      // }
      // if (i === zones.length - 1) {
      //   zone.classList.add('shipBack');
      // }
      zone.classList.add('ship');
    }
  };
  const board = document.querySelector('.gameboard1');

  const nextShipToPlace = (prevShip, nextShip) => {
    const previousShip = document.querySelector(`.${prevShip}`);
    previousShip.classList.toggle('hidden');
    const newShip = document.querySelector(`.${nextShip}`);
    newShip.addEventListener('mousedown', dragAndDrop.shipPartIdentifier);
    newShip.classList.toggle('hidden');
    const functions = {
      carrier: dragAndDrop.dropCarrier,
      battleship: dragAndDrop.dropBattleship,
      cruiser: dragAndDrop.dropCruiser,
      submarine: dragAndDrop.dropCruiser,
      destroyer: dragAndDrop.dropDestroyer,
    };
    board.addEventListener('drop', functions[nextShip], { once: true });
  };
  const lastShipPlaced = () => {
    const destroyer = document.querySelector('.destroyer');
    destroyer.classList.toggle('hidden');
  };
  const renderHit = (zone) => {
    zone = document.getElementById(zone);
    zone.classList.add('hit');
  };
  const renderMiss = (zone) => {
    zone = document.getElementById(zone);
    zone.classList.add('miss');
  };

  return { renderShip, renderHit, renderMiss, nextShipToPlace, lastShipPlaced };
})();
