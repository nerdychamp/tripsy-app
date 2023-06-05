import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function TripExpense() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">Trip Expense List</Text>
      <Link href="add-expense">Add Expense</Link>
      <Link href="/">Go back</Link>
    </View>
  );
}
