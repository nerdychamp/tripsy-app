import { StyleProp, Text, TextStyle, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import { IconButton } from './icon-button';
import { ViewProps } from 'react-native';
import { styled } from 'nativewind';
import { theme } from '../../theme';

type TAppBarProps = ViewProps & {
  title: string;
  showDeleteButton?: boolean;
  showBackButton?: boolean;
  onPress?: () => void;
  onDelete?: () => void;
  titleStyle?: StyleProp<TextStyle>;
};

export const AppBar = styled(Bar, {
  props: {
    titleStyle: true,
  },
});

function Bar({
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
      style={style}
      className="flex-row items-center justify-between h-[60] px-3"
    >
      <View className="flex-row items-center justify-center">
        {showBackButton && (
          <IconButton onPress={onPress}>
            <Ionicons
              name="chevron-back-outline"
              size={28}
              color="theme.colors.grey"
            />
          </IconButton>
        )}
        <Text
          style={titleStyle}
          className="text-[22px] font-bold text-black ml-3"
        >
          {title}
        </Text>
      </View>
      {showDeleteButton && (
        <IconButton onPress={onDelete}>
          <Ionicons
            name="trash-bin-outline"
            size={22}
            color={theme.colors.grey}
          />
        </IconButton>
      )}
    </View>
  );
}
