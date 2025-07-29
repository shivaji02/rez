import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useMerchants } from '../services/merchants';
import MerchantCard from '../components/MerchantCard';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import WalletBadge from '../components/Badge';



type RootStackParamList = {
  MerchantList: undefined;
  MerchantDetails: { merchant: any };
};

export default function MerchantList() {

console.log('MerchantList component rendered');
  const { data, isLoading } = useMerchants();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MerchantList'>>();

const handleMerchantDetail = (merchant: any) => {
  navigation.navigate('MerchantDetails', { merchant });
  console.log('Merchant Details:>>>>>>>', merchant);
};  

  if (isLoading) {
    return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>
      <WalletBadge />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleMerchantDetail(item)}
          >
            <MerchantCard
              name={item.name}
              category={item.category}
              cashback={item.cashback}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#07464dff',
  justifyContent: 'center',   
  alignItems: 'center',        
},
  row: {
    justifyContent: 'space-between',
  },
  item: {
    justifyContent: 'flex-end',
    backgroundColor: '#07464dff',
    width: '48%',

    alignSelf:'center',
    top:100
  },
  contentContainer: {
    paddingBottom: 20,
  },
  loadingIndicator: {
    marginTop: 40,
  },
});
