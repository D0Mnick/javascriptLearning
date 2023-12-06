// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello World';
// }

//load is load a image content is wait of load page
window.addEventListener ('load' , () =>
(console.log('Page Loaded')));

// DOMContentLoaded run as soon as parse 
window.addEventListener('DOMContentLoaded' , 
() => (console.log('DOMLoaded')));

console.log('run me');

document.querySelector('h1').innerText = 'Hello World'

// resize the h1
window.addEventListener('resize' , () => {
    document.querySelector('h1').innerText = 
    `Resized to ${window.innerWidth} x ${window.innerHeight}`;
})

// scroll x and y
window.addEventListener('scroll' , ()=> {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    if (window.scrollY > 70) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});


// change the color of Text using focus in blur
window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'green';
      
    })
})


window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'black';

    })
})