const express = require('express');
const UsersService = require('../services/users.service');
const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product');
const router = express.Router();
const sequelize = require('../server');

//=======User=======
// GET all users
router.get('/users', async (req, res) => {
  try {
    const users = await UsersService.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET user by ID with associated orders
router.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UsersService.findById(id);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//creating a user
router.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//updating a user
router.put('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const [updatedRowsCount, updatedUser] = await User.update(req.body, {
      where: { id },
      returning: true, // Return the updated user
    });

    if (updatedRowsCount === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(updatedUser[0]); // Return the updated user
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//deleting a user
router.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedRowCount = await User.destroy({ where: { id } });

    if (deletedRowCount === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//=======Order=======
// GET all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET order by ID
router.get('/orders/:id', async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByPk(orderId);

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json(order);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//creating an order
router.post('/orders', async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//updating an order
router.put('/orders/:id', async (req, res) => {
  try {
    const orderId = req.params.id;
    const [updatedRowsCount, updatedOrder] = await Order.update(req.body, {
      where: { id: orderId },
      returning: true,
    });

    if (updatedRowsCount === 0) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json(updatedOrder[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//deleting an order
router.delete('/orders/:id', async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedRowCount = await Order.destroy({ where: { id: orderId } });

    if (deletedRowCount === 0) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//=======Products====
// GET all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);

    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//creating a product
router.post('/products', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//updating a product
router.put('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const [updatedRowsCount, updatedProduct] = await Product.update(req.body, {
      where: { id: productId },
      returning: true,
    });

    if (updatedRowsCount === 0) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(updatedProduct[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//deleting a product
router.delete('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedRowCount = await Product.destroy({ where: { id: productId } });

    if (deletedRowCount === 0) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//=====BONUS=====
// GET order by ID with associated User and Product details
router.get('/orders/:id', async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByPk(orderId, {
      include: [
        { model: User },
        { model: Product },
      ],
    });

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json(order);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
