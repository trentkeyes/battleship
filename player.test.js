const { ComputerPlayer } = require('./computerPlayer');
const { Gameboard } = require('./gameboard');
const { HumanPlayer } = require('./HumanPlayer');

const mockPlayer = new HumanPlayer();
const mockEnemy = new HumanPlayer();
mockPlayer.enemy = mockEnemy;
mockEnemy.enemy = mockPlayer;

test('Player can have a gameboard', () => {
  mockPlayer.gameboard = new Gameboard();
  expect(!!mockPlayer.gameboard).toBe(true);
});

test('Player can have an enemy', () => {
  mockPlayer.enemy = new HumanPlayer();
  expect(!!mockPlayer.enemy).toBe(true);
});

test('Player can make a move during their turn', () => {
  mockPlayer.turn = true;
  expect(mockPlayer.attack([0, 0])).toBe(true);
});

test('Player cant make a move when its not their turn', () => {
  mockPlayer.turn = false;
  expect(mockPlayer.attack([0, 0])).toBe(false);
});

test('Player attack is received by enemy', () => {
  mockPlayer.turn = true;
  expect(mockPlayer.attack([1, 1])).toBe(true);
});

test('Double attack in same place returns false', () => {
  mockPlayer.turn = true;
  expect(mockPlayer.attack([1, 1])).toBe(false);
});

test('Computer player can attack random valid coordinates', () => {
  const mockComp = new ComputerPlayer();
  const mockHuman = new HumanPlayer();
  mockComp.enemy = mockHuman;
  expect(mockComp.attack()).toBeTruthy();
});
