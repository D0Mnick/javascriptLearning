// const email = 'test@test.com'

// if (email) {
//     console.log('You passed in an email');
// }

// console.log(Boolean(email));


// Falsy Values:
// -false
// -0
// -"" or '' (Empty string)
// - undefined
// -NaN


/////////////////////////////////////////////

// Truth Values:
// -Everything else that is not falsy
// -true
// -'0' (0 in a string)
// -'false' (false in a string)
// -[] (empty array)
// -{} (empty object)
// -function () {} (empty function)



const x = false;


if (x) {
    console.log('This is truthy');
}else {
    console.log('This is falsy');
}

console.log(Boolean(x));




//Truthy and falsy caveats
const children = 1;

// if(!isNaN(children)){

// }

if (children !== undefined) {
    console.log(`You have ${children} children`);
}else {
    console.log('Please enter number of children');
}

//checking for empty arrays
const posts = ['kobe', 'shigeno'];


if (posts.length > 0) {
    console.log(`List Posts ${posts} `);
}else {
    console.log('No Posts');
}

console.log(posts);

//checking for empty object
const user = {
    name: 'red'
};

if (Object.keys(user).length > 0) {
    console.log('List User');
}else {
    console.log('No User');
}

console.log(user);

//Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);