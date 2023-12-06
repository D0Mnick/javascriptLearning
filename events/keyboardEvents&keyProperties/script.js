const itemInput = document.getElementById('item-input');

// every hit the key on keyboard show the key press
const onKeyPress = (e) => {
    console.log('keypress');
};

// hold the key and release in the keyup is show
const onKeyUp = (e) => {
    console.log('keyup');
};

//keydown is if you hold the leeter it is continue counting
// const onKeyDown = (e) => {
//     console.log('keydown');
// };


const onKeyDown = (e) => {
   //key
   //to replace the text in h1
   document.querySelector('h1').innerText = e.key;

//    blocking to cotinue
   if(e.key === 'Enter') {
    alert('you pressed enter')
   }

   //keyCode
//    actual number keycode
  https://www.toptal.com/developers/keycode/table-of-all-keycodes
     if (e.keycode === 13) {
        alert ('You pressed enter')
     }

   //code
//    console.log(e.code);
//    is to hit the letter or digits

if (e.code === 'Digit1') {
    console.log('You Presses 1');
}

if (e.repeat) {
    // it is true if you holding a key
    console.log('You are holding down' + e.key);
}

//if you shiftkey is true
//if you not shift and key is false
console.log('Shift:' + e.shiftKey);
// same thing crtl and alt
console.log('Control' + e.ctrlKey);
console.log('Alt' + e.altKey);

// if you hit the shift and k 
if (e.shiftKey && e.key === "K") {
    console.log('You hit shift + K');
}
};

324


itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
