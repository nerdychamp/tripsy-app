import { getRandomThumbnail } from './common/utils';
import { IExpense, ITrip } from './types';

export const tripExpenseList: IExpense[] = [
  {
    id: 1,
    title: 'Had a Vada-pav',
    category: 'Food',
    amount: 25,
  },
  {
    id: 2,
    title: 'Went by rixa',
    category: 'Commute',
    amount: 80,
  },
  {
    id: 3,
    title: 'Folk dance',
    category: 'Entertainment',
    amount: 250,
  },
  {
    id: 4,
    title: 'Local fashion shopping',
    category: 'Shopping',
    amount: 2200,
  },
  {
    id: 5,
    title: 'Random expense',
    category: 'Others',
    amount: 1500,
  },
];

export const tripList: ITrip[] = [
  {
    id: 1,
    banner: getRandomThumbnail(),
    place: 'Goa',
    country: 'India',
    expenses: tripExpenseList,
  },
  {
    id: 2,
    banner: getRandomThumbnail(),
    place: 'Maldive',
    country: 'India',
    expenses: [],
  },
  {
    id: 3,
    banner: getRandomThumbnail(),
    place: 'Diu',
    country: 'India',
    expenses: [],
  },
  {
    id: 4,
    banner: getRandomThumbnail(),
    place: 'Manali',
    country: 'India',
    expenses: [],
  },
  {
    id: 5,
    banner: getRandomThumbnail(),
    place: 'Ladak',
    country: 'India',
    expenses: [],
  },
  {
    id: 6,
    banner: getRandomThumbnail(),
    place: 'Kashmir',
    country: 'India',
    expenses: [],
  },
  // {
  //   id: 7,
  //   banner: getRandomThumbnail(),
  //   place: 'Goa',
  //   country: 'India',
  //   expenses: [],
  // },
  // {
  //   id: 8,
  //   banner: getRandomThumbnail(),
  //   place: 'Maldive',
  //   country: 'India',
  //   expenses: [],
  // },
  // {
  //   id: 9,
  //   banner: getRandomThumbnail(),
  //   place: 'Diu',
  //   country: 'India',
  //   expenses: [],
  // },
  // {
  //   id: 10,
  //   banner: getRandomThumbnail(),
  //   place: 'Manali',
  //   country: 'India',
  //   expenses: [],
  // },
  // {
  //   id: 11,
  //   banner: getRandomThumbnail(),
  //   place: 'Ladak',
  //   country: 'India',
  //   expenses: [],
  // },
  // {
  //   id: 12,
  //   banner: getRandomThumbnail(),
  //   place: 'Kashmir',
  //   country: 'India',
  //   expenses: [],
  // },
];
