var express = require('express');
var router = express.Router();
const { getUser, updateUser, deleteUser, getSavedCoupons } = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
// router.get('/:id/saved-coupons', getSavedCoupons);

module.exports = router;
