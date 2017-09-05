
const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elev = new Elevator();
let pers = new Person("Chris", 3, 0);

let pers2 = new Person("Daniel", 2, 9);


elev.call(pers);

setTimeout(function (){
  elev.call(pers2);},10000);
