import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { IExpense } from '../types';
import { theme } from '../theme';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { setDeleteVisible } from '../redux/slice/trip-slice';
import { MotiText, MotiView } from 'moti';

type TExpenseCardProp = {
  data: IExpense;
  index?: number;
  onDelete?: (id: number) => void;
};

export function ExpenseCard({ data, index, onDelete }: TExpenseCardProp) {
  const dispatch = useAppDispatch();
  const deleteVisibleOn = useAppSelector(
    (state) => state.trips.deleteVisibleOn,
  );

  const [leave, setLeave] = React.useState(false);

  return (
    <Pressable
      onPress={() => {
        if (data.id === deleteVisibleOn) {
          dispatch(setDeleteVisible(null));
        } else {
          dispatch(setDeleteVisible(data.id));
        }
      }}
    >
      <View
        key={data.id}
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15,
          marginBottom: 20,
          borderRadius: 6,
          backgroundColor: theme.colors.categoryBg[data.category.toLowerCase()],
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                color: theme.colors.grey,
              }}
            >
              {data.title}
            </Text>
            <Text style={{ fontSize: 14, color: theme.colors.text }}>
              {data.category}
            </Text>
          </View>
          {!(data.id === deleteVisibleOn) ? (
            <Text
              style={{
                fontSize: 22,
                fontWeight: '700',
                color: theme.colors.grey,
              }}
            >
              ₹{data.amount}
            </Text>
          ) : (
            <MotiView
              from={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                // default settings for all style values
                type: 'timing',
                duration: 350,
                scale: {
                  type: 'spring',
                  delay: 100,
                },
              }}
            >
              <Pressable
                onPress={() => {
                  onDelete(data.id);
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 99999,
                    paddingRight: -12,
                  }}
                >
                  <Text
                    style={{ fontWeight: '600', color: theme.colors.orange1 }}
                  >
                    Delete
                  </Text>
                </View>
              </Pressable>
            </MotiView>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
