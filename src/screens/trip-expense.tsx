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
import { BackButton, Scaffold } from '../components/base';
import { EmptyState } from '../components/empty-state';
import { ExpenseCard } from '../components/expense-card';
import { expenseList } from '../data';
import type { TTripExpenseRouteProp } from '../navigation/types';
import { useAppSelector } from '../redux/store';
import { theme } from '../theme';
import { ITrip } from '../types';

export function TripExpenseScreen() {
  const navigation = useNavigation();
  const route = useRoute<TTripExpenseRouteProp>();
  const routeTrip = route.params.item;

  const expense: ITrip['expenses'] = useAppSelector((state) => {
    const trips = state.trips.trips;
    const theTrip = trips.filter((trip) => trip.id === routeTrip.id);
    if (theTrip.length > 1) {
      return theTrip[0].expenses;
    }
    return [];
  });

  return (
    <Scaffold style={{ paddingHorizontal: 0 }}>
      {/* <View> */}
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.heading}>{routeTrip.place} Expenses</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image style={styles.banner} source={routeTrip.banner} />
        {/* <View style={styles.placeContainer}>
            <Text style={styles.place}>{routeTrip.place}</Text>
          </View> */}
      </View>
      <View
        style={{
          marginVertical: 16,
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
        <TouchableOpacity>
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
        data={expenseList}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyState
            source={ASSETS.IMAGES.expenseEmpty1}
            comment="No expense? Go and spend some money!"
          />
        }
        renderItem={({ item, index }) => <ExpenseCard data={item} />}
      />
      {/* </View> */}
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.black,
    marginLeft: 20,
  },
  bannerContainer: {
    // backgroundColor: theme.colors.brandLight,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  banner: {
    width: theme.screenWidth,
    height: 220,
    resizeMode: 'cover',
  },
  // placeContainer: {
  //   position: 'absolute',
  //   backgroundColor: theme.colors.white,
  //   paddingVertical: 12,
  //   // minWidth: '40%',
  //   paddingHorizontal: 28,
  //   borderRadius: 99999,
  //   bottom: -25,
  // },
  // place: {
  //   textAlign: 'center',
  //   color: theme.colors.orange2,
  //   fontSize: 20,
  //   fontWeight: '500',
  // },
});
