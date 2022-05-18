async function fetchBooks(){
    const res = await fetch("./frontend/data/data.json");
    const resJson = await res.json(res);
    console.log(resJson);
    return resJson;
}

function cardComponent({title, sub, text}, buttonText, key){
    return `
        <div class="book" data-key="${key}">
            <!--<div class="circle">${key}</div>-->            
            <h2>${title}</h2>
            <div class="details">
                <h3>${sub}</h3>
                <h4>${text}</h4>
            </div>
            <div class="button">
                <div class="details-text">${buttonText}</div>
                <span class="material-icons">arrow_forward</span><!--e5c8-->
            </div>
        </div>
    `;
}

function booksComponent(books, buttonText){
    return `
        <section class="books">
            ${books.map((book, index) => cardComponent(book, buttonText, index+1)).join('')}
        </section>
    `;
}

function header(){
    return `
        <header>
            <h2 class="title">Best Books<h2>
            <button>
                <h2><span class="material-icons">menu</span><h2>
            </button>
        </header>
    `;
}

async function loadEvent(){

    const booksData = await fetchBooks();
    console.log(booksData);

    // console.log(books);

    // const booksData = fetchBurnedBooks();

    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML('beforeend', header());
    rootElement.insertAdjacentHTML('beforeend', booksComponent(booksData.cards, booksData.button));

}

window.addEventListener("load", loadEvent);