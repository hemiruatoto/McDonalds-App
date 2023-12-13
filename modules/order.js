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
         this.items.push(item.toLowerCase().replaceAll(' ', '-'));
         console.log(`${item} was added to the order.`);
         return true;
      } else {
         this.rejectedItems.push(item);
         console.log(`${item} is not an available option.`);
         return false;
      }
   }
  
   /**
    * Removes a single item from the order.
    * @param {string} - The name of the item to remove.
    */
   removeOrderItem (item) {
     if (typeof(item) != 'string') {
       console.log(`Couldn't find ${item.toString()} in the order.`)
       return false;
     }
    
    const formattedItem = item.toLowerCase().replaceAll(' ', '-');
    
     if (this.items.includes(formattedItem)) {
       const index = this.items.findIndex((item) => {
         return item == formattedItem;
       });
       this.items.splice(index, 1);
       this.removedItems.push(formattedItem);
       console.log(`${item} removed from the order.`);
     } else {
       console.log(`Couldn't find ${item} in the order.`)
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
    * Get an array of any removed items.
    * @returns {String[]}
    */
   getRemovedItems () {
     return this.removedItems;
   }

   /**
    * Returns the date that the order was created.
    * @returns {Date}
    */
   getCreatedDate () {
      return this.createdDate;
   }
}