const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoutes = require("./routes/product.route.js");
const app = express();

//미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Default Route
app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

//routes
app.use("/api/products", productRoutes);

//MongoDB 연결
mongoose
  .connect(
    "mongodb+srv://kisusu:23456789@backenddb.je6ezhi.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB!!!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed...");
  });
