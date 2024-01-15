function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function is a function and also a function object

function createUser (username , score){
    this.username = username 
    this.score = score
}

createUser.prototype.increment = function (){
    console.log(this.score++)
}

createUser.prototype.printMe = function(){
    console.log(`prise is :${this.score}`);
}

const apple = new createUser(`apple`, 25)
const banana = new createUser(`banana`, 20)

apple.printMe()
banana.printMe()


