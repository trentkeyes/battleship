import { ComputerPlayer, HumanPlayer } from './Player.js';
import { Gameboard } from './Gameboard.js';
import { render } from '../dom/render.js';
import { events } from '../dom/events.js';

export class Game {
  constructor() {
    this.player1 = new HumanPlayer();
    this.player2 = new ComputerPlayer();
    this.gameboard1 = new Gameboard();
    this.gameboard2 = new Gameboard();
    this.gameOver = true;
    this.winner = '';
    this.turn = 1;
  }
  setUpGame() {
    this.player1.gameboard = this.gameboard1;
    this.player2.gameboard = this.gameboard2;
    this.player1.enemy = this.player2;
    this.player2.enemy = this.player1;
    this.player2.placeShips(this.gameboard2);
    events();
  }
  setUpComplete() {
    render.shipPlacementComplete();
    this.gameOver = false;
  }
  playRound(zone) {
    if (!this.gameOver && this.turn === 1) {
      this.player1.attack(zone);
      if (this.gameboard2.allSunk()) {
        this.winner = this.player1;
        this.gameOver = true;
        render.player1Win();
        return;
      }
      const compAttack = () => {
        this.player2.attack();
        if (this.gameboard1.allSunk()) {
          this.winner = this.player2;
          this.gameOver = true;
          render.player2Win();
          return;
        }
      };
      this.turn = 2;
      const switchTurn = () => {
        this.turn = 1;
      };
      setTimeout(compAttack, 2000);
      setTimeout(switchTurn, 2000);
    }
  }
  resetGame() {
    this.player1 = new HumanPlayer();
    this.player2 = new ComputerPlayer();
    this.gameboard1 = new Gameboard();
    this.gameboard2 = new Gameboard();
    this.gameOver = true;
    this.winner = '';
    this.turn = 1;
    this.setUpGame();
  }
}
