const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
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

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    addCard(title, author, pages, read);
    modal.close();
})


// Read Button
document.querySelector('.content').addEventListener("click", function(event) {
    if (event.target.textContent === "Read") {
        event.target.textContent = "Not Read";
    }  else if (event.target.textContent === "Not Read") {
        event.target.textContent = "Read";
    } else if (event.target.textContent === "Remove") {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    }
})

// Add Card Function
function addCard(title, author, pages, read) {
    const container = document.querySelector('.content > div');

    const divClass = document.createElement('div')
    divClass.className = 'card'
    
    const newTitle = document.createElement('h2');
    newTitle.textContent = title;
    const newAuthor = document.createElement('p')
    newAuthor.textContent = author
    const by = document.createElement('p')
    by.textContent = "By"
    const newPages = document.createElement('p')
    newPages.textContent = pages + ' Pages'
    const readButton = document.createElement('button')
    if (read) {
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





