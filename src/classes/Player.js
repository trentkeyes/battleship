import { target, placeShipsRandomly } from '../computer/tools.js';

class Player {
  constructor() {
    this.enemy;
    this.gameboard;
  }
}
export class HumanPlayer extends Player {
  attack(zone) {
    zone = Number(zone);
    if (this.enemy.gameboard.validAttack(2, zone)) {
      this.enemy.gameboard.receiveAttack(zone);
    }
  }
}
export class ComputerPlayer extends Player {
  attack() {
    target(this.enemy);
  }
  placeShips(board) {
    placeShipsRandomly(board);
  }
}
