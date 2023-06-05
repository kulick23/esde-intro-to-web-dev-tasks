// eslint-disable-next-line import/prefer-default-export
export const home = () => {
    const el = document.createElement('div');
    el.innerText = 'Home';

    const root = document.querySelector('#root');

    root.replaceChildren(el);
}