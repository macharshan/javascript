// Primitive datatype

// 7 Types: String, Number,  Boolean, null, undefined, Symbol, Bigint

const myString = `macharshan`;
const myNumber = 123456;
let isLoggedIn = false;
let temp = null;
let userMail;
let mySymbol = Symbol(`123`);

console.table([myString, myNumber, isLoggedIn, temp, userMail, mySymbol]);


// Non-Primitive (Reference type)
// array, object, function

let myarray = [`harsha`, `vardhan`, `macharla`];

let myObj = {
    firstName: `Harsha`,
    middleName: `vardhan`,
    lastName: `macharla`
}

let myFunction = function func(){
    console.log(`hello world`);
}


console.table([myarray, myObj]);

myFunction();