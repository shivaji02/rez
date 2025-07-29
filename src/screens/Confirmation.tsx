import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { getWallet } from '../services/wallet';
import WalletBadge from '../components/Badge';





type RootStackParamList = {
  Confirmation: { status: string };
};

export default function Confirmation() {
  const route = useRoute<RouteProp<RootStackParamList, 'Confirmation'>>();
  const { status } = route.params;

  const [wallet, setWallet] = useState<{ balance: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWallet()
      .then((res) => {
        setWallet(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator style={{ marginTop: 40 }} size="large" />;

  return (
    <View style={styles.container}>
      <WalletBadge />
      {status === 'success' && (
        <Text style={styles.title}>Booking Confirmed 🎉</Text>
      )}
     
      <Text style={styles.meta}>Updated Wallet Balance:</Text>
      <Text style={styles.balance}>₹{wallet?.balance ?? 0}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07464dff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  meta: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 10,
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ff99',
    marginTop: 8,
  },
});
