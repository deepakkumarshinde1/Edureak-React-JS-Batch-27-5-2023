let object = {
  name: "Edureka",
  country: "India",
};

// ES5
// let country = object.country;
// let name = object.name;
// let iName = object.name;

// ES6 de-structuring
// order don't matters
let { country, name: iName } = object;
console.log(iName, country);

////////////// Array
let array = [10, 20, 30, 40];

// es5
// let numberOne = array[0];
// let numberTwo = array[1];

// ES6 de-structuring
// order matters
let [numberOne, numberTwo] = array;
console.log(numberOne, numberTwo);
