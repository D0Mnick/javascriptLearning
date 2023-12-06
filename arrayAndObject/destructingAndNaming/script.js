// proper object literal
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
}

console.log(person.age);


//Destructing

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Dominick'
    }
};

console.log(todo.user.name);

//renaming
const {
    id: todoId,
    title,
    user : {name}
} = todo;

console.log(todoId);


//create array numbers destructe
const numbers = [23, 67, 33, 49];

//...rest operator is to see na value 
const [first, second, ...rest] = numbers;

console.log(first, second, rest);