const { Product } = require('../models/db');

class ProductsService {
  static async find() {
    return await Product.findAll();
  }

  static async findById(id) {
    return await Product.findByPk(id);
  }

  static async create(newProduct) {
    return await Product.create(newProduct);
  }

  static async update(id, updatedProduct) {
    const [updatedRowsCount, updatedRows] = await Product.update(updatedProduct, {
      where: { id },
      returning: true, // Return the updated product
    });

    if (updatedRowsCount === 0) {
      return null; // Product not found
    }

    return updatedRows[0]; // Return the updated product
  }

  static async delete(id) {
    const deletedRowCount = await Product.destroy({ where: { id } });

    if (deletedRowCount === 0) {
      return false; // Product not found
    }

    return true; // Product deleted successfully
  }
}

module.exports = ProductsService;