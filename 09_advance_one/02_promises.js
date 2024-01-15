const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`DB data`);
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log(`DB Connected`);
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`DB 2 data`);
        resolve()
    }, 1000)
}).then( () => console.log(`DB 2 Connected`) )

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username : `harsha vardhan`, password : 123})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : `vardhan`, password : 123})
        } else {
            reject(`ERROR: something went wrong`)
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log(`the result is resolved or rejected`) )


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : `macharshan`, password : 123})
        } else {
            reject(`ERROR : credentials went wrong`)
        }
    }, 1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function userdata(){
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// userdata()


fetch(`https://jsonplaceholder.typicode.com/users`)
.then(function(response){
    return response.json()
}).then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error) )