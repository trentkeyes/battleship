import { Gameboard } from './gameboard';

export class Player {
  constructor() {
    this.turn = false;
    this.gameboard = new Gameboard();
    this.enemy;
  }
  attack(coordinates) {
    if (this.turn) {
      return this.enemy.gameboard.receiveAttack(coordinates);
    }
  }
}
