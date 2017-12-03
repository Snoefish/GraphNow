"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../tools");
var colors_style_1 = require("./colors.style");
exports.modalBackground = {
    position: 'fixed',
    zIndex: 2,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: colors_style_1.colors.background.lighten(.1).fadeOut(.4).toString(),
};
exports.modalBackgroundClass = tools_1.prefixedStyle(exports.modalBackground);
exports.modal = {
    padding: 10,
    zIndex: 3,
    backgroundColor: colors_style_1.colors.background.toString(),
};
exports.modalClass = tools_1.prefixedStyle(exports.modal);
//# sourceMappingURL=modal.style.js.map