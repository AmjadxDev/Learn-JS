// ES-6

/* class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeusername() {
        return `${this.userName.toUpperCase()}`
    }
}

const chai = new User("developer", 'abc@xyz.com', 123);

console.log(chai.encryptPassword());
console.log(chai.changeusername()); */

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`;
}

User.prototype.changeName = function() {
    return `${this.username.toUpperCase()}`;
}

const user1 = new User("Android", "abc@xyz.com", 123);
console.log(user1.encryptPassword());
console.log(user1.changeName());