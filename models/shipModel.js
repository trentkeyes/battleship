export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [...Array(this.length)];
    this.sunk = false;
  }
  hitShip(part) {
    this.hits[part] = true;
    return this.hits[part];
  }
  sinkShip() {
    // run each time hitShip is used to check
    if (this.hits.every((val) => val === true)) {
      this.sunk = true;
    }
  }
}
