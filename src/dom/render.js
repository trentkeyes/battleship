import { dragAndDrop } from './dragAndDrop.js';

export const render = (() => {
  const message = document.getElementById('player1Message');
  let timeouts;
  const clearTimeouts = () => {
    // clear info messages if still running
    for (let i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  };
  const introMessage = () => {
    message.classList.add('introMessage');
    timeouts = [];
    timeouts.push(
      setTimeout(() => {
        message.textContent = "It's up to you to command your fleet...";
      }, 2000)
    );
    timeouts.push(
      setTimeout(() => {
        message.textContent = '...obliterate the enemy...';
      }, 4000)
    );
    timeouts.push(
      setTimeout(() => {
        message.textContent = '...and save the world!';
      }, 5500)
    );
    timeouts.push(
      setTimeout(() => {
        message.textContent = 'To begin, place your carrier.';
      }, 7500)
    );
  };
  const shipBank = document.querySelector('.shipBank');
  const hideShips = () => {
    const carrier = document.querySelector('.carrier');
    carrier.classList.toggle('hidden');
    const battleship = document.querySelector('.battleship');
    battleship.classList.add('hidden');
    const cruiser = document.querySelector('.cruiser');
    cruiser.classList.add('hidden');
    const submarine = document.querySelector('.submarine');
    submarine.classList.add('hidden');
    const destroyer = document.querySelector('.destroyer');
    destroyer.classList.add('hidden');
  };
  hideShips();

  const renderShip = (zones) => {
    for (let i = 0; i < zones.length; i++) {
      const zone = document.getElementById(zones[i]);
      zone.classList.add('ship');
    }
  };
  const showNextShip = (prevShip, nextShip) => {
    const previousShip = document.querySelector(`.${prevShip}`);
    const newShip = document.querySelector(`.${nextShip}`);
    previousShip.classList.toggle('hidden');
    newShip.classList.toggle('hidden');
    clearTimeouts();
    message.textContent = `Place your ${nextShip}`;
  };
  const lastShipPlaced = () => {
    const destroyer = document.querySelector('.destroyer');
    destroyer.classList.toggle('hidden');
  };
  const renderHit = (zone) => {
    zone = document.getElementById(zone);
    zone.classList.add('hit');
    clearTimeouts();
    if (zone.id <= 99) {
      message.textContent = 'The enemy hit your ship!';
    } else {
      message.textContent = 'You hit an enemy ship!';
    }
  };
  const renderMiss = (zone) => {
    zone = document.getElementById(zone);
    zone.classList.add('miss');
    clearTimeouts();
    if (zone.id <= 99) {
      message.textContent = 'The enemy missed!';
    } else {
      message.textContent = 'You missed!';
    }
  };
  const renderSunk = (zone) => {
    zone = document.getElementById(zone);
    zone.classList.add('hit');
    clearTimeouts();
    if (zone.id <= 99) {
      message.textContent = 'The enemy sank your ship!';
    } else {
      message.textContent = "You sank the enemy's ship!";
    }
  };
  const shipPlacementComplete = () => {
    message.textContent = '';
    const rotateBtn = document.getElementById('rotateShip');
    rotateBtn.classList.toggle('hidden');
    const shipBank = document.querySelector('.shipBank');
    shipBank.classList.add('shrink');

    message.textContent = "You didn't start this war...";
    timeouts = [];
    timeouts.push(
      setTimeout(() => {
        message.textContent = '...but you need to end it.';
      }, 2000)
    );
    timeouts.push(
      setTimeout(() => {
        message.textContent = 'Take a shot at the enemy!';
      }, 4000)
    );
    const zones = document.querySelectorAll('.zone');
    zones.forEach((element) => element.classList.add('gameOn'));
  };
  const player1Win = () => {
    message.classList.add('introMessage');
    message.textContent = 'You won! Thanks for saving the world!';
  };
  const player2Win = () => {
    message.classList.add('introMessage');
    message.textContent = "You lost. We're doomed.";
  };
  const resetGame = () => {
    const zones = document.querySelectorAll('.zone');
    zones.forEach((element) => {
      if (element.classList.contains('ship')) {
        element.classList.remove('ship');
      }
      if (element.classList.contains('hit')) {
        element.classList.remove('hit');
      }
      if (element.classList.contains('miss')) {
        element.classList.remove('miss');
      }
    });
    message.textContent = 'The enemy is preparing their attack!';
    introMessage();
    location.reload();
  };
  return {
    introMessage,
    renderShip,
    renderHit,
    renderMiss,
    renderSunk,
    showNextShip,
    lastShipPlaced,
    shipPlacementComplete,
    player1Win,
    player2Win,
    resetGame,
  };
})();
