import {  StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  console.log("App.tsx rendered>>>>");
  return (
    <QueryClientProvider client={new QueryClient()}>
    <View style={styles.container}>
      <AppNavigator />
    </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,},
});

export default App;
