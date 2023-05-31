import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <View className="flex-1 bg-teal-200 justify-center items-center">
      <Slot />
    </View>
  );
}
