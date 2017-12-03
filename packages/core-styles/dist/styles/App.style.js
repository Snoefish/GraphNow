"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csstips_1 = require("csstips");
var typestyle_1 = require("typestyle");
var colors_style_1 = require("./colors.style");
csstips_1.normalize();
csstips_1.setupPage('#root');
typestyle_1.cssRule('html', {
    overflowX: 'hidden',
});
typestyle_1.cssRule('body', {
    fontFamily: 'Segoe UI, sans-serif',
    fontSize: '1rem',
    // lineHeight: 1.5,
    backgroundColor: colors_style_1.colors.darkBackground.toString(),
    color: colors_style_1.colors.foreground.toString(),
});
typestyle_1.cssRule('text', {
    fill: colors_style_1.colors.foreground.toString(),
});
typestyle_1.cssRule('input', {
    backgroundColor: colors_style_1.colors.input.toString(),
    color: colors_style_1.colors.foreground.toString(),
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
typestyle_1.cssRule('button', {
    backgroundColor: 'inherit',
    color: colors_style_1.colors.foreground.toString(),
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '.1rem',
    $nest: {
        '&:hover': {
            backgroundColor: colors_style_1.colors.blueLight.toString(),
        },
    },
});
typestyle_1.cssRule('h1, h2, h3, h4, h5', {
    margin: 0,
});
typestyle_1.cssRule('a', {
    color: colors_style_1.colors.foreground.toString(),
    textDecoration: 'none',
});
/* Tables */
typestyle_1.cssRule('table', {
    width: '100%',
    borderCollapse: 'collapse',
});
typestyle_1.cssRule('td, th', {
    padding: '.5rem',
    border: "1px solid lightgrey",
});
typestyle_1.cssRule('tbody tr', {
    $nest: {
        '&:hover': {
            backgroundColor: colors_style_1.colors.yellowLight.toString(),
        },
        '&:nth-child(odd)': {
            backgroundColor: colors_style_1.colors.darkBackground.toString(),
        },
    },
});
//# sourceMappingURL=App.style.js.map