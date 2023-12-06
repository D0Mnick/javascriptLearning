let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// push berries with value '' ' ' ' '
// fruits.push(berries);

// log in the berries with value
// x = fruits[3][1];

// show all fruits and berries combination
const allFruits = [fruits, berries]

//pick the 2nd array
x = allFruits[0][0];


console.log(`pick the 2nd array ${allFruits[1][0]} `);

//concat method pinagsama
x = fruits.concat(berries)

console.log(`concat the fruits and berries ${x}`);

//spread Operator represented (...) open all
x = [...fruits, ...berries];

console.log(`using spread operator ${x}`);

//flatted arrays no more nested array
const arr = [1, 2 ,[3,4], 5 , [6 ,7], 8]
x = arr.flat();

console.log(`no more nested array ${x}`);

//static methods od array object
x = Array.isArray('Hello');

console.log(x);

x = Array.from('12345');

console.log(x);

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);


//quizz

const arr1 = [1, 2, 3, 4, 5]
x = arr1.push(6);
x = arr1.unshift(0);
x = arr1.reverse();
console.log(arr1);

//quiz2

let arr3;

const  arr2 = [1,2,3,4,5,];
const arrr2 = [5,6,7,8,9,10]

arr3 = arr2.slice(0, 4).concat(arrr2);

console.log(`solution one concat ${arr3}`);

//solution 2 

const arr4 = [...arr2, ...arrr2];
arr4.splice(4, 1);

console.log(`solution two remove a 5 ${arr4}`);