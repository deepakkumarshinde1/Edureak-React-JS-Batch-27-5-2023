var text = "Welcome Edureka";
var text = "Deepakkumar";

var pie = 3.14;
pie = 2;

// var keyword is function scope

// function isUserAdmin(value) {
//   // if block start
//   if (value === "Yes") {
//     var myText = "abc";
//     console.log("admin");
//   } else {
//     console.log("not an admin");
//   }
//   // if block end

//   console.log(myText);
// }

// let & const are block scope variables
function isUserAdmin(value) {
  // if block start
  if (value === "Yes") {
    const myText = "abc";
    console.log("admin");
  } else {
    console.log("not an admin");
  }
  // if block end

  console.log(myText);
}

console.log(pie);
isUserAdmin("Yes");

// ES6 let , const
let newText = "Edureka";
newText = "deepakkumar";
console.log(newText);

const r = 20;
// r = 30;
