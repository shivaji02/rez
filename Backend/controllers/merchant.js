const merchants = require('../data/merchants.json');

console.log('Merchants data loaded:', merchants.length, 'merchants found');
function getMerchants(req, res) {
  res.json(merchants);
}

module.exports = { getMerchants };
