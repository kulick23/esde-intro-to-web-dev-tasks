import './discover.css'
import music from '../../../assets/images/music-titles.png'
const createDiscover = () => {
    const discover = document.createElement('div');
    discover.classList.add('discover');

    const discoverblock = document.createElement('div');
    discoverblock.classList.add('discoverblock');
    const discoverh1 = document.createElement('h1');
    discoverh1.textContent = 'Discover new music';

    
    const discoverdiv = document.createElement('div');
    discoverdiv.classList.add('discover__button');
    const discoverbut = document.createElement('button');
    discoverbut.textContent = 'Charts';

    const discoverbut2 = document.createElement('button');
    discoverbut2.textContent = 'Songs';

    const discoverbut3 = document.createElement('button');
    discoverbut3.textContent = 'Artists';

    discoverdiv.appendChild(discoverbut);
    discoverdiv.appendChild(discoverbut2);
    discoverdiv.appendChild(discoverbut3);

    const discoverp = document.createElement('p');
    discoverp.textContent = 'Stream over 10 million songs with one click';


    discoverblock.appendChild(discoverh1);
    discoverblock.appendChild(discoverdiv);
    discoverblock.appendChild(discoverp);

    const discoverImg = document.createElement('img');
    discoverImg.classList.add('discover__img');
    discoverImg.src = music;
    discoverImg.alt = "Music";

    discover.appendChild(discoverblock);
     discover.appendChild(discoverImg);
    return discover;
};

export default createDiscover;
