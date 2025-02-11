let score = "32abc"; // if score have value null // if score have value undefined

// console.log(typeof score); // string 

let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number // the null value typeOf number // undefined -> number
// console.log(valueInNumber); // NaN   -> Not a Number // the null value will be 0 // undefined -> NaN


// "33" -> 33
// "33abc" -> Nan
// true -> 1, false -> 0

let isLoggedIn = 1; // "" -> false, "hites" -> true, 

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(isLoggedIn);    // 1
console.log(typeof booleanIsLoggedIn);  // boolean


let someNumber = 124;
let convertNumberToString  = String(someNumber);

console.log(convertNumberToString); //"124"
console.log(typeof convertNumberToString) // string