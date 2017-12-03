import { NestedCSSProperties } from 'typestyle/lib/types';
import { prefixedStyle } from '../tools';
import { colors } from './colors.style';

export const tabNav: NestedCSSProperties = {
  $nest: {
    '&>*': {
      flexGrow: 1,
      width: 'fit-content',
    },
  },
};
export const tabNavClass = prefixedStyle(tabNav);

export const activeTab: NestedCSSProperties = {
  borderBottom: `.2rem solid ${colors.orangeLight}`,
};

export const activeTabClass = prefixedStyle(activeTab);
