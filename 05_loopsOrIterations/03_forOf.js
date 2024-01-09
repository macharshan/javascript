const myArray = [1, 2, 3, 4, 5, 6]

for(const value of myArray){
    // console.log(value);
}


// for maps we use the following syntax
// we cannot iterate maps 

const map = new Map()

map.set(`asap`, `as soon as possible`)
map.set(`k`, `okay`)
map.set(`cm`, `chief minister`)

// console.log(map);


// for(const val of map){
//     console.log(val);
// }


for(const [key, value] of map){
    console.log(`${key} refers to ${value}`);
}



// we cannot use for of loop for objects as they cannot be interetable 
// their is another method for iterating objects

