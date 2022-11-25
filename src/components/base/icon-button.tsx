import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type IconButtonProps = Omit<
  React.ComponentProps<typeof TouchableOpacity>,
  'style'
> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function IconButton({ children, style, ...rest }: IconButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <View
        style={[
          {
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 99999,
          },
          style && style,
        ]}
      >
        {/* <Image style={styles.backIcon} source={ASSETS.ICONS.back} /> */}
        {children}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backIcon: {
    height: 35,
    width: 35,
  },
});
