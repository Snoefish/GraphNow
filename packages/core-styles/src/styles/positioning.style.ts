import { NestedCSSProperties } from 'typestyle/lib/types';
import { prefixedStyle } from '../tools';

export const pageMiddle: NestedCSSProperties = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  marginTop: 'auto',
  marginBottom: 'auto',
  height: 'fit-content',
};
export const pageMiddleClass = prefixedStyle(pageMiddle);

export const pageCenter: NestedCSSProperties = {
  position: 'absolute',
  left: 0,
  right: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 'fit-content',
};
export const pageCenterClass = prefixedStyle(pageCenter);

export const middleChildren: NestedCSSProperties = {
  $nest: {
    '&>*': {
      position: 'relative',
      top: 0,
      bottom: 0,
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  },
};
export const middleChildrenClass = prefixedStyle(middleChildren);

export const centerChildren: NestedCSSProperties = {
  $nest: {
    '&>*': {
      position: 'relative',
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
};
export const centerChildrenClass = prefixedStyle(centerChildren);
