const fs = require('fs');
const path = require('path');
const walletPath = path.join(__dirname, '../data/wallet.json');

function getWallet() {
  const data = fs.readFileSync(walletPath, 'utf-8');
  return JSON.parse(data);
}

function updateWallet(coins) {
  fs.writeFileSync(walletPath, JSON.stringify({ coins }, null, 2));
}

module.exports = { getWallet, updateWallet };

