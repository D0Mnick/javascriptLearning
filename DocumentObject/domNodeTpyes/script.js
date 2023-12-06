let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

// access the child 1
output = parent.childNodes[3].innerText = 'Child one';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';


//parent node from the child
const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

// add background color and padding to parentNode
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

//siblings
const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem.nextSibling;

output = secondItem.previousSibling;

console.log(output);