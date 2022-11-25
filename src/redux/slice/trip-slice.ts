import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IExpense, ITrip } from '../../types';
import { tripList } from '../../data';

export interface ITripsState {
  trips: ITrip[];
  deleteVisibleOn: number;
}

const initialTripsState: ITripsState = {
  trips: tripList,
  deleteVisibleOn: null,
};

export const tripSlice = createSlice({
  name: 'trips',
  initialState: initialTripsState,
  reducers: {
    addTrip: {
      reducer(state, action: PayloadAction<ITrip>) {
        state.trips = [action.payload, ...state.trips];
      },
      prepare<ITrip>(payload: ITrip) {
        return { payload };
      },
    },
    addExpense: {
      reducer(
        state,
        action: PayloadAction<{ tripId: ITrip['id']; expense: IExpense }>,
      ) {
        const tripId = action.payload.tripId;
        state.trips = state.trips.map((trip) => {
          if (trip.id === tripId) {
            trip.expenses = [action.payload.expense, ...trip?.expenses];
          }
          return trip;
        });
      },
      prepare(payload: { tripId: ITrip['id']; expense: IExpense }) {
        return { payload };
      },
    },
    removeExpense: {
      reducer(
        state,
        action: PayloadAction<{ tripId: number; expenseId: number }>,
      ) {
        const trip = state.trips.find((t) => t.id === action.payload.tripId);
        trip.expenses = trip.expenses.filter(
          (e) => e.id !== action.payload.expenseId,
        );
      },
      prepare(payload: { tripId: number; expenseId: number }) {
        return { payload };
      },
    },
    setDeleteVisible: {
      reducer(state, action: PayloadAction<number>) {
        state.deleteVisibleOn = action.payload;
      },
      prepare(payload: number) {
        return { payload };
      },
    },
  },
});

export const { addTrip, addExpense, setDeleteVisible, removeExpense } =
  tripSlice.actions;
export default tripSlice.reducer;
