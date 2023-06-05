import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function AddExpense() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">Add expense here</Text>
      <Link href="trip-expense">Go back</Link>
    </View>
  );
}
