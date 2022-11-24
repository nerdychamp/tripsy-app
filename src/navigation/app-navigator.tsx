import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddExpenseScreen,
  AddTripScreen,
  HomeScreen,
  TripExpenseScreen,
} from '../screens';

type StackParamList = {
  Home: undefined;
  'Add Trip': undefined;
  'Add Expense': undefined;
  'Trip Expense': undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add Trip" component={AddTripScreen} />
      <Stack.Screen name="Add Expense" component={AddExpenseScreen} />
      <Stack.Screen name="Trip Expense" component={TripExpenseScreen} />
    </Stack.Navigator>
  );
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
