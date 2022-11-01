// Call
function multiply(b) {
  return this.a * this.c * b;
}

let obj = {
  a: 2,
  c: 3
};

console.log(multiply.call(obj, 4));

function Vehicle(weight, wheels) {
  this.weight = weight;
  this.wheels = wheels;
}

function Car(weight, wheels) {
  Vehicle.call(this, weight, wheels);
  this.category = "Car";
}

const pcar = new Car(500, 4);
console.log(pcar.wheels, pcar.weight, pcar.category);

// Apply
function min(arr) {
  console.log(Math.min.apply(this, arr));
}

min([1, 2, 3, 4]);

//  Bind
const user = {
  name: "",
  getName: function () {
    return this.name;
  }
};

// Using the object name to call the method. (Regular OOP)
const tester = user;
tester.name = "yo";
console.log(tester.getName());

// Unbound method called.
user.name = "Testaa";
const namer = user.getName;

// Uncomment the line below and you should see the error.
// console.log(namer());

const boundNamer = namer.bind(user);
console.log(boundNamer());

// Borrowing methods from other objects using bind.
const Truck = {
  name: "Mercedes",
  start: function () {
    console.log(`Brmmmmm ${this.name}`);
  }
};

const Bird = {
  name: "Sparrow",
  fly: function () {
    console.log(`Flyyyyiinnn ${this.name}`);
  }
};

// Truck startin, no big thing!
Truck.start();

// Bird flyin, no big thing!
Bird.fly();

//Whaat? Flying Mercedes? Go home your drunk!
const BoundTruck = Bird.fly.bind(Truck);
BoundTruck();
