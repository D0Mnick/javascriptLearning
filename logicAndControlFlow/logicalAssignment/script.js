// || = assigns the right side value only if the left is a falsy value.

// null - a special value that represents an empty or unknown value.

// undefined = A variable that has not been assigned a value is of type undefined;

let a = false;

if (!a) {
    a = 10;
}

a = a || 10;

a ||= 10;

console.log(a);

// && = assigns the right side value only if the left is thruty value.

let b = 10;

if (b) {
    b = 20;
}
// same the if statement output

b = b && 20;

// assignment operator same ouput
b &&= 20;

console.log(b);

// ?? assigns the right side value only if the left is null or undefined.
let c = null;

if (c === null || c === undefined) {
    c = 20;
}

// short code same output
c = c ?? 200;

console.log(c);
