import { target, placeShipsRandomly } from './tools.js';

class Player {
  constructor(name) {
    this.name = name;
    this.enemy;
    this.gameboard;
    this.turn = false;
  }
  switchTurn() {
    this.turn = false;
    this.enemy.turn = true;
  }
}

export class HumanPlayer extends Player {
  attack(zone) {
    zone = Number(zone);
    if (this.turn) {
      if (this.enemy.gameboard.validAttack(2, zone)) {
        this.enemy.gameboard.receiveAttack(zone);
        this.switchTurn();
        return true;
      }
      return false;
    }
    return false;
  }
}

export class ComputerPlayer extends Player {
  attack() {
    target(this.enemy);
    this.switchTurn();
  }
  placeShips(board) {
    placeShipsRandomly(board);
  }
}
