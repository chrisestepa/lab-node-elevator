/*jshint esversion: 6*/

const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elev = new Elevator();
let pers = new Person("Chris", 3, 0);

elev.start();

elev.call(pers);

elev.floorUp();
elev.floorUp();

elev.floorUp();

elev.floorUp();
elev.floorDown();
