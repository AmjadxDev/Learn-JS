class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`UserName is : ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`new course was added by ${this.username}`);
    }

}


const xon = new Teacher("Xohan", "abc@xyz.com", 123);

xon.addCourse();
xon.logMe();

const tea = new User("masala chai");
tea.logMe();