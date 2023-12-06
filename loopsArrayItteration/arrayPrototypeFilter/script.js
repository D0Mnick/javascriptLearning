const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// function
const evenNumbers = numbers .filter(function (number) {
return number % 2 === 0;
})
console.log(evenNumbers);

// short version code arrow function
const evenNumberss = numbers.filter((number) =>  number % 2 ===0);

console.log(evenNumberss);

// same with foreach output
const evenNumbersss = [];

numbers.forEach((number) => {
    if (number % 2 === 0) {
        evenNumbersss.push(number);
    }
})

console.log(evenNumbersss);


//filter use = to search to interfaces a search box

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

//Get only retail companies
const retailCompanies = companies.filter((company) => company.category === 'Retail' );
console.log(retailCompanies);

//Get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter (
    (company) => {
        return company.start >= 1980  && company.end <= 2005
    } 
);

console.log(earlyCompanies);

//Get companies that Lasted 10 years or more
const longCompanies = companies.filter (
    (company) => {
        return (company.end - company.start >= 10 )
    } 
)

console.log(longCompanies);