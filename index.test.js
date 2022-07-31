const { Ship } = require('./models/shipModel');
const { Gameboard } = require('./gameboard');

const mockGameboard = new Gameboard();

test('places a ship with the expected length', () => {
  mockGameboard.placeShip(5, { start: [0, 0], end: [0, 4] });
  // change to test ship length
  expect(mockGameboard.ships[0]).toBe({
    '[object Object]': { end: [0, 4], start: [0, 0] },
  });
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

test('place a ship on gameboard', () => {
  expect(mockShipHandler.hitShip(2, 2)).toBe(true);
});
