function callUsername(username){
    this.username = username
    console.log(`function called`)
}

function userDetails(username, emailId, gender){
    callUsername.call(this, username)

    this.emailId = emailId
    this.gender = gender
}

const harsha = new userDetails(`harsha`, `harsha@example.com`, `male`)

console.log(harsha);