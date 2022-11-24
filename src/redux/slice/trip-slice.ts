import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type IExpense = any;
interface ITrip {
  id: number;
  place: string;
  country: string;
  expenses?: IExpense[];
}

export interface ITripsState {
  trips: ITrip[];
}

const initialTripsState: ITripsState = {
  trips: [],
};

export const tripSlice = createSlice({
  name: 'trips',
  initialState: initialTripsState,
  reducers: {
    addTrip: (state, action: PayloadAction<ITrip>) => {
      state.trips = [...state.trips, action.payload];
    },
    addExpense: (
      state,
      action: PayloadAction<{ tripId: ITrip['id']; expense: IExpense }>,
    ) => {
      const tripId = action.payload.tripId;
      state.trips = state.trips.map((trip) => {
        if (trip.id === tripId) {
          trip.expenses = [...trip.expenses, action.payload.expense];
        }
        return trip;
      });
    },
  },
});

export const { addTrip, addExpense } = tripSlice.actions;
export default tripSlice.reducer;
