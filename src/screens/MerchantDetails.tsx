import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../components/Button';
import { useWalletStore } from '../store/walletStore';

type RootStackParamList = {
  MerchantDetails: { merchant: any };
  Confirmation: { status: string };
};

export default function MerchantDetails() {
  const route = useRoute<RouteProp<RootStackParamList, 'MerchantDetails'>>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MerchantDetails'>>();
  const { merchant } = route.params;
  const { coins, updateWallet } = useWalletStore();
  const cashbackAmount = (merchant.price * merchant.cashback) / 100;
  const finalPrice = merchant.price - cashbackAmount;

  const handleBookNow = async () => {
      await navigation.navigate('Confirmation', { status: 'success' });
      const bonus = 50;
      const newBalance = coins + bonus;
      await updateWallet(newBalance);
    console.log(`Booking successful! New wallet balance: ₹${newBalance}`);
  };

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.overlay}>
          <Text style={styles.overlayTitle}>{merchant.name}</Text>
          <Text style={styles.overlayCategory}>{merchant.category}</Text>
        </View>
      {/* Top - Image + Overlay Text */}
      <View style={styles.imageContainer}>
        <View style={styles.imageBox}>
          {/* Dummy image substitute */}
          <Text style={styles.imageText}>👨🏻‍💻</Text>
        </View>
       
      </View>

      {/* Bottom - Pricing & Book */}
      <View style={styles.details}>
        <View style={styles.priceRow}>
          <Text style={styles.label}>Original Price:</Text>
          <Text style={styles.value}>₹{merchant.price}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.label}>Cashback:</Text>
          <Text style={styles.value}>{merchant.cashback}%</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.label}>You Save:</Text>
          <Text style={styles.value}>₹{cashbackAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.label}>To Pay:</Text>
          <Text style={[styles.value, styles.finalPrice]}>₹{finalPrice.toFixed(2)}</Text>
        </View>

        <Button
          title="Book Now"
          onPress={handleBookNow}
          style={styles.bookNowButton}
          textStyle={{ fontSize: 18 }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07464dff',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 70,
  },
  imageBox: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  imageText: {
    fontSize: 60,
  },
  overlay: {
    marginTop: 80,
    alignItems: 'center',
  },
  overlayTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  overlayCategory: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 4,
  },
  details: {
    marginTop: 30,
    paddingHorizontal: 24,
    gap: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: '#ccc',
  },
  value: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  finalPrice: {
    color: '#00ff99',
  },
  bookNowButton: {
    marginTop: 30,
    alignSelf: 'center',
    minWidth: 200,
  },
});
