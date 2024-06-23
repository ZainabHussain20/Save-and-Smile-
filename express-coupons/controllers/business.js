const Business = require('../models/business');

const registerBusiness = async (req, res) => {
  try {
    const { name, description } = req.body;
    const business = await Business.create({ name, description });
    res.status(201).json(business);
  } catch (error) {
    console.error('Error in registering business:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
const getAllBusinesses = async (req, res) => {
  const category = req.query.category;
  try {
    const businesses = await Business.find({category:category})
    res.status(200).json(businesses);
  } catch (err) {
    res.status(500).json({ message: `Error fetching businesses in category ${category}`, error: err });
  }
};
const createBusiness = async (req, res) => {
  try {
    const business = new Business(req.body);
    await business.save();
    res.status(201).json(business);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error creating business', error: err });
  }
};
const updateBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await Business.findByIdAndUpdate(id, req.body, { approved: true }, { new: true });
    res.status(200).json(business);
  } catch (error) {
    console.error('Error approving business:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
const deleteBusiness = async (req, res) => {
  try {
    await Business.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Business deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting Business', error: err });
  }
};
module.exports = {
  registerBusiness,
  getAllBusinesses,
  updateBusiness,
  createBusiness,
  deleteBusiness
};