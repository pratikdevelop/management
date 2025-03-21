'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InvoiceItem extends Model {
    static associate(models) {
      InvoiceItem.belongsTo(models.Invoice, { foreignKey: 'invoice_id', onDelete: 'CASCADE' });
      InvoiceItem.belongsTo(models.Product, { foreignKey: 'product_id', onDelete: 'CASCADE' });
    }
  }
  InvoiceItem.init({
    invoice_id: { type: DataTypes.INTEGER, allowNull: false },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  }, {
    sequelize,
    modelName: 'InvoiceItem',
    tableName: 'InvoiceItems',
    timestamps: true, // Enable timestamps (add if seeder includes them)
  });
  return InvoiceItem;
};