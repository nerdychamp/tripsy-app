import { styled } from 'nativewind';
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

type IconButtonProps = Omit<
  React.ComponentProps<typeof TouchableOpacity>,
  'style'
> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const IconButton = styled(Button, {
  props: {
    style: true,
  },
});

function Button({ children, style, ...rest }: IconButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <View
        style={style}
        className="h-10 w-10 justify-center items-center rounded-full"
      >
        {/* <Image style={styles.backIcon} source={ASSETS.ICONS.back} /> */}
        {children}
      </View>
    </TouchableOpacity>
  );
}
