const myLibrary = [];

function Book(title, author, pages, readStatus) {
    if (!new.target) {
        throw Error("You need to use the 'new' keyword to call constructor")
    }
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus}`
    }
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    return newBook
}

// Add Card Function
function addCard(id, title, author, pages, readStatus) {
    const container = document.querySelector('.content > div');

    const divClass = document.createElement('div')
    divClass.className = 'card'
    divClass.dataset.id = id;
    
    const newTitle = document.createElement('h2');
    newTitle.textContent = title;
    const newAuthor = document.createElement('p')
    newAuthor.textContent = author
    const by = document.createElement('p')
    by.textContent = "By"
    const newPages = document.createElement('p')
    newPages.textContent = pages + ' Pages'
    const readButton = document.createElement('button')
    if (readStatus) {
        readButton.textContent = "Read"
    } else {
        readButton.textContent = "Not Read"
    }
    const removeButton = document.createElement('button')
    removeButton.textContent = "Remove"
    readButton.className = "read"
    removeButton.className = "remove"
    divClass.appendChild(newTitle)
    divClass.appendChild(by)
    divClass.appendChild(newAuthor)  
    divClass.appendChild(newPages)  
    divClass.appendChild(readButton)  
    divClass.appendChild(removeButton)
    container.appendChild(divClass) 
}


function displayBooks() {
    myLibrary.forEach(function(book) {
        addCard(book.id, book.title, book.author, book.pages, book.readStatus)
    })

}


// Pop Up Form
const modal = document.querySelector('dialog');
const openModal = document.querySelector('.add-book');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
    modal.showModal()
})
document.querySelector('dialog').addEventListener("submit", function(event) {
    event.preventDefault();

    // Extract information to create Book object
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let readStatus = document.getElementById('read').checked;
    
    //adding book object to myLibrary
    const newBook = addBookToLibrary(title, author, pages, readStatus);
    addCard(newBook.id, newBook.title, newBook.author, newBook.pages, newBook.readStatus)
    modal.close();
})



// Read Button and remove
document.querySelector('.content').addEventListener("click", function(event) {
    let bookId = event.target.parentNode.dataset.id
    let mybook = myLibrary.find(book => book.id === bookId)
    if (event.target.className === "read") {
        // alert(event.target.textContent)
        if (event.target.textContent === "Read") {
            event.target.textContent = "Not Read";
            mybook.readStatus = "Not Read";
        }  else {
            event.target.textContent = "Read";
            mybook.readStatus = "Read";
        }
    
    } else if(event.target.className === "remove") {
        alert(mybook.title)
        event.target.parentNode.parentNode.removeChild(event.target.parentNode)
        let index = myLibrary.indexOf(mybook);

        if (index !== -1) {
            myLibrary.splice(index, 1)
        }
    }  
})


addBookToLibrary("Art of War", "Unknown", 234, "Not read")
addBookToLibrary("Madina Arabic Book", "Dr Abdulrahim Vi", 100, "Readead")

displayBooks()




