// Script.js

const store_API = 'https://fakestoreapi.com/products';
var cartCount = 0;

storage = window.localStorage;

window.addEventListener('DOMContentLoaded', () => {
  fetch(store_API)
  .then(res => res.json())
  .then(data => {
    storage.setItem("items", JSON.stringify(data));
  })
});

const items = storage.getItem('items');

var parsedItems = JSON.parse(items);
var itemArray = [];
for(var i = 0; i < parsedItems.length;i++) {
    itemArray.push(new ProductItem(parsedItems[i].category,
                                  parsedItems[i].description,
                                  parsedItems[i].id,
                                  parsedItems[i].image,
                                  parsedItems[i].price,
                                  parsedItems[i].title));
}

//append to the list
for(i = 0; i < itemArray.length; i++) {
  var newItem = document.createElement('li', {is : 'product-item'});
  newItem.innerHTML = `
  <img src = ${itemArray[i].image} alt = ${itemArray[i].description} width = 200>
  <p class = "title">${itemArray[i].title}</p>
  <p class = "price">$${itemArray[i].price.toFixed(2)}</p>
  <button id = button${i} onclick = "buttonClick(${i})">Add to Cart</button>
  `;
  newItem.classList.add("product");
  document.getElementById('product-list').append(newItem);

  if(storage.getItem(i) != null) {
    buttonClick(i);
  }
}

function buttonClick(id) {
  if(document.getElementById("button"+id).innerHTML == "Add to Cart") {
    cartCount += 1;
    document.getElementById("button"+id).innerHTML = "Remove from Cart";
    storage.setItem(id, 'added');
  } else {
    cartCount -= 1;
    document.getElementById("button"+id).innerHTML = "Add to Cart";
    storage.removeItem(id);
  }
  
  document.getElementById("cart-count").innerHTML = cartCount;
}





