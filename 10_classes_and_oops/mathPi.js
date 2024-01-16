const descriptor = Object.getOwnPropertyDescriptor(Math, `PI`)

// console.log(descriptor);

// console.log(Math.PI);

Math.PI = 4
// console.log(Math.PI);

const myObj = {
    name: `harsha`,
    email: `harsha@example.com`,
    gender: `male`
}


// console.log(Object.getOwnPropertyDescriptor(myObj, `name`));

Object.defineProperty(myObj, `name`, {
    writable : false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(myObj, `name`));


for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key}: ${value}`);
}

for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}


// we cannot change all the propertied of the methods present in javascript 
// but javascript will help us in defining some propeties and gives access assign value