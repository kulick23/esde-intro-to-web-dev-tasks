class Product {
  #title = "";
  
  #price = "";

  #description = "";
 
  #img = "";

  constructor(title, price, description, img) {
    this.#title = title;
    this.#price = price;
    this.#description = description;
    this.#img = img;
  }

  render() {
    const product = document.createElement("article");

    product.classList.add("product");

    product.innerHTML = `
            <div class="product__content">
                <h3 class="product__title">
                    ${this.#title} - &#36;${this.#price}
                </h3>

                <p class="product__description">
                    ${this.#description}
                </p>
            </div>

            <button class="product__button">Quick Add</button>

            <img
                class="product__image"
                src="${this.#img}"
                alt="Summer Routine Set product image"
            />
        `;

    return product;
  }
}

// eslint-disable-next-line import/prefer-default-export
export function renderProducts(products) {
  const productList = document.getElementById("product-list"); // document.querySelector('#product-list');

  products.forEach(productData => {
    const { title, price, description, img } = productData;
    const product = new Product(title, price, description, img);

    const productNode = product.render();

    productList.append(productNode);
  });
}
