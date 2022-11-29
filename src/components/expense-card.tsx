import { MotiView } from 'moti';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { setDeleteVisible } from '../redux/slice/trip-slice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { theme } from '../theme';
import { IExpense } from '../types';

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
          backgroundColor: theme.colors.categoryBg[data.category.toLowerCase()],
        }}
        className="py-[10] px-4 mb-5 rounded-md"
      >
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-lg font-semibold text-grey">
              {data.title}
            </Text>
            <Text className="text-sm text-text">{data.category}</Text>
          </View>
          {!(data.id === deleteVisibleOn) ? (
            <Text className="text-[22px] font-semibold text-grey">
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
                <View className="px-2 py-1 rounded-full -mr-2">
                  <Text className="text-orange1 font-semibold">Delete</Text>
                </View>
              </Pressable>
            </MotiView>
          )}
        </View>
      </View>
    </Pressable>
  );
}
