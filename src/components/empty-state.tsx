import {
  View,
  Image,
  Dimensions,
  Text,
  ImageSourcePropType,
} from 'react-native';
import { ASSETS } from '../common/constant';
import { theme } from '../theme';

type TEmptyStateProps = {
  comment: string;
  source?: ImageSourcePropType;
};

export function EmptyState({ comment, source }: TEmptyStateProps) {
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
        source={source || ASSETS.IMAGES.expenseEmpty}
      />
      <Text
        style={{
          fontWeight: '600',
          color: theme.colors.text,
        }}
      >
        {comment}
      </Text>
    </View>
  );
}
