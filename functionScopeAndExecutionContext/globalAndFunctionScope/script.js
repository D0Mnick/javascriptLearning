// alert('hello');
// console.log(innerWidth);

//global scope
const x = 100;

console.log(x , 'in Global');

function run () {

    console.log(window.innerHeight);
    console.log(x, 'In function');
}

run ();

if (true) {
    console.log(x, 'Block');
}


//function is own scope
//variable is inside the function cant read in the outside
function add () {
    const x = 55;
    const y = 50;
    console.log(y + x);
}

//we can try to acces the outside is not fine
// console.log(y);
add();