import { prefixedStyle } from 'core-styles';
import * as React from 'react';
import { keyframes } from 'typestyle';

const keyframe = keyframes({
  'from': {
    left: '-200px',
    width: '30%',
  },
  '50%': {
    width: '30%',
  },
  '70%': {
    width: '70%',
  },
  '80%': {
    left: '50%',
  },
  '95%': {
    left: '120%',
  },
  'to': {
    left: '100%',
  },
});

const loader = prefixedStyle({
  height: '4px',
  width: '100%',
  position: 'fixed',
  top: 0,
  overflow: 'hidden',
  backgroundColor: '#ddd',
  $nest: {
    '&:before': {
      display: 'block',
      position: 'absolute',
      content: '""',
      left: '-200px',
      width: '200px',
      height: '4px',
      backgroundColor: '#2980b9',
      animationName: keyframe,
      animationDuration: '2s',
      animationIterationCount: 'infinite',
    },
  },
});

export class LoadBar extends React.PureComponent {
  public render(): JSX.Element {
    return <div className={loader}/>;
  }
}
