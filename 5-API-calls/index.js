// DOM variables
let header = document.getElementById('header');
let bookTitle = document.getElementById('bookTitle');
let bookSearched = document.getElementById('bookSearched');
let bookList = document.getElementById('bookList');
let submitBook = document.getElementById('submitBook');


const createList = (body) => {
    let title = bookTitle.value;
    if(!title){
        title = localStorage.getItem("input");
        bookSearched.innerText = "Your last search was: "+ title;
    } else {
        bookSearched.innerText = "Top 5 search results for: "+ title;
    }
    
    for (let i = 0; i < 5; i++){
        let newDiv = document.createElement('div');
            let newList = document.createElement("ul");
                let cover = document.createElement("img");
                let coverCode = body.docs[i].isbn[0];
                    cover.setAttribute('src', `http://covers.openlibrary.org/b/isbn/${coverCode}-M.jpg`);
                    newList.append(cover);
                let title = document.createElement("li");
                    title.textContent = "Book Title: " + body.docs[i].title;
                    newList.append(title);
                let author = document.createElement("li");
                    author.textContent = "Author: "+ body.docs[i].author_name[0];
                    newList.append(author);
                let subject = document.createElement("li");
                    subject.textContent = "Genre: "+ body.docs[i].subject[0];
                    newList.append(subject);
        newDiv.append(newList);
    bookList.prepend(newDiv);
    }
}


const bookSearch = async () => {
let title = bookTitle.value;
if(!title){
    title = localStorage.getItem("input");
}
let response = await fetch(`http://openlibrary.org/search.json?title=${title}`);
    let body = await response.json();
    storeLastInput(title);
    return createList(body);

}

const storeLastInput = (title) => {
    localStorage.setItem("input", title)
}

const loadLocal = () => {
    if(localStorage.length > 0){
        bookSearch();
    }
}

document.body.addEventListener("", function(event){
    console.log(event)
})

console.log(document)
// console.log(document.body)

loadLocal();

// const bookSearch = () => {
//     let title = bookTitle.value;
// fetch(`http://openlibrary.org/search.json?title=${title}`)
// .then(response => {
//     return response.json();
// })
// .then(body => {
//     return createList(body);
// })
// };





