import Order from '/modules/order.js';
import MenuItemCard from '/modules/menuItemCard.js';

// Testing
const order = new Order();

const itemGrid = document.getElementById('main-item-grid');
const cheeseburgerCard = new MenuItemCard('Cheeseburger', 4.5, 'images/menu-items/cheeseburger.png');
itemGrid.append(cheeseburgerCard.elements.main);

cheeseburgerCard.elements.addToOrderButton.addEventListener('click', (event) => {
    order.addOrderItem('Cheeseburger');
    cheeseburgerCard.elements.quantityInput.value = order.getItemCount('Cheeseburger');
});

cheeseburgerCard.elements.quantityAdd.addEventListener('click', (event) => {
    order.addOrderItem('Cheeseburger');
    cheeseburgerCard.elements.quantityInput.value = order.getItemCount('Cheeseburger');
});

cheeseburgerCard.elements.quantityRemove.addEventListener('click', (event) => {
    order.removeOrderItem('Cheeseburger');
    cheeseburgerCard.elements.quantityInput.value = order.getItemCount('Cheeseburger');
});