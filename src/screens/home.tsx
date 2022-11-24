import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ASSETS } from '../common/constant';
import { getRandomThumbnail } from '../common/utils';
import { Scaffold } from '../components/base';

export function HomeScreen() {
  const navigation = useNavigation();
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
        <TouchableOpacity onPress={() => navigation.navigate('Add Expense')}>
          <Text>add-expense</Text>
        </TouchableOpacity>
      </View>
    </Scaffold>
  );
}

const styles = StyleSheet.create({});
