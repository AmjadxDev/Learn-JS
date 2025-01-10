// we can denote string with '' and "" 

const studentName = "xohaan";
const age   = 2;

// console.log(studentName+age); // bad practice
// console.log(`Hello my name is ${studentName} and ${age} year's old`)

const gameName = new String('GTA');
// console.log(typeof gameName) // object [String : GTA]
// console.log(gameName[0]); // G
// console.log(gameName.__proto__); // {}

// console.log(gameName.length) // 3
// console.log(gameName.toLowerCase()) // gta

// console.log(gameName.charAt('1')); // T
// console.log(gameName.indexOf('G')); // 0

const newString = gameName.substring(0,1)
// console.log(newString); // G
const userName = new String('Iron-man-super-man');
const sliceStr = userName.slice(-8,2)
// console.log(sliceStr)



const tirmStr = "   Iron man super man    d  ";
// console.log(tirmStr.trim()) // remove before and last space
// replace("%20", "-")
// include("hello")
// split



