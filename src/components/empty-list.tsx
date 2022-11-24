import { View, Image, Dimensions, Text } from 'react-native';
import { ASSETS } from '../common/constant';
import { theme } from '../theme';

export function EmptyList() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        style={{
          resizeMode: 'contain',
          width: theme.screenWidth / 1.5,
          height: 240,
        }}
        source={ASSETS.IMAGES.expenseEmpty}
      />
      <Text
        style={{
          fontWeight: '600',
          color: theme.colors.text,
        }}
      >
        Looks like you haven't had any trips yet!
      </Text>
    </View>
  );
}
