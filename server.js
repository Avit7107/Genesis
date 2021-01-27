const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const config=require("./config");
const mongoose=require("mongoose");
const userRoute=require("./routes/userRoute");
const productRoute=require("./routes/productRoute");
const orderRoute=require("./routes/orderRoute")
const connectDB = require("./mongodb");
const PREFIX = "/api";
const { isAuth, isAdmin }= require('./util');

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
 
connectDB()
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);





// app.get("/api/products/:id", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     const productId = req.params.id;
//     const product = products.find(x => x._id === productId);
//     if (product)
//       res.send(product);
//     else
//       res.status(404).send({ msg: "Product Not Found." })
//   })
//   });



// app.get("/api/products", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const products = JSON.parse(data);
//     console.log(products);
//       res.send(products);
//   });
// });


app.listen(5000, () => { console.log("Server started at http://localhost:5000") });