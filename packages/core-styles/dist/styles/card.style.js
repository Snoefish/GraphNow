"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../tools");
var colors_style_1 = require("./colors.style");
exports.card = {
    boxShadow: "0 0px 14px 0 " + colors_style_1.colors.shadow,
    backgroundColor: colors_style_1.colors.background.toString(),
    margin: '.5rem',
    padding: '.5rem',
    overflow: 'auto',
    whiteSpace: 'nowrap',
};
exports.cardClass = tools_1.prefixedStyle(exports.card);
//# sourceMappingURL=card.style.js.map