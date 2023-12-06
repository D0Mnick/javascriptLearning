const x = 100;

if (true) {
    const y = 200;

    console.log(x + y);
}

//belong at this block
// console.log(x + y);

// looping

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//var let and const
// var is global
// let is not a global and const

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;

    console.log(a , b);
}

console.log(c);


function run() {
    var d = 1000;

    console.log(d);
}
run()

console.log(d);