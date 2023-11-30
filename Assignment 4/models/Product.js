const { DataTypes } = require('sequelize');
const sequelize = require('../server');

//sequelize.define refuses to work :(
const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
    allowNull: false,
  },
  isbn: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  description: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
    allowNull: true,
  },
});

module.exports = Product;