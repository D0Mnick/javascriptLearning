//default parameters
function registerUser(user = 'Bot') {
//    if (!user) {
//     user = 'Bot';
//    }

    return  user + ' is registered'
    //user in not available outside in the function
}

console.log(registerUser());
//arguments



//Rest Params or spread operator
function sum(...numbers) {
    return numbers;
}
console.log(sum(1,2,3,4,5));


//Rest Params or spread operator
function sum(...numbers) {
    //function scope array called numbers
    return numbers;
}
console.log(sum(1,2,3,4,5));


//looping 
//unlimited numbers use using rest operator
function sum(...numbers) {
    let total = 5;

    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6));


// object as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is login`;
}

const user = {
    id:1,
    name: 'John'
}

console.log(loginUser(user));

// 2nd Options
console.log(loginUser({
    id:2,
    name: 'dominick'
}));


//array as params
// WE CAN USE REST OPERATOR TO PARAMS
// AND  ARGUMENTS YOU CAN REMOVE THE ARRAY 
function getRandom(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
     
    const item = arr[randomIndex];
    console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
