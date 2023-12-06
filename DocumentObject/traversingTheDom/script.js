let output;

const parent = document.querySelector('.parent');

// get the children property
output = parent.children;

// access the index of child
output = parent.children[1].innerText;
//classname
output = parent.children[1].className;
//div
output = parent.children[1].nodeName;

// replace the text child 2 to child two
parent.children[1].innerText = 'child Two'
parent.children[1].style.color = 'red'

// to change the 1st element
parent.firstElementChild.innerText = 'Child One'
// change the last element child
parent.lastElementChild.innerText = 'Child three'

// Get parent elements from a child
const child = document.querySelector('.child');
output = child.parentElement;

// border and padding get parent from the child
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

//siblings elements
// let grab the second item
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
// get the 3rd item
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color= 'green'

// use previous to get 1st element
secondItem.previousElementSibling.style.color= 'orange'
// dir can access all
console.log(output);