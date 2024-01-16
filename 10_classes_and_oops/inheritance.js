class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} is logged in`);
    }
}

class teacher extends user{
    constructor(username, subject, email){
        super(username)
        this.subject = subject
        this.email = email
    }

    addcourse(){
        console.log(`${this.username} added new course`);
    }
}

const vaish = new teacher(`vaishnavi`,`maths`, `vaish@example.com`)

vaish.logMe()
vaish.addcourse()


const harsha = new user(`harsha`)
harsha.logMe()
// harsha.addcourse()

console.log(vaish === user)