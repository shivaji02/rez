import api from './baseUrl';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const getWallet = () => api.get('/wallet');



export const updateWallet = (coins: number) => api.post('/wallet', { coins });


export const useWallet = () => {
  return useQuery({
    queryKey: ['wallet'],
    queryFn: getWallet,
  });
};

export const useUpdateWallet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (coins: number) => updateWallet(coins),
    onSuccess: () => {
      queryClient.invalidateQueries(['wallet']); 
    },
  });
};
