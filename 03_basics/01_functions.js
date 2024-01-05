const myName = function(){
    console.log(`macharshan`);
}

// myName()

const add = function addition(number1 = 0, number2 = 0){
    return (number1+number2);
}


// console.log(add());

const result = add(5, 7)
// console.log(result);

function user(username){
    if(!username){
        return`please enter user name`
    }
    return `hello ${username}`
}

// console.log(user(`harsha`));



// ... is known as rest operator and spread operator
function calculateCartPrice(...num){
    return num
}


// console.log(calculateCartPrice(200, 400, 700, 1499))

const userDetails = {
    username: `harsha vardhan`,
    age: 21,
    gender: `male`
}

function usercheckDetails(details){
    return `your name is ${details.username}, gender is ${details.gender} followed by age is ${details.age}`
}

// console.log(usercheckDetails(userDetails));


function printSecondNum(arrayvalues){
    return arrayvalues[1]
}

const arr = [600, 80, 45, 77]

console.log(printSecondNum(arr));

