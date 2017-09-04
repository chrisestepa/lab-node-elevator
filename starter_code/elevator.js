/*jshint esversion: 6*/

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
    this.int = 0;
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.int = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.int);
  }

  update() {
    this.log();
  }

  _passengersEnter() {

  }

  _passengersLeave() {

  }

  floorUp() {
    this.direction = "up";
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
      this.log();
    } else {
      console.log("You're in the highest floor");
    }
  }

  floorDown() {
    this.direction = "down";
    if (this.floor > 0) {
      this.floor -= 1;
      this.log();
    } else {
      console.log("You're in the lowest floor");
    }
  }

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
    console.log(`WAITING LIST ${this.waitingList[0].name} // REQUESTS: ${this.requests[0]}`);
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }

}

module.exports = Elevator;
