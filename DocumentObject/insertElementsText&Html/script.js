// insertAdjacentElement Example
function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    // insert a text and click a class before you insert an Element
    filter.insertAdjacentElement('beforebegin', h1)
}

// insertAdjacentText Example
function insertText() {
    const item = document.querySelector('li:first-child');

     item.insertAdjacentText('beforebegin', 'insertadjacentText')
}

// insertAdjacentHTml Example
function insertHTML () {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('afterend', '<h2>insert clear</h2>')
}


// insertBefore Example
function insertBefore(){
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'kobe shigeno tetsu';

    const thirdItem = document.querySelector('li:nth-child(5)');

    ul.insertBefore(li, thirdItem)
}



insertElement();
insertText();
insertHTML();
insertBefore();

// beforebegin
// <p>
//     afterbegin
//     foo
//     beforeend
// </p>
// afterend    