import { Game } from './classes/Game.js';
import { events } from './dom/events.js';

export const game = new Game();
game.setUpGame();

// zones.every((element) => element.classList.contains('ship')) &&

//   noOverlap() {
    // ship can't be placed from eg zone 9 on the right edge to zone 10 on the left
//     !zones.includes(109 && 110) &&
//       !zones.includes(119 && 120) &&
//       !zones.includes(129 && 130) &&
//       !zones.includes(139 && 140) &&
//       !zones.includes(149 && 150) &&
//       !zones.includes(159 && 160) &&
//       !zones.includes(169 && 170) &&
//       !zones.includes(179 && 180) &&
//       !zones.includes(189 && 190);
//   }