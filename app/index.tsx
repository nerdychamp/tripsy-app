import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">This is home route</Text>
      <Link href={'add-trip'}> Add Trip </Link>
      <Link href={'trip-expense'}> My Trips </Link>
    </View>
  );
}
