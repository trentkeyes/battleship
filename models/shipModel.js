export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [...Array(this.length)];
    this.sunk = false;
  }
}
