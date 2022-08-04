import { Ship } from './models/shipModel';

export class Gameboard {
  constructor(size) {
    this.size = size;
    this.ships = [];
    this.missedShots = [];
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
  receiveAttack(coordinates) {
    // check if missed shot has been made in the same place
    if (
      this.missedShots.some(
        (element) => JSON.stringify(element) === JSON.stringify(coordinates)
      )
    ) {
      return false;
    }
    for (const ship of this.ships) {
      // check if hit has been made on the ship in the same place
      if (
        ship.hits.some(
          (element) => JSON.stringify(element) === JSON.stringify(coordinates)
        )
      ) {
        return false;
      } else {
        for (let i = 0; i < ship.coordinates.length; i++) {
          if (
            JSON.stringify(ship.coordinates[i]) === JSON.stringify(coordinates)
          ) {
            ship.hitShip(coordinates);
            ship.sinkShip();
            return true;
          }
        }
      }
    }
    this.missedShots.push(coordinates);
    return true;
  }
  allSunk() {
    return this.ships.every((ship) => ship.sunk);
  }
}
