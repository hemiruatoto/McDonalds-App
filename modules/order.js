/** @module order */

import * as menuData from '../modules/menuData.js';
import * as helpers from '../modules/helpers.js';

/** 
 * Class representing an order.
 * @requires module:menuData
 */
export default class Order {
  /**
   * Create an order.
   * @param {string[]} itemNames - The food items that the customer ordered.
   */
  constructor(itemNames = []) {
    /** 
     * Items that have been successfully added to the order.
     * @type {string[]}
     * @private
     */
    this.items = [];

    /**
     * Keep a list of requested items that weren't available to order.
     * @type {string[]}
     * @private
     */
    this.rejectedItems = [];

    /**
     * Keep a list of items that were removed from the order.
     * @type {string[]};
     * @private
     */
    this.removedItems = [];

    /**
     * The date that the order was created.
     * @type {Date}
     * @private
     */
    this.createdDate = new Date();

    /**
     * Has this order been paid for?
     * @type {boolean}
     * @private
     */
    this.paidFor = false;

    // Try to add the given items to the order, do something if it rejects
    for (let item of itemNames) {
      if (this.addOrderItem(item) == false) {
        // Do something...
      }
    }

    helpers.consoleAlert('info', `Order was created on ${this.createdDate.toDateString()} - ${this.createdDate.toTimeString()}`);
  }

  /**
   * Get an array of items in the order.
   * @returns {string[]}
   */
  getOrderItems() {
    return this.items;
  }

  /**
   * Adds a single item to the order.
   * @param {string} itemName - The item's name.
   * @returns {boolean} The item was added to the order.
   */
  addOrderItem(itemName) {
    if (typeof (itemName) != 'string') {
      this.rejectedItems.push(itemName.toString());
      helpers.consoleAlert('error', 'Can only add the name of the item to the order.');
      return false
    };

    if (menuData.itemIsAvailable(itemName)) {
      this.items.push(menuData.toItemString(itemName));
      helpers.consoleAlert('success', `${itemName} was added to the order.`);
      return true;
    } else {
      this.rejectedItems.push(itemName);
      helpers.consoleAlert('warn', `${itemName} is not an available option.`);
      return false;
    }
  }

  /**
   * Removes a single item from the order.
   * @param {string} - The name of the item to remove.
   */
  removeOrderItem(itemName) {
    if (typeof (itemName) != 'string') {
      helpers.consoleAlert('warn', `Couldn't find ${itemName.toString()} in the order.`)
      return false;
    }

    const formattedItem = menuData.toItemString(itemName);

    if (this.items.includes(formattedItem)) {
      const index = this.items.findIndex((item) => {
        return item == formattedItem;
      });
      this.items.splice(index, 1);
      this.removedItems.push(formattedItem);
      helpers.consoleAlert('success', `${itemName} was removed from the order.`);
    } else {
      helpers.consoleAlert('warn', `Couldn't find ${itemName} in the order.`)
    }
  }

  /**
   * Get an array of any rejected items.
   * @returns {string[]}
   */
  getRejectedItems() {
    return this.rejectedItems;
  }

  /**
   * Get an array of any removed items.
   * @returns {String[]}
   */
  getRemovedItems() {
    return this.removedItems;
  }

  /**
   * Returns the date that the order was created.
   * @returns {Date}
   */
  getCreatedDate() {
    return this.createdDate;
  }

  /**
   * Returns the price of an item.
   * @param {string} itemName - The name of the item to find the price of.
   * @returns {number} - The price of the item.
   */
  getItemPrice(itemName) {
    if (menuData.itemIsAvailable(itemName)) {
      return menuData.getItemPrice(itemName);
    } else {
      helpers.consoleAlert('warn', `${itemName} is not an available option.`);
      return null;
    }
  }

  /**
   * Returns the count of the given item in the order. Returns -1 if the item isn't available.
   * @param {string} itemName - The name of the item.
   * @returns {number}
   */
  getItemCount(itemName) {
    if (menuData.itemIsAvailable(itemName)) {
      return this.items.reduce((count, item) => item == menuData.toItemString(itemName) ? count + 1 : count, 0);
    } else {
      return -1;
    }
  }

  /**
   * Returns the total cost of the order.
   * @param {number} tax - The amount of tax to charge.
   * @returns {number}
   */
  getOrderTotalPrice(tax = 0) {
    if (typeof(tax) != 'number') tax = 0;

    const total = this.items.reduce((prev, curr) => {
      return prev + this.getItemPrice(curr);
    }, 0);

    const totalTax = total * tax;
    return (total + totalTax).toFixed(2);
  }

  /**
   * Set whether the order has been paid for.
   * @param {boolean} paidFor 
   */
  setPaidFor(paidFor) {
    this.paidFor = paidFor;
  }
}