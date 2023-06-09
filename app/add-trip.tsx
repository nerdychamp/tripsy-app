import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { getRandomThumbnail } from '../src/common/utils';
import { AddButton, Scaffold } from '../src/components/base';
import { AppBar } from '../src/components/base/app-bar';
import { useTripActions } from '../src/zustand/trip-store';

const styles = {
  formElements: 'mt-4',
  inputLabel: 'text-text text-xl font-semibold',
  inputField: 'bg-white mt-2 py-3 px-5 rounded-full',
};

export default function AddTrip() {
  const router = useRouter();
  const { addTrip } = useTripActions();

  const [banner] = React.useState(() => getRandomThumbnail());
  const [place, setPlace] = React.useState('');
  const [country, setCountry] = React.useState('');

  const add_trip_handler = () => {
    if (place.length > 2 && country.length > 2) {
      const tripData = {
        id: Date.now(),
        place: place.trim(),
        country: country.trim(),
        banner,
        expenses: [],
      };
      addTrip(tripData);
      router.back();
    }
  };

  return (
    <Scaffold>
      <View className="flex-1 justify-between pb-8">
        <ScrollView>
          <AppBar onPress={() => router.back()} title="Add Trip" />
          <View className="justify-center items-center">
            <Image
              source={banner}
              resizeMode="contain"
              className="w-screen h-[220px]"
            />
          </View>
          <View className="px-5">
            <View className={styles.formElements}>
              <Text className={styles.inputLabel}>Where on Earth?</Text>
              <TextInput
                className={styles.inputField}
                value={place}
                onChangeText={(val) => setPlace(val)}
              />
            </View>
            <View className={styles.formElements}>
              <Text className={styles.inputLabel}>In which country?</Text>
              <TextInput
                className={styles.inputField}
                value={country}
                onChangeText={(val) => setCountry(val)}
              />
            </View>
          </View>
        </ScrollView>
        <View className="px-4 pt-7">
          <AddButton onPress={add_trip_handler} text={'Add Trip'} />
        </View>
      </View>
    </Scaffold>
  );
}
