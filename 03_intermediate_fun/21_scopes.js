// Scope Global and local

var a = 10 // Global Scoope
let b = 20
const c = 30


if(true) {  // Local scope 
    var a = 100
    let b = 200
    const c = 300

    // console.log(`Inner A: ${a}`)

console.log("Inner A: ", a); // 100
console.log("Inner B: ", b); // 200
console.log("Inner C: ", c); // 300
}


console.log(a) // 100
console.log(b) // 20
console.log(c) // 30