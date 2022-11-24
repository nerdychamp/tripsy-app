import { useNavigation } from '@react-navigation/native';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import { ASSETS } from '../common/constant';
import { getRandomThumbnail } from '../common/utils';
import { Scaffold } from '../components/base';
import { EmptyList } from '../components/empty-list';
import { useAppDispatch } from '../redux/store';
import { theme } from '../theme';
import { ITrip } from '../types';

const { width, height } = Dimensions.get('screen');

const mockData: ITrip[] = [
  // {
  //   id: 1,
  //   banner: getRandomThumbnail(),
  //   place: 'Goa',
  //   country: 'India',
  // },
  // {
  //   id: 2,
  //   banner: getRandomThumbnail(),
  //   place: 'Maldive',
  //   country: 'India',
  // },
  // {
  //   id: 3,
  //   banner: getRandomThumbnail(),
  //   place: 'Diu',
  //   country: 'India',
  // },
  // {
  //   id: 4,
  //   banner: getRandomThumbnail(),
  //   place: 'Manali',
  //   country: 'India',
  // },
  // {
  //   id: 5,
  //   banner: getRandomThumbnail(),
  //   place: 'Ladak',
  //   country: 'India',
  // },
  // {
  //   id: 6,
  //   banner: getRandomThumbnail(),
  //   place: 'Kashmir',
  //   country: 'India',
  // },
  // {
  //   id: 7,
  //   banner: getRandomThumbnail(),
  //   place: 'Goa',
  //   country: 'India',
  // },
  // {
  //   id: 8,
  //   banner: getRandomThumbnail(),
  //   place: 'Maldive',
  //   country: 'India',
  // },
  // {
  //   id: 9,
  //   banner: getRandomThumbnail(),
  //   place: 'Diu',
  //   country: 'India',
  // },
  // {
  //   id: 10,
  //   banner: getRandomThumbnail(),
  //   place: 'Manali',
  //   country: 'India',
  // },
  // {
  //   id: 11,
  //   banner: getRandomThumbnail(),
  //   place: 'Ladak',
  //   country: 'India',
  // },
  // {
  //   id: 12,
  //   banner: getRandomThumbnail(),
  //   place: 'Kashmir',
  //   country: 'India',
  // },
];

export function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <Scaffold>
      <View style={styles.homeHeader}>
        <Text style={styles.heading}> Tripsy </Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image style={styles.banner} source={ASSETS.IMAGES.tripsyBanner2} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <Text style={styles.subHeading}>RECENT TRIPS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Add Trip')}>
          <View style={styles.addTripButton}>
            <Text style={styles.addTripButtonLabel}>Add Trip</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.tripListItem}
        contentContainerStyle={{ paddingBottom: 12 }}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={EmptyList}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Trip Expense', { item })}
            >
              <View style={styles.tripCard}>
                <Image source={item.banner} style={styles.tripBanner} />
                <View style={{ marginLeft: 10, marginTop: 5 }}>
                  <Text style={styles.tripPlace}>{item.place}</Text>
                  <Text style={styles.tripCountry}>{item.country}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    paddingVertical: 6,
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: theme.colors.text,
  },
  bannerContainer: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  banner: {
    width,
    height: height / 4,
    resizeMode: 'cover',
  },
  addTripButton: {
    backgroundColor: theme.colors.black,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 9999,
  },
  addTripButtonLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.brandLight,
  },
  subHeading: {
    color: theme.colors.text,
    fontWeight: '700',
    fontSize: 18,
  },
  tripListItem: {
    justifyContent: 'center',
    marginTop: 10,
  },
  tripCard: {
    backgroundColor: 'white',
    marginHorizontal: 6,
    padding: 8,
    borderRadius: 18,
  },
  tripBanner: {
    height: 130,
    width: 150,
  },
  tripPlace: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
  tripCountry: {
    fontSize: 10,
    color: 'black',
    fontWeight: '600',
  },
});
