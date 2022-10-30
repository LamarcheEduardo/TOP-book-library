
const title = document.getElementById('book-title')
const author = document.getElementById('book-author')
const pages = document.getElementById('book-pages')
const status = document.getElementById('book-status')
const grid = document.getElementById('grid-container')
const root = document.getElementById('root')


let myBookshelf = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}


function addBookToBookshelf() {
    const newBook = new Book(title.value, author.value, pages.value, status.value);
    myBookshelf.push(newBook)
}

// submit.addEventListener('click', (event) => {
//     event.preventDefault();
    
// })

const handleClick = () => {
    if(title.value === '')  {
        alert('Hey! We need the tittle.')
    } else if (author.value === '') {
        alert('Hey! We need the author.')
    } else {
        addBookToBookshelf();
    } 
}
// After Getting the New 
// let data = [
//     {name: 'name0', description: 'description', date: 'XX/XX/XXXX'},
//     {name: 'name1', description: 'description', date: 'XX/XX/XXXX'},
//     {name: 'name2', description: 'description', date: 'XX/XX/XXXX'},
// ]

// myBookshelf.forEach(res => {
//     let card = document.createElement("div");

//     let name = document.createTextNode('Name:' + res.name + ', ');
//     card.appendChild(name);

//     let description = document.createTextNode('Description:' + res.description + ', ');
//     card.appendChild(description);

//     let date = document.createTextNode('date:' + res.date);
//     card.appendChild(date);

//     let container = document.querySelector("#container");
//     container.appendChild(card);
// });






