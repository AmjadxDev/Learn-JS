//primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100;
// Dynamic types langauge

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId); // false

// Refrence type  (Non Primitive)
// Array, Objects, Functions, 
const heros = ["Iron man", "Marvel", "Bat man"]
let myObj = {
    id : 21,
    name : "Amjad"
}
const myFunction = function myFunction() {console.log("hey man");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);