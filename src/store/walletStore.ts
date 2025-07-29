import { create } from 'zustand';
import { getWallet, updateWallet as updateWalletApi } from '../services/wallet';

type WalletStore = {
  coins: number;
  fetchWallet: () => Promise<void>;
  updateWallet: (newCoins: number) => Promise<void>;
};

export const useWalletStore = create<WalletStore>((set) => ({
  coins: 0,

  // Load coins from API
  fetchWallet: async () => {
    try {
      const res = await getWallet();
      set({ coins: res.data.coins });
    } catch (err) {
      console.error('Failed to fetch wallet:', err);
    }
  },

  // Update coins via API and state
  updateWallet: async (newCoins: number) => {
    try {
      await updateWalletApi(newCoins);
      set({ coins: newCoins });
    } catch (err) {
      console.error('Failed to update wallet:', err);
    }
  },
}));
