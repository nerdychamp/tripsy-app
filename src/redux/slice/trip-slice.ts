import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IExpense, ITrip } from '../../types';
import { tripList } from '../../data';

export interface ITripsState {
  trips: ITrip[];
}

const initialTripsState: ITripsState = {
  trips: tripList,
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
  },
});

export const { addTrip, addExpense } = tripSlice.actions;
export default tripSlice.reducer;
