import { color, rgb, rgba } from 'csx';
import { ColorHelper } from 'csx';
export { ColorHelper };

export const colors = {
  foreground: rgb(42, 44, 51),
  foregroundBold: color('#abb2bf'),
  background: rgb(226, 229, 233),
  darkBackground: rgb(206, 209, 217),

  shadow: rgba(0,0,0,0.2),

  input: rgb(236, 239, 240),

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
  orangeLight: color('#F08048'),
  orangeDark: color('#ef5408'),
};
