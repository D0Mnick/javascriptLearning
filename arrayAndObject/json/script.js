const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
}


//Convert to Json string
const str = JSON.stringify(post);

console.log(`post the ${str}`);
//if you have a json string you keep mind not try this is access
console.log(str.id);

//Parse JSON
const obj = JSON.parse(str);

//if you need to access specific property. you need to parse
 
console.log(obj.id);

const posts = [
     {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
     },
     {
        id: 2,
        title: 'Post two',
        body: 'This is the body',
     },
];

const str2 = JSON.stringify(posts);
const obj1 = JSON.parse(str2);

console.log(str2);