import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { getRandomThumbnail } from '../common/utils';
import { AddButton, Scaffold } from '../components/base';
import AppBar from '../components/base/app-bar';
import { BackButton } from '../components/base/back-button';
import { addTrip } from '../redux/slice/trip-slice';
import { useAppDispatch } from '../redux/store';
import { theme } from '../theme';

export function AddTripScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [banner, setBanner] = React.useState(() => getRandomThumbnail());
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
      dispatch(addTrip(tripData));
      navigation.navigate('Home');
    }
  };

  return (
    <Scaffold style={{ paddingHorizontal: 0 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          height: theme.screenHeight,
          paddingBottom: 32,
        }}
      >
        <View>
          <AppBar onPress={() => navigation.goBack()} title="Add Trip" />
          <View style={styles.bannerContainer}>
            <Image style={styles.banner} source={banner} />
          </View>
          <View style={[{ paddingHorizontal: 16 }]}>
            <View style={styles.formElements}>
              <Text style={styles.inputLabel}>Where on Earth?</Text>
              <TextInput
                style={styles.inputField}
                value={place}
                onChangeText={(val) => setPlace(val)}
              />
            </View>
            <View style={styles.formElements}>
              <Text style={styles.inputLabel}>In which country?</Text>
              <TextInput
                style={styles.inputField}
                value={country}
                onChangeText={(val) => setCountry(val)}
              />
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 16, marginTop: 28 }}>
          <AddButton onPress={handleAddTrip} text={'Add Trip'} />
        </View>
      </View>
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    // backgroundColor: theme.colors.brandLight,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: theme.screenWidth,
    height: 200,
    resizeMode: 'cover',
  },
  formElements: {
    marginTop: 16,
  },
  inputLabel: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '600',
  },
  inputField: {
    backgroundColor: '#FFFF',
    marginTop: 8,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 99999,
  },
});
