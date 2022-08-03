import { Ship } from './models/shipModel';

export class Gameboard {
  constructor(size) {
    this.size = size;
    this.ships = [];
  }
  placeShip(length, coordinates) {
    // check if coordinates intersect with previously placed ship
    for (const location of coordinates) {
      for (const ship of this.ships) {
        if (
          ship.coordinates.some(
            (element) => JSON.stringify(element) === JSON.stringify(location)
          )
        ) {
          return;
        }
      }
    }
    const ship = new Ship(length, coordinates);
    this.ships.push(ship);
  }
}
