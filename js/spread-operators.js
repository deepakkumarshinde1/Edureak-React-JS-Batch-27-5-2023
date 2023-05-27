// ES5
let obj = {
  name: "KFC",
};

let locationObj = {
  city: "Nashik",
  locality: "Dwarka",
};

// combine obj & locationObj
let restaurant = Object.assign({}, obj, locationObj);

console.log(restaurant);

// ES6
// spread operators
let restaurantOne = { ...obj, ...locationObj };

console.log(restaurantOne);

///////////// Array
let arrayOne = [10, 20, 30, 40];
let arrayTwo = [100, 200, 300, 400];
// combine
// ES5
let arrayThree = arrayOne.concat(arrayTwo);
console.log(arrayThree);

// ES6
let arrayFour = [...arrayOne, ...arrayTwo];
console.log(arrayFour);
