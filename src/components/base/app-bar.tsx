import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { BackButton } from './back-button';
import { theme } from '../../theme';

type TAppBarProps = {
  title: string;
  onPress?: () => void;
  showBackButton?: boolean;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

export default function AppBar({
  title,
  onPress,
  style,
  titleStyle,
  showBackButton = true,
}: TAppBarProps) {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
          paddingHorizontal: 16,
        },
        style && style,
      ]}
    >
      {showBackButton && <BackButton onPress={onPress} />}
      <Text
        style={[
          {
            fontSize: 22,
            fontWeight: '700',
            color: theme.colors.grey,
            marginLeft: 20,
          },
          titleStyle && titleStyle,
        ]}
      >
        {title}
      </Text>
    </View>
  );
}
