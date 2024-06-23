const express = require('express');
const { registerBusiness, getAllBusinesses, updateBusiness ,  createBusiness , deleteBusiness } = require('../controllers/business');
const { stripToken, verifyToken } = require('../middleware');
const { isAdmin } = require('../middleware/role');

const router = express.Router();

router.post('/', stripToken, verifyToken, isAdmin, createBusiness);
router.post('/', stripToken, verifyToken, isAdmin, registerBusiness); // Admin only
router.get('/', getAllBusinesses); // Authenticated users
router.put('/:id', stripToken, verifyToken, isAdmin, updateBusiness); // Admin only
router.delete('/:id', deleteBusiness); // Admin only
module.exports = router;