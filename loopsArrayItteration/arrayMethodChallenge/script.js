//challenge 1

const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];



  

const youngPeople = people.filter ((person) => {
   return person.age <= 25
})
.map ((person) => ({
    name: person.firstName + ' ' + person.lastName,
    email: person.email,
}));
   
console.log(youngPeople);



//2nd challenge 

// to switch to positive number
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.map((number) => {
    return Math.abs(number)
})

console.log(positiveSum);


//get the negative numbers
var myArray = [4, -5, 0, 2, -67, 8, 10, -34 ];

const negativeNum = myArray.filter ((array) => {
    return array < 0
})

console.log(negativeNum);


// get a postive number
const numbers1 = [2, -30, 50, 20, -12, -9, 7];
const getPositive = numbers1.filter ((positive) => {
    return positive > 0
})
.reduce ((acc , cur) => {
      return acc + cur
},0)

console.log(getPositive);


// challenge 3
// capitalize first letter straing 

const words = ['coder', 'programmer', 'developer'];

// const capitalizeWords  = words.map( word => word.charAt(0).toUpperCase() + word.slice(1) );

// console.log(capitalizeWords);

const cWords = words.map((word) => {
  return word[0].toUpperCase()+ word.slice(1, word.length);
})
console.log(cWords);



objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

var result = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]

console.log(getFields);