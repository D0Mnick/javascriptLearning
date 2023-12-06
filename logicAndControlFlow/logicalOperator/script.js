//double && if all true equivalent is true
console.log(10 < 20 && 30 > 15 && 40 > 30);

//if you want || if one is false the answer is true
console.log(10 > 20 || 30 > 15);

//&& - Will return first falsy value or the last value

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);


//if you use posts.length > 0 && console.log(posts[0])
//you remove a undifine. if not use you see undifine

const posts = ['thank you' , 'Very muuch']

posts.length > 0 && console.log(posts[1]);

// || - will return the first truhty value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - return the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 220;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);