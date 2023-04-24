// eslint-disable-next-line import/prefer-default-export
export class Footer {
    #structure;

    constructor(structure) {
        this.#structure = structure;
    }

    #renderColumn(title, items) {
        const colContainer = document.createElement('div');

        colContainer.classList.add('footer__col');
        const colHeader = document.createElement('div');
        colHeader.classList.add('footer__title');
        colHeader.innerText = title;
        colContainer.appendChild(colHeader);
        const itemsNode = items.map(item => {
            const itemNode = document.createElement('div');
            itemNode.innerText = item;

            return itemNode;
        });
        colContainer.append(...itemsNode);

        return colContainer;
    }

    render() {
        const footer = document.createElement('footer');

        const columns = this.#structure.map(({title, items}) => {
            return this.#renderColumn(title, items)
        })

        footer.append(...columns);

        return footer;
    }
}

