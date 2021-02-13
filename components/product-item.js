// product-item.js

class ProductItem extends HTMLElement {
  constructor(category, description, id, image, price, title) {
    super();
    this.category = category;
    this.description = description;
    this.id = id;
    this.image = image;
    this.price = price;
    this.title = title;

  }

  buttonClicked() {
    
  }
}

customElements.define('product-item', ProductItem);