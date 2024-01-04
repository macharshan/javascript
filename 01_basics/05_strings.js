const givenName = `Harsha vardhan`
const surname = `Macharla`

// combine string using String interpolation 

// console.log(`My given name is ${givenName} and my surname is ${surname}`);

// string can also be declared as 

const newName = new String(`harshaVardhan`)

// console.log(newName[0]);
// console.log(newName.__proto__)

// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.charAt(2));
// console.log(newName.indexOf(`v`));


const subStr = newName.substring(0, 5);
console.log(subStr);

// substring uses only positive values 

const strSlice = newName.slice(-13, 5);
console.log(strSlice);

// str slice can take negative values also

const anotherName = `                      Macharla Harsha Vardhan     `
console.log(anotherName.trim());


