
// here we have a  method called reduce where we can do operations for the while arrayto obtain a single value 
// this returns a value and most of the time we use in shopping cart ti get total
// this takes the valus of the array and do operation in that values only 

const num = [1, 2, 3, 4]

const total = num.reduce(function (acc, value) {
    return acc+value
}, 0 )

console.log(total);


const products = [
    {
        productName: `apple`,
        productPrice: 20
    },
    {
        productName: `watermelon`,
        productPrice: 5
    },
    {
        productName: `orange`,
        productPrice: 10
    },
    {
        productName: `dragon fruit`,
        productPrice: 30
    },
    {
        productName: `kiwi`,
        productPrice: 40
    },
    {
        productName: `pinapple`,
        productPrice: 25
    }
]


// const productTotal = products.reduce( (acc, item) => (acc + item.productPrice),0 )
const productTotal = products.reduce( (acc, item) => {
    return acc + item.productPrice
},0 )

console.log(productTotal);

