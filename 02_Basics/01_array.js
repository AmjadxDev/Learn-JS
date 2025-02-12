// Arrays 

// const myArr = [1, 2, 3, "name", false] // array support mutliple type of data

// const anotherArr = new Array(1,2,3,4,5,6,7,8);

// console.log(anotherArr);
// anotherArr.push(91) // add 91 to array last
// anotherArr.push(81) // add 91 to array last
// anotherArr.pop() // remove last element
// console.log(anotherArr);

const myArray = [1,2,3,4]
// myArray.unshift(14) // add element at start 
// myArray.shift() // remove element at start 
// myArray.includes(1); // true
// myArray.indexOf(1) // 2  // if the value is not present then it return -1

const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray); // convert into string commo separate

// slice ************ splice


const arrOne = [1,2,3,4,5,6]

console.log("Original value : " ,arrOne);

const arrSlice = arrOne.slice(1,3); // doesn't change original array
console.log("after slice value : " ,arrOne);
const arrSplice = arrOne.splice(1,3);
console.log("after splice value : " ,arrOne); // also remove from original array 

console.log("slice : ",arrSlice); // does not include last range

console.log("splice " ,arrSplice); // include last range

