import create from 'zustand';
import { tripList } from '../data';
import { IExpense, ITrip } from '../types';

interface TripState {
  trips: ITrip[];
  actions: {
    addTrip: (payload: ITrip) => void;
    removeTrip: (tripId: number) => void;
    addExpense: (tripId: number, payload: IExpense) => void;
    removeExpense: (tripId: number, expenseId: number) => void;
  };
}

const initialTrips = tripList;

const useTripStore = create<TripState>((set, get) => ({
  trips: initialTrips,

  actions: {
    addTrip: (payload) =>
      set((state) => ({ trips: [payload, ...state.trips] })),

    removeTrip: (tripId) =>
      set((state) => ({
        trips: state.trips.filter((trip) => trip.id !== tripId),
      })),

    addExpense: (tripId, payload) => {
      set((state) => ({
        trips: state.trips.map((trip, index) => {
          if (trip.id === tripId) {
            console.log(index);
            trip = {
              ...trip,
              expenses: [payload, ...trip.expenses],
            };
          }
          return trip;
        }),
      }));
    },

    removeExpense: (tripId, expenseId) => {
      set((state) => ({
        trips: state.trips.map((trip) => {
          if (tripId === trip.id) {
            trip = {
              ...trip,
              expenses: trip.expenses.filter((t) => t.id !== expenseId),
            };
          }
          return trip;
        }),
      }));
    },
  },
}));

export const useTrips = () => useTripStore((state) => state.trips);

export const useGetExpense = (tripId: number) =>
  useTripStore((state) => {
    const trip = state.trips.find((trip) => trip.id === tripId);
    return trip.expenses;
  });

export const useTripActions = () => useTripStore((state) => state.actions);
