const express = require('express');
const apiRouter = express.Router();

const authService = require('../models/authServices');
const userService = require('../models/userServices');
const productService = require('../models/productServices');

// GET all users
apiRouter.get('/users', (req, res) => {
  res.json(userService.find());
});

// GET a single user by ID
apiRouter.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  res.json(userService.findByID(userId));
});

// DELETE a single user by ID
apiRouter.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const success = userService.delete(userId);
  res.json({ success });
});

// POST a new user
apiRouter.post('/users', (req, res) => {
  const newUser = req.body;
  const createdUser = userService.add(newUser);
  res.json(createdUser);
});

// GET all products
apiRouter.get('/products', (req, res) => {
  res.json(productService.getAllProducts());
});

// GET a single product by ID
apiRouter.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  res.json(productService.getProductById(productId));
});

// DELETE a single product by ID
apiRouter.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const success = productService.deleteProductById(productId);
  res.json({ success });
});

// POST a new product
apiRouter.post('/products', (req, res) => {
  const newProduct = req.body;
  const createdProduct = productService.addProduct(newProduct);
  res.json(createdProduct);
});

// POST login
apiRouter.post('/login', (req, res) => {
  const { email, password } = req.body;

  const { isAuthenticated, user } = authService.login(email, password);

  if (isAuthenticated) {
    res.json({ isAuthenticated, user });
  } else {
    res.status(401).json({ isAuthenticated });
  }
});

module.exports = apiRouter;