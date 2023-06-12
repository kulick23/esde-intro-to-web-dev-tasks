// eslint-disable-next-line import/prefer-default-export
export const contact = () => {
    const el = document.createElement('div');
    el.innerText = 'Contact';

    const root = document.querySelector('#root');

    root.replaceChildren(el);
}