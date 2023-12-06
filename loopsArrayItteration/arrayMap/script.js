const numbers = [1, 2, 3 ,4 ,5];

const doubledNumbers = numbers.map((number) => 
number * 2
)

console.log(doubledNumbers);


//Same with foreach

const doubledNumbers2 = [];

numbers.forEach((number) => {
    doubledNumbers2.push(number * 2);
})

console.log(doubledNumbers2);



const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company nine', category: 'Retail', start: 1981, end: 1989},
];

//Create an array of company name
const companyNames = companies.map((company) => company.name
)

console.log(companyNames);

//Create an array with just company and category
const companyInfo = companies.map((company) => {
    return {
        name : company.name,
        category: company.category,
    }
})
console.log(companyInfo);


//create an array of objects with the name and the length of each

const companyYears = companies.map ((company) => {
    return {
        name: company.name,
        length: company.end - company.start + 'years'
    }
})

console.log(companyYears);


//chain map methods this is arrow function
const squareAndDouble = numbers
.map ((number) => Math.sqrt(number))
.map ((sqrt) => sqrt * 2);

console.log(squareAndDouble);

// this is a function
//its ok to create another .map 
const squareAndDouble2 = numbers 
.map(function (number) {
    return Math.sqrt(number);
})

.map(function (sqrt) {
    return sqrt * 2;
})

.map (function (sqrtDoubled) {
    return sqrtDoubled * 3
})

console.log(squareAndDouble2);


//Chaining different methods
const filterAndMap = [1, 2, 3 ,4 ,5 ,6 , 7 ,8 , 9, 10]

const eveDouble = filterAndMap
.filter((number) => number % 2 === 0)

// you add a map to continue a value

.map((numberssss) => numberssss * 2)

console.log(eveDouble);