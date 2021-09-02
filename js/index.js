// search button
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    // load data 
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}

// display search result
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (books.length === 0) {
        searchResult.innerHTML = `
        <div class="text-center text-danger fs-1">
          <h1>!!Search Result Not Found!!</h1>
        </div>
        `;
    }
    books.forEach(book => {
        const imageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card  w-75 container border-1">
            <img src="${imageUrl}" class="card-img-top p-4 mx-auto" alt="...">
            <div class="card-body">
               <h1 class="card-title">${book.title}</h1>
               <h6 class="card-title">Author: ${book.author_name}</h6>
               <p class="card-title">Publisher: ${book.publisher}</p>
               <p class="card-text">First Publish date: ${book.publish_date}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    });
}