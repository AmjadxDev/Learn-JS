let a = 100;
const b = 200;
var c = 300;

if(true){
    let a = 10;
const b = 20;
var c = 30;

// console.log("Inner A: ",a);
// console.log("Inner B: ",b);
// console.log("Inner C: ",c); // create a problem it change the global scope value always avoid (var)

}

// console.log("Outer A: ",a);
// console.log("Outer B: ",b);
// console.log("Outer C: ",c);

// Scope are different in Node & Brower


function one() {
    const userName = "xon";

    function two() {
        const website = "youtube";
        console.log(userName);
        
    }
    // console.log(website);
    // two();
}

// one();

// ************************ Hoisting Interesting concept ********************

// function
console.log(addOne(1));   // this can print
function addOne(num) { return num +1;}


// called expression function
// console.log(addTwo(4)); // give an error  cannot access before initialization
const addTwo = function(num) { return num +2; }
// console.log(addTwo(5));






