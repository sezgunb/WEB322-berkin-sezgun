const express = require('express');
const router = express.Router();
const UsersService = require('../services/users.service');
const ProductsService = require('../services/product.service');
const OrdersService = require('../services/order.service');


// USER CRUD operations
router.post('/users', async (req, res) => {
  try {
      const newUser = await UsersService.create(req.body);
      res.status(201).json(newUser);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error creating user');
  }
});

router.get('/users', async (req, res) => {
  try {
      const users = await UsersService.find();
      res.status(200).json(users);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving users');
  }
});

router.get('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
      const user = await UsersService.findById(userId);
      if (user) {
          res.status(200).json(user);
      } else {
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving user');
  }
});

router.put('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
      const updatedUser = await UsersService.update(userId, req.body);
      if (updatedUser) {
          res.status(200).json(updatedUser);
      } else {
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error updating user');
  }
});

router.delete('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
      const isDeleted = await UsersService.delete(userId);
      if (isDeleted) {
          res.status(200).send('User deleted successfully');
      } else {
          res.status(404).send('User not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting user');
  }
});

// ORDER CRUD operations
router.post('/orders', async (req, res) => {
  try {
      const newOrder = await OrdersService.create(req.body);
      res.status(201).json(newOrder);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error creating order');
  }
});

router.get('/orders', async (req, res) => {
  try {
      const orders = await OrdersService.find();
      res.status(200).json(orders);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving orders');
  }
});

router.get('/orders/:orderId', async (req, res) => {
  const orderId = req.params.orderId;
  try {
      const order = await OrdersService.findById(orderId);
      if (order) {
          res.status(200).json(order);
      } else {
          res.status(404).send('Order not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving order');
  }
});

router.put('/orders/:orderId', async (req, res) => {
  const orderId = req.params.orderId;
  try {
      const updatedOrder = await OrdersService.update(orderId, req.body);
      if (updatedOrder) {
          res.status(200).json(updatedOrder);
      } else {
          res.status(404).send('Order not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error updating order');
  }
});

router.delete('/orders/:orderId', async (req, res) => {
  const orderId = req.params.orderId;
  try {
      const isDeleted = await OrdersService.delete(orderId);
      if (isDeleted) {
          res.status(200).send('Order deleted successfully');
      } else {
          res.status(404).send('Order not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting order');
  }
});

// PRODUCT CRUD operations
router.post('/products', async (req, res) => {
  try {
      const newProduct = await ProductsService.create(req.body);
      res.status(201).json(newProduct);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error creating product');
  }
});

router.get('/products', async (req, res) => {
  try {
      const products = await ProductsService.find();
      res.status(200).json(products);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving products');
  }
});

router.get('/products/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
      const product = await ProductsService.findById(productId);
      if (product) {
          res.status(200).json(product);
      } else {
          res.status(404).send('Product not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving product');
  }
});

router.put('/products/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
      const updatedProduct = await ProductsService.update(productId, req.body);
      if (updatedProduct) {
          res.status(200).json(updatedProduct);
      } else {
          res.status(404).send('Product not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error updating product');
  }
});

router.delete('/products/:productId', async (req, res) => {
  const productId = req.params.productId;
  try {
      const isDeleted = await ProductsService.delete(productId);
      if (isDeleted) {
          res.status(200).send('Product deleted successfully');
      } else {
          res.status(404).send('Product not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting product');
  }
});

//=====BONUS=====
// BONUS: GET order by ID with associated User and Product details
router.get('/orders/:id', async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await OrdersService.findById(orderId);

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }

    // Fetch associated User details
    const user = await UsersService.findById(order.UserId);

    // Fetch associated Product details
    const product = await ProductsService.findById(order.ProductId);

    const orderWithDetails = {
      id: order.id,
      orderDesc: order.orderDesc,
      user: user || null,
      product: product || null,
    };

    res.json(orderWithDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
