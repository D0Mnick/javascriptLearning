(function () {
   const user = 'shigeno';
   console.log(user);

   const hello = () => console.log('Hello from IIFE');

   hello();
})();

///parameters Fucntion expressions
(function (name) {
    console.log('hello ' + name);
})('dom');


//f.e name
(function hello(age) {
    console.log('Hellosssss ' + age);
 
})(29);

