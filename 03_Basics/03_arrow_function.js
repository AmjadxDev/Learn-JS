const user = {
    userName : "xon",
    payment : 999,
    welcomeMessage : function() {
        console.log(`${this.userName} welcome to website `);
        
    }
}

// user.welcomeMessage()
user.userName = "sam"
// user.welcomeMessage()

// console.log(this);  // {} -> if we run in Node
// console.log(this);  // Window -> if we run in Brower

function funcThis() {
    // console.log(this);
    const userName = "xonny";
    console.log(this.userName);
}

// funcThis() // this print much things

// funcThis()  // print undefined ( this can work only object nor function)


// ***************** Arrow function *********************

// const chai = () => {
//     const userName = "xonny";
//     console.log(this.userName);  // undefied
//     console.log(this);  // {}
    
// }

// () => {}  // pure arrow function

// method 1
// const tea = (num1,num2) => {
//     return num1 + num2;
// }

// const tea = (num1, num2) => num1 + num2;
// const tea = (num1, num2) => {username : "xohan"}; // this can return undefiend () are important
const tea = (num1, num2) => ({username : "xohan"}); // this can return object

console.log(tea(1,2));

