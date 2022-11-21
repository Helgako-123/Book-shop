let header = document.createElement("header");
document.body.appendChild(header);
header.innerHTML = `<div class="header-block">
  <ul id="navbar"></ul></div>`

let element = document.getElementById('navbar');
let fragment = document.createDocumentFragment();
let headerList = ['About', 'Shops', 'Buy online',
    'Contacts'];

headerList.forEach((headerList) => {
    let li = document.createElement('li');
    li.textContent = headerList;
    fragment.appendChild(li);
});
element.appendChild(fragment);


let titleContainer = document.createElement('div');
titleContainer.className = 'header-title'
titleContainer.innerHTML = `<h1>Your favourite bookshop</h1>`
header.append(titleContainer);

let shoppingBag = document.createElement("div");
shoppingBag.className = "bag-icon";
shoppingBag.innerHTML = `<button class="buy_button"><img src="../Images/bag-icon.jpg" alt="bag-icon" width="80" height="80"></button>`;
header.append(shoppingBag);

/*Main*/
let main = document.createElement('main');
document.body.append(main);
let shopContent = document.createElement('div');
shopContent.classList.add("shop-content");
main.append(shopContent);
document.body.append(main);

let titleShop = document.createElement('div');
titleShop.className = 'catalog-title'
titleShop.innerHTML = `<h2>Book catalog</h2>`
shopContent.appendChild(titleShop)

let booksContainer = document.createElement("div");
main.appendChild(booksContainer);
booksContainer.className = "shop-container";
booksContainer.innerHTML = `<div id="books_container"></div>`


fetch('https://github.com/rolling-scopes-school/js-fe-course-en/blob/main/tasks/books-shop/books.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });


/*Footer*/

let footer = document.createElement('footer');
document.body.append(footer);
let footerText = document.createElement('p');
footerText.classList.add("footer-text");
footerText.innerHTML = 'Thank you for your visit!';
footer.append(footerText);
document.body.append(footer);
