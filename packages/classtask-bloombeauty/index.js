// Database of products is a simple JavaScript Array
const products = [
  {
    title: "Dewy Glow Jelly Cream",
    img: "./assets/images/product-01.png",
    desciption: "With Jeju Cherry Blossom",
    price: 32.0,
  },
  {
    title: "Dewy Glow Jelly Cream",
    img: "./assets/images/product-02.png",
    desciption: "With Jeju Cherry Blossom",
    price: 23.0,
  },
  {
    title: "Dewy Glow Jelly Cream",
    img: "./assets/images/product-03.png",
    desciption: "With Jeju Cherry Blossom",
    price: 64.0,
  },
];

// Getting an HTML Element, that's our parent for products HTML entities
const productsListContainer = document.querySelector(
  ".container > .row:last-child"
);

// Clear all the content inside parent
productsListContainer.innerHTML = "";

// Iterating on our products database
products.forEach((product) => {
  console.info(
    `Creating product HTML Element from JavaScript object ${product}`
  );

  // object destructuring
  const { title, desciption, price, img } = product;

  // create a container element for product HTML entity
  const div = document.createElement("div");

  // set necessary classes
  div.className = "item-auto";

  // set inner content with all product data wrapped in HTML tags
  div.innerHTML = `
        <article class="product">
        <img
            class="product__image"
            src="${img}"
            alt="Fermented Soybean Bio Mask image"
        />
      
        <div class="product__content">
            <h3 class="product__title">${title}</h3>
      
            <p class="product__description">
                ${desciption}
            </p>
      
            <p class="product__price">&#36;${price}</p>
      
            <button class="product__cta">Add to Bag</button>
        </div>
      </article>
        `;

  // add product HTML entity into parent container
  productsListContainer.append(div);
});

// Working with pseudo-arrays (or Array-like structure) HTMLCollection[]
// Example with calling forEach on context HTMLCollection
// Array.prototype.forEach.call(
//   document.querySelectorAll(".item-auto"),
//   (product) => {
//     if (product.getElementsByTagName("article")) {
//       const priceHTMLElement = product.querySelector(".product__price");

//       priceHTMLElement.innerHTML = 43;
//     }
//   }
// );

// Example with using Array.from function to convert pseudo-array into
// Array.from(document.querySelectorAll(".item-auto")).forEach((product) => {
//   if (product.querySelector("article")) {
//     const priceHTMLElement = product.querySelector(".product__price");

//     priceHTMLElement.innerHTML = 43;
//   }
// });
