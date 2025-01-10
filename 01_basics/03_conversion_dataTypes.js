

let age = "22abc";
console.log(typeof(age));
let valueOfAge = Number(age);
console.log(typeof valueOfAge);
console.log(valueOfAge); // print NaN -> not a number

// "33" -> 33
// "333abc" -> NaN
// true -> 1 , false -> 0
// null -> 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("Convert int to Boolean");
console.log(booleanIsLoggedIn) ;


