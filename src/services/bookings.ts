import api from '../services/baseUrl';
export const bookMerchant = (merchantId: string) =>
  api.post('/book', { merchantId });
