const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbs = myArray.forEach( (num) => {
//          console.log(num >= 4);
// })

// console.log(newNumbs);

// forEach loop willnot return any values in a variable and we cannot store the obtained values in any other variables


// so we can use fliter method so that we can store the values in a variable
// the method is only used to check conditional values that returns true or false
// and the result is in new array form 


// const newNums = myArray.filter( (num) =>{
//     return num > 4
// } )

// const newNums = myArray.filter( (num) => num > 4 )

const newNums = myArray.filter( (num) => (num > 4) )

console.log(newNums);

// we can also write the same thing in forEach loop in a different approch

let integer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newInteger = []

integer.forEach( (num) => {
    if(num > 4 ){
        newInteger.push(num)
    }
} )

// console.log(newInteger);


