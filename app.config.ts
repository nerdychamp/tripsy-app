import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Tripsy',
  slug: 'tripsy',
  description: 'Tripsy - Expense made easier',
  splash: {
    backgroundColor: '#7f5af0',
    image: './assets/splash.png',
    resizeMode: 'contain',
  },
  scheme: 'myapp',
  icon: './assets/splash1.png',
  web: {
    bundler: 'metro',
  },
});
