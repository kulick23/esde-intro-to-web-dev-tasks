// eslint-disable-next-line import/prefer-default-export
export const aboutUs = () => {
    const el = document.createElement('div');
    el.innerText = 'About Us';

    const root = document.querySelector('#root');

    root.replaceChildren(el);
}