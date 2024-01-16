function user(username, password){
    this._username = username
    this._password = password

    Object.defineProperty(this, `password`, {
        get :  function(){
            return this._password.toUpperCase()
        },
        
        set : function(value){
            this._password = value
        }
    })
}

const harsha = new user(`harsha`, `jchs`)

console.log(harsha.password)