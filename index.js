import { Game } from './classes/Game.js';
import { events } from './dom/events.js';

export const game = new Game();
game.setUpGame();

// let shipPart;
// export const getShipPart = () => shipPart;
// export const setShipPart = (part) => (shipPart = part);
  
events();

