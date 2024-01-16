const user = {
    username : `harsha`,
    _password : `ljsldkD`,

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}

user.username = `vaish`

console.log(user.password);