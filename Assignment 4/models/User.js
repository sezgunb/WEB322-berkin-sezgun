const { DataTypes } = require('sequelize');
const sequelize = require('../server'); //adadadada

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
    allowNull: false,
  },
  email: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
    allowNull: false,
  },
  dob: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
  },
  company: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
  },
  phone: {
    type: DataTypes.ARRAY(DataTypes.CHAR),
  },
});

module.exports = User;