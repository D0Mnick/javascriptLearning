// you can use a varialble
const promise = new Promise((resolve, reject) => {
    //DO SOME ASSYNC TASK
    setTimeout(() => {
        console.log('Async  task complete');
        resolve();
    }, 1000)
});

// promise.then(() => {
//     console.log('Promise consumed..');
// })


// or you promise itselft
// new Promise((resolve, reject) => {
//     //DO SOME ASSYNC TASK
//     setTimeout(() => {
//         resolve({name: 'John', age:30});
//     }, 1000)
// }).then((user) => {
//     console.log(user);
// })


// haddle errors
const getUser = new Promise((resolve, reject) => {
    //DO SOME ASSYNC TASK
    setTimeout(() => {
        let error = false;

        if(!error) {
            resolve({name: 'dominick', age:29});
        }else{
            reject('Error: Something went wrong')
        }
        
    }, 1000)
})
getUser.then((user) => console.log(user))
    .catch((error) => console.log(error))
    .finally(() => console.log('the promise has been resolved or rejected'))



// globe scope
console.log('hello from a global scope');