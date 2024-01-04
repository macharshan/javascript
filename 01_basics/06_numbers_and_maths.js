const age = 21
// console.log(age);

// we can also define numbers is a object format

const percentage = new Number(100)
// console.log(percentage);

// console.log(percentage.toString().length);
// number can be converted to a string and all the properties of string can be accessed by the number

// console.log(percentage.toFixed(2));
// it is used to maintain a const length after the decimal point in a num
// but it should contain a value

const randNum = 532.5566
// console.log(randNum.toPrecision(3));
// precision will give the prioity to the before decimal numbers and the exceeding value will be considered as exp

const income = 442000
// console.log(income.toLocaleString(`en-IN`));
// to locale string will give the readability of a number seperating with commas

// ---------------------------------------------------------------------------------------


// math
// console.log(Math)
// console.log(Math.abs(-11)) //abs will give the absolute values(- to +)
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(2,9,5,7))
// console.log(Math.max(2,9,0,5,7))
// console.log(Math.random()) // always gives calues between 0 and 1 

// so choosing a number can be done 

// console.log(Math.floor(Math.random()*rangeOfNum)+1(to avoid 0))
console.log(Math.floor(Math.random()*10)+1)

// for min and max values 


const min = 25
const max = 50

console.log(Math.floor((Math.random()*(max-min)+1) + min))
