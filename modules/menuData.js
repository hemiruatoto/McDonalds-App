/** @module menuData */

/** Available burgers and their prices */
const burgers = [
    {name: 'hamburger', price: 4.00},
    {name: 'cheeseburger', price: 4.50},
    {name: 'quarter-pounder', price: 7.50},
    {name: 'big-mac', price: 8.50},
    {name: 'mc-chicken', price: 8.50},
    {name: 'kiwi-burger', price: 10.00}
];

/** Available other food items */
const otherItems = [
    {name: 'nuggets-3-pack', price: 4.00},
    {name: 'nuggets-6-pack', price: 7.50}
]

/** Available meal combo addons and their prices. Must be ordered with a burger*/
const combos = [
    {name: 'small-combo', price: 3.00},
    {name: 'medium-combo', price: 4.50},
    {name: 'large-combo', price: 6.00},
];

/** Available sides and their prices */
const sides = [
    {name: 'small-fries', price: 2.00},
    {name: 'medium-fries', price: 3.00},
    {name: 'large-fries', price: 4.00}
];

/** Available drink types/sizes and their prices */
const drinkTypes = [
    {name: 'water', price: 0},
    {name: 'small-soda', price: 2.00},
    {name: 'medium-soda', price: 2.50},
    {name: 'large-soda', price: 3.00},
    {name: 'small-milkshake', price: 2.50},
    {name: 'medium-milkshake', price: 3.50},
    {name: 'large-milkshake', price: 4.50}
];

/** Available soda flavours */
const sodaFlavours = [
    'coke',
    'coke-no-sugar',
    'diet-coke',
    'sprite',
    'fanta',
    'l-and-p',
    'orange-juice',
    'raspberry'
];

/** Available milkshake flavours */
const milkshakeFlavours = [
    'chocolate',
    'lime',
    'strawberry',
    'banana',
    'caramel'
];

/** All available item names */
const allAvailableItems = [
    ...burgers.map((obj) => obj.name),
    ...otherItems.map((obj) => obj.name),
    ...combos.map(obj => obj.name),
    ...sides.map((obj) => obj.name),
    ...drinkTypes.map((obj) => obj.name),
];

/**
 * Returns JSON data of all of the available items.
 * @returns {string}
 */
export function getJSON () {
    return JSON.stringify({
        burgers,
        otherItems,
        combos,
        sides,
        drinkTypes,
        sodaFlavours,
        milkshakeFlavours
    });
}

/**
 * Returns an array of available item names.
 * @returns {string[]}
 */
export function getAvailableItemNames () {
    return allAvailableItems.map((item) => item.toLowerCase().replaceAll('-', ' '));
}

/** 
 * Check if a given item is available to order.
 * @param {string} item - The name of the item to check.
 */
export function itemIsAvailable (item) {
    if (typeof(item) != 'string') return false;

    return getAvailableItemNames().includes(item.toLowerCase().replaceAll('-', ' '));
}