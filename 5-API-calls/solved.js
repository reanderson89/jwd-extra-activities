
// DOM variables
let header = document.getElementById('header');
let bookTitle = document.getElementById('bookTitle');
let bookSearched = document.getElementById('bookSearched');
let bookList = document.getElementById('bookList');
let submitBook = document.getElementById('submitBook');


// creates list of books
const createList = (body) => {
    console.log(body);
    bookSearched.innerText = "Top 5 search results for: "+ bookTitle.value;
    for (let i = 0; i < 5; i++){
        let newDiv = document.createElement('div');
            let newList = document.createElement("ul");
                let cover = document.createElement("img");
                let coverCode = // code needed;
                    cover.setAttribute('src', `http://covers.openlibrary.org/b/isbn/${coverCode}-M.jpg`);
                    newList.append(cover);
                let title = document.createElement("li");
                    title.textContent = "Book Title: "
                    newList.append(title);
                let author = document.createElement("li");
                    author.textContent = "Author: "
                    newList.append(author);
                let subject = document.createElement("li");
                    subject.textContent = "Genre: "
                    newList.append(subject);
        newDiv.append(newList);
    bookList.prepend(newDiv);
    }
}

// runs search based off user input
// const bookSearch = async () => {
//     let title = bookTitle.value;
//     let response = await fetch("http://openlibrary.org/search.json?title="+title);
//     let body = await response.json();
//     return createList(body);      
// }


const bookSearch = () => {
    let title = bookTitle.value;
    fetch("http://openlibrary.org/search.json?title="+title)
    .then(response => {
        return response.json();
    })
    .then(body => {
        return createList(body);
    })
}


