import { Text, View } from 'react-native';
import { Link, useNavigation, useRouter } from 'expo-router';

export default function TripExpense() {
  const navigation = useNavigation();
  const route = useRouter();

  console.log(JSON.stringify(navigation.getState().routes, null, 2));

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">Trip Expense List</Text>
      <Link href="add-expense">Add Expense</Link>
      <Link href="/">Go back</Link>
    </View>
  );
}
