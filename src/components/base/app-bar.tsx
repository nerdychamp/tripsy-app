import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import { IconButton } from './icon-button';
import { theme } from '../../theme';

type TAppBarProps = {
  title: string;
  showDeleteButton?: boolean;
  onPress?: () => void;
  onDelete?: () => void;
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
  showDeleteButton = false,
  onDelete,
}: TAppBarProps) {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
          paddingHorizontal: 16,
        },
        style && style,
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {showBackButton && (
          <IconButton onPress={onPress} style={{}}>
            <Ionicons
              name="chevron-back-outline"
              size={28}
              color="theme.colors.grey"
            />
          </IconButton>
        )}
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
      {showDeleteButton && (
        <IconButton onPress={onDelete}>
          <Ionicons
            name="trash-bin-outline"
            size={28}
            color="theme.colors.grey"
          />
        </IconButton>
      )}
    </View>
  );
}
