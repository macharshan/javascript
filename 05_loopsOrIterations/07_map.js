// the maps are used to do operations on an array 
// this will return a new array
const num = [1, 2, 3, 4, 5, 6, 7, 8]

const newNum = num.map(function (val) {
    return val*29
} )

// console.log(newNum)

// we can also chain the methods to get the output
// in chaining the method we pass on the value to the next method with out returning

const anotherNewNum = num.map( (val) => val*29 ).map( (val) => val+1 ).filter( (val) => (val >= 100) )

console.log(anotherNewNum);

// by using this we can chain different methods as many times to obtain the desired value 