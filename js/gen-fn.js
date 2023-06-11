function* fun() {
  yield "this is 1st return";
  yield "this is  2nd return ";
}

function* fun2() {
  for (let index = 1; index <= 10; index++) {
    yield index;
  }
}

let text = fun();
console.log(text.next());

console.log(text.next());
console.log(text.next());
// console.log(text);
// fun2();

// halt ==> resume
let loop = fun2();
console.log(loop.next());

console.log(loop.next());

console.log(loop.next());
console.log(loop.next());
console.log(loop.next());
console.log(loop.next());
console.log(loop.next());
console.log(loop.next());
console.log(loop.next());
console.log(loop.next());
console.log(loop.next());
