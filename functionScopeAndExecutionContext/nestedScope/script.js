// we can access the parent varialble to child
//the child cant access 

function first () {
    const x = 10;

    function second () {
        const y = 20;
        console.log(x + y);
    }
   
    second();

}
first();


if (true) {
    const x = 100;

    if(x === 100) {
        const y = 200;
        console.log(x + y);
    }
}