const books = [
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        pages: 1184,
        year: 1954,
        genre: "Fantasy"
    },

    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        pages: 1072,
        year: 1605,
        genre: "Adventure Fiction"
    },

    {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        pages: 544,
        year: 1859,
        genre: "Adventure Fiction"
    },    

    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        pages: 309,
        year: 1997,
        genre: "Fantasy"
    }, 
    
    {
        title: "And Then There Were None",
        author: "Agatha Christie",
        pages: 272,
        year: 1939,
        genre: "Mystery"
    },
    
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        year: 1937,
        genre: "Fantasy"
    },
    
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        pages: 176,
        year: 1818,
        genre: "Fantasy"
    }, 

    {
        title: "A Study in Scarlet",
        author: "Sir Arthur Conan Doyle",
        pages: 192,
        year: 1887,
        genre: "Mystery"
    }, 
];

const sortByTitle = document.getElementById("sortByTitle");
const sortByPages = document.getElementById("sortByPages");
const sortByYear = document.getElementById("sortByYear");
const genreSort = document.getElementById("genreSort");

const bookShelf = document.getElementById("bookShelf");
const bookCount = document.getElementById("bookCount");

let isReversed = false;
let currentSort = null;

function createBook(book){
    const bookDiv = document.createElement("div");
    bookDiv.style.border = "1px solid black";
    bookDiv.style.marginTop = "4px";

    const bookTitle = document.createElement("h1");
    bookTitle.innerText = book.title;

    const bookAuthor = document.createElement("h3");
    bookAuthor.innerText = "by " + book.author;

    const bookInfo = document.createElement("p");
    bookInfo.innerText = "Year: " + book.year +
        "\nGenre: " + book.genre +"\nPages: " + book.pages;

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookInfo);
    bookShelf.appendChild(bookDiv);
    return book;
}

function render(sortedBooks){
    const selectedGenre = genreSort.value;
    let bookArray = [];

    bookShelf.innerHTML = "";
    if (selectedGenre === "all"){
        bookArray = sortedBooks.map(book => createBook(book));
    }else{
        bookArray = sortedBooks.filter((book) =>{
            return book.genre.toLowerCase() === selectedGenre;
        }).map(book => createBook(book));
    }
    bookCount.innerText = "Showing " + bookArray.length + 
        " out of " + books.length + " books";
}

sortByTitle.addEventListener("click", () =>{
    const sortedByTitle = books.sort((a, b) => a.title.localeCompare(b.title));
    if (currentSort == "Title" && !isReversed){
        sortedByTitle.reverse();
        isReversed = true;
    }else{
        currentSort = "Title";
        isReversed = false;
    }
    render(sortedByTitle);
})

sortByPages.addEventListener("click", () =>{
    const sortedByPages = books.sort((a, b) => a.pages - b.pages);
    if (currentSort == "Pages" && !isReversed){
        sortedByPages.reverse();
        isReversed = true;
    }else{
        currentSort = "Pages";
        isReversed = false;
    }
    render(sortedByPages);
})

sortByYear.addEventListener("click", () =>{
    const sortedByYear = books.sort((a, b) => a.year - b.year);
    if (currentSort == "Year" && !isReversed){
        sortedByYear.reverse();
        isReversed = true;
    }else{
        currentSort = "Year";
        isReversed = false;
    }
    render(sortedByYear);
})

genreSort.addEventListener("change", () =>{
    let sortedBooks = books;
    switch (currentSort){
        case "Title":
            sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
            break;

        case "Pages":
            sortedBooks = books.sort((a, b) => a.pages - b.pages);
            break;

        case "Year":
            sortedBooks = books.sort((a, b) => a.year - b.year);
            break;
    }
    render((isReversed) ? sortedBooks.reverse() : sortedBooks);
})
render(books);
