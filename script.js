

// ####################################################
// --------- LIBRARY ---------
// ####################################################
// an array to store all the book objects
let myLibrary = [];
// function
function addBookToLibrary(book) {
    myLibrary.push(book)
}


// ####################################################
// --------- BOOK OBJECT ---------
// ####################################################
// constructor for making "Book" object
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.addToLibrary = addBookToLibrary(this)
}

Book.prototype.changeRead = function() {
    if (this.read == true) { 
        this.read = false
    } else {
        this.read = true
    }
}

// ####################################################
// ---------- DISPLAY BOOKS ----------
// ####################################################
const div_cards = document.getElementById("div-cards");

function display_cards(library) {

    clear_container_content(div_cards);

    for (let i=0; i < library.length; i++) {

        const div_card =  document.createElement('div');
        div_card.classList.add('div-card');   
        div_cards.appendChild(div_card);

        const div_title =  document.createElement('div');
        div_title.classList.add('div-title');   
        div_title.textContent = "Title: " + library[i].title;
        div_card.appendChild(div_title);

        const div_author =  document.createElement('div');
        div_author.classList.add('div-author');   
        div_author.textContent = "Author: " + library[i].author;
        div_card.appendChild(div_author);

        const div_pages =  document.createElement('div');
        div_pages.classList.add('div-pages');   
        div_pages.textContent = "Pages: " + library[i].pages;
        div_card.appendChild(div_pages);
     
        const btn_read =  document.createElement('button');
        btn_read.classList.add('btn-read');  
        btn_read.textContent = library[i].read? "READ": "NOT READ";
        btn_read.setAttribute('read', library[i].read); 
        btn_read.setAttribute('data', i);   
        div_card.appendChild(btn_read);     
        
        const btn_remove =  document.createElement('button');
        btn_remove.classList.add('btn-remove'); 
        btn_remove.setAttribute('data', i);  
        btn_remove.textContent = "Remove";
        div_card.appendChild(btn_remove);   
    }

    listen_read_btns();
    listen_remove_btns();
}

function clear_container_content(container) {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

// ####################################################
// --------- ACTIONS --------
// ####################################################
// add a new book
const btn_new_book = document.getElementById("btn-new-book");
const div_new_book = document.getElementById("cont-new-book");
const btn_submit_book = document.getElementById("btn-submit-book");

btn_new_book.onclick = () => {
    div_new_book.hidden = false;
}
btn_submit_book.onclick = (e) => {
    // Prevents the page to be reloaded on clicking submit
    // (otherwise any new book is gone from memory)
    e.preventDefault();

    const new_title = document.getElementById("title").value;
    const new_author = document.getElementById("author").value;
    const new_pages = document.getElementById("pages").value;
    const new_read = document.getElementById("read").checked;

    const new_book = new Book(new_title, new_author, new_pages, new_read)
    new_book.addToLibrary;

    display_cards(myLibrary);

    div_new_book.hidden = true;
}

function listen_remove_btns() {
    const btns_remove_book = document.querySelectorAll(".btn-remove");
    btns_remove_book.forEach( (btn) => 
        btn.onclick = (e) => {
            let i_to_remove = e.target.attributes.data.value;

            myLibrary.splice(i_to_remove, 1);
            display_cards(myLibrary);

        }
    )
}

function listen_read_btns() {
    const btns_read_book = document.querySelectorAll(".btn-read");
    btns_read_book.forEach( (btn) => 
        btn.onclick = (e) => {
            let i_to_change = e.target.attributes.data.value;
            myLibrary[i_to_change].changeRead();

            display_cards(myLibrary);
        }
    )
}


// ####################################################
// --------- CREATE SOME INITIAL BOOKS ---------
// ####################################################
const book1 = new Book("New World", "Toti", 199, false)
const book2 = new Book("Crazy book", "Gary Did", 3, false)
const book3 = new Book("Cooking Heads", "Petra Caf", 101, false)
const book4 = new Book("Cycling Flat", "Billy Boo", 1500, false)

// add the books to the library
book1.addToLibrary;
book2.addToLibrary;
book3.addToLibrary;
book4.addToLibrary;

display_cards(myLibrary);


