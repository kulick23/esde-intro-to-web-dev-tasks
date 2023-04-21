import productsData from "./products.json";

// eslint-disable-next-line import/prefer-default-export
export class ProductsApi {
  #products = [];

  constructor() {
    this.#products = [...productsData]; // copy array using spread
  }

  get products() {
    return this.#products;
  }

  addProduct(product) {
    this.#products.push(product);
  }
}
