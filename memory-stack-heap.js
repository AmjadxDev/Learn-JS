// Stack (Primitive),            Heap ( Non-Primitive)

let studentName = "Ahmed";
let anotherStudentName = studentName;

// console.log(anotherStudentName); // ahmed -> Stack it make copy 
// anotherStudentName = "Xavier";
// console.log(studentName); // ahmed
// console.log(anotherStudentName); // Xavier


// **************** Heap Memory ********************
let userOne = {
    id : 1,
    firstName : "Xavier",
    lastName : "Shah"
}

console.log(userOne); // 1


let userTwo = userOne
userTwo.id = 2;
userTwo.firstName = "Ahmed";

console.log(userOne); // 2 -> here change the id of userOne because we Change user two it change original value

