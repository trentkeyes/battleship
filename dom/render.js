import { dragAndDrop } from './dragAndDrop.js';

export const render = (() => {
  const message1 = document.getElementById('player1Message');
  const message2 = document.getElementById('player2Message');
  let timeouts;
  const introMessage = (() => {
    message1.classList.add('introMessage');
    message1.textContent = 'The enemy is preparing their attack!';
    timeouts = [];
    timeouts.push(
      setTimeout(() => {
        message1.textContent = "It's up to you to command your fleet...";
      }, 2000)
    );
    timeouts.push(
      setTimeout(() => {
        message1.textContent = '...obliterate the enemy...';
      }, 4000)
    );
    timeouts.push(
      setTimeout(() => {
        message1.textContent = '...and save the world!';
      }, 5500)
    );
    timeouts.push(
      setTimeout(() => {
        message1.textContent = 'To begin, place your carrier.';
      }, 7500)
    );
  })();
  const shipBank = document.querySelector('.shipBank');
  const hideShips = () => {
    const battleship = document.querySelector('.battleship');
    battleship.classList.add('hidden');
    const cruiser = document.querySelector('.cruiser');
    cruiser.classList.add('hidden');
    const submarine = document.querySelector('.submarine');
    submarine.classList.add('hidden');
    const destroyer = document.querySelector('.destroyer');
    destroyer.classList.add('hidden');
    shipBank.classList.toggle('hidden');
  };
  hideShips();

  const renderShip = (zones) => {
    for (let i = 0; i < zones.length; i++) {
      const zone = document.getElementById(zones[i]);
      zone.classList.add('ship');
    }
  };
  const board = document.querySelector('.gameboard1');

  const nextShipToPlace = (prevShip, nextShip) => {
    const previousShip = document.querySelector(`.${prevShip}`);
    previousShip.classList.toggle('hidden');
    const newShip = document.querySelector(`.${nextShip}`);
    newShip.addEventListener('mousedown', dragAndDrop.shipPartIdentifier);
    newShip.addEventListener('mousedown', dragAndDrop.shipOrientation);
    newShip.classList.toggle('hidden');
    const functions = {
      carrier: dragAndDrop.dropCarrier,
      battleship: dragAndDrop.dropBattleship,
      cruiser: dragAndDrop.dropCruiser,
      submarine: dragAndDrop.dropCruiser,
      destroyer: dragAndDrop.dropDestroyer,
    };
    board.addEventListener('drop', functions[nextShip], { once: true });
    // clear info messages if still running
    for (let i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    message1.textContent = `Place your ${nextShip}`;
  };
  const lastShipPlaced = () => {
    const destroyer = document.querySelector('.destroyer');
    destroyer.classList.toggle('hidden');
  };
  const renderHit = (zone) => {
    zone = document.getElementById(zone);
    zone.classList.add('hit');
    if (zone.id <= 99) {
      message1.textContent = "It's a hit!";
    } else {
      message2.textContent = "It's a hit!";
    }
  };
  const renderMiss = (zone) => {
    zone = document.getElementById(zone);
    zone.classList.add('miss');
    if (zone.id <= 99) {
      message1.textContent = "It's a miss!";
    } else {
      message2.textContent = "It's a miss!";
    }
  };
  const shipPlacementComplete = () => {
    message1.textContent = '';
    shipBank.classList.toggle('hidden');
    message1.textContent = "You didn't start this war...";
    timeouts = [];
    timeouts.push(
      setTimeout(() => {
        message1.textContent = "...but you're starting the battle.";
      }, 2000)
    );
    timeouts.push(
      setTimeout(() => {
        message1.textContent = 'Take a shot at the enemy!';
      }, 4000)
    );
  };
  const player1Win = () => {
    message1.classList.add('introMessage');
    message1.textContent = 'You won! Thanks for saving the world!';
  };
  const player2Win = () => {
    message1.classList.add('introMessage');
    message1.textContent = "You lost. We're doomed.";
  };
  return {
    renderShip,
    renderHit,
    renderMiss,
    nextShipToPlace,
    lastShipPlaced,
    shipPlacementComplete,
    player1Win,
    player2Win,
  };
})();
