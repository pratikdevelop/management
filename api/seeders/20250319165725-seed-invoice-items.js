'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('InvoiceItems', [
      { invoice_id: 1, product_id: 1, quantity: 1, price: 599.99, total: 599.99 }, // Smart TV
      { invoice_id: 1, product_id: 2, quantity: 1, price: 19.99, total: 19.99 },   // T-Shirt
      { invoice_id: 2, product_id: 4, quantity: 5, price: 29.99, total: 149.95 }, // Desk Lamp
      { invoice_id: 3, product_id: 6, quantity: 1, price: 999.99, total: 999.99 }, // Laptop
      { invoice_id: 4, product_id: 5, quantity: 1, price: 89.99, total: 89.99 },   // Tennis Racket
      { invoice_id: 5, product_id: 23, quantity: 2, price: 129.99, total: 259.98 }, // Headphones
      { invoice_id: 5, product_id: 28, quantity: 3, price: 19.99, total: 59.97 },  // Puzzle
      { invoice_id: 6, product_id: 24, quantity: 1, price: 39.99, total: 39.99 },  // Sweater
      { invoice_id: 6, product_id: 29, quantity: 1, price: 14.99, total: 14.99 },  // Mascara
      { invoice_id: 7, product_id: 11, quantity: 1, price: 799.99, total: 799.99 }, // Sofa
      { invoice_id: 8, product_id: 9, quantity: 1, price: 24.99, total: 24.99 },   // Lipstick
      { invoice_id: 9, product_id: 23, quantity: 1, price: 129.99, total: 129.99 }, // Headphones
      { invoice_id: 10, product_id: 12, quantity: 1, price: 199.99, total: 199.99 }, // Necklace
      { invoice_id: 11, product_id: 18, quantity: 1, price: 499.99, total: 499.99 }, // Gaming Console
      { invoice_id: 12, product_id: 24, quantity: 1, price: 39.99, total: 39.99 },  // Sweater
      { invoice_id: 13, product_id: 17, quantity: 1, price: 299.99, total: 299.99 }, // Guitar
      { invoice_id: 14, product_id: 33, quantity: 1, price: 69.99, total: 69.99 },  // Blender
      { invoice_id: 15, product_id: 19, quantity: 1, price: 149.99, total: 149.99 }, // Camping Tent
      { invoice_id: 16, product_id: 20, quantity: 1, price: 89.99, total: 89.99 },  // Baby Monitor
      { invoice_id: 17, product_id: 51, quantity: 1, price: 399.99, total: 399.99 }, // Dining Table
      { invoice_id: 18, product_id: 2, quantity: 1, price: 19.99, total: 19.99 },   // T-Shirt
      { invoice_id: 19, product_id: 63, quantity: 1, price: 249.99, total: 249.99 }, // Smart Watch
      { invoice_id: 20, product_id: 21, quantity: 1, price: 79.99, total: 79.99 }   // Drill
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('InvoiceItems', null, {});
  }
};