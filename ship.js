export class Ship {
  constructor(length, coordinates) {
    this.length = length;
    this.coordinates = coordinates;
    this.hits = [];
    this.sunk = false;
  }
  hitShip(location) {
    this.hits.push(location);
  }
  sinkShip() {
    if (this.hits.length === this.length) {
      this.sunk = true;
    }
  }
}
