const express = require("express");
const UsersService = require("../services/users.service");
const apiRoutes = express.Router();

//Users
apiRoutes.get("/users", async (req, res) => {
  const users = await UsersService.findAll();
  res.json(users);
});

apiRoutes.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await UsersService.findById(id);
  res.json(user);
});

apiRoutes.post("/users", async (req, res) => {
  const user = await UsersService.create(req.body);
  res.json(user);
});

apiRoutes.put("/users", async (req, res) => {
  const user = await UsersService.update(req.body);
  res.json(user);
});

apiRoutes.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  await UsersService.delete(req.params.id);
  res.json({ message: `User ${id} deleted.` });
});

module.exports = apiRoutes;
