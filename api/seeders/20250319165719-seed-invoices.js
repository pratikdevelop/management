'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Invoices', [
      { invoice_number: 'INV-2025-001', customer_id: 1, total_amount: 619.98, status: 'Pending', createdAt: '2025-03-20 09:15:00', updatedAt: '2025-03-20 09:15:00' },
      { invoice_number: 'INV-2025-002', customer_id: 2, total_amount: 149.97, status: 'Complete', createdAt: '2025-03-21 14:30:00', updatedAt: '2025-03-21 14:30:00' },
      { invoice_number: 'INV-2025-003', customer_id: 3, total_amount: 999.99, status: 'Pending', createdAt: '2025-03-22 11:45:00', updatedAt: '2025-03-22 11:45:00' },
      { invoice_number: 'INV-2025-004', customer_id: 4, total_amount: 89.99, status: 'Complete', createdAt: '2025-03-23 16:00:00', updatedAt: '2025-03-23 16:00:00' },
      { invoice_number: 'INV-2025-005', customer_id: 5, total_amount: 349.98, status: 'Pending', createdAt: '2025-03-24 10:20:00', updatedAt: '2025-03-24 10:20:00' },
      { invoice_number: 'INV-2025-006', customer_id: 6, total_amount: 59.98, status: 'Complete', createdAt: '2025-03-25 13:10:00', updatedAt: '2025-03-25 13:10:00' },
      { invoice_number: 'INV-2025-007', customer_id: 7, total_amount: 799.99, status: 'Pending', createdAt: '2025-03-26 15:25:00', updatedAt: '2025-03-26 15:25:00' },
      { invoice_number: 'INV-2025-008', customer_id: 8, total_amount: 24.99, status: 'Complete', createdAt: '2025-03-27 09:50:00', updatedAt: '2025-03-27 09:50:00' },
      { invoice_number: 'INV-2025-009', customer_id: 9, total_amount: 129.99, status: 'Pending', createdAt: '2025-03-28 12:00:00', updatedAt: '2025-03-28 12:00:00' },
      { invoice_number: 'INV-2025-010', customer_id: 10, total_amount: 199.98, status: 'Complete', createdAt: '2025-03-29 14:15:00', updatedAt: '2025-03-29 14:15:00' },
      { invoice_number: 'INV-2025-011', customer_id: 11, total_amount: 499.99, status: 'Pending', createdAt: '2025-03-30 16:30:00', updatedAt: '2025-03-30 16:30:00' },
      { invoice_number: 'INV-2025-012', customer_id: 12, total_amount: 39.99, status: 'Complete', createdAt: '2025-03-31 10:45:00', updatedAt: '2025-03-31 10:45:00' },
      { invoice_number: 'INV-2025-013', customer_id: 13, total_amount: 299.99, status: 'Pending', createdAt: '2025-04-01 13:00:00', updatedAt: '2025-04-01 13:00:00' },
      { invoice_number: 'INV-2025-014', customer_id: 14, total_amount: 69.98, status: 'Complete', createdAt: '2025-04-02 15:20:00', updatedAt: '2025-04-02 15:20:00' },
      { invoice_number: 'INV-2025-015', customer_id: 15, total_amount: 149.99, status: 'Pending', createdAt: '2025-04-03 11:10:00', updatedAt: '2025-04-03 11:10:00' },
      { invoice_number: 'INV-2025-016', customer_id: 16, total_amount: 89.99, status: 'Complete', createdAt: '2025-04-04 14:25:00', updatedAt: '2025-04-04 14:25:00' },
      { invoice_number: 'INV-2025-017', customer_id: 17, total_amount: 399.99, status: 'Pending', createdAt: '2025-04-05 16:40:00', updatedAt: '2025-04-05 16:40:00' },
      { invoice_number: 'INV-2025-018', customer_id: 18, total_amount: 19.99, status: 'Complete', createdAt: '2025-04-06 09:30:00', updatedAt: '2025-04-06 09:30:00' },
      { invoice_number: 'INV-2025-019', customer_id: 19, total_amount: 249.99, status: 'Pending', createdAt: '2025-04-07 12:15:00', updatedAt: '2025-04-07 12:15:00' },
      { invoice_number: 'INV-2025-020', customer_id: 20, total_amount: 79.98, status: 'Complete', createdAt: '2025-04-08 15:00:00', updatedAt: '2025-04-08 15:00:00' }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Invoices', null, {});
  }
};