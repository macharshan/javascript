
let myArr = [ 0, 1, 2, 3, 4, 5, 6]

const myArr1= [`harsha`, `vardhan`, `macharla`]

let myNewArr = new Array(1, 2, 3, 4, )

// console.log(myArr)

myArr.push(7)
myArr.push(8)
// console.log(myArr)

myArr.pop()
// console.log(myArr)

myArr.unshift(5)
// console.log(myArr)

myArr.shift()
// console.log(myArr)


console.log(myArr.includes(5))
console.log(myArr.indexOf(7))

let newArr = myArr.join()  //returns string type and joins the array

console.log(newArr)

// slice
// dosn't include last element and will not change the original array

let mynewArr = myArr.slice(1,4)

console.log(myArr)
console.log(mynewArr)

//splice
// will include last element and will also change original array

let mynewArr2 = myArr.splice(1,4)

console.log(myArr)
console.log(mynewArr2)

