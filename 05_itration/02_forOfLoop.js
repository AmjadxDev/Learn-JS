// High order 


// let arr = ['name', 'class', 'age']
// let arrOfObj = [{},{},{}]

let arrNum = [1,2,3,4,5,6,7];
for (const num of arrNum) { // we can apply this also in string objects etc.
    // console.log(num);
}

// Map
const map = new Map();
map.set('PK', "Pakistan");
map.set('IN', "India");
map.set('USA', "United state of America");

// console.log(map);
for( const [key, value] of map) {
    // console.log(key, ` -> `, value);
    
}

// const gameObj = {
//     game1 : "NFS",
//     game2 : "Max Payne"
// }      // For Of Loop not working in OBJECTS we use for in LOOP

// for (const [key, value] of gameObj) {
//     console.log(key, " :- ", value);
    
// }
