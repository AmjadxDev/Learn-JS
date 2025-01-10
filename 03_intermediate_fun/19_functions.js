
function sayMyName() {
    console.log("Hey man");
}

// sayMyName()
// sayMyName // reprence
// sayMyName() // execution

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)

// }

function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(1,2)
// console.log("Result : ", result);

function loginMessage(userName = "Xohaan") {
    if (!userName) // userName === undefined are same, "" value are false 
        {
        console.log("Please enter name")
    }

    return `${userName} just logged in`
}

console.log(loginMessage(""));