import { ColorHelper } from 'csx';
import { colors as darkColors } from './one-dark-colors.style';
import { colors as lightColors } from './one-light-colors.style';
export { ColorHelper };

let colors = lightColors;

export {
  colors,
};

export const toggleColors = (lightsOut: boolean): void => {
  colors = lightsOut ? darkColors : lightColors;
};

