export class Ship {
  constructor(length, coordinates) {
    this.length = length;
    this.coordinates = coordinates;
    this.hits = [...Array(this.length)];
    this.sunk = false;
  }
  hitShip(part) {
    this.hits[part] = true;
    return this.hits[part];
  }
  sinkShip() {
    // run each time hitShip is used to check if sunk
    if (this.hits.every((val) => val === true)) {
      this.sunk = true;
    }
  }
}
