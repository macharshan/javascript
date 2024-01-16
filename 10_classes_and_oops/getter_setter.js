class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toLowerCase()
    }
}


const harsha = new user(`harsha`, `h@example.com`, `abcd`)

console.log(harsha.password);