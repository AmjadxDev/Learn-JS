// push -> concat array in another array element 
// concat -> concat element of array

const myArr = [1,2,3]
const urArr = [4,5,6]

const concatArr = myArr.concat(urArr);
myArr.push(urArr)
console.log(myArr);
console.log(concatArr);


console.log("******** Spread *********");
arr1 = [1,2,3];
arr2 = [4,5,6];
arr3 = [7,8,9];
const allArr = [...arr1, ...arr2, ...arr3]

console.log(allArr);

const another_array = [1,2,3,[4,5,6],7, [8,[9]]]
// const realAnotherArray = another_array.flat(2)
const realAnotherArray = another_array.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Hello"));

console.log(Array.from("Hey man"));
// .from() and .of are working same
const score1 = [100];
const score2 = [200];
const score3 = [300];
console.log(Array.of(score1, score2, score3))