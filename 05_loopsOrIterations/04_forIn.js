const myObj = {
    In : `India`,
    Ca : `Canada`,
    Usa : `united states of america`
}

for(const keys in myObj){
    // console.log(keys);
}
// we get keys or index for the object that we applied the loop
// so we can get the values by the following

for(const keys in myObj){
    // console.log(`${keys} is short-hand notation for ${myObj[keys]}`);
}


// we can also apply the loops for the arrays also but we  cannot apply for the maps method

const myArray = [1, 2, 3, 4, 5, 6, 7]

for(const keys in myArray){
    // console.log(`${keys} index consists for ${myArray[keys]}`);
}


// if we apply for in loop for the map we will not get any output

const map = new Map()

map.set(`asap`, `as soon as possible`)
map.set(`k`, `okay`)
map.set(`cm`, `chief minister`)


for(const val in map){
    console.log(val);
}


