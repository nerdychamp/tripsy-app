import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { ASSETS } from '../common/constant';
import { Scaffold } from '../components/base';
import { AppBar } from '../components/base/app-bar';
import { EmptyState } from '../components/empty-state';
import { tripList } from '../data';
import { useAppSelector } from '../redux/store';

export function HomeScreen() {
  const navigation = useNavigation();
  const trips = useAppSelector((state) => state.trips.trips);

  return (
    <Scaffold className="px-0">
      <AppBar title="Tripsy" showBackButton={false} titleStyle="text-2xl" />
      <View className="bg-brandLight justify-center items-center">
        <Image
          resizeMode="cover"
          className="w-screen h-[260px]"
          source={ASSETS.IMAGES.tripsyBanner2}
        />
      </View>
      <View className="flex-row justify-between items-center my-3 px-4">
        <Text className="font-[700] text-lg text-black">RECENT TRIPS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Add Trip')}>
          <View className="bg-black py-3 px-6 rounded-full">
            <Text className="text-sm font-bold text-brandLight">
              Add New Trip
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="h-[410px] overflow-hidden">
        <FlatList
          className="self-center"
          data={trips}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'flex-start', marginTop: 10 }}
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyState comment="Looks like you haven't had any trips yet!" />
          }
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Trip Expense', { item })}
              >
                <View className="bg-white mx-[6] p-2 rounded-2xl">
                  <Image
                    source={item.banner}
                    className="h-[130] w-[150]"
                    resizeMode="cover"
                  />
                  <View style={{ marginLeft: 10, marginTop: 5 }}>
                    <Text className="text-black font-semibold">
                      {item.place}
                    </Text>
                    <Text className="text-grey text-xs font-semibold">
                      {item.country}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Scaffold>
  );
}
