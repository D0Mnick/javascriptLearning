const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
    e.preventDefault();

    alert('Button was Clicked')
    console.log(button);
   
});

div.addEventListener('click', (e) => {
    alert('Div was clicked');
    e.stopPropagation()
});

form.addEventListener('click', () => {
    alert('Form was Clicked')
})

document.body.addEventListener('click' , () => {
    alert('Body was Clicked')
})