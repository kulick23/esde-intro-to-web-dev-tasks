import './content.css'
import createJoin from './join/join';
import createDiscover from './discover/discover';
import createSign from './signin/sign';
import {createHeader} from '../header/header'
const join = createJoin();
const discover = createDiscover();
const sign = createSign();
const { discovera, joina, signupa  } = createHeader();
let clickedLink = "discover";

function setClickedLink(link) {
  clickedLink = link;
}
discovera.addEventListener('click', function() {
   console.log(5)
  });
  joina.addEventListener('click', function() {
    setClickedLink('join');
  });
  signupa.addEventListener('click', function() {
    setClickedLink('sign');
  });
const createContent = () => {
    const content = document.createElement('div');
    content.classList.add('content');
console.log(clickedLink)

    const lefttext = document.createElement('p');
    lefttext.classList.add('content__text');
    lefttext.textContent = 'Wlodzimierz Simon © 2022';

    content.appendChild(lefttext);
    return content;
};

export default createContent;
