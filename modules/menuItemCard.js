/** @module menuItemCard */

export default class MenuItemCard {
    /**
     * Creates a menu item card component.
     * @param {string} name - The name of the item.
     * @param {number} price - The price of the item.
     * @param {string} imgURL - Link to the image.
     */
    constructor(name, price, imgURL) {
        this.name = name;
        this.price = price;
        this.imgURL = imgURL;
        this.quantity = 0;
        this.elements = {
            main: null,
            heading: null,
            image: null,
            priceDollars: null,
            priceCents: null,
            quantityInput: null,
            quantityAdd: null,
            quantityRemove: null,
            addToOrderButton: null
        }

        this.createElements();
    }

    /**
     * Creates the component and saves references to this object.
     */
    createElements() {
        const card_el = document.createElement('section');
        card_el.classList.add('menu-item-card');

        const imgContainer_el = document.createElement('div');
        imgContainer_el.classList.add('menu-item-card-img');

        const img_el = document.createElement('img');
        img_el.setAttribute('src', this.imgURL);
        img_el.setAttribute('alt', this.name);

        const contentContainer_el = document.createElement('div');
        contentContainer_el.classList.add('menu-item-card-content');

        const cardHeadingContainer_el = document.createElement('div');
        cardHeadingContainer_el.classList.add('menu-item-card-heading');

        const cardHeading_el = document.createElement('h3');
        cardHeading_el.innerText = this.name;

        const priceContainer_el = document.createElement('div');
        priceContainer_el.classList.add('menu-item-card-price');

        const dollarSign_el = document.createElement('span');
        dollarSign_el.classList.add('dollar-sign');
        dollarSign_el.innerText = '$';

        const dollarAmount_el = document.createElement('span');
        dollarAmount_el.classList.add('dollar-amount');
        dollarAmount_el.innerText = Math.floor(this.price);

        const centsAmount_el = document.createElement('span');
        centsAmount_el.classList.add('cents-amount');
        centsAmount_el.innerText = '.' + this.price.toFixed(2).toString().split('.')[1];

        const actions_el = document.createElement('div');
        actions_el.classList.add('menu-item-card-actions');

        const addToOrderButton_el = document.createElement('button');
        addToOrderButton_el.classList.add('btn');
        addToOrderButton_el.innerText = 'Add to order';

        const quantityContainer_el = document.createElement('div');
        quantityContainer_el.classList.add('quantity-input');

        const quantityAdd_el = document.createElement('button');
        quantityAdd_el.classList.add('btn', 'quantity-input-add');
        quantityAdd_el.innerText = '+';

        const quantityRemove_el = document.createElement('button');
        quantityRemove_el.classList.add('btn', 'quantity-input-remove');
        quantityRemove_el.innerText = '-';

        const quantityInput_el = document.createElement('input');
        quantityInput_el.setAttribute('type', 'text');
        quantityInput_el.setAttribute('value', this.quantity);
        quantityInput_el.setAttribute('size', '1');
        quantityInput_el.classList.add('quantity-input-value');

        // Put them all together.
        card_el.append(imgContainer_el);
        imgContainer_el.append(img_el);

        card_el.append(contentContainer_el);
        contentContainer_el.append(cardHeadingContainer_el);
        cardHeadingContainer_el.append(cardHeading_el);

        contentContainer_el.append(priceContainer_el);
        priceContainer_el.append(dollarSign_el);
        priceContainer_el.append(dollarAmount_el);
        priceContainer_el.append(centsAmount_el);

        contentContainer_el.append(actions_el);
        actions_el.append(addToOrderButton_el);
        actions_el.append(quantityContainer_el);
        quantityContainer_el.append(quantityRemove_el);
        quantityContainer_el.append(quantityInput_el);
        quantityContainer_el.append(quantityAdd_el);

        // Save references to some of the elements.
        this.elements.main = card_el;
        this.elements.heading = cardHeading_el;
        this.elements.image = img_el;
        this.elements.addToOrderButton = addToOrderButton_el;
        this.elements.priceDollars = dollarAmount_el;
        this.elements.priceCents = centsAmount_el;
        this.elements.quantityInput = quantityInput_el;
        this.elements.quantityAdd = quantityAdd_el;
        this.elements.quantityRemove = quantityRemove_el;
    }
}