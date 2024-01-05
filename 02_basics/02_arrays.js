let meternal_bros = [`kalyan`, `rajesh`]

let peternal_bros = [`manikanth`, `sandeep`, `nitesh`]

// meternal_bros.push(peternal_bros)
// this will push the whole array into the exesting array
// 'Cause the araays can store any type of values in js

// console.log(meternal_bros)

let all_bros = meternal_bros.concat(peternal_bros)
// this is one of the method to combine two arrays 

// console.log(all_bros)

let all_bros2 = [...meternal_bros, ...peternal_bros]
// here we can combine multiple arrays in a single variable

// console.log(all_bros2)


// their are also aother methods to convert and ask the arrays 

console.log(Array.isArray(`harsha`));
console.log(Array.from(`harsha`));

let harsh_age = 21
let alekhya_age = 24
let vaish_age = 24

console.log(Array.of(harsh_age, alekhya_age, vaish_age));