const express = require('express');
const { registerBusiness, getAllBusinesses, approveBusiness } = require('../controllers/business');
const { stripToken, verifyToken } = require('../middleware');
const { isAdmin } = require('../middleware/role');

const router = express.Router();

router.post('/', stripToken, verifyToken, isAdmin, registerBusiness); // Admin only
router.get('/', stripToken, verifyToken, getAllBusinesses); // Authenticated users
router.put('/:id/approve', stripToken, verifyToken, isAdmin, approveBusiness); // Admin only

module.exports = router;