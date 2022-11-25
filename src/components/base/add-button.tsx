import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { theme } from '../../theme';

type TAddButtonProps = Omit<
  React.ComponentProps<typeof TouchableOpacity>,
  'style'
> & {
  text?: string;
  style?: StyleProp<ViewStyle>;
};

export function AddButton({ text, style, ...rest }: TAddButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <View style={[styles.AddButton, style && style]}>
        <Text style={styles.buttonText}>{text || 'Add'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  AddButton: {
    backgroundColor: theme.colors.brand,
    paddingVertical: 16,
    borderRadius: 9999,
    display: 'flex',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
