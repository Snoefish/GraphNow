"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../tools");
var colors_style_1 = require("./colors.style");
exports.tabNav = {
    $nest: {
        '&>*': {
            flexGrow: 1,
            width: 'fit-content',
        },
    },
};
exports.tabNavClass = tools_1.prefixedStyle(exports.tabNav);
exports.activeTab = {
    borderBottom: ".2rem solid " + colors_style_1.colors.orangeLight,
};
exports.activeTabClass = tools_1.prefixedStyle(exports.activeTab);
//# sourceMappingURL=tabNav.style.js.map