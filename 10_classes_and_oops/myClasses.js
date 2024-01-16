class createUser{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    logMe(){
        console.log(`${this.username} is logged in`)
    }

    static encryptPassword(){
        return `${this.password}abc`
    }
}


const harsha = new createUser(`harsha`, `harsha@example.com`, `123`)

console.log(harsha)
harsha.logMe()
console.log(harsha.encryptPassword())




// behind the scene

// function createUser(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// createUser.prototype.logMe = function(){
//     console.log(`${this.username} is logged in`);
// }

// createUser.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }


// const harsha = new createUser(`harsha`, `harsha@example.com`, `123`)

// console.log(harsha)
// harsha.logMe()
// console.log(harsha.encryptPassword())