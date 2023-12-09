const express = require("express");
const pageRoutes = require("./routes/page.routes");
const apiRoutes = require("./routes/api.routes");
const { connect, sync } = require("./db");
const app = express();
const port = 3000;

async function init() {
  await connect();
  await sync();
}
//DATABASE connection
init();

//SET THE VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Set the JSON middleware
app.use(express.json());

// ROUTE HANDLING
app.use(pageRoutes);
app.use("/api", apiRoutes);

// LISTEN FOR REQUESTS!!!!
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
