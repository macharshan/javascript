const string = `harsha`

if(string){
    // console.log(`will be executed`);
}


// falsy
// false, -0, 0, ``, bigInt 0n, null, undefined, NaN

// truthy
// `0`, `false`, ` `, [], {}, funtion(){}

const arr=[]
if(arr.length==0){
    // console.log(`string is empty`);
}

const myObj = {}

if(Object.keys(myObj).length==0){
    // console.log(`object is empty`);
}



// NUllish coalesing operator(??) null undefined

let val1;
// val1 =  5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10


console.log(val1);




// terenay operator
// (condition)?true:false

const oneGmGold = 3000

oneGmGold<2500 ? console.log(`gold price is low`) : console.log(`gold price is high`);



