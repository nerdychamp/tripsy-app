import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddExpenseScreen,
  AddTripScreen,
  HomeScreen,
  TripExpenseScreen,
} from '../screens';
import type { TStackParamList } from './types';

const Stack = createNativeStackNavigator<TStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Trip"
        component={AddTripScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Add Expense" component={AddExpenseScreen} />
      <Stack.Screen name="Trip Expense" component={TripExpenseScreen} />
    </Stack.Navigator>
  );
}
