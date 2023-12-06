// create an element like classname and Id

const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';

// you can use  to add a title= 'My Element'
div.setAttribute('title', 'My Element')

// to add a text 
// div.innerText = 'Hello World'

// another example to add a text and div
const text = document.createTextNode('Hello World');
div.appendChild(text)

// to pass the hello world in the body of webiste
document.body.appendChild(div);

// to add a ul hello world
document.querySelector('ul').appendChild(div);
div.style.border = '2px solid green'
div.style.width = '110px'
div.style.color = 'red'
div.style.textAlign= 'center'