import { ProductsApi } from "./api/productsClass";
import { renderProducts } from "./components/product/product";
import { renderHeader } from "./components/header/header";
import structure from './components/footer/structure.json';
import { Footer } from './components/footer/footer';

const productsApi = new ProductsApi();

const { products } = productsApi; // https://javascript.info/destructuring-assignment

renderProducts(products);
renderHeader('ADMIN');

const footer = new Footer(structure);

const footerNode = footer.render();

document.body.appendChild(footerNode);
