import Order from '/modules/order.js';

// Testing
const order = new Order(['Big Mac', 'Large Combo', 'Cheeseburger', 'Chocolate Sunday']);
order.addOrderItem('Nuggets 6 Pack');
order.addOrderItem('McFlurry');
console.log('Order items: ' + order.getOrderItems().toString());
console.log('Rejected items: ' + order.getRejectedItems().toString());