import { RouteProp } from '@react-navigation/native';
import type { ITrip } from '../types';

export type TStackParamList = {
  Home: undefined;
  'Add Trip': undefined;
  'Add Expense': undefined;
  'Trip Expense': { item: ITrip };
};

export type TTripExpenseRouteProp = RouteProp<TStackParamList, 'Trip Expense'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TStackParamList {}
  }
}
