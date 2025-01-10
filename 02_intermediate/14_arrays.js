const arr  = [1,2,3,"Xohaan", true];

const myArr = [0,1,2,3,5];
myArr.push(1) // add value to aray
console.log(myArr);

myArr.pop(); // remove last value
myArr.unshift(2); // insert in start
console.log(myArr); 

myArr.shift(); // remove start value
console.log(myArr); 

console.log(myArr.includes(1)); // true

console.log(myArr.indexOf(5)); // 4

const newArr = myArr.join();
console.log(newArr); // convert into string
console.log(typeof newArr);


console.log("**************************");

const urArr = [1,2,3,4,5,6];
// slice vs splice
console.log("A : ",urArr );

const urN1 = urArr.slice(1,3); // 2,3
console.log("B : ",urArr );
console.log("slice : ",urN1 );

const urN2 = urArr.splice(1,3); // 2,3,4 // splice also remove from original array
console.log("C : ",urArr ); // 1,5,6
console.log("splice : ", urN2) // 2,3,4