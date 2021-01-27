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
const path = require("path");

app.use(cors());
dotenv.config();
app.use(express.static(path.join(__dirname, "frontend/build")));
app.use('/', express.static('frontend'));
app.use(bodyParser.json());
 
connectDB()
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);




app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
  });
app.listen(config.PORT, () => {
    console.log('Server started at http://localhost:5000');
  });