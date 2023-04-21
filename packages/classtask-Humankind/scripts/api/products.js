const products = [
  {
    title: "shower routine set",
    price: "54",
    description:
      "All natural shampoo, formulated to nourish your hair. Get $26 off.",
    img: "./assets/images/product-01.png",
  },

  {
    title: "sumsd sad asm",
    price: "54",
    description:
      "All natural shampoo, formulated to nourish your hair. Get $26 off.",
    img: "./assets/images/product-02.png",
  },
];

export function getProducts() {
  return products;
}

export function addProduct(product) {
  products.push(product);
}

