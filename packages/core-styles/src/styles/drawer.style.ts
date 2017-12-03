import { NestedCSSProperties } from 'typestyle/lib/types';
import { prefixedStyle } from '../tools';

const drawerToggle: NestedCSSProperties = {
  cursor: 'pointer',
};

const drawerContentHidden: NestedCSSProperties = {
  maxHeight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  overflow: 'hidden',
};

export const drawer: NestedCSSProperties = {
  $nest: {
    '& .drawer-toggle': drawerToggle,
    '& .drawer-content-hidden': drawerContentHidden,
  },
};
export const drawerClass = prefixedStyle(drawer);
