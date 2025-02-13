function sayMyName() {
  console.log("X");
  console.log("O");
  console.log("H");
  console.log("A");
  console.log("N");
}
// sayMyName() // sayMyName -> refrence  // sayMyName() -> () -> Execution

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(addTwoNumbers("1",3));

function isUserLoggedIn(userName = "xon") { // defalut value
  if (!userName)     // !userName -> userName === undefined // (undefined == false)
    {

    return `Please enter user name`;
  }
  return `${userName} is Logged In`;
}

console.log(isUserLoggedIn());
