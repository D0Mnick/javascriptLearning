function createNewItem(item){
    const li = document.createElement('li');

// text node
    li.appendChild(document.createTextNode(item))
 
// add button   
    const button  = createButton('remove-item btn-link text-red')
    // li to button combine
    li.appendChild(button);

    // console.log(li.innerHTML);
    document.querySelector('.items').appendChild(li)
}

function createButton (classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon ('fa-solid fa-xmark');
       // combine button to icon
    button.appendChild(icon);

    return button;
}

function createIcon (classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
createNewItem('yolks');
createNewItem('kick');