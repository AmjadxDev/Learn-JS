const score = 400;

// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toFixed(2)); // 100.00 it give 2 00

const otherNumber = 32.6824;
// console.log(otherNumber.toPrecision(3)); //32.7 because after 6 is 8

const money = 10000000
// console.log(money.toLocaleString('en-IN')); // 1,00,00,000

// ********* Maths ***********
console.log(Math); // object [Math] {}
Math.PI
Math.abs // only - digit convert to positive
Math.round(4.4) // 4
Math.min(5,3,2,56);
console.log(Math.random());
console.log((Math.random()*10) +1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)+ min));
console.log(Math.floor((Math.random()*10)))


// Function to generate random number
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

console.log("Random Number between 1 and 5: ")

// Function call
console.log( randomNumber(1, 5) );
