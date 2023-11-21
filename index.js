const express = require("express");
const app = express();
const port = 8000;
const homeRoute = require("./routes/home.routes");
const sequelize = require("./db");

app.set('view engine', 'ejs');

app.use("/", homeRoute);
app.use("/uploads", homeRoute);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (err) {
    console.log("Database connection error");
  }
};

start();
