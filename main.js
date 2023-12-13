import Order from '/modules/order.js';

// Testing
const order = new Order(['Big Mac', 'Large Combo', 'Cheeseburger', 'Chocolate Sunday']);
order.addOrderItem('Nuggets 6 Pack');
order.addOrderItem('McFlurry');
order.removeOrderItem('cheeseburger');
order.removeOrderItem('chicken');
order.addOrderItem([1,2,3]);
console.log('Big Mac costs: $' + order.getItemPrice('big-mac'));
console.log('Large Combo costs: $' + order.getItemPrice('large-combo'));
console.log('Nuggets 6 pack costs: $' + order.getItemPrice('nuggets-6-pack'));
console.log('Total Order costs: $' + order.getOrderTotalPrice());

console.log('Order items: ' + order.getOrderItems().toString());
console.log('Rejected items: ' + order.getRejectedItems().toString());
console.log('Removed items: ' + order.getRemovedItems().toString());