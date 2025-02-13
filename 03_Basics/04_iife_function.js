//  Immediately Invoked Function Expression ( IIFE )

(function connectDatabase() { 
    // Name iiffe because this have name
    console.log("Connect Database");
    
})(); //  semi color are important in this case

((name) => {console.log("Connect Database with arrow function"); 
})('xon');  // iife -> function use for to avoid Global scope and immediately run