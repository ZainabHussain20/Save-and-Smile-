const express = require('express');
const { getAllCoupons, getCoupon, createCoupon, updateCoupon, deleteCoupon } = require('../controllers/coupons');

const router = express.Router();

router.get('/', getAllCoupons);
router.get('/:id', getCoupon);
router.post('/', createCoupon);
router.put('/:id', updateCoupon);
router.delete('/:id', deleteCoupon);

module.exports = router;