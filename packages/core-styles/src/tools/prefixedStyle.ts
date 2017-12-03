// tslint:disable-next-line:no-require-imports
import Prefixer = require('inline-style-prefixer');
import { style } from 'typestyle';
import { NestedCSSProperties, NestedCSSSelectors } from 'typestyle/lib/types';

const prefixer = new Prefixer();

export function prefix(props: NestedCSSProperties): NestedCSSProperties {
  const { $nest, ...rest } = props;
  const prefixedProps = prefixer.prefix({...rest});
  const nested = Object.keys($nest || {}).reduce((reducedObj, selector) => {
    return ({
      ...reducedObj,
      [selector]: prefix(($nest as NestedCSSSelectors)[selector] as NestedCSSProperties),
    });
  }, {} as NestedCSSProperties);
  return {...prefixedProps, $nest: nested } as NestedCSSProperties;
}

export function prefixedStyle(props: NestedCSSProperties): string {
  // const prefixedProps = prefix(props);
  return style(props);
}

