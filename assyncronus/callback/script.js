// function toggle(e) {
//     e.target.classList.toggle('danger')
// }

// document.querySelector('button').addEventListener('click', toggle);


// assynchronus use callback
const posts =[
    {title: 'Posts One', body: ' This is post one'},
    {title: 'Posts Two', body: ' This is post two'}
]

function createPosts(post, cb) {
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000)
}

function getPosts() {
    setTimeout(() =>{
        posts.forEach(function(post) {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        });
    },1000)
}

createPosts({title: 'Post Three', body: 'This is post Three'}, getPosts);

