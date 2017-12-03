import { NestedCSSProperties } from 'typestyle/lib/types';
import { prefixedStyle } from '../tools';
import { colors } from './colors.style';

export const modalBackground: NestedCSSProperties = {
  position: 'fixed',
  zIndex: 2,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  backgroundColor: colors.background.lighten(.1).fadeOut(.4).toString(),
};
export const modalBackgroundClass = prefixedStyle(modalBackground);

export const modal: NestedCSSProperties = {
  padding: 10,
  zIndex: 3,
  backgroundColor: colors.background.toString(),
};
export const modalClass = prefixedStyle(modal);
