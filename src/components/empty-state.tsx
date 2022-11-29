import { View, Image, Text, ImageSourcePropType } from 'react-native';
import { ASSETS } from '../common/constant';
import { theme } from '../theme';

type TEmptyStateProps = {
  comment: string;
  source?: ImageSourcePropType;
};

export function EmptyState({ comment, source }: TEmptyStateProps) {
  return (
    <View className="mt-8 items-center justify-center">
      <Image
        style={{
          resizeMode: 'contain',
          width: theme.screenWidth / 1.5,
        }}
        source={source || ASSETS.IMAGES.expenseEmpty}
        className="h-[240]"
      />
      <Text className="font-semibold text-text">{comment}</Text>
    </View>
  );
}
