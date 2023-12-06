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
// multiple assynchronus operation 
getUser.then((user) => {
    console.log(user);
    return user.name;
    })
    .then((name) => {
        console.log(name);
        return name.length;
    })
    .then((nameLength) => {
       console.log(nameLength);
    })
    .catch((error) => {
        console.log(error)
        return 123;
     })  
    .then((x) => {
        console.log('This wi run no matter what', x)
    })
   