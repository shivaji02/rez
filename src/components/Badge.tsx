import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useWalletStore } from '../store/walletStore';

export default function WalletBadge() {
  const { coins, fetchWallet } = useWalletStore();

  useEffect(() => {
    fetchWallet(); // Load once
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>💰 {coins} Coins</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    position: 'absolute',
    top: 50,
    right: 20,
    elevation: 5,
    shadowColor: '#000',
  },
  label: {
    color: '#000',
    fontWeight: 'bold',
  },
});
