// ES 5 ==> oop (constructors)
function ParentClass() {}
function HumanOne(value) {
  this.legs = value;
}

// inheritance
// copy the prototype
HumanOne.prototype = Object.create(ParentClass.prototype);

HumanOne.prototype.running = function () {
  console.log("running with ", this.legs, " legs");
};
let humanOne = new HumanOne(2);
humanOne.running();

// ES6
class ParentTwo {}
class HumanTwo extends ParentTwo {
  constructor(value) {
    super();
    this.legs = value;
  }
  running() {
    console.log("running");
  }
}
// overloading => not there

let humanTwo = new HumanTwo(2);
