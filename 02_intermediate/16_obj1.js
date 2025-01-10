// 1 -> singleton
Object.create // this is called constructor method

// object literals 


let mySymbol = Symbol("key1");
const jsUser = {
    [mySymbol] : "myKey1",
    stdName : "Xohaan",
    "full name" : "Muhammad Xohaan Shah",
    age : 18,
    location : "lahore",
    isLoggedIn : false,
    lastLoggin : ["Monday", "Friday"]
}

console.log(jsUser.stdName)
console.log(jsUser["stdName"])
// console.log(jsUser.fullName); // error
console.log(jsUser["full name"])
console.log(jsUser[mySymbol])
console.log(typeof jsUser[mySymbol])

 
