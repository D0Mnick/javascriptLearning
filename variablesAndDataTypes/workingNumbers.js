let x;

const num = new Number (5.893);

//number count
x = num.toString();

//length of the value
x = num.toString().length;

//to decimal
x = num.toFixed(2);

//count the hall number
x = num.toPrecision(3);


//exponential
x = num.toExponential(2);

// change the # defend in locations
x = num.toLocaleString('en-US')

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x)