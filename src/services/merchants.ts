import { useQuery } from '@tanstack/react-query';
import api from './baseUrl';

export type Merchant = {
  id: number;
  name: string;
  category: string;
  cashback: number;
};

export const useMerchants = () =>
  useQuery<Merchant[]>({
    queryKey: ['merchants'],
    queryFn: async () => {
      const res = await api.get('/merchants');
      console.log(`API Response>>>rez app: ${JSON.stringify(res.data)}`);
      return res.data;
    },
  });
