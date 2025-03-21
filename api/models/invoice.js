'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    static associate(models) {
      Invoice.belongsTo(models.Customer, { foreignKey: 'customer_id', onDelete: 'CASCADE' });
      Invoice.hasMany(models.InvoiceItem, { foreignKey: 'invoice_id' });
    }
  }
  Invoice.init({
    invoice_number: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    customer_id: { type: DataTypes.INTEGER, allowNull: false },
    total_amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    status: { type: DataTypes.ENUM('Pending', 'Complete'), defaultValue: 'Pending' },
  }, {
    sequelize,
    modelName: 'Invoice',
    tableName: 'Invoices',
    timestamps: true, // Enable timestamps to match seeder
  });
  return Invoice;
};