"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../tools");
var colors_style_1 = require("./colors.style");
exports.navbar = {
    boxShadow: "0 4px 8px 0 " + colors_style_1.colors.shadow,
    backgroundColor: colors_style_1.colors.background.toString(),
    minHeight: 'max-content',
};
exports.navbarClass = tools_1.prefixedStyle(exports.navbar);
//# sourceMappingURL=navbar.style.js.map