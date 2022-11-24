import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scaffold } from '../components/base';
import type { TTripExpenseRouteProp } from '../navigation/types';

export function TripExpenseScreen() {
  const route = useRoute<TTripExpenseRouteProp>();
  console.log(route);
  return (
    <Scaffold>
      <View>
        <Text>TripExpenseScreen</Text>
        <Text>{route.params.item.place}</Text>
      </View>
    </Scaffold>
  );
}

const styles = StyleSheet.create({});
