const User = require('../models/User.js');
const Order = require('../models/Order');

class UsersService {
  static async find() {
    return await User.findAll();
  }

  static async findById(id) {
    const user = await User.findByPk(id, {
      include: Order, // Include associated orders
    });

    if (!user) {
      return null;
    }

    // Extract orders from the user object
    const { Orders, ...userData } = user.toJSON();
    return {
      ...userData,
      orders: Orders || [], // Attach orders to the user data
    };
  }

  static async create(newUser) {
    return await User.create(newUser);
  }

  static async update(id, updatedUser) {
    const [updatedRowsCount, updatedRows] = await User.update(updatedUser, {
      where: { id },
      returning: true, // Return the updated user
    });

    if (updatedRowsCount === 0) {
      return null; // User not found
    }

    return updatedRows[0]; // Return the updated user
  }

  static async delete(id) {
    const deletedRowCount = await User.destroy({ where: { id } });

    if (deletedRowCount === 0) {
      return false; // User not found
    }

    return true; // User deleted successfully
  }

  
}

module.exports = UsersService;