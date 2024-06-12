const Category = require('../models/category');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('coupons');
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories', error: err });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate('coupons');
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching category', error: err });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Error creating category', error: err });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Error updating category', error: err });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category', error: err });
  }
};

module.exports={
  deleteCategory, 
  updateCategory,
  createCategory,
  getCategory,
  getAllCategories,
}