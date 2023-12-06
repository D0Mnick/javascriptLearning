const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul')

// loop the all the li items
// listItems.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         // targey every li
//         //and remove the dom item
//        e.target.remove();
//     })
// })

// pick the parent to delete the li
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})

// hover change the colour using mouseover
list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
})