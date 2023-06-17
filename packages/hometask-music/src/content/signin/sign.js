import './sign.css'
const createSign = () => {


    const sign = document.createElement('div');
    sign.classList.add('sign');

    const signbox = document.createElement('div');
    signbox.classList.add('sign__box');
 
   
    const signtext = document.createElement('p');
    signtext.classList.add('sign__text');
    signtext.textContent = 'Name:';

    const signinput = document.createElement('input');
    signinput.classList.add('sign__input');
    




 
    const signtext2 = document.createElement('p');
    signtext2.classList.add('sign__text');
    signtext2.textContent = 'Password:';

    const signinput2 = document.createElement('input');
    signinput2.classList.add('sign__input');



    const signtext3 = document.createElement('p');
    signtext3.classList.add('sign__text');
    signtext3.textContent = 'e-mail:';

    const signinput3 = document.createElement('input');
    signinput3.classList.add('sign__input');


    const signbut = document.createElement('button');
    signbut.textContent = 'Join now';



    signbox.appendChild(signtext);
    signbox.appendChild(signinput);
    signbox.appendChild(signtext2);
    signbox.appendChild(signinput2);
    signbox.appendChild(signtext3);
    signbox.appendChild(signinput3);
    sign.appendChild(signbox);
    sign.appendChild(signbut);
    return sign;
};

export default createSign;
