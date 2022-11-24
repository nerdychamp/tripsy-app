import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/navigation';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
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
