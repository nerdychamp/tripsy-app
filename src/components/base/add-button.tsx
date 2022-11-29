import { styled } from 'nativewind';
import React from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type TAddButtonProps = Omit<
  React.ComponentProps<typeof TouchableOpacity>,
  'style'
> & {
  text?: string;
  style?: StyleProp<ViewStyle>;
};

export const AddButton = styled(Button, { props: { style: true } });

export function Button({ text, style, ...rest }: TAddButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <View
        style={style}
        className="bg-brand py-4 rounded-full flex items-center"
      >
        <Text className="text-black text-base font-bold">{text || 'Add'}</Text>
      </View>
    </TouchableOpacity>
  );
}
