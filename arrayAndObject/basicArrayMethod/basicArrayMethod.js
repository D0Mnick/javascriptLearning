let x;

const arr = [34, 55, 95, 20, 15];

// add array 
arr.push(100);

console.log(`add another number of array ${arr}`);

//delete array
arr.pop()

console.log(` delete the last part ${arr}`);

// add array from the beggining
arr.unshift(99);

console.log(`add array number from the beggining ${arr}`);

//remove the beggining array
arr.shift();

console.log(`remove the 1st biggining ${arr}`);

//reverse array from the beggining
// arr.reverse()

//check if here in # numbert if here is true if not false
x = arr.includes(20);

console.log(`check if here the nummbers 20 is ${arr.includes(20)}`);

// array count the # if 0 1 2 3 4 
// he count 0 because we use reverse method
x = arr.indexOf(55);


//slice is to cut the array 1 - 4 is pick the 55, 95, 20 
x = arr.slice(1, 4)

console.log(x);
// splice array is to pick the # of x and show the # of 
// arr show he cant pick the # 

// x = arr.splice(1,4)

// we can use reverse method
// x = arr.splice(2,1)


//charat function with the value is string
x = arr.splice(1, 4).reverse().toString().charAt(0);
console.log(x);