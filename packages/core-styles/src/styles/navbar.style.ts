import { NestedCSSProperties } from 'typestyle/lib/types';
import { prefixedStyle } from '../tools';
import { colors } from './colors.style';

export const navbar: NestedCSSProperties = {
  boxShadow: `0 4px 8px 0 ${colors.shadow}`,
  backgroundColor: colors.background.toString(),
  minHeight: 'max-content',
};
export const navbarClass = prefixedStyle(navbar);
