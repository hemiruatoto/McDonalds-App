/** @module order */

import * as menuData from '/modules/menuData.js';
 
/** 
 * Class representing an order.
 * @requires module:menuData
 */
export default class Order {
   /**
    * Create an order.
    * @param {string[]} items - The food items that the customer ordered.
    */
   constructor (items) {
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
       * The date that the order was created.
       * @type {Date}
       * @private
       */
      this.createdDate = new Date();
      
      // Try to add the item to the order, do something if it rejects
      for (let item of items) {
         if (this.addOrderItem(item) == false) {
            // Do something...
         }
      }

      console.log(`Order was created on ${this.createdDate.toDateString()} - ${this.createdDate.toTimeString()}`);
   }

   /**
    * Get an array of items in the order.
    * @returns {string[]}
    */
   getOrderItems () {
      return this.items;
   }

   /**
    * Adds a single item to the order.
    * @param {string} item - The item's name.
    * @returns {boolean} The item was added to the order.
    */
   addOrderItem (item) {
      if (typeof(item) != 'string') {
         this.rejectedItems.push(item.toString());
         return false
      };

      if (menuData.itemIsAvailable(item)) {
         this.items.push(item);
         console.log(`${item} was added to the order.`);
         return true;
      } else {
         this.rejectedItems.push(item);
         console.log(`${item} is not an available option.`);
         return false;
      }
   }

   /**
    * Get an array of any rejected items.
    * @returns {string[]}
    */
   getRejectedItems () {
      return this.rejectedItems;
   }

   /**
    * Returns the date that the order was created.
    * @returns {Date}
    */
   getCreatedDate () {
      return this.createdDate;
   }
}