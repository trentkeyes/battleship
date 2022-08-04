const { Gameboard } = require('./gameboard');
const { Player } = require('./player');

const mockPlayer = new Player();
const mockEnemy = new Player();
mockPlayer.enemy = mockEnemy;
mockEnemy.enemy = mockPlayer;

test('Player can have a gameboard', () => {
  mockPlayer.gameboard = new Gameboard();
  expect(!!mockPlayer.gameboard).toBe(true);
});

test('Player can have an enemy', () => {
  mockPlayer.enemy = new Player();
  expect(!!mockPlayer.enemy).toBe(true);
});

test('Player can make a move during their turn', () => {
  mockPlayer.turn = true;
  expect(mockPlayer.attack([0, 0])).toBe(true);
});

test('Player cant make a move when its not their turn', () => {
  mockPlayer.turn = false;
  expect(mockPlayer.attack([0, 0])).toBe(undefined);
});

test('Player attack is received by enemy', () => {
  mockPlayer.turn = true;
  expect(mockPlayer.attack([1, 1])).toBe(true);
});

test('Double attack in same place returns false', () => {
  expect(mockPlayer.attack([1, 1])).toBe(false);
});
