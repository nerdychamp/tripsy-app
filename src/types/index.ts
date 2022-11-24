export type IExpense = any;

export interface ITrip {
  id: number;
  place: string;
  country: string;
  banner: any;
  expenses?: IExpense[];
}
