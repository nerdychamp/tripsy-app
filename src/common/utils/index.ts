import { ASSETS } from '../constant';

/*This function generate Random thumbnails */
export const getRandomThumbnail = () => {
  const rand = Math.floor(Math.random() * 8);
  return ASSETS.THUMBNAILS[rand];
};
