const age = 13;

//using an if statement

if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('You can not vote');
}

// one line using ternary operator

age >= 18 ? console.log('You can vote!') : console.log('You cant vote');;

//Assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote1 = age >= 18 ? 'You can vote' : 'you cant vote';

console.log(canVote);
console.log(canVote1);


//multiple statements

const auth = true;
// let redirect;

// if (auth) {
//     alert('Welcome to the dashboard');
//     redirect = '/dashboard';
// }else {
//     alert('Access Denied');
//     redirect = '/login';
// }

// ternary operator
const redirect = auth ? (alert('Welcome to dashboard'), '/dashboard') : (alert('Access denied'), '/login');

console.log(redirect);


auth ? console.log('Welcome to the dashboard') : undefined;

auth && console.log('Welcome to the dashboard');

