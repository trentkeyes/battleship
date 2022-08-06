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
  attack(coordinates) {
    coordinates = [Number(coordinates[0]), Number(coordinates[1])];
    if (this.turn) {
      if (this.enemy.gameboard.validAttack(coordinates)) {
        this.enemy.gameboard.receiveAttack(coordinates);
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
    if (this.turn) {
      const getRandom = () => Math.floor(Math.random() * 10);
      const tryAttack = () => {
        const coordinates = [getRandom(), getRandom()];
        if (this.enemy.gameboard.validAttack(coordinates)) {
          this.enemy.gameboard.receiveAttack(coordinates);
          this.switchTurn();
          return true;
        } else {
          tryAttack();
        }
      };
      return tryAttack();
    } else {
      return false;
    }
  }
}
