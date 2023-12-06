let x;


//concatenate

const name = 'John'
const age = 30;

x = 'Hello my name is ' + name + ' and I am ' + age + ' years old '

//Template Literals back tiks

x = `Hello, my name is ${name} and i am ${age} years old`

//String Properties and Methods
const s = new String ('Hello world');

x = typeof s;

x = s.length;

console.log(s);

//access value  # key
x = s[1]

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

//numbers of characters
x = s.indexOf('e')

//character start and end picking
x = s.substring(0, 4);
console.log(x);
x = s.substring(6);

console.log(x);

x = s.slice(-11, -6);

//cut the white space
x = '                                Hello World'
x = x.trim();


// replace name
x = s.replace('world' , 'Dom');

// find the string
x = s.includes('Hello')

x = s.valueOf();

x = s.split(' ');

console.log(x);



// quest string

const myString = 'developer';

let myNewString;

//solution
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString);
//solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString);
//solution 3:
myNewString = `${myString.charAt(0).toUpperCase()}${myString.slice(1)}`;
console.log(myNewString);