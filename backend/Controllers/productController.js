const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

//category
const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = new Category({ name });
    await category.save();

    res.status(201).json({ category });
    // req.send({ category: category })
  } catch (error) {
    console.error(error.message);
  }
};


const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();

        res.json({ categories });
        
    } catch (error) {
        console.log(error.message);
    }
 }


module.exports = { addCategory,getCategories };
