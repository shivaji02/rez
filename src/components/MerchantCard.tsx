import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MerchantCard({ name, category, cashback }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.meta}>{category}</Text>
      <Text style={styles.cb}>{cashback}% Back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 6,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100
  },
  title: { fontWeight: 'bold', fontSize: 14 },
  meta: { color: '#666', fontSize: 12 },
  cb: { marginTop: 4, fontSize: 13, color: 'green',alignItems:'flex-end' }
});
