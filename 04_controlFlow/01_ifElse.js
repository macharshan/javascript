// Control flow is used to control the flow of the progeam by giviving the conditions and making them to be execited ata a perticular time 

// sample
// if (condition) {
    
// }

if(true){
    //  the code will be executed
}

if(false){
    // the code will be never get executed
}

// we cannot directily declare true and false 
// so we need to perform some operationslike
//  <, >, <=, >=, ==, !=, (===, !==)these are  strict check where it not only checks the values but also checks the datatype

if(2==2){
    // console.log(`this will be executed `);
}

if(3!=4){
    // console.log(`this will also get executed `);
}

// for otherwise situation we also have
// let name=`harsha`
const name = ``

if(name!=0){
    // console.log(`hello  ${name}`);
}else{
    // console.log(`name is not given`);
}


// for checking various conditions we use nested if elseif 
let score = 60

// if(score<=45){
//     console.log(`just pass`);
// }else if(score<=50){
//     console.log(`just pass 3rd class`);
// }else if(score<=75){
//     console.log(`2nd class`);
// }else if(score<=100){
//     console.log(`1st class`);
// }else {
//     console.log(`enter correct percentage`);
// }


// we can also chech multiple valus in the condition using and, or gates 
const isUserLoggedIn = true
const userEmail = true


if(isUserLoggedIn && userEmail){
    console.log(`user is logged in and has email`)
}else{
    console.log(`user is either not logged in or don't have email`);
}

const gMail = true
const email = true
if (email || gMail){
    console.log(`user is logged in with either email or gmail`);
}
