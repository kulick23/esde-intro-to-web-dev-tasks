import './header.css'
import Logo from "../../assets/icons/logo.svg"
export const createHeader = () => {

    const header = document.createElement('header');
    header.classList.add('header');

    const logoImg = document.createElement('img');
    logoImg.classList.add('header__logo');
    logoImg.src = Logo;
    logoImg.alt = "Logo";

    const headerlinks = document.createElement('ul');
    headerlinks.classList.add('header__links');

    const Logotext = document.createElement('li');
    Logotext.textContent = 'Simo';

    const discoverLi = document.createElement('li');
    discoverLi.classList.add('header__li');
    const discovera = document.createElement('a');
    discovera.href = '#';
    discovera.textContent = 'Discover';
    discoverLi.appendChild(discovera);

    const joinLi = document.createElement('li');
    joinLi.classList.add('header__li');
    const joina = document.createElement('a');
    joina.href = '#';
    joina.textContent = 'Join';
    joinLi.appendChild(joina);

    const signupLi = document.createElement('li');
    signupLi.classList.add('header__li');
    const signupa = document.createElement('a');
    signupa.href = '#';
    signupa.textContent = 'Sign In';
    signupLi.appendChild(signupa);



   
    headerlinks.appendChild(Logotext);
    headerlinks.appendChild(discoverLi);
    headerlinks.appendChild(joinLi);
    headerlinks.appendChild(signupLi);
    header.appendChild(logoImg);
    header.appendChild(headerlinks);

    return { header, discovera, joina, signupa  }
};

 
