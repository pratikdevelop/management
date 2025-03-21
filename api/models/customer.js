'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.hasMany(models.Invoice, { foreignKey: 'customer_id' });
    }
  }
  Customer.init({
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    email: {  // Added email field
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true  // Ensures valid email format
      }
    },
    phone: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    address: { 
      type: DataTypes.TEXT, 
      allowNull: false 
    },
    city: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    state: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'Customers',
    timestamps: true, // Enable timestamps to match seeder
  });
  return Customer;
};