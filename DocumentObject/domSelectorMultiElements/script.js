//querySelectorAll()

const listItems = document.querySelectorAll('#item-list');

// to see the text pick
console.log(listItems[1].innerText);

listItems[0].style.color = ('green')

// foreach select all item to color red or any color

listItems.forEach((item, index) => {
    item.style.color = 'red';
    //item remove
    if (index === 3) {
      item.remove();
    }
    // change the text to item 0
    if (index === 0) {
        item.innerHTML = ` <ul id="item-list" class="items">
        <li>
          apple
        </li>
      </ul>`
    }
})


// get elements by class

const listItems2 = document.getElementsByClassName('items');

console.log(listItems2[2].innerText);



// foreach is not a html collection 
//is not a function
// array from to coverted to array
//is working to to use Array.from

const listItems2Array = Array.from(listItems2);

listItems2Array.forEach((item) => {
    console.log(item.innerText);
});


// tagname 
const listItems3 = document.getElementsByTagName('li');
// cant access specific think
console.log(listItems3[0].innerText);