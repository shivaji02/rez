import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MerchantList from '../screens/MerchantList';
import MerchantDetails from '../screens/MerchantDetails';
import Confirmation from '../screens/Confirmation';
import Wallet from '../screens/Wallet';

const Stack = createStackNavigator();
console.log("AppNavigator rendered>>>>");
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MerchantList"
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name="MerchantList" component={MerchantList} />
        <Stack.Screen name="MerchantDetails" component={MerchantDetails} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="Wallet" component={Wallet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
