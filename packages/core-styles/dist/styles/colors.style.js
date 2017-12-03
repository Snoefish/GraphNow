"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csx_1 = require("csx");
exports.ColorHelper = csx_1.ColorHelper;
var one_dark_colors_style_1 = require("./one-dark-colors.style");
var one_light_colors_style_1 = require("./one-light-colors.style");
var colors = one_light_colors_style_1.colors;
exports.colors = colors;
exports.toggleColors = function (lightsOut) {
    exports.colors = colors = lightsOut ? one_dark_colors_style_1.colors : one_light_colors_style_1.colors;
};
//# sourceMappingURL=colors.style.js.map