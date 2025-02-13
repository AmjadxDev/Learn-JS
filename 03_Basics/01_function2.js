function calculateCartPrice(val1, val3, ...num1) {
  // rest operator ...num1
  return num1;
}

// console.log(calculateCartPrice(200, 300, 400));


const user = {
    userName : "xon",
    price : "free"
}

function handleObject(anyObject) {
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.price}`)
}


// handleObject(user)
handleObject({
    userName : "Xon",
    price : 999
})


const myNewArr = [100,200,300,400]

function getNewArraySecondValue(getArray) {
    return getArray[2]
}

// console.log(getNewArraySecondValue(myNewArr ));
console.log(getNewArraySecondValue([100,500,600,700]));
