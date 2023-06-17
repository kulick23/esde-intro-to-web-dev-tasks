import './join.css'
const createJoin = () => {
    const join = document.createElement('div');
    join.classList.add('join');
    const joinh1 = document.createElement('h1');
    joinh1.textContent = 'Feel the music';

    const joinp = document.createElement('p');
    joinp.textContent = 'Stream over 10 million songs with one click';

    const joinbut = document.createElement('button');
    joinbut.classList.add('join__button--size');
    joinbut.textContent = 'Join Now';

    join.appendChild(joinh1);
    join.appendChild(joinp);
    join.appendChild(joinbut);
    return join;
};

export default createJoin;
