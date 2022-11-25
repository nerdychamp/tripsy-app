import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ASSETS } from '../common/constant';
import { Scaffold } from '../components/base';
import { EmptyState } from '../components/empty-state';
import { tripList } from '../data';
import { useAppSelector } from '../redux/store';
import { theme } from '../theme';

export function HomeScreen() {
  const navigation = useNavigation();
  const trips = useAppSelector((state) => state.trips.trips);

  return (
    <Scaffold
      style={{
        paddingHorizontal: 0,
      }}
    >
      <View style={[styles.homeHeader]}>
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
          marginTop: 16,
          marginBottom: 12,
          paddingHorizontal: 16,
        }}
      >
        <Text style={styles.subHeading}>RECENT TRIPS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Add Trip')}>
          <View style={styles.addTripButton}>
            <Text style={styles.addTripButtonLabel}>Add New Trip</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tripList}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        style={{
          alignSelf: 'center',
          width: theme.screenWidth - 32,
        }}
        columnWrapperStyle={styles.tripListItem}
        contentContainerStyle={{ paddingBottom: 12 }}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyState comment="Looks like you haven't had any trips yet!" />
        }
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
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
    color: theme.colors.text,
  },
  bannerContainer: {
    backgroundColor: theme.colors.brandLight,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: theme.screenWidth,
    height: 240,
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
    color: theme.colors.black,
    fontWeight: '700',
    fontSize: 17,
  },
  tripListItem: {
    // flexDirection: 'row',
    justifyContent: 'flex-start',
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
