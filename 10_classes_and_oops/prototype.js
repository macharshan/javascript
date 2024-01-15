let myName = "harsha vardhan       "

String.prototype.trueLength = function(){
    console.log(`${this.trim().length}`);
}

myName.trueLength()
"harsha".trueLength()
"vardhan".trueLength()


const myArray = [1,2,3,5,6,7,8]


let hero = {
    ironman: `fly`,
    thor: ` hammer`,
    hawkeye: `bow and arrow`
}

Object.prototype.vardhan = function(){
    // console.log(`node environment destroyed`)
}

hero.vardhan()
// myArray.vardhan()

Array.prototype.harsha = function(){
    console.log(`hello I'm harsha`);
}

// myArray.harsha()
// hero.harsha()


// inhritance
const user = {
    name : `harsha`,
    email : `harsha@example.com`
}
const teacher = {
    makevideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : `js assgnment`,
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user


// new approch(mordern Syntax)

Object.setPrototypeOf(teachingSupport, teacher)
