import { dragAndDrop } from './dom/dragAndDrop.js';
import { render } from './dom/render.js';
import { game } from './index.js';
import { Ship } from './Ship.js';

export class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
    this.shipToPlace = [
      'carrier',
      'battleship',
      'cruiser',
      'submarine',
      'destroyer',
    ];
    this.shipToPlaceIndex = 0;
  }
  placeShip(length, zones) {
    // check if zones intersect with previously placed ship
    zones = zones.map((zone) => Number(zone));
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

    this.shipToPlaceIndex++;
    if (this.shipToPlaceIndex <= 4) {
      render.nextShipToPlace(
        this.shipToPlace[this.shipToPlaceIndex - 1],
        this.shipToPlace[this.shipToPlaceIndex]
      );
    }
    if (this.shipToPlaceIndex === 5) {
      render.lastShipPlaced();
    }
  }

  computerPlaceShip(length, zones) {
    const ship = new Ship(length, zones);
    this.ships.push(ship);
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

  receiveAttack(target) {
    for (const ship of this.ships) {
      const onTarget = ship.zones.filter((zone) => zone === target);
      if (onTarget.length === 1) {
        ship.hitShip(target);
        render.renderHit(target);
        // it's a hit
        console.log('successful shot');
        return true;
      }
    }
    this.missedShots.push(target);
    console.log('missed shot', this.missedShots);
    render.renderMiss(target);
    return true;
  }
  allSunk() {
    return this.ships.every((ship) => ship.sunk);
  }
}
