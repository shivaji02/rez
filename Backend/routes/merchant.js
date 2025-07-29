const express = require('express');
const { getMerchants } = require('../controllers/merchant');

const router = express.Router();
router.get('/', getMerchants);

module.exports = router;
