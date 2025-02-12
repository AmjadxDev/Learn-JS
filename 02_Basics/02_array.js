// advance array

// const marvelHero = ["thor", "iron man", "spiderman"]
// const dcHero = ["superman", "spalash", "batman"]

// marvelHero.push(dcHero); // it put array inside array ["thor",'ironman, ["superman", "splash"]]

// const allHeros = marvelHero.concat(dcHero) // but this return an array this can merge

// const allHeros = [...marvelHero, ...dcHero] // spread operation

// const arrNum = [1,2,3,[4,5,6], 7, [8,9,[10,11]]];

// const flatArr = arrNum.flat(Infinity)  // flat(1) here we pass depth 
// console.log(flatArr);

//  console.log(Array.isArray("Hello")); // false
//  console.log(Array.from("Hello")); // convert into array ['H','e','l','l','o']
//  console.log(Array.from({name : "Hi"})); // [] cannot convert direct we need to tell it
//  console.log(Array.from({name : "Hi"})); 
 
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // [100, 200, 300] this can make array from multiple variables





