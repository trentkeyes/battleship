export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [...Array(this.length)];
    this.sunk = false;
  }
  hit(num) {
    this.hits[num] = true;
  }
  isSunk() {
    this.hits.every((val) => val === true);
  }
}
