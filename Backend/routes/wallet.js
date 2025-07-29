const express = require('express');
const router = express.Router();
const { getWallet, updateWallet } = require('../helpers/walletUtils');
const { getWalletHandler } = require('../controllers/booking');

// GET /wallet
router.get('/', (req, res) => {
  const wallet = getWallet();
  res.json(wallet);
});

router.get('/', getWalletHandler);


// POST /wallet
router.post('/', (req, res) => {
  const { coins } = req.body;
  if (typeof coins !== 'number') {
    return res.status(400).json({ error: 'Coins must be a number' });
  }

  updateWallet(coins);
  res.json({ message: 'Wallet updated', coins });
});

module.exports = router;
