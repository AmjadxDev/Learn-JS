
function calculateCartPrice(...num1) {

    return num1

}

// console.log(calculateCartPrice(200,300,400))

const users = {
    userName : "xon",
    age : 12
}

function handleObject(anyObject) {
    console.log(`name is ${anyObject.userName} and age is ${anyObject.age} year old`);
}

handleObject(users)
handleObject({
    userName : "sam",
    age : 43
})