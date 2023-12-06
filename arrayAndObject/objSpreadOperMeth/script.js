let x;

const todo = new Object();

//todo object
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

console.log(x);

const person = {
    address: {
        coords: {
            lat:42.9384,
            lng: -71.3232,
        },
    },
};

x = person.address.coords.lat;

console.log(x);

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

// spread operator
const obj3 = {...obj1,...obj2}

// same ouptput spread operator
const obj4 = Object.assign({}, obj1, obj2)

x= obj3;

console.log(x);

// array and object
const todos = [
    {
        id:1, name: 'Buy Milk'
    },
    {
        id:2, name: 'Pick up KIDS from school'
    },
    {
        id:3, name: 'Take out Trash'
    }
]

x = todos[1].name;

console.log(x);


//all of the key of object . 
x = Object.keys(todo);

console.log(`all of the key ${x}`);

// get the length of the todo is using key
x = Object.keys(todo).length;

console.log(`get the length of the todo is using key ${x}`);

// use Object.values
x = Object.values(todo)

console.log(`object values ${x}`);

// to see array 
x = Object.entries(todo);

console.log(`to see array ${x}`);

// true or false if we have a properly is true if not false
x = todo.hasOwnProperty('name');

console.log(x);