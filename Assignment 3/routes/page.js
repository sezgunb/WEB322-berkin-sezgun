const express = require("express");
const pageRouter = express.Router();
const usersService = require("../models/userServices");

//login
pageRouter.get("/", (req, res) => {
  res.render("login");
});

//list
pageRouter.post("/", (req, res) => {
  res.redirect(`/list`);
});

pageRouter.get("/list", (req, res) => {
  const itemsToDisplay = 15;
  const page = parseInt(req.query?.page) || 1;
  const start = (page - 1) * itemsToDisplay;
  const end = start + itemsToDisplay;
  const users = usersService.getAllUsers();
  const filteredUsers = users.slice(start, end);

  res.render("list", {
    title: "list",
    users: filteredUsers,
    itemsToDisplay,
    page,
    start,
    end,
  });
});

//detail
pageRouter.get("/detail/:id", (req, res) => {
  const users = usersService.getAllUsers();
  const user = users.find((user) => {
    return user.id === parseInt(req.params.id);
  });
  res.render("detail", { user });
});

module.exports = pageRouter;