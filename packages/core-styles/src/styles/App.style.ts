import { normalize, setupPage } from 'csstips';
import { cssRule } from 'typestyle';
import { colors } from './colors.style';

normalize();
setupPage('#root');

cssRule('html', {
  overflowX: 'hidden',
});

cssRule('body', {
  fontFamily: 'Segoe UI, sans-serif',
  fontSize: '1rem',
  // lineHeight: 1.5,
  backgroundColor: colors.darkBackground.toString(),
  color: colors.foreground.toString(),
});

cssRule('text', {
    fill: colors.foreground.toString(),
});

cssRule('input', {
  backgroundColor: colors.input.toString(),
  color: colors.foreground.toString(),
  border: 'none',
  borderRadius: '.1rem',
  padding: '.4rem',
  paddingLeft: '.4rem',
  paddingRight: '.4rem',
  outline: 'none',
  margin: '.2rem',
  $nest: {
    '&:focus': {
      outline: 'none',
    },
  },
});

cssRule('button', {
  backgroundColor: 'inherit',
  color: colors.foreground.toString(),
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  borderRadius: '.1rem',
  $nest: {
    '&:hover': {
      backgroundColor: colors.blueLight.toString(),
    },
  },
});

cssRule('h1, h2, h3, h4, h5', {
  margin: 0,
});

cssRule('a', {
  color: colors.foreground.toString(),
  textDecoration: 'none',
});

/* Tables */
cssRule('table', {
  width: '100%',
  borderCollapse: 'collapse',
});

cssRule('td, th', {
  padding: '.5rem',
  border: `1px solid lightgrey`,
});

cssRule('tbody tr', {
  $nest: {
    '&:hover': {
      backgroundColor: colors.yellowLight.toString(),
    },
    '&:nth-child(odd)': {
      backgroundColor: colors.darkBackground.toString(),
    },
  },
});
