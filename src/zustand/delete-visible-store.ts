import { create } from 'zustand';

type TDeleteVisibleState = {
  deleteVisibleOn: number;
  actions: {
    setDeleteVisibility: (index: number) => void;
  };
};

const useDeleteVisibleStore = create<TDeleteVisibleState>((set) => ({
  deleteVisibleOn: null,
  actions: {
    setDeleteVisibility: (index) =>
      set((state) => ({
        deleteVisibleOn: index,
      })),
  },
}));

export const useDeleteVisibleOn = () =>
  useDeleteVisibleStore((state) => state.deleteVisibleOn);

export const useDeleteVisibleActions = () =>
  useDeleteVisibleStore((state) => state.actions);
