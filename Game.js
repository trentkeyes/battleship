import { ComputerPlayer, HumanPlayer } from './Player.js';
import { Gameboard } from './Gameboard.js';
import { events } from './dom/events.js';
import { dragAndDrop } from './index.js';

export class Game {
  constructor(player1 = 'Player', player2 = 'Computer') {
    this.player1 = new HumanPlayer(player1);
    this.player2 = new ComputerPlayer(player2);
    this.gameboard1 = new Gameboard();
    this.gameboard2 = new Gameboard();
    this.gameOver = false;
    this.winner = '';
    this.turn = 0;
  }
  setUpGame() {
    //set up
    this.player1.gameboard = this.gameboard1;
    this.player2.gameboard = this.gameboard2;
    this.player1.enemy = this.player2;
    this.player2.enemy = this.player1;
    this.player2.randomShips(this.gameboard2);

    console.log(this.gameboard2.ships);
    // run intro messages

    // user places carrier, then next ship...

    // this.player1.gameboard.placeShip(5, [0, 1, 2, 3, 4]);
    // this.player1.gameboard.placeShip(4, [20, 21, 22, 23]);
    // this.player1.gameboard.placeShip(3, [50, 51, 52]);
    // this.player1.gameboard.placeShip(3, [97, 98, 99]);
    // this.player1.gameboard.placeShip(2, [56, 46]);

    // this.player2.gameboard.placeShip(5, [100, 101, 102, 103, 104]);
    // this.player2.gameboard.placeShip(4, [134, 144, 154, 164]);
    // this.player2.gameboard.placeShip(3, [148, 158, 168]);
    // this.player2.gameboard.placeShip(3, [106, 107, 108]);
    // this.player2.gameboard.placeShip(2, [145, 146]);

    this.player1.turn = true;
  }
  playRound(zone) {
    if (!this.gameOver) {
      this.player1.attack(zone);
      if (this.gameboard2.allSunk()) {
        this.winner = this.player1;
        this.gameOver = true;
        console.log(`${this.winner.name} won the game!`);
        return;
      }
      const compAttack = () => {
        this.player2.attack();
        if (this.gameboard1.allSunk()) {
          this.winner = this.player2;
          this.gameOver = true;
          console.log(`${this.winner.name} won the game!`);
          return;
        }
      };
      setTimeout(compAttack, 500);
    }
  }
}
