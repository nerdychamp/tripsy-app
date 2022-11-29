import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { ASSETS } from '../common/constant';
import { Scaffold } from '../components/base';
import AppBar from '../components/base/app-bar';
import { EmptyState } from '../components/empty-state';
import { ExpenseCard } from '../components/expense-card';
import { tripExpenseList } from '../data';
import type { TTripExpenseRouteProp } from '../navigation/types';
import { removeExpense, removeTrip } from '../redux/slice/trip-slice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { theme } from '../theme';

export function TripExpenseScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const routeState = useRoute<TTripExpenseRouteProp>().params.item;

  const tripExpense = useAppSelector((state) => {
    const theTrip = state.trips.trips.find((t) => t.id === routeState.id);
    return theTrip.expenses;
  });

  return (
    <Scaffold style={{ paddingHorizontal: 0 }}>
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
      <View style={styles.bannerContainer}>
        <Image style={styles.banner} source={routeState.banner} />
      </View>
      <View
        style={{
          marginBottom: 16,
          paddingHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: theme.colors.black,
            fontWeight: '700',
            fontSize: 18,
          }}
        >
          Expense
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Add Expense', { item: routeState })
          }
        >
          <View
            style={{
              backgroundColor: theme.colors.orange2,
              paddingVertical: 10,
              paddingHorizontal: 24,
              borderRadius: 9999,
            }}
          >
            <Text
              style={{
                color: theme.colors.white,
                fontWeight: '700',
                fontSize: 14,
              }}
            >
              Add Expenses
            </Text>
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

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: theme.screenWidth,
    height: 260,
    resizeMode: 'contain',
  },
});
