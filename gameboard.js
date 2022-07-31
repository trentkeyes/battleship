import { Ship } from './models/shipModel';

export class Gameboard {
  constructor(size) {
    this.size = size;
    this.ships = [];
  }
  placeShip(length, coordinates) {
    const ship = new Ship(length);
    // if statement to make sure they don't intersect
    this.ships.push({ [coordinates]: ship });
    return ship;
  }
}
