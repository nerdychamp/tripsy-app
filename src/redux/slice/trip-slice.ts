import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ITrip {
  id: number;
  place: string;
  country: string;
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
  },
});

export const { addTrip } = tripSlice.actions;
export default tripSlice.reducer;
