
// normal function
//challenge 1

// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

// console.log(getCelsius(33));


// arrow function
const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log((`The temp is ${getCelsius(60)} \xB0C `));


//chalenge 2
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    // console.log(`the lowest num. is ${min}  and the highes is number ${max}`);

    return {
        min,
        max,
    }
}

console.log(minMax([1, 2, 3, 4, 5, 6])); 



//challege  iife
((length, width) => {
    const area = length * width;

    const output = `The area of a rectangle with a length of
    ${length} and a width of ${width} is ${area}.`;

    console.log(output);

})(20, 10);
