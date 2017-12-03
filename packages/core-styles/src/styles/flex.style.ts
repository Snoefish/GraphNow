import { NestedCSSProperties } from 'typestyle/lib/types';
import { prefixedStyle } from '../tools';

export const flexRowContainer: NestedCSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'center',
};
export const flexRowContainerClass = prefixedStyle(flexRowContainer);

export const flexColumnContainer: NestedCSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};
export const flexColumnContainerClass = prefixedStyle(flexColumnContainer);
