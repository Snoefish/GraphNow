"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../tools");
var drawerToggle = {
    cursor: 'pointer',
};
var drawerContentHidden = {
    maxHeight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: 'hidden',
};
exports.drawer = {
    $nest: {
        '& .drawer-toggle': drawerToggle,
        '& .drawer-content-hidden': drawerContentHidden,
    },
};
exports.drawerClass = tools_1.prefixedStyle(exports.drawer);
//# sourceMappingURL=drawer.style.js.map