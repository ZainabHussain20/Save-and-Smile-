const User = require('../models/user');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('savedCoupons');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err });
  }
};

exports.getSavedCoupons = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('savedCoupons');
    res.status(200).json(user.savedCoupons);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching saved coupons', error: err });
  }
};
