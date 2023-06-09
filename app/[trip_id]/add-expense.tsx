import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { AddButton, AppBar, Scaffold } from '../../src/components/base';
import { IExpense } from '../../src/types';
import { useTripActions } from '../../src/zustand/trip-store';
import { ASSETS } from '../../src/common/constant';
import { theme } from '../../src/theme';

const CATEGORIES: string[] = [
  'Food',
  'Entertainment',
  'Commute',
  'Shopping',
  'Others',
];

export default function AddExpense() {
  const router = useRouter();
  const { trip_id: tripId } = useLocalSearchParams();

  const { addExpense } = useTripActions();

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
    addExpense(+tripId, expense);
    router.back();
  };

  return (
    <Scaffold>
      <AppBar onPress={() => router.back()} title="Add Expense" />
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
