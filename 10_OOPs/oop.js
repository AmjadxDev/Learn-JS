// Object literal

const users = {
    username : "xon",
    loginCount : 8,
    signIn : true,
    getUserDetails : () => {
        console.log("Got user details from database");
        
    }
}

console.log(users["username"]);
console.log(users.getUserDetails())