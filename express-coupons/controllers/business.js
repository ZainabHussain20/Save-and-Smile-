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
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    console.error('Error fetching businesses:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const approveBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await Business.findByIdAndUpdate(id, { approved: true }, { new: true });
    res.status(200).json(business);
  } catch (error) {
    console.error('Error approving business:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  registerBusiness,
  getAllBusinesses,
  approveBusiness,
};
