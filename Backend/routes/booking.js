const express = require('express');
const { bookMerchant } = require('../controllers/booking');

const router = express.Router();
router.post('/', bookMerchant);

module.exports = router;
