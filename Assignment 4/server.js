const express = require("express");
const pageRoutes = require("./routes/page.routes");
const apiRoutes = require("./routes/api.routes");
const app = express();
const port = 3000;

//SET THE VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// ROUTE HANDLING
app.use(pageRoutes);
app.use("/api", apiRoutes);

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Sequlize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SenecaDB', 'sezgunb', '7vBGc1MFAWia', {
  host: 'ep-fragrant-sunset-65383109.us-east-2.aws.neon.tech',
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });