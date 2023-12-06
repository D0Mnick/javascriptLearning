//quick & dirty 
//to add ad li input to body

function createListItem(item) {
    const li = document.createElement('li');
    
    // add html code 
    li.innerHTML = `${item}`

document.querySelector('.items').appendChild(li)
}

createListItem('eggs');




// all elements add 
// clean & Performant

function createNewItem(item){
    const li = document.createElement('li');

// text node
    li.appendChild(document.createTextNode(item))
 
// add button    
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';
//add icon
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    // combine button to icon
    button.appendChild(icon);
    // li to button combine
    li.appendChild(button);

    // console.log(li.innerHTML);
    document.querySelector('.items').appendChild(li)
}

createNewItem('yolks');