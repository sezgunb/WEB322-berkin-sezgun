const { Order } = require('../models/db');

class OrdersService {
  static async find() {
    return await Order.findAll();
  }

  static async findById(id) {
    return await Order.findByPk(id);
  }

  static async create(newOrder) {
    return await Order.create(newOrder);
  }

  static async update(id, updatedOrder) {
    const [updatedRowsCount, updatedRows] = await Order.update(updatedOrder, {
      where: { id },
      returning: true, // Return the updated order
    });

    if (updatedRowsCount === 0) {
      return null; // Order not found
    }

    return updatedRows[0]; // Return the updated order
  }

  static async delete(id) {
    const deletedRowCount = await Order.destroy({ where: { id } });

    if (deletedRowCount === 0) {
      return false; // Order not found
    }

    return true; // Order deleted successfully
  }
}

module.exports = OrdersService;