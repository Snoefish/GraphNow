import { NestedCSSProperties } from 'typestyle/lib/types';
import { prefixedStyle } from '../tools';
import { colors } from './colors.style';

export const card: NestedCSSProperties = {
  boxShadow: `0 0px 14px 0 ${colors.shadow}`,
  backgroundColor: colors.background.toString(),
  margin: '.5rem',
  padding: '.5rem',
  overflow: 'auto',
  whiteSpace: 'nowrap',
};
export const cardClass = prefixedStyle(card);
