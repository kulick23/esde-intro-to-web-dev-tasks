import { ProductsApi } from "./api/productsClass";
import { renderProducts } from "./components/product/product";
import { renderHeader } from "./components/header/header";

const productsApi = new ProductsApi();

const { products } = productsApi; // https://javascript.info/destructuring-assignment

renderProducts(products);
renderHeader('ADMIN');
