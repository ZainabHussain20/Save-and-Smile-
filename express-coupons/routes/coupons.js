const express = require('express');
const { getAllCoupons, getCoupon, createCoupon, updateCoupon, deleteCoupon,getAllCouponsByBusiness } = require('../controllers/coupons');

const router = express.Router();

router.get('/', getAllCoupons);
router.get('/business/:id', getAllCouponsByBusiness); // Make sure to create this controller
router.get('/:id', getCoupon);
router.post('/', createCoupon);
router.put('/:id', updateCoupon);
router.delete('/:id', deleteCoupon);

module.exports = router;