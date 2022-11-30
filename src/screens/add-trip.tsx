import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { getRandomThumbnail } from '../common/utils';
import { AddButton, Scaffold } from '../components/base';
import { AppBar } from '../components/base/app-bar';
import { useTripActions } from '../zustand';

const styles = {
  formElements: 'mt-4',
  inputLabel: 'text-text text-xl font-semibold',
  inputField: 'bg-white mt-2 py-3 px-5 rounded-full',
};

export function AddTripScreen() {
  const { addTrip } = useTripActions();
  const navigation = useNavigation();
  const [banner] = React.useState(() => getRandomThumbnail());
  const [place, setPlace] = React.useState('');
  const [country, setCountry] = React.useState('');

  const handleAddTrip = () => {
    if (place.length > 2 && country.length > 2) {
      const tripData = {
        id: Date.now(),
        place: place.trim(),
        country: country.trim(),
        banner,
        expenses: [],
      };
      addTrip(tripData);
      navigation.navigate('Home');
    }
  };

  return (
    <Scaffold>
      <View className="flex-1 justify-between pb-8">
        <View>
          <AppBar onPress={() => navigation.goBack()} title="Add Trip" />
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
        </View>
        <View className="px-4 pt-7">
          <AddButton onPress={handleAddTrip} text={'Add Trip'} />
        </View>
      </View>
    </Scaffold>
  );
}
