const gameObj = {
    NFS : "Need for speed",
    MXP : "Max Payne"
}      

for (const key in gameObj) {
    // console.log(`${key} short cut for ${gameObj[key]}`);   
}

const programming = ['js','cpp', 'java', 'python'];
for (const key in programming) {
    // console.log(key); // 0,1,2,3 print keys
    console.log(programming[key]); // print values
}


// for IN loop we cannot set on Map because for IN loop only set on Iteratable values