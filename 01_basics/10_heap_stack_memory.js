// primitive datatype store in stack

let age = 22;
let studentAge = age; // 22

console.log(studentAge);
studentAge = 34; 
console.log(age); // 22 
console.log(studentAge); // 34
// here store copy not original data


// non primitive store in heap

let user = {
    email : "user.google.com",
    password : "kkkk321"
}

let user1 = user;
let user2 = user1;
user2.email = "xyz@hotmail.com";
// console.log(user);
// console.log(user1);
// console.log(user2); // here will change all email

// in heap location it can get reference 