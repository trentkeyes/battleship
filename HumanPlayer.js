import { Player } from './player';

export class HumanPlayer extends Player {
  attack(coordinates) {
    if (this.enemy.gameboard.validAttack(coordinates)) {
      this.enemy.gameboard.receiveAttack(coordinates);
      this.turn = false;
      this.enemy.turn = true;
      return true;
    }
    return false;
  }
}
