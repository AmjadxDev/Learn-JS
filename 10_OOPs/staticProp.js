class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }

    static createId() {
       console.log(`123`);
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}


const xon = new User("Xon");
User.createId();
const iphone = new Teacher('iphone', 'abc@xyz.com');
iphone.logMe();
