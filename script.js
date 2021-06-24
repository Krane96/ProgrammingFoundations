// Practical Questions
// 1:
let firstName = 'Martin ';
let lastName = 'Lian Krane';

console.log(firstName + lastName);

// 2:

const house = {
    type:'House',
    rooms: 6,
    buildingMaterial:'Wood and Stone',
    occupied:'Not Occupied'
};

console.log(house);


// 3:
const books = [
    'Harry Potter',
    'A Song of Ice and Fire',
    'Eragon'
];

function logBooks () {
    let message = 'I like: '
    books.forEach(element => console.log(message + element));
};

logBooks(books);