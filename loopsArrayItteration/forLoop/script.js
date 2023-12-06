// for ([initialExpression]; [conditionExpression] ; [incrementExpression]) statement;


// for (let i = 0; i <= 10; i ++) {
//     if (i === 7) {
//         console.log('7 is my luck numbeer');
//     }else {
//         console.log(`number ${i}`);
//     }
// }


// nested loops

// for (let i = 0; i <= 100; i++) {
//     console.log('Numbers' + i);

//     for (let j = 1; j <= 5; j++) {
//      console.log(`${i} + ${j} = ${i + j}`);
//     }
// }

// loop through an array
const names = ['Brad' , 'Sam' ,'Sarah', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {

    if (i == 0) {
    //  if (names[1] === 'john')   

        console.log(names[i] + ' is the best');
    }else {
        console.log(names[i]);
    }

   
}


const person = names.filter((name) => {
    if (name == 0) {
        //  if (names[1] === 'john')   
    
            console.log(names[name] + ' is the best');
        }else {
            console.log(names[name]);
        }
    
})

console.log(person);



// const retailCompanies = companies.filter((company) => company.category === 'Retail' );
// console.log(retailCompanies);