const form = document.getElementById('item-form')

// 1st option
function onSubmit (e) {
    e.preventDefault();
    console.log('submit');

    // value pwede kung saan mo poydi ilagay sa const or sa console
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    // validation
    if (item === '' || priority === '0') {
        alert ('Please fill in all fields');
        return;
    }
    console.log(item, priority);
}

//second option
function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const item = formData.get('item')
    const priority = formData.get('priority')

    console.log(item , priority);

}

// option 3
function onSubmit3(e) { 
    e.preventDefault();

    const formData = new FormData(form);

    const entries = formData.entries();


    for (let entry of entries) {
        console.log(entry[1]);
    }
}

form.addEventListener('submit', onSubmit3);
