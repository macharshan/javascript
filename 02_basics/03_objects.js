// we have two typws of object decleration
// singleton will be created when we create using a constructor
// Object.create()

// another one is literal method

let mySym = Symbol(`harsh`)

const myObj = {
    name: `harsha`,
    "full name": `harsha vardhan macharla`,
    age: 21,
    email: `harshavardhan2906@gmail.com`,
    isLoggedIn: false,
    [mySym]: 'macharshan',
    symb: [mySym]
}

// console.log(myObj)

// most of the time we will call objects by dot 

// we can also do

// console.log(myObj.email)
// console.log(myObj["full name"])
// console.log(typeof myObj[mySym])

myObj.email = `harshavardhan@hotmail.com`

// we can also lock the changes in a object using freeze prototype
// Object.freeze(myObj)

myObj.email = `macharshan@yahoodotcom`

console.log(myObj)

// we can also greet a function in our object

myObj.greeting = function(){
    console.log(`hello world`);
}

myObj.greetingtwo = function(){
    console.log(`hey!, here is my email ${this.email}`);
}

// this id used to refer the same variable

console.log(myObj.greeting())
console.log(myObj.greetingtwo())

// console.log(myObj)