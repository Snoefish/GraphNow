import { color, rgb, rgba } from 'csx';
import { ColorHelper } from 'csx';
export { ColorHelper };

export const colors = {
  foreground: color('#abb2bf'),
  foregroundBold: color('#abb2bf'),
  background: color('#282c34'),
  darkBackground: rgb(31, 33, 40),

  shadow: rgba(0,0,0,0.2),

  input: rgb(22, 23, 26),

  // Black
  blackDark: color('#282c34'),
  blackLight: color('#5c6370'),

  // Red
  redLight: color('#e06c75'),
  redDark: color('#be5046'),

  // Green
  greenLight: color('#98c379'),
  greenDark: color('#7a9f60'),

  // Yellow
  yellowLight: color('#e5c07b'),
  yellowDark: color('#d19a66'),

  // Blue
  blueLight: color('#61afef'),
  blueDark: color('#3b84c0'),

  // Magenta
  magentaLight: color('#c678dd'),
  magentaDark: color('#9a52af'),

  // Cyan
  cyanLight: color('#56b6c2'),
  cyanDark: color('#3c909b'),

  // White
  whiteLight: color('#abb2bf'),
  whiteDark: color('#828997'),

  // Orange
  orangeLight: rgb(239, 84, 8),
  orangeDark: rgb(134, 49, 3),
};
