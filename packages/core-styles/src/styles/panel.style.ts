import { NestedCSSProperties } from 'typestyle/lib/types';
import { prefixedStyle } from '../tools';
import { colors } from './colors.style';

export const panel: NestedCSSProperties = {
  backgroundColor: colors.darkBackground.toString(),
};
export const panelClass = prefixedStyle(panel);
