//Document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title') .id);
console.log(document.getElementById('app-title').className);

console.log(document.getElementById('app-title').getAttribute ('id'));

// set attribute to grab the elements 
//to change the id
// document.getElementById('app-title').id = 'new-id';
document.getElementById('app-title').title = 'Shopping List';


// to add class title 
document.getElementById('app-title').setAttribute ('class', 'title');

//selector more than ounce
const title = document.getElementById('app-title');

console.log(title);


// get to change or add the content
console.log(title.textContent);
title.textContent = 'title';
title.innerText = 'Hello Again'
title.innerHTML = '<strong>Shopping List</strong>';

 
// change color
title.style.color = 'red'

//to background color
title.style.backgroundColor = 'black'

//padding
title.style.padding = '10px'

// border radius
title.style.borderRadius = '10px'

// width style
title.style.width = '200px'




//document.querySelector() 
//select if the are not class or id

console.log(document.querySelector('h1'));


// select a id in query selector()
console.log(document.querySelector('#app-title'));

//select a class
console.log(document.querySelector('.list'));

//  pick the item and  li
console.log(document.querySelector('li:nth-child(1)'). innerText);

// change the html text to javascript text
const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText = ('orange apple juice');
secondItem.style.color = ('red');
secondItem.style.width = ('120px')

//use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue'