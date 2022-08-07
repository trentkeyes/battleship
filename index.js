import { Game } from './Game.js';
import { events } from './dom/events.js';

export const game = new Game();
game.playGame();
events();
