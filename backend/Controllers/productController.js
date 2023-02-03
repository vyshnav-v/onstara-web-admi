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

module.exports = { addCategory };
