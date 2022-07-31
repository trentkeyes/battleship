import { Ship } from './models/shipModel';

export class ShipHandler {
  constructor() {
    this.ships = [];
  }
  addShip(length) {
    const ship = new Ship(length);
    this.ships.push(ship);
    return ship;
  }
  hitShip(ship, part) {
    this.ships[ship].hits[part] = true;
    return this.ships[ship].hits[part];
  }
  sinkShip(ship) {
    if (this.ships[ship].hits.every((val) => val === true)) {
      this.ships[ship].sunk = true;
    }
    return this.ships[ship].sunk;
  }
}
