export type IExpense = {
  id: number;
  title: string;
  category: 'Food' | 'Entertainment' | 'Commute' | 'Shopping' | 'Others';
  amount: number;
};

export interface ITrip {
  id: number;
  place: string;
  country: string;
  banner: any;
  expenses?: IExpense[];
}
