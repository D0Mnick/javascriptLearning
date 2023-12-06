const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    // e.target.value to see the value of data
    console.log(e.target.value);
    // shopping list change the text
    heading.textContent = e.target.value;
}

function onCheck(e) {
  console.log(e.target.checked);
const isChecked = e.target.checked;
heading.textContent = isChecked ? 'Checked' : 'Not Checked'
}

function onFocus(e) {
  console.log('Input is Focused');
  itemInput.style.outlineSyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  // itemInput.style.outlineColor = 'green';
  itemInput.style.background = 'grey';
}

function onBlur(e) {
    console.log('input is blur');
    itemInput.style.outlineStyle = 'none';
    itemInput.style.background = 'none';
}

itemInput.addEventListener('input', onInput);
// change to gen the value of priority
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onCheck);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);