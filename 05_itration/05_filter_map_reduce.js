

let languages = ['python', 'java', 'kotlin', 'c', 'javascript'];

// const values = languages.forEach( (item) => {
//     console.log(`for each values : ${item}`);
//     return item;
    
// } );
// console.log(values);  // -> return undefined

// let myNum = [1,2,3,4,5,6,7,8,9];

// const getNum = myNum.filter((item) => item % 2 ==0)

// const getNum = []
// myNum.forEach( (item) => getNum.push(item));
// console.log(getNum);

let books = [
    {title : "Gang of Four", genre : "Fiction", published : 1991, edition : 2004},
    {title : "Solid Principle", genre : "Principle", published : 1980, edition : 1995},
    {title : "OOP", genre : "Code", published : 1997, edition : 2001},
    {title : "Java", genre : "Code for android", published : 1996, edition : 1997},
    {title : "Kotlin", genre : "Code for android", published : 2012, edition : 2015},
    {title : "Python", genre : "Script language", published : 1994, edition : 1996},
]


// let userBook = books.filter(book => book.genre == "Code for android")

// console.log(userBook);
// console.log(userBook[0].title);


// let myNum = [1,2,3,4,5,6,7];

// const newNum =myNum.map((num) => num + 10)

// const newNum = myNum.map((num) => num *10).map((num) => num -1).filter((num) => num >29)
// console.log(newNum);


// Reduce 
let myNum = [10,20,30,40];

// const myTotal = myNum.reduce((acc, currentValue) =>{
//     console.log(`acc : ${acc} and currentValue : ${currentValue}`);
//      return acc + currentValue}, 0
//     );
// console.log(myTotal);


// const myTotal = myNum.reduce( (acc, currentValue) => acc+currentValue,0);
// console.log(myTotal);

const shoppingCart = [
    {itemName : "js course", price : 2999},
    {itemName : "python course", price : 999},
    {itemName : "mobile dev course", price : 5999},
    {itemName : "data science course", price : 12999}
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc+item.price,0);
console.log(`your total bill Rs:${priceToPay}/PKR`);

 





