// status is a nested object

//step 1
const library  = [
    {
        title : 'The Road Ahead',
        author :  'Bill Gates',
        status : {
            own: true,
            reading: false,
            read: false
        }
    },

    {
        title : 'Steve Jobs',
        author :  'Walter Isaacson',
        status : {
            own: true,
            reading: false,
            read: false
        }
    },

    {
        title : 'Mockingjay',
        author :  'Suzanne Collins',
        status : {
            own: true,
            reading: false,
            read: false
        }
    }

];

//step 2 change to read to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);
// console.log(library);


//step 3 rename the head
const { title: firstBook } = library[2]

console.log(firstBook);

//step 4
const libraryJson = JSON.stringify(library);
const libraryParse = JSON.parse(libraryJson)

console.log(libraryJson);