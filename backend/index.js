
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db.js");
const Product = require('./models/productModel')
const Category = require('./models/categoryModel')

const app = express();
dotenv.config({path : "../.env"});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', (req,res) => {
  res.json({
    name:"vaishnav"
  })
})



const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, console.log(`server started at port ${PORT}`));
