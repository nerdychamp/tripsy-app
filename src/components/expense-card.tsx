import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IExpense } from '../types';
import { theme } from '../theme';

type TExpenseCardProp = {
  data: IExpense;
  index?: number;
};

export function ExpenseCard({ data, index }: TExpenseCardProp) {
  // const [categoryColo] =
  console.log(data.category);
  return (
    <View
      key={data.id}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 6,
        backgroundColor: theme.colors.categoryBg[data.category.toLowerCase()],
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 18,
              color: theme.colors.grey,
            }}
          >
            {data.title}
          </Text>
          <Text style={{ fontSize: 14, color: theme.colors.text }}>
            {data.category}
          </Text>
        </View>
        <Text
          style={{ fontSize: 22, fontWeight: '700', color: theme.colors.grey }}
        >
          ₹{data.amount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
