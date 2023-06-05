import { start } from "./components/routs";
import { routes } from "./components/routs";

const page = window.location.pathname;

routes[page]();
start();