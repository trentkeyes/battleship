const { ComputerPlayer } = require('./Player');
const { Gameboard } = require('./Gameboard');
const { HumanPlayer } = require('./Player');

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
  expect(mockPlayer.attack([0, 0])).toEqual([0, 0]);
});

test('Player cant make a move when its not their turn', () => {
  mockPlayer.turn = false;
  expect(mockPlayer.attack([5, 5])).toBe(false);
});

test('Player attack is received by enemy', () => {
  mockPlayer.turn = true;
  expect(mockPlayer.attack([1, 1])).toEqual([1, 1]);
});

test('Double attack in same place returns false', () => {
  mockPlayer.turn = true;
  expect(mockPlayer.attack([1, 1])).toBe(false);
});

test('Computer player can attack random valid coordinates', () => {
  const mockComp = new ComputerPlayer();
  const mockHuman = new HumanPlayer();
  mockComp.enemy = mockHuman;
  mockComp.turn = true;
  expect(mockComp.attack()).toBeTruthy();
});
