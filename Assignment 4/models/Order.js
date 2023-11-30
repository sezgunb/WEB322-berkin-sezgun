const { DataTypes } = require('sequelize');
const sequelize = require('../server');
const User = require('./User');
const Product = require('./Product');

//sequelize.define refuses to work :(
const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  orderDesc: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
    allowNull: false,
  },
});

//associations
Order.belongsTo(User);
Order.belongsTo(Product);

module.exports = Order;