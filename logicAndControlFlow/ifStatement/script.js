if (true) {
   console.log('This is true');
}

if (false) {
    console.log('This is not True');
}

const x = 10;
const y = 5;

if (x >= y) {
    console.log(`${x} is greater than or equal ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y} `);
}else {
    console.log(`${x} is not equal to ${y} `);
}

//own scope if statement
if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
}

//shorthand if

if (x >= y) 
    console.log(`${x} is equal to ${y} `);
else console.log('this false');
