import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ASSETS } from '../common/constant';
import { AddButton, Scaffold } from '../components/base';
import { AppBar } from '../components/base/app-bar';
import type { TAddExpenseRouteProp } from '../navigation/types';
import { theme } from '../theme';
import { IExpense } from '../types';
import { useTripActions } from '../zustand/trip-store';

const CATEGORIES: string[] = [
  'Food',
  'Entertainment',
  'Commute',
  'Shopping',
  'Others',
];

export function AddExpenseScreen() {
  const { addExpense } = useTripActions();
  const navigation = useNavigation();
  const routeState = useRoute<TAddExpenseRouteProp>().params.item;

  const [title, setTitle] = React.useState<string>('');
  const [amount, setAmount] = React.useState<string>('');
  const [category, setCategory] = React.useState<string>('');

  const handleAddExpense = () => {
    const expense: IExpense = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount.trim()),
      category: category as IExpense['category'],
    };
    addExpense(routeState.id, expense);
    navigation.navigate('Trip Expense', { item: routeState });
  };

  return (
    <Scaffold>
      <AppBar onPress={() => navigation.goBack()} title="Add Expense" />
      <View className="justify-center items-center">
        <Image
          resizeMode="center"
          className="w-screen h-[200px]"
          source={ASSETS.IMAGES.addExpense}
        />
      </View>
      <View className="px-4">
        <View className="mt-4">
          <Text className="text-text text-xl font-semibold">For what?</Text>
          <TextInput
            className="bg-white mt-2 py-3 px-5 rounded-full"
            value={title}
            onChangeText={(val) => setTitle(val)}
          />
        </View>
        <View className="mt-4">
          <Text className="text-text text-xl font-semibold">How much?</Text>
          <TextInput
            className="bg-white mt-2 py-3 px-5 rounded-full"
            value={amount}
            onChangeText={(val) => setAmount(val)}
          />
        </View>
        <View className="mt-4">
          <Text className="text-text text-xl font-semibold">
            Select Category
          </Text>
          <View className="flex-row flex-wrap mt-3">
            {CATEGORIES.map((cat, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor:
                    category === cat
                      ? theme.colors.categoryBg[cat.toLowerCase()]
                      : '#fff',
                }}
                className="py-3 px-5 mr-[10] mb-4 rounded-xl"
                onPress={() => setCategory(cat)}
              >
                <Text className="text-3 font-semibold text-black">{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <AddButton
          onPress={handleAddExpense}
          text="Add Expense"
          className="mt-16 bg-orange2"
        />
      </View>
    </Scaffold>
  );
}
