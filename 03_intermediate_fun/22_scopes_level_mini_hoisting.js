

console.log(addOne(10))

function addOne(num) {
    return num +1
}

// addOne(10)

// this is called function hoisting and in JS variable are so much powerful because it's store any type of data

// console.log(addTwo(10)) // if we call this it give an error because we store function in variable we cannot access it before
// initialization

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(10)) 