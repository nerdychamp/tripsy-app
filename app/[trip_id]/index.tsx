import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ASSETS } from '../../src/common/constant';
import { AppBar, Scaffold } from '../../src/components/base';
import { EmptyState } from '../../src/components/empty-state';
import { ExpenseCard } from '../../src/components/expense-card';
import { useDeleteVisibleActions } from '../../src/zustand/delete-visible-store';
import {
  useGetExpense,
  useTripActions,
  useTrips,
} from '../../src/zustand/trip-store';

export default function TripExpense() {
  const router = useRouter();
  const { trip_id: tripId } = useLocalSearchParams();

  const { removeTrip, removeExpense } = useTripActions();
  const { setDeleteVisibility } = useDeleteVisibleActions();

  const tripExpense = useGetExpense(+tripId);
  const trips = useTrips();
  const trip = React.useMemo(
    () => trips.find((t) => t.id === +tripId),
    [tripId],
  );

  return (
    <Scaffold className="px-0">
      <AppBar
        onPress={() => router.back()}
        title={trip.place}
        showDeleteButton={true}
        onDelete={() => {
          removeTrip(trip.id);
          router.back();
        }}
      />
      <View className="justify-center items-center">
        <Image
          source={trip.banner}
          resizeMode="contain"
          className="w-screen h-[260px]"
        />
      </View>
      <View className="mb-4 px-5 flex-row justify-between items-center">
        <Text className="text-lg font-bold text-black">Expense</Text>
        <Link href={`${tripId}/add-expense`} asChild>
          <TouchableOpacity>
            <View className={`py-[10] px-6 rounded-full bg-orange2`}>
              <Text className="text-sm font-bold text-white">Add Expenses</Text>
            </View>
          </TouchableOpacity>
        </Link>
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
              Alert.alert(
                'Confirm',
                'Sure, you want to delete',
                [
                  {
                    text: 'Cancel',
                    onPress: () => setDeleteVisibility(null),
                    style: 'cancel',
                  },
                  {
                    text: 'OK',
                    onPress: () => removeExpense(+tripId, id),
                  },
                ],
                {
                  cancelable: true,
                  onDismiss: () => setDeleteVisibility(null),
                },
              );
            }}
          />
        )}
      />
    </Scaffold>
  );
}
