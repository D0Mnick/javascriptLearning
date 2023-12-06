//when you run any javaScript, a special enviroment
// is created to handle the transformation & execution of code 
// this is called the execution context . it contains the
// currently running code and everything that aids in its 
// execution. 

// there is a global execution context as well as a fucntion execution 
// context for every function invoked


const x = 100;
const y = 50;

function getSum(n1, n2) {
    const sum = n1 + n2;
    console.log(sum);
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1 , sum2);

//pause debugger go to source in click the line and refresh to see every function