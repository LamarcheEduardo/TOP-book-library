const title = document.getElementById('book-title')
const author = document.getElementById('book-author')
const pages = document.getElementById('book-pages')
const status = document.getElementById('book-status')
const grid = document.getElementById('grid-container')
const root = document.getElementById('root')
const error = document.getElementById('error')


let myBookshelf = [];

//Book constructor

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status

}

//Add ID to Each Book 

//Adding book to shelf.
function addBookToBookshelf() {
    const newBook = new Book(title.value, author.value, pages.value, status.value);
    console.log(newBook.status.toString())
    myBookshelf.push(newBook)
    createBookCards(newBook)
}

//Delete Form Values AFTER SUBMIT

function deleteForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
}

// Handle Click on Subtmit

const handleClick = () => {
    if(title.value === '')  {
        error.innerHTML = 'Hey! We need the title.'
        error.classList.add('alert', 'alert-warning', 'alert-dismissible', 'fade', 'show')
        const button = document.createElement('button')
        button.classList.add('btn-close')
        error.appendChild(button)

    } else if (author.value === '') {
        alert('Hey! We need the author.')
    } else {

        addBookToBookshelf();
        deleteForm();

    } 
}


// After Getting the New Book

const createBookCards = (book) => {

   // Creating all new elements needed in the card
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
    gridItem.classList.add('grid-item')
    card.classList.add('card')
    cardBody.classList.add('card-body')
    cardTitle.classList.add('book-card-title')
    emoji.classList.add('emoji-icon')
    bookTitle.classList.add('card-title')
    bookAuthor.classList.add('card-subtitle', 'mb-2', 'text-muted')
    bookPages.classList.add('card-text')
    bookStatus.classList.add('card-status')
    btnStatus.classList.add('btn', 'btn-outline-success', 'button-normal')
    btnDelete.classList.add('btn', 'btn-outline-danger', 'button-normal')

   // Adding content
  
    emoji.textContent = '????'
    bookTitle.textContent = `${book.title}`
    bookAuthor.textContent = `${book.author}`
    bookPages.textContent = `${book.pages} pages`
    bookStatus.textContent = `${book.status}`
    btnStatus.textContent = 'Update'
    btnDelete.textContent = 'Delete'

   // Append it to the Root
    grid.appendChild(gridItem)
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

        // Deleting Book Cards 

        btnDelete.addEventListener('click', (event) => {
        
            event.preventDefault();
          
                const bookTitleToFind = event.path[1].childNodes[0].lastChild.innerHTML
    
                for(let i = 0; i < myBookshelf.length; i++) {     
                    if(bookTitleToFind == myBookshelf[i].title) {
                        deleteBookCard();
                        myBookshelf.splice(i, 1)
                    } 
                }
        })

        function deleteBookCard(){

            grid.removeChild(gridItem)
            gridItem.removeChild(card)
            card.removeChild(cardBody)
            cardBody.removeChild(cardTitle)
            cardTitle.removeChild(emoji)
            cardTitle.removeChild(bookTitle)
            cardBody.removeChild(bookAuthor)
            cardBody.removeChild(bookPages)
            cardBody.removeChild(bookStatus)
            cardBody.removeChild(btnStatus)
            cardBody.removeChild(btnDelete)

    }
    
    // Editing Button

    btnStatus.addEventListener('click', (event) => {
        event.preventDefault();
        const bookTitleToFind = event.path[1].childNodes[0].lastChild.innerHTML
        for(let i = 0; i < myBookshelf.length; i++) {     
            if(bookTitleToFind == myBookshelf[i].title) {
                if(book.status.toLowerCase() === 'read') {
                    bookStatus.textContent = 'Not Read'
                    myBookshelf[i].status = 'Not Read'
                } else if(book.status.toLowerCase() === 'not read'){
                    bookStatus.textContent = 'Read'
                    myBookshelf[i].status = 'Read'
                } else {
                    return book.status
                }
            } 
        }
    })
};


//Deleting books



// const deleteBtn = document.getElementById('deleteButton')


// function deleteBook(){ 
//     deleteBtn.addEventListener('click', (event) => {
//         console.log('im being pressed')
//         console.log(event)
//     })
// }


