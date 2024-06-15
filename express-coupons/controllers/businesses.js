const Business = require('../models/Business');

const createBusiness = async (req, res) => {
  try {
    const business = new Business(req.body);
    await business.save();
    res.status(201).json(business);
  } catch (err) {
    res.status(500).json({ message: 'Error creating business', error: err });
  }
};

const getAllBusinesses = async (req, res) => {
    const category = req.query.category;
    try {
      const businesses = await Business.findAll({category:req.query.category})[{restaurants},{cinema},{malls}]
      res.status(200).json(businesses);
    } catch (err) {
      res.status(500).json({ message: `Error fetching businesses in category ${category}`, error: err });
    }
  };

module.exports = {
  createBusiness, 
  getAllBusinesses
};