const { Gameboard } = require('./gameboard');

const mockGameboard = new Gameboard();

test('adds ship to gameboard array', () => {
  mockGameboard.placeShip(3, [
    [1, 0],
    [1, 1],
    [1, 2],
  ]);
  expect(mockGameboard.ships.length).toBe(1);
});

test('places a ship with the expected length', () => {
  mockGameboard.placeShip(5, [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ]);
  expect(mockGameboard.ships[1].length).toBe(5);
});

test('dont place ship if it intersects with another', () => {
  mockGameboard.placeShip(4, [
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);
  expect(mockGameboard.ships.length).toBe(2);
});

test('calling hit registers in hits array', () => {
  mockGameboard.ships[0].hitShip(2);
  expect(mockGameboard.ships[0].hits[2]).toBe(true);
});

test('hitting every part of a ship sinks it', () => {
  mockGameboard.ships[0].hitShip(0);
  mockGameboard.ships[0].hitShip(1);
  mockGameboard.ships[0].hitShip(2);
  mockGameboard.ships[0].sinkShip();
  expect(mockGameboard.ships[0].sunk).toBe(true);
});
