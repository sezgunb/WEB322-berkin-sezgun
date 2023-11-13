let products = require("../data/fakeProducts.json");

class ProductService {
  find() {
    return products;
  }

  findByID(id) {
    const product = products.find((product) => {
      return product.id === parseInt(id);
    });
    return product;
  }

  delete(id) {
    products = products.filter((product) => product.id !== id);
    return `Product ${id} deleted`;
  }

  add(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }
}

const productService = new ProductService();

module.exports = productService;