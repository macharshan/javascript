class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username} is logged in`);
    }

    static createid(){
        return `${this.username}.123`
    }
}

const harsha = new user(`harsha`)

harsha.logMe()
// console.log(harsha.createid());


class teacher extends user{
    constructor(username, email, subject){
        super(username)
        this.email = email
        this.subject = subject
    }
}

const vaish = new teacher(`vaishnavi`, `vaish@example.com`, `maths`)

vaish.logMe()
// console.log(vaish.createid())
