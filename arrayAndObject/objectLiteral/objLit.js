// name is key value is 'dominick'

let x;

const person = {
    name: 'Dominick S.',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music', 'sports']
};


//to acces the person value
x = person.name;
x = person['age'];


console.log(x);

// to access the address 

x = person.address.city;

console.log(`to access the address ${x}`);

//to acess to array
x = person.hobbies[0];

console.log(`pick up the hobbies 0 ${x}`);

//to a update a data 
person.name= 'shigeno seirins';
person['isAdmin'] = false;



// remove properly from your object
delete person.age;

// add the function as a properly
person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`)
};
person.greet();

//creating a key

x = person;

console.log(x);