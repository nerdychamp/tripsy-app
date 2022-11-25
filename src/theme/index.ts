import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
export const theme = {
  colors: {
    brand: '#92e3a9',
    brandLight: '#def7e5',
    bgLight: '#F9F4F3',
    white: '#fff',
    black: '#000',
    text: '#677987',
    grey: '#2F4858',
    orange1: '#F56753',
    orange2: '#FF8083',
    categoryBg: {
      food: '#E1D3EE',
      commute: '#B0E3D3',
      shopping: '#ECFAD7',
      entertainment: '#FFDFFD',
      others: '#CAD3E9',
    },
  },
  screenWidth: width,
  screenHeight: height,
};
