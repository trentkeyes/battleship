import { render } from './dom/render.js';
import { Ship } from './ship.js';

export class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
  }
  placeShip(length, zones) {
    // check if zones intersect with previously placed ship
    for (const location of zones) {
      for (const ship of this.ships) {
        if (ship.zones.some((element) => element === location)) {
          return;
        }
      }
    }
    const ship = new Ship(length, zones);
    this.ships.push(ship);
    render.renderShip(zones);
    console.log(this.ships);
  }
  validAttack(board, zone) {
    if (board === 1) {
      if (zone < 0 || zone > 99) {
        return false;
      }
    }
    if (board === 2) {
      if (zone < 100 || zone > 199) {
        return false;
      }
    }
    // check if missed shot has been made in the same place
    if (this.missedShots.some((element) => element === zone)) {
      return false;
    }
    for (const ship of this.ships) {
      // check if hit has been made on the ship in the same place
      if (ship.hits.some((element) => element === zone)) {
        return false;
      }
    }
    return true;
  }

  receiveAttack(zone) {
    for (const ship of this.ships) {
      for (let i = 0; i < ship.zones.length; i++) {
        if (ship.zones[i] === zone) {
          ship.hitShip(zone);
          ship.sinkShip();
          render.renderHit(zone);
          return true;
        }
      }
    }
    this.missedShots.push(zone);
    render.renderMiss(zone);
    return true;
  }
  allSunk() {
    return this.ships.every((ship) => ship.sunk);
  }
}
