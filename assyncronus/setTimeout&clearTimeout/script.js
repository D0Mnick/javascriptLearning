// setTimeout(function () {
//     console.log('Hello From callback');
// }, 2000)

// console.log('Hello From Global Scope');

// setTimeout(changeText, 2000)

function changeText() {
    document.querySelector('h1').textContent = 'Hello From Callback'
}

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled');
})