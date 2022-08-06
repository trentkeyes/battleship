import { ComputerPlayer } from './Player.js';
import { HumanPlayer } from './Player.js';
import { Gameboard } from './Gameboard.js';

export class Game {
  constructor(player1 = 'Player', player2 = 'Computer') {
    this.player1 = new HumanPlayer(player1);
    this.player2 = new ComputerPlayer(player2);
    this.gameboard1 = new Gameboard();
    this.gameboard2 = new Gameboard();
    this.winner = '';
    this.turn = 0;
  }
  playGame() {
    this.player1.gameboard = this.gameboard1;
    this.player2.gameboard = this.gameboard2;
    this.player1.enemy = this.player2;
    this.player2.enemy = this.player1;

    // place ships
    this.player1.gameboard.placeShip(5, [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ]);
    this.player2.gameboard.placeShip(5, [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ]);

    // start taking turns

    this.player1.turn = true;
    console.log(this.player1, this.player2);
    while (this.winner == '') {
      const currentPlayer = () =>
        this.player1.turn ? this.player1 : this.player2;
      console.log(`It's ${currentPlayer().name}'s turn. (${this.turn})`);
      if (this.gameboard2.allSunk()) {
        this.winner = this.player1;
      }
      if (this.gameboard1.allSunk()) {
        this.winner = this.player2;
      }
      if (this.player1.turn) {
        this.player1.attack([prompt(), prompt()]);
        // break out of loop if player 1 wins
      } else if (this.player2.turn) {
        this.player2.attack();
      }
      console.log(this.gameboard1, this.gameboard2);
      this.turn++;
    }

    console.log(`${this.winner.name} won the game!`);
  }
}
