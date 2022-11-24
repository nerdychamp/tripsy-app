import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme';

// type TScaffoldProps = ViewProps;
type TScaffoldProps = React.ComponentProps<typeof SafeAreaView>;

export function Scaffold({ children, style, ...rest }: TScaffoldProps) {
  return (
    <SafeAreaView style={[styles.container, style && style]} {...rest}>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bgLight,
    paddingHorizontal: 16,
    paddingBottom: 32,
    paddingTop: 10,
  },
});
