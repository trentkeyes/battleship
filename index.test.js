const { expect } = require('expect');
const { Ship } = require('./models/shipModel');
const { ShipHandler } = require('./shipHandler');

const mockShipHandler = new ShipHandler();
mockShipHandler.ships = [new Ship(3), new Ship(5)];

test('creates a ship with the expected length', () => {
  expect(mockShipHandler.addShip(5).length).toBe(5);
});

test('adds ship to handler array', () => {
  expect(mockShipHandler.ships.length).toBe(3);
});

test('calling hit registers in hits array', () => {
  expect(mockShipHandler.hitShip(2, 2)).toBe(true);
});

test('hitting every part of a ship sinks it', () => {
  mockShipHandler.hitShip(0, 0);
  mockShipHandler.hitShip(0, 1);
  mockShipHandler.hitShip(0, 2);
  expect(mockShipHandler.sinkShip(0)).toBe(true);
});
