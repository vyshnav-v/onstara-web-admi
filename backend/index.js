
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db.js");
const productController = require("./Controllers/productController");

const app = express();
dotenv.config({path : "../.env"});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use('/', (req,res) => {
//   res.json({
//     name:"vaishnav"
//   })
// })
app.post("/api/categories", productController.addCategory)



const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, console.log(`server started at port ${PORT}`));
