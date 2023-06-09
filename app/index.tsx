import { Link } from 'expo-router';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ASSETS } from '../src/common/constant';
import { AppBar, Scaffold } from '../src/components/base';
import { EmptyState } from '../src/components/empty-state';
import { useTrips } from '../src/zustand/trip-store';

export default function Home() {
  const trips = useTrips();

  return (
    <Scaffold>
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
        <Link href="add-trip" asChild>
          <TouchableOpacity>
            <View className="bg-black py-3 px-6 rounded-full">
              <Text className="text-sm font-bold text-brandLight">
                Add New Trip
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
      <View className="flex-1 overflow-hidden">
        <FlatList
          className="self-center w-screen ml-7"
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
              <Link href={`${item.id}`} asChild>
                <TouchableOpacity key={index}>
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
              </Link>
            );
          }}
        />
      </View>
    </Scaffold>
  );
}
