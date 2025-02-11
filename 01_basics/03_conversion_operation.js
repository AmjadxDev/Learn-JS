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
// console.log(isLoggedIn);    // 1
// console.log(typeof booleanIsLoggedIn);  // boolean


let someNumber = 124;
let convertNumberToString  = String(someNumber);

// console.log(convertNumberToString); //"124"
// console.log(typeof convertNumberToString) // string

// ************ Operations ****************

let value = 3;
let negValue = -value
// console.log(negValue); // -3

// console.log(2+2); // 4
// console.log(2/3); // 0.66666666
// console.log(2%3); // 2

let str1 = "Hello";
let str2 = " Hitesh";

let str3 = str1 + str2;

// console.log(str3); // Hello Hitesh

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2) // 122
// console.log("1" + (2 + 2)) // 14
// console.log(1 + 2 + "2") // 32
// console.log(3 + 4 *5 % 2) // 3 never use practically

// console.log(true);  // true -> true, +true -> 1,  true+ -> Error
// console.log(1+""); // 1 but not recommended

let num1, num2, num3;

num1 = num2 = num3 = 4; // not recommended

let gameCounter = 100;
console.log(gameCounter++);
let gameCounter1 = 100
console.log(++gameCounter1);


//https://tc39.es/ecma262/#sec-type-conversion  -> Link for study Js
