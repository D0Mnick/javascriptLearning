// regular function
function add (a ,b) {
    return a + b;
}

console.log(add(5, 10));


//Regular arrow function syntax
const adds = (a , b) => {
    return a + b
}


//implicit return
const substract = (a , b) => a - b;

//can leaves of () with a single param
const double = a => a * 2;

//returning an object 
const createObj = () =>({
    name: 'Brad',

})

// looping
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n);
})

// with arrow function in a callback

numbers.forEach((n) => 
    console.log(n)
);

console.log(adds(2 ,2));
console.log(substract(10 ,20));
console.log(double(10));
console.log(createObj());