const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];


// to find syntax
// console.log(socials.__proto__);

// foreach is a callback function

// this is function
socials.forEach(function (item) {
    console.log(item);
})


// arrow function

socials.forEach((item) =>{
    console.log(item);
})




socials.forEach((item, index, arr ) => {

    console.log(`${index} - ${item}`, arr);
})


// anonymous callback
function logSocials(socials) {
    console.log(socials);
}

// socials.forEach(logSocials);


// objects
const socialsObj = [
    {
        name: 'Twitter', url: 'https://twitter.com'
    },
    {
        name: 'Facebook', url: 'https://Facebook.com'
    },
    {
        name: 'LinkedIn', url: 'https://LinkedIn.com'
    },
    {
        name: 'Instagram', url: 'https://Instagram.com'
    },
];

// to access the object name or url use .
socialsObj.forEach((item) => console.log(item.name));