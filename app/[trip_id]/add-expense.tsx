import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { Scaffold } from '../../src/components/base';

export default function AddExpense() {
  const { trip_id: tripId } = useLocalSearchParams();

  return (
    <Scaffold>
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-bold">Add expense here</Text>
        <Link href={`${tripId}`}>Go back</Link>
      </View>
    </Scaffold>
  );
}
