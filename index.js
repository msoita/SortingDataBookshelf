const books = [
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        pages: "1184",
        year: "1954",
        genre: "Fantasy"
    },

    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        pages: "1072",
        year: "1605",
        genre: "Adventure Fiction"
    },

    {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        pages: "544",
        year: "1859",
        genre: "Adventure Fiction"
    },    

    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        pages: "309",
        year: "1997",
        genre: "Fantasy"
    }, 
    
    {
        title: "And Then There Were None",
        author: "Agatha Christie",
        pages: "272",
        year: "1939",
        genre: "Mystery"
    },
    
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: "310",
        year: "1937",
        genre: "Fantasy"
    },
    
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        pages: "176",
        year: "1818",
        genre: "Fantasy"
    }, 

    {
        title: "A Study in Scarlet",
        author: "Sir Arthur Conan Doyle",
        pages: "192",
        year: "1887",
        genre: "Mystery"
    }, 
];

const sortByTitle = document.getElementById("sortByTitle");
const sortByPages = document.getElementById("sortByPages");
const sortByYear = document.getElementById("sortByYear");

const bookshelf = document.getElementById("bookshelf");
function render(sortedBooks){
    bookshelf.innerHTML = "";
    const bookArray = sortedBooks.map(book =>{
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
        bookshelf.appendChild(bookDiv);
    })
}
render(books);

sortByTitle.addEventListener("click", () =>{
    const sortedByTitle = books.sort((a, b) => a.title.localeCompare(b.title));
    render(sortedByTitle);
})

sortByPages.addEventListener("click", () =>{
    const sortedByPages = books.sort((a, b) => a.pages - b.pages);
    render(sortedByPages);
})

sortByYear.addEventListener("click", () =>{
    const sortedByYear = books.sort((a, b) => a.year - b.year);
    render(sortedByYear);
})