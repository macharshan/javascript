// const user = new Object() //this is a constructor method and it will create singleton

const user = {}

// we can add elements in a objrct by
user.id = 1234
user.name = `rock`
user.email = `rock@gmail.com`

// console.log(user)

const regularuser = {
    email: `matax@gmail.com`,
    fullname: {
        username: {
            firstname: `harsha`,
            middlename: `vardhan`
        }
    }
}

// console.log(regularuser.fullname.username.firstname);

const obj1 = {1: `a`, 2: `b`}
const obj2 = {3: `a`, 4: `b`}
const obj4 = {5: `a`, 6: `b`}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2); //combines the objects
const obj3 = {...obj1, ...obj2, ...obj4}  // spread method

// console.log(obj3);

// we'll get arrays of object from DB most of the time

const data =[
    {
        email:`harsha@gmail.com`
    },
    {

    },
    {

    }
]

// console.log(data[0].email)

// we can also take the values of keys and objects from the object 
// return tyoe will be in array form

// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user).length);


// console.log(user.hasOwnProperty(`email`));


const phone1 = {
    phoneName: `oneplus`,
    ram: `8gb`,
    storage:`128gb`
}

// phone1.phoneName
const {phoneName: myPhone} = phone1 //object de_structuring

console.log(myPhone);



// json format
{
    "name": "harsha",
    "email": "harsha@gmail.com",
    "gender": "male"
}

[
    {},
    {},
    {}
]
