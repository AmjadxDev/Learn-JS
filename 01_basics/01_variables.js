const accountId = 14453
let accountEmail = "xyz@abc.com"
var accountPassword = "abcd12345"
accountCity = "Lahore"


// accountId = 2    // Cannot change the value of const
// console.log(accountId)

// accountEmail = "abc@gmail.com"
// console.log(accountEmail)
// accountPassword = "12345"
// console.log(accountPassword)
// accountCity = "Islamabad"
// console.log(accountCity)

{
    const accountId = 3                 // use const always
    let accountEmail = "out@hotmail.com" // always use let keyword
    var accountPassword = "1234"   // never use var
    accountCity = "Karachi"        // never use this method

    console.log("Local scope")
console.table([accountId, accountEmail, accountPassword, accountCity])
}

console.log("global Scope")
console.table([accountId, accountEmail, accountPassword, accountCity])



let accountState; // undefined