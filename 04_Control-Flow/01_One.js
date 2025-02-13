// if

// if(condition) {}  // -> condition must me true then execute scope

// Conditions -> >, <, >=, <= , ==, !=, ===, !==, 

// falsy values
//  false, 0, -0, BigInt 0n, "", '', null, undefined, NaN

// truthy values
//  true, "0", 'false', " ", [], {}, function() {}, 

// let userArray = [];
// if(userArray.length === 0) {
//     console.log('array is empty'); 
// }

// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0) {
//     console.log("Empty object");
// }

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10 // 5 -> which values go this operator are use for database b/c it give us 2 values
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15 // 15
console.log(val1);

//  Ternary Operator
// condition ? true : false;
const iceCream = "Cold";
iceCream === "Cold" ? console.log("IceCream Cold") : console.log("Tea Hot");



