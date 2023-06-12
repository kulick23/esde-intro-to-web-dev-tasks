import { home } from "./home";
import { aboutUs } from "./aboutUs";
import { contact } from "./contact";

export const routes = {
    '/': home,
    "/about-us": aboutUs,
    '/contact': contact
}


function renderRoute (e) {
    e.preventDefault();

    if(e.target.href) {
        routes[e.target.pathname]();
        history.pushState({}, "", e.target.pathname);
        e.target.classList.add('hidden');
    }
}


export const start = () => {
    const mainMenu = document.querySelector('#main-menu');

    mainMenu.addEventListener('click', renderRoute);
}

