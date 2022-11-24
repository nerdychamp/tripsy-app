import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export function BackButton(
  props: React.ComponentProps<typeof TouchableOpacity>,
) {
  return (
    <TouchableOpacity {...props}>
      <View
        style={{
          backgroundColor: 'white',
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 99999,
        }}
      >
        {/* <Image style={styles.backIcon} source={ASSETS.ICONS.back} /> */}
        <Ionicons name="chevron-back-outline" size={28} color="black" />
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
