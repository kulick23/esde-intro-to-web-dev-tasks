import './footer.css'
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerlinks = document.createElement('ul');
    footerlinks.classList.add('footer__links');


    const aboutLi = document.createElement('li');
    const about = document.createElement('a');
    about.href = '#';
    about.textContent = 'About us';
    aboutLi.appendChild(about);

    const contactLi = document.createElement('li');
    const contact = document.createElement('a');
    contact.href = '#';
    contact.textContent = 'Contact';
    contactLi.appendChild(contact);

    const infoLi = document.createElement('li');
    const info = document.createElement('a');
    info.href = '#';
    info.textContent = 'Cr Info';
    infoLi.appendChild(info);

    const twitterLi = document.createElement('li');
    const twitter = document.createElement('a');
    twitter.href = '#';
    twitter.textContent = 'Twitter';
    twitterLi.appendChild(twitter);

    const facebookLi = document.createElement('li');
    const facebook = document.createElement('a');
    facebook.href = '#';
    facebook.textContent = 'Facebook';
    facebookLi.appendChild(facebook);

    footerlinks.appendChild(aboutLi);
    footerlinks.appendChild(contactLi);
    footerlinks.appendChild(infoLi);
    footerlinks.appendChild(twitterLi);
    footerlinks.appendChild(facebookLi);
    footer.appendChild(footerlinks);
    return footer;
};

export default createFooter;
