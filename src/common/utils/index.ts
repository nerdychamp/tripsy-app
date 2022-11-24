import { ASSETS } from '../constant';

/*This function generate Random thumbnails */
export const getRandomThumbnail = () => {
  const rand = Math.floor(Math.random() * 6);
  console.log(rand);
  return ASSETS.THUMBNAILS[rand];
};
