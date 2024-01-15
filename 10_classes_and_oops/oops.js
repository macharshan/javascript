const userDetails = {
    username : `harsha`,
    logincount: 4,
    signedIn: true, 
    getUserDetails: function(){
        // console.log(`got user details`)
        // console.log(`${this.username}`)
        // this will refer to the current context 
        console.log(this)
    }
}

// console.log(userDetails)
// console.log(userDetails.getUserDetails())




// constructor function(new is a constructor function)
// this will create new instance of the code 

// const promiseOne = new Promise()
// const data = new Date()


function user(name, loginCount, isActive){
    this.name = name
    this.loginCount = loginCount
    this.isActive = isActive
    
    // return this
}

const userOne = new user(`harsha`, 12, true)
const usertwo = new user(`vardhan`, 20, false)



console.log(userOne);
console.log(usertwo);
