export class Ship {
  constructor(length, zones) {
    this.length = length;
    this.zones = zones;
    this.hits = [];
    this.sunk = false;
  }
  hitShip(zone) {
    this.hits.push(zone);
  }
  sinkShip() {
    if (this.hits.length === this.length) {
      this.sunk = true;
      console.log('Ship sunk!');
    }
  }
}
