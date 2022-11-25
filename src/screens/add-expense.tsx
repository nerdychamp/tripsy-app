import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ASSETS } from '../common/constant';
import { AddButton, Scaffold } from '../components/base';
import AppBar from '../components/base/app-bar';
import type { TAddExpenseRouteProp } from '../navigation/types';
import { addExpense } from '../redux/slice/trip-slice';
import { useAppDispatch } from '../redux/store';
import { theme } from '../theme';
import { IExpense } from '../types';

const CATEGORIES: string[] = [
  'Food',
  'Entertainment',
  'Commute',
  'Shopping',
  'Others',
];

export function AddExpenseScreen() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const routeState = useRoute<TAddExpenseRouteProp>().params.item;

  const [title, setTitle] = React.useState<string>('');
  const [amount, setAmount] = React.useState<string>('');
  const [category, setCategory] = React.useState<string>('');

  const handleAddExpense = () => {
    const expense: IExpense = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount.trim()),
      category: category as IExpense['category'],
    };
    dispatch(addExpense({ tripId: routeState.id, expense }));
    navigation.navigate('Trip Expense', { item: routeState });
  };

  return (
    <Scaffold>
      <AppBar
        onPress={() => navigation.goBack()}
        title="Add Expense"
        style={{ paddingHorizontal: 0 }}
      />
      <View style={styles.bannerContainer}>
        <Image style={styles.banner} source={ASSETS.IMAGES.addExpense} />
      </View>
      <View style={[{ paddingHorizontal: 16 }]}>
        <View style={styles.formElements}>
          <Text style={styles.inputLabel}>For what?</Text>
          <TextInput
            style={styles.inputField}
            value={title}
            onChangeText={(val) => setTitle(val)}
          />
        </View>
        <View style={styles.formElements}>
          <Text style={styles.inputLabel}>How much?</Text>
          <TextInput
            style={styles.inputField}
            value={amount}
            onChangeText={(val) => setAmount(val)}
          />
        </View>
        <View style={styles.formElements}>
          <Text style={styles.inputLabel}>Select Category</Text>
          <View style={styles.categoryContainer}>
            {CATEGORIES.map((cat, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.category,
                  backgroundColor: category === cat ? 'green' : '#fff',
                }}
                onPress={() => setCategory(cat)}
              >
                <Text
                  style={{
                    ...styles.categoryLabel,
                    color: category === cat ? 'white' : 'black',
                  }}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <AddButton
        onPress={handleAddExpense}
        text="Add Expense"
        style={{ marginTop: 50, backgroundColor: theme.colors.orange2 }}
      />
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    // backgroundColor: theme.colors.brandLight,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  category: {
    paddingVertical: 12,
    paddingHorizontal: 22,
    marginRight: 10,
    marginBottom: 12,
    borderRadius: 12,
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});
