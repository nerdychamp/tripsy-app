import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getRandomThumbnail } from '../common/utils';
import { Scaffold } from '../components/base';
import { addTrip } from '../redux/slice/trip-slice';
import { useAppDispatch, useAppSelector } from '../redux/store';

export function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <Scaffold>
      <View>
        <Text>Home screen</Text>
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={getRandomThumbnail()}
        />
        <TripText />
        <TouchableOpacity
          onPress={() => {
            dispatch(
              addTrip({
                id: 1,
                country: 'india',
                place: 'abu',
              }),
            );
          }}
        >
          <Text>add-expense</Text>
        </TouchableOpacity>
      </View>
    </Scaffold>
  );
}

function TripText() {
  const trips = useAppSelector((state) => state.trips.trips);

  return (
    <View>
      {trips.map((trip, index) => (
        <Text key={index}>{trip.place}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
