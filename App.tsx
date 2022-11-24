import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Scaffold } from './src/components/base';
import { AppNavigator } from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
