import { NestedCSSProperties } from 'typestyle/lib/types';
import { prefixedStyle } from '../tools';

export const dropdown: NestedCSSProperties = {
  width: 'fit-content',
  $nest: {
    button: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    div: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
    },
  },
};
export const dropdownClass = prefixedStyle(dropdown);
