const coding =[`java`, `python`, `html`, `javascript`, `css`, `cpp`]


// forEach is a prototype of arrays and it takes function as input
// coding.forEach(function (value) {
//     console.log(value);
// })

// coding.forEach((value)=>{
//     console.log(value);
// })


// we can also give a reference of a function to the For Each loop

function printMe(items){
    // console.log(items);
}

// coding.forEach(printMe);

coding.forEach( (item, index, arr)=>{
    // console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName: `java`,
        languageFileType: `java`
    },
    {
        languageName: `pyhton`,
        langurageFileType: `py`
    },
    {
        languageName: `javascript`,
        languageFileType: `js`
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
})


