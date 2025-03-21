'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Electronics', createdAt: '2024-12-01 08:30:00', updatedAt: '2024-12-01 08:30:00' },
      { name: 'Clothing', createdAt: '2024-12-02 10:15:00', updatedAt: '2024-12-02 10:15:00' },
      { name: 'Books', createdAt: '2024-12-03 14:00:00', updatedAt: '2024-12-03 14:00:00' },
      { name: 'Home & Garden', createdAt: '2024-12-04 09:45:00', updatedAt: '2024-12-04 09:45:00' },
      { name: 'Sports', createdAt: '2024-12-05 11:30:00', updatedAt: '2024-12-05 11:30:00' },
      { name: 'Toys', createdAt: '2024-12-06 13:20:00', updatedAt: '2024-12-06 13:20:00' },
      { name: 'Beauty', createdAt: '2024-12-07 15:10:00', updatedAt: '2024-12-07 15:10:00' },
      { name: 'Automotive', createdAt: '2024-12-08 16:55:00', updatedAt: '2024-12-08 16:55:00' },
      { name: 'Furniture', createdAt: '2024-12-09 12:25:00', updatedAt: '2024-12-09 12:25:00' },
      { name: 'Jewelry', createdAt: '2024-12-10 09:00:00', updatedAt: '2024-12-10 09:00:00' },
      { name: 'Appliances', createdAt: '2024-12-11 14:40:00', updatedAt: '2024-12-11 14:40:00' },
      { name: 'Office Supplies', createdAt: '2024-12-12 10:50:00', updatedAt: '2024-12-12 10:50:00' },
      { name: 'Pet Supplies', createdAt: '2024-12-13 13:15:00', updatedAt: '2024-12-13 13:15:00' },
      { name: 'Health', createdAt: '2024-12-14 15:30:00', updatedAt: '2024-12-14 15:30:00' },
      { name: 'Music', createdAt: '2024-12-15 11:45:00', updatedAt: '2024-12-15 11:45:00' },
      { name: 'Gaming', createdAt: '2024-12-16 09:20:00', updatedAt: '2024-12-16 09:20:00' },
      { name: 'Outdoor', createdAt: '2024-12-17 14:10:00', updatedAt: '2024-12-17 14:10:00' },
      { name: 'Baby', createdAt: '2024-12-18 16:00:00', updatedAt: '2024-12-18 16:00:00' },
      { name: 'Tools', createdAt: '2024-12-19 12:35:00', updatedAt: '2024-12-19 12:35:00' },
      { name: 'Groceries', createdAt: '2024-12-20 10:05:00', updatedAt: '2024-12-20 10:05:00' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};