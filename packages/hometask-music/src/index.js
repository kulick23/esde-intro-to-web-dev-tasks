import {createHeader} from './header/header';
import {createContent} from './content/content';
import createFooter from './footer/footer';
const body = document.querySelector('body');
const { header, discovera, joina, signupa } = createHeader();
const content = createContent(discovera, joina, signupa);
const footer = createFooter();
  
body.appendChild(header);
body.appendChild(content);
body.appendChild(footer);