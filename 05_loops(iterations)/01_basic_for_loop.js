// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let i = 0; i <=10; i++) {
    const element = i;
    // console.log(i);
}

for(let i = 0; i<=10; i++){
    // console.log(`${i} table`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`${i} X ${j} = ${i*j}`);
    }
}

for(let i = 0; i <= 31; i++){
    if(i == 29){
        // console.log(`its 29, \nyour birthday!\nhappy Birthday`);
        break;
    }
    // console.log(i);
}

for(let i = 0; i <= 31; i++){
    if(i == 29){
        // console.log(`its 29, \nyour birthday!\nhappy Birthday`);
        continue;
    }
    // console.log(i);
}



const myArray = [`anand kumar`, `padma`, `priyanka`, `vaishnavi`]

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}