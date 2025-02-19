let myName = "Xonny     ";

// console.log(myName.length);
// console.log(myName.trim().length);


let myHeros = ["spiderman", "ironman"]
let heroPower = {
    spiderman : "sling",
    ironman : "suit",

    getSpiderPower : () => {
        console.log(`spidy power is ${this.spiderman}`)
    }
}


/* Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`);
    
} */
// heroPower.hitesh()
// myHeros.hitesh()

Array.prototype.xon = ()=>{console.log('xon is here');
}

// myHeros.xon()
// heroPower.xon()

// inheritance

const User ={ name : "student name"}
const User2 = { teacher : "teacher", __prototype__ : User}
const User3 = { email : "abc@gmail.com",}

User3.__prototype__ = User
// this is proto type inheritance this is outdated approch.

// Modern syntax
const Teacher = {
    name : "xon"
}
const TeacherSupport = {isSupport : false}
const TAsupport = {makeAssignment : "js assignment",
    fulltime : true,
    __prototype__ : TeacherSupport
}

Object.setPrototypeOf(Teacher, TeacherSupport)

let anotherUserName = "Chaiaurcode          ";
String.prototype.trueLenght = function() {
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}


anotherUserName.trueLenght()
"  xonny    bhai  ".trueLenght()