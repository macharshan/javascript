let score = "33" 

// console.log(typeof score);
// console.log(typeof(score));

let newNumber = Number(score);
// console.log(typeof newNumber);


// `33` => 33
// `33abc` => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false 
// "" => false
// "harsha" => true

let ranNum = 55

let numberInString = String(ranNum);
// console.log(numberInString);
// console.log(typeof numberInString);


// ************************ (Operations) **********************

// console.log(1 + `2`);
// console.log(`1` + 2);
// console.log(1 + 1 +`2`);
// console.log(`1` + 1 + 2);

// whenever a string appears in à conversion then the remaining part of the conversion will be in string 
// all elements before string will be added if its a number 

// console.log(+true);
// console.log(+"");

let gameCounter = 100
++gameCounter;
console.log(gameCounter);