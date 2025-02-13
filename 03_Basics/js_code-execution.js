// How does JS code execute + call stack

// {} -> Global execution context -> this    

// Brower , Node, Deno -> every one have different Global execution context


// Types of execution context -> Main two types Global , function

//  1. Global Execution Context
//  2. Function / Functional Execution Context
// eval execution context -> not important


//  How our code run
//   Run our code in two phases
//  1. Memory Creation phase -> some people say Creation Phase -> Memory Allocation eg. let name = "xon";
//  2. Execution Phase  ->

let val1 = 10;
let val2 = 5;

function addNumbers(numl, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNumbers(val1, val2);
let result2 = addNumbers(10, 10);


// our code start from Global Execution -> allocate into -> this
// 1. Memory phase -> first store all variables and assign undefined eg. 
//      val1 -> undefined
//      val2 -> undefined
//      addNum -> definition
//      result1 -> undefined
//      result2 -> undefined


//  2. Execution Phase
        // val1 = 10;
        // val2 = 5;
        // addNumber = create a box -> new variable environment + execution thread
        //   if we call function 2 time then create SandBox ->inside SandBox-> Memory phase + execution phase 
        //      memory phase -> val1 = undefined, val2 = undefined, total = undefined 
        //  execution phase -> num1 = 10, num2 = 5, total = 15 -> total are return into Global execution context
        
        // ***** after execution SandBox are deleted ******************
        // result1 = 15;

        // repeat create a sandbox -> new variable env + thread -> memory phase + execution phase or context
        // result2 = 20

//      ++++++++++++ Call Stack ++++++++++

    //  create a Bucket -> Global exe -> then one() in -> one() execute -> one() out simple.
    //  here are apply LIFO concept -> Last in First out.
    // Open brower click inspect -> Source -> Snippet -> Create new Js file.    