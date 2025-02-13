// Sigleton Objects

const tinderUser = new Object(); // Singleton Object
// const tinderUser = {} // non singleton Object or Object literal

tinderUser.id = 1;
tinderUser.name = "Xohan";
tinderUser.email = "abc@gmail.com";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "sum@gmail.com",
    fullName : {
        firstName : "Xohaan",
        lastName : "Shah",
        Id : {
            userName : "Xon"
        }
    }
}



// console.log(regularUser.fullName.Id["userName"]);
// console.log(regularUser["fullName"]["Id"]["userName"]);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj4 = {5:"e", 6:"f"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = {...obj1, ...obj2, ...obj4};

// console.log(obj3);

const fetchKeyObj = {
    id: 1,
    name: "Xohaan", 
    isLoggedIn: false
}

// console.log(fetchKeyObj);
// console.log(Object.keys(fetchKeyObj));// show keys only in array
// console.log(Object.values(fetchKeyObj));// show value
// console.log(Object.entries(fetchKeyObj)); // every key and value show in array [['id',1], ['name', 'xohaan']]
// console.log(fetchKeyObj.hasOwnProperty('isLoggedIn'));  // true





