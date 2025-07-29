const merchants = require('../data/merchants.json');
const { getWallet, updateWallet } = require('../helpers/walletUtils');

function bookMerchant(req, res) {
  const { merchantId } = req.body;
  const merchant = merchants.find(m => m.id === merchantId);
  if (!merchant) return res.status(404).json({ error: 'Merchant not found' });

  const orderValue = Math.floor(Math.random() * 301) + 200;
  let wallet = getWallet();

  let paidFromWallet = false;
  let cashback = 0;

  if (wallet.coins >= orderValue) {
    wallet.coins -= orderValue;
    paidFromWallet = true;
  } else {
    cashback = Math.floor((orderValue * merchant.cashback) / 100);
    wallet.coins += cashback;
  }

  updateWallet(wallet.coins);

  res.json({
    message: 'Booking confirmed',
    orderValue,
    cashback,
    paidFromWallet,
    updatedWallet: wallet.coins
  });
}

function getWalletHandler(_, res) {
  const wallet = getWallet();
  res.json(wallet);
}

module.exports = { bookMerchant, getWalletHandler };

