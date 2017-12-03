import { NestedCSSProperties } from 'typestyle/lib/types';
import { prefixedStyle } from '../tools';

export const transition: NestedCSSProperties = {
  transition: '.25s',
};

export const transitionClass = prefixedStyle(transition);
