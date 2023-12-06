//method 1

// listen in the window
// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('insert')

//     insert.innerHTML= `
//     <div class="key">
//     ${e.key === ' ' ? 'Space' : e.key}
//     <small>e.key</small>

//     </div>
//     <div class="key">
//     ${e.keyCode}
//     <small>e.keyCode</small>
//     </div>

//     <div class="key">
//     ${e.code}
//     <small>e.code</small>
//     </div>

//     `
// })

//METHOD 2
function showKeyCodes(e) {
    const insert = document.getElementById('insert');
    //'to clear the html
    insert.innerHTML = '';

    const keyCodes = {
        // if you want to work the e.key u use ''
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode' : e.keyCode,
        'e.code': e.code
        // 'e.code' is key  and e.code is a value
    }

    // console.log(key);
    // let key in keycode let pertains e.key e.keycode
    for (let key in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        // value of key
        const valueText = document.createTextNode(keyCodes[key])

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small)

        insert.appendChild(div);
    }
}

window.addEventListener('keydown', showKeyCodes); 