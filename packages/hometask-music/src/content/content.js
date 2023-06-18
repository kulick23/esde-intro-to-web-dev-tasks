import './content.css'
import createJoin from './join/join';
import createDiscover from './discover/discover';
import createSign from './signin/sign';
const join = createJoin();
const discover = createDiscover();
const sign = createSign();
export const createContent = (discovera, joina, signupa) => {
  function setClickedLink(link) {
    content.innerHTML = '';
    clickedLink = link;
  }
  function updateContent() {
    content.innerHTML = '';
    var htmlElement = document.documentElement;

    if (clickedLink === "discover") {
      content.appendChild(discover);
      htmlElement.style.backgroundImage = "none";
    } else if (clickedLink === "join") {
      content.appendChild(join);
      htmlElement.style.backgroundImage = "url('../../assets/images/background-page-landing.png')";
    } else if (clickedLink === "sign") {
      content.appendChild(sign);
      htmlElement.style.backgroundImage = "url('../../assets/images/background-page-sign-up.png')";
   
    }
    
  const lefttext = document.createElement('p');
  lefttext.classList.add('content__text');
  lefttext.textContent = 'Wlodzimierz Simon © 2022';
  content.appendChild(lefttext);
  }
  let clickedLink = "discover";
  discovera.addEventListener('click', function() {
    setClickedLink('discover');
    console.log(clickedLink)
    updateContent();
   });
   joina.addEventListener('click', function() {
     setClickedLink('join');
     console.log(clickedLink)
     updateContent();
   });
   signupa.addEventListener('click', function() {
     setClickedLink('sign');
     console.log(clickedLink)
     updateContent();
   });
    const content = document.createElement('div');
    content.classList.add('content');
   
    updateContent();
    return content;
};


