import { Gameboard } from './gameboard';

export class Player {
  constructor() {
    this.name;
    this.enemy;
    this.gameboard = new Gameboard();
    this.turn = false;
  }
}
