const details = {
    name: `harsha`,
    gender: `male`,
    greetings: function(){
        console.log(`hello ${this.name}`);
        // console.log(details);
    }
    // this will be refered to the scope and gives access to access the values 
}

// details.greetings()
// details.name = `vardhan`
// details.greetings()


// console.log(this)
// will return an empty object
// wheras on web console we'll get windows as global object


// function vaish(){
//     let name = `vaishnavi`
//     console.log(this.name);
// }

// vaish()


// const vaish = function () {
//     let name = `vaishnavi`
//     console.log(this.name);
// }

// vaish()

// const vaish = () => {
//     let name = `vaishnavi`
//     console.log(this);
// }

// vaish()

// const addtwo = (n1, n2) =>{
//     return n1+n2
// } 

// console.log(addtwo(3, 6))


// const addtwo = (n1, n2) => n1+n2

const addtwo = (n1, n2) => (n1+n2) 

// console.log(addtwo(3, 9))

// while returning object ww'll access by following

const personInfo = () => ({name:`harsha`,
    age: 21,
    gender: `male`
    })

console.log(personInfo());