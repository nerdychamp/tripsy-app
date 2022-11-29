import { styled } from 'nativewind';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme';

// type TScaffoldProps = ViewProps;
type TScaffoldProps = React.ComponentProps<typeof SafeAreaView>;

export const Scaffold = styled(SafeArea, { props: { style: true } });

function SafeArea({ children, style, ...rest }: TScaffoldProps) {
  return (
    <SafeAreaView style={style} className="flex-1 bg-bgLight" {...rest}>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      {/* <StatusBar /> */}
      {children}
    </SafeAreaView>
  );
}
