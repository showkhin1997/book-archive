const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}


const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    books.forEach(book => {
        const imageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${imageUrl}" class="card-img-top" alt="...">
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