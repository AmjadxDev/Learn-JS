// Sigleton
// Object.create


// object literals

const mySymbol = Symbol("Key1");
const jsUser = {
    [mySymbol] : "My Key",
    "firstName" : "Ahmed",
    "last Name" : "Shah", // here you cannot access this with dot
    "age" : 32,
    location : "Pakistan",
    isLoggedIn : false,
    lastLoggedInDay : ["Monday", "Saturday"]
}

// console.log(jsUser.firstName); // old method
// console.log(jsUser["location"]); // advance method
// console.log(jsUser["age"]);
// console.log(jsUser["last Name"]);
// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);

// jsUser.firstName = "Xohaan";
// Object.freeze(jsUser);      // we freeze object here after this we cannot change object

// jsUser.firstName = "Xavion"; // this will not give you an error but this can't apply    
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Welcome JS User!");
}

jsUser.greeting2 = function() {
    console.log(`Welcome Js Users! ${this.firstName}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());





