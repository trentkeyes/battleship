import { ComputerPlayer, HumanPlayer } from './Player.js';
import { Gameboard } from './Gameboard.js';
import { render } from './dom/render.js';

export class Game {
  constructor(player1 = 'Player', player2 = 'Computer') {
    this.player1 = new HumanPlayer(player1);
    this.player2 = new ComputerPlayer(player2);
    this.gameboard1 = new Gameboard();
    this.gameboard2 = new Gameboard();
    this.gameOver = true;
    this.winner = '';
    this.turn = 0;
  }
  setUpGame() {
    //set up
    this.player1.gameboard = this.gameboard1;
    this.player2.gameboard = this.gameboard2;
    this.player1.enemy = this.player2;
    this.player2.enemy = this.player1;
    this.player2.placeShips(this.gameboard2);
    console.log(this.gameboard2.ships);

    //this.gameOver = false;
  }
  setUpComplete() {
    render.shipPlacementComplete();
    this.gameOver = false;
    this.player1.turn = true;
  }
  playRound(zone) {
    if (!this.gameOver) {
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
      setTimeout(compAttack, 500);
    }
  }
}
