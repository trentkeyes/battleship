import { Player } from './player';

export class ComputerPlayer extends Player {
  attack() {
    const getRandom = () => Math.floor(Math.random() * 10);
    const tryAttack = () => {
      const coordinates = [getRandom(), getRandom()];
      if (this.enemy.gameboard.validAttack(coordinates)) {
        this.enemy.gameboard.receiveAttack(coordinates);
        this.turn = false;
        this.enemy.turn = true;
        return coordinates;
      }
      tryAttack();
    };
    tryAttack();
  }
}
