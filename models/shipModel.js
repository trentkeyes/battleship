export class Ship {
  constructor(length, coordinates) {
    this.length = length;
    this.coordinates = coordinates;
    this.hits = [];
    this.sunk = false;
  }
  hitShip(location) {
    console.log(this.hits);
    this.hits.push(location);
  }
  sinkShip() {
    // run each time hitShip is used to check if sunk
    if (this.hits.length === this.length) {
      this.sunk = true;
    }
  }
}
