import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { ASSETS } from '../common/constant';
import { Scaffold } from '../components/base';
import { AppBar } from '../components/base/app-bar';
import { EmptyState } from '../components/empty-state';
import { ExpenseCard } from '../components/expense-card';
import { tripExpenseList } from '../data';
import type { TTripExpenseRouteProp } from '../navigation/types';
import { removeExpense, removeTrip } from '../redux/slice/trip-slice';
import { useAppDispatch, useAppSelector } from '../redux/store';

export function TripExpenseScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const routeState = useRoute<TTripExpenseRouteProp>().params.item;

  const tripExpense = useAppSelector((state) => {
    const theTrip = state.trips.trips.find((t) => t.id === routeState.id);
    return theTrip.expenses;
  });

  return (
    <Scaffold className="px-0">
      <AppBar
        onPress={() => navigation.goBack()}
        title={routeState.place}
        showDeleteButton={true}
        onDelete={() => {
          console.log(routeState.id);
          dispatch(removeTrip(routeState.id));
          navigation.goBack();
        }}
      />
      <View className="justify-center items-center">
        <Image
          source={routeState.banner}
          resizeMode="contain"
          className="w-screen h-[260px]"
        />
      </View>
      <View className="mb-4 px-5 flex-row justify-between items-center">
        <Text className="text-lg font-bold text-black">Expense</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Add Expense', { item: routeState })
          }
        >
          <View className={`py-[10] px-6 rounded-full bg-orange2`}>
            <Text className="text-sm font-bold text-white">Add Expenses</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tripExpense}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyState
            source={ASSETS.IMAGES.expenseEmpty1}
            comment="No expense? Go and spend some money! 💰💵"
          />
        }
        renderItem={({ item, index }) => (
          <ExpenseCard
            data={item}
            onDelete={(id) => {
              dispatch(
                removeExpense({
                  tripId: routeState.id,
                  expenseId: id,
                }),
              );
            }}
          />
        )}
      />
    </Scaffold>
  );
}
