const title = document.getElementById('book-title')
const author = document.getElementById('book-author')
const pages = document.getElementById('book-pages')
const status = document.getElementById('book-status')
const grid = document.getElementById('grid-container')
const root = document.getElementById('root')


let myBookshelf = [];

//Book constructor

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

//Adding book to shelf.
function addBookToBookshelf() {
    const newBook = new Book(title.value, author.value, pages.value, status.value);
    myBookshelf.push(newBook)
    createBookCards(newBook)
}

//Delete Form Values

function deleteForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
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
        deleteForm();

    } 
}




// After Getting the New Book

const createBookCards = (book) => {
    console.log(book)

   // Creating all new elements needed in the card
    const gridContainer = document.createElement('div')
    const gridItem = document.createElement('div')
    const card = document.createElement('div')
    const cardBody = document.createElement('div')
    const cardTitle = document.createElement('div')
    const emoji = document.createElement('p')
    const bookTitle = document.createElement('h5')
    const bookAuthor = document.createElement('h6')
    const bookPages = document.createElement('p')
    const bookStatus = document.createElement('p')
    const btnStatus = document.createElement('button')
    const btnDelete = document.createElement('button')

   // Adding classes
    gridContainer.classList.add('grid-container')
    gridItem.classList.add('grid-item')
    card.classList.add('card')
    cardBody.classList.add('card-body')
    cardTitle.classList.add('book-card-title')
    emoji.classList.add('emoji-icon')
    bookTitle.classList.add('card-title')
    bookAuthor.classList.add('card=subtitle', 'mb-2', 'text-muted')
    bookPages.classList.add('card-text')
    bookStatus.classList.add('card-status')
    btnStatus.classList.add('btn', 'btn-primary')
    btnDelete.classList.add('btn', 'btn-secondary')

   // Adding content
  
    emoji.textContent = '📕'
    bookTitle.textContent = `${book.title}`
    bookAuthor.textContent = `${book.author}`
    bookPages.textContent = `${book.pages} pages`
    bookStatus.textContent = `${book.status}`
    btnStatus.textContent = 'Edit'
    btnDelete.textContent = 'Delete'

   // Append it to the Root

    root.appendChild(gridContainer)
    gridContainer.appendChild(gridItem)
    gridItem.appendChild(card)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardTitle.appendChild(emoji)
    cardTitle.appendChild(bookTitle)
    cardBody.appendChild(bookAuthor)
    cardBody.appendChild(bookPages)
    cardBody.appendChild(bookStatus)
    cardBody.appendChild(btnStatus)
    cardBody.appendChild(btnDelete)

    
};







