const numbers = [1, 2, 3 ,4 ,5, 6, 7, 8, 9, 10 ]

const sum = numbers.reduce(function (shi , geno) {
    return shi + geno;
} , + 3);

console.log(sum);



// short code arrow function
const sum2 = numbers.reduce((acc, cur) => acc + cur, 10);

console.log(sum2);

// const sum4 = numbers.reduce((acc, cur) => {
//     return acc + cur
// }, + 5)
// console.log(sum4);


//using a for loop

const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
};

console.log(sum3());


// eccomerce add a amount using reduce

const cart = [
    {
        id: 1, name: 'Product 1', price: 130
    },
    {
        id: 2, name: 'Product 2', price: 150
    },
    {
        id: 3, name: 'Product 1', price: 175
    },
]


const total = cart.reduce(function (accs, product) {
    return accs + product.price
},  0);
console.log(total);