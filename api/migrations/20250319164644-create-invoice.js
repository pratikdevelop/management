'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {  // Added 'async' keyword to match syntax
    await queryInterface.createTable('Invoices', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      invoice_number: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Customers',  // Ensure this matches the exact table name
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('Pending', 'Complete'),
        defaultValue: 'Pending'
      },
      createdAt: {  // Removed duplicate 'created_at', kept camelCase for consistency
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')  // Use fn('NOW') for cross-DB compatibility
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')  // Added default value
      }
    });
  },

  async down(queryInterface, Sequelize) {  // Added Sequelize parameter for consistency
    await queryInterface.dropTable('Invoices');
  }
};