import { getRandomThumbnail } from './common/utils';
import { IExpense, ITrip } from './types';

export const tripList: ITrip[] = [
  {
    id: 1,
    banner: getRandomThumbnail(),
    place: 'Goa',
    country: 'India',
  },
  {
    id: 2,
    banner: getRandomThumbnail(),
    place: 'Maldive',
    country: 'India',
  },
  {
    id: 3,
    banner: getRandomThumbnail(),
    place: 'Diu',
    country: 'India',
  },
  {
    id: 4,
    banner: getRandomThumbnail(),
    place: 'Manali',
    country: 'India',
  },
  {
    id: 5,
    banner: getRandomThumbnail(),
    place: 'Ladak',
    country: 'India',
  },
  {
    id: 6,
    banner: getRandomThumbnail(),
    place: 'Kashmir',
    country: 'India',
  },
  {
    id: 7,
    banner: getRandomThumbnail(),
    place: 'Goa',
    country: 'India',
  },
  {
    id: 8,
    banner: getRandomThumbnail(),
    place: 'Maldive',
    country: 'India',
  },
  {
    id: 9,
    banner: getRandomThumbnail(),
    place: 'Diu',
    country: 'India',
  },
  {
    id: 10,
    banner: getRandomThumbnail(),
    place: 'Manali',
    country: 'India',
  },
  {
    id: 11,
    banner: getRandomThumbnail(),
    place: 'Ladak',
    country: 'India',
  },
  {
    id: 12,
    banner: getRandomThumbnail(),
    place: 'Kashmir',
    country: 'India',
  },
];

export const expenseList: IExpense[] = [
  {
    id: 1,
    title: 'Had a Vada-pav',
    category: 'Food',
    amount: 100,
  },
  {
    id: 2,
    title: 'Went by rixa',
    category: 'Commute',
    amount: 100,
  },
  {
    id: 3,
    title: 'Folk dance',
    category: 'Entertainment',
    amount: 100,
  },
  {
    id: 4,
    title: 'Local fashion shopping',
    category: 'Shopping',
    amount: 100,
  },
  {
    id: 5,
    title: 'Random expense',
    category: 'Others',
    amount: 100,
  },
  {
    id: 6,
    title: 'Had a Vada-pav',
    category: 'Food',
    amount: 100,
  },
  {
    id: 7,
    title: 'Went by rixa',
    category: 'Commute',
    amount: 100,
  },
  {
    id: 8,
    title: 'Folk dance',
    category: 'Entertainment',
    amount: 100,
  },
  {
    id: 9,
    title: 'Local fashion shopping',
    category: 'Shopping',
    amount: 100,
  },
  {
    id: 10,
    title: 'Random expense',
    category: 'Others',
    amount: 100,
  },
];
